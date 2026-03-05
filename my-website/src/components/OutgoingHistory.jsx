import * as React from 'react';
import { useState, useContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { sendRequest } from '../api/handler';
import { SessionContext } from '../contexts/SessionContext';
import { SuccessDialog, FailureDialog } from './Dialogs';


function OutgoingHistory({ records, customerSelected, refreshRentalsForCustomer }) { 
    const divStyle = {
        height: customerSelected ? "calc(36px * 4 + 1px) " : "100%"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "36px"
    };

    if (customerSelected == 0)
    {
        return null; // no need to return anything
    }
    return (
        <>
            <div className="line-label" style={{backgroundColor: "#2F6FA8"}}>
                            <div>Outgoing Rentals</div>
            </div>
            <div className="outgoing-history" style={divStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr style={rowStyle}>
                            <th>rent_id</th>
                            <th>inv_id</th>
                            <th>title</th>
                            <th>rental_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map(r => (
                            <RentalRow
                                key={r.rental.rental_id}
                                rental_id={r.rental.rental_id}
                                inventory_id={r.rental.inventory_id}
                                title={r.film.title}
                                rental_date={r.rental.rental_date}
                                refreshRentalsForCustomer={() => refreshRentalsForCustomer(customerSelected)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function RentalRow({ rental_id, inventory_id, title, rental_date, refreshRentalsForCustomer }) {
    const rowStyle = {
        height: "36px",
        cursor: 'pointer'
    };
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [failureOpen, setFailureOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const { employeeID } = useContext(SessionContext);
    const handleMarkReturned = async () => {
        try {
            await sendRequest("/return", {
                rental_id: rental_id,
                staff_id: employeeID
            });
            setSuccessOpen(true);
        } catch (err) {
            console.error("Return failed", err);
            setFailureOpen(true);
        } finally {
            handleClose();
        }
    };

    return (
        <>
            <tr style={rowStyle} onClick={handleClickOpen}>
                <td>{rental_id}</td>
                <td>{inventory_id}</td>
                <td>{title}</td>
                <td>{rental_date}</td>
            </tr>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="rental-dialog-title"
                aria-describedby="rental-dialog-description"
            >
                <DialogTitle id="rental-dialog-title">Rental details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="rental-dialog-description">
                        {`ID: ${rental_id}`}
                        <br />{`Inventory: ${inventory_id}`}
                        <br />{`Title: ${title}`}
                        <br />{`Date: ${rental_date}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleMarkReturned} color="primary">
                        Mark as returned
                    </Button>
                </DialogActions>
            </Dialog>
            <SuccessDialog open={successOpen} onClose={() => { setSuccessOpen(false); refreshRentalsForCustomer(); }} message={`Successfully returned ${title}`} />
            <FailureDialog open={failureOpen} onClose={() => setFailureOpen(false)} message="Failed to return film" />
        </>
    )
}

export default OutgoingHistory;