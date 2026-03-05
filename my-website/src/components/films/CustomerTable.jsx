import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from "react";
import { sendRequest } from "../../api/handler";
import { SessionContext } from '../../contexts/SessionContext';

import SearchBar from "./SearchBar";

function CustomerTable({ customers, setCustomers, customerSelected, setCustomerSelected, filmSelected, filmDetails, refreshRentalsForCustomer }) {  
    const divStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "36px"
    };
    
    let filmTitle;
    if (!filmDetails.film) {     // Prevents FilmInfo from loading before filmDetails is defined
        filmTitle = "";
    } else {
        filmTitle = filmDetails.film.title;
    }

    if (filmSelected == 0) {
        return null; // no need to return anything
    } else {
        return (
            <>
                <div className="line-container">
                    <SearchBar
                        setCustomers={setCustomers}
                        setCustomerSelected={setCustomerSelected}
                    />
                    <div className="line-label" style={{backgroundColor: "#D3A53A"}}>
                    <div>{`Rent ${filmTitle} to whom?`}</div>
                    </div>
                </div>
                <div className="customer-table" style={divStyle}>
                    <table style={tableStyle}>
                        <thead>
                            <tr style={rowStyle}>
                                <th>customer_id</th>
                                <th>first_name</th>
                                <th>last_name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(c => (
                                <CustomerRow
                                    key={c.customer_id}
                                    id={c.customer_id}
                                    first_name={c.first_name}
                                    last_name={c.last_name}
                                    customerSelected={customerSelected}
                                    setCustomerSelected={setCustomerSelected}
                                    filmTitle={filmTitle}
                                    filmID={filmDetails.film.film_id}
                                    refreshRentalsForCustomer={refreshRentalsForCustomer}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

function CustomerRow( { id, first_name, last_name, customerSelected, setCustomerSelected, filmTitle, filmID, refreshRentalsForCustomer }) {
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
    };

    // States for rent film dialogue
    const [open, setOpen] = useState(false);
    const { storeID, employeeID } = useContext(SessionContext);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const rentFilm = async () => {
        try {
            await sendRequest('/rent', {
                "store_id": storeID,
                "customer_id": customerSelected,
                "staff_id": employeeID,
                "film_id": filmID
            });
        } catch(err) {
            console.error(err);
        } finally {
            refreshRentalsForCustomer();
            handleClose();
        }
    };

    return (
        <>
            <tr style={rowStyle} onClick={() => {
                setCustomerSelected(id);
                handleOpen();
            }}>
                <td>{id}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
            </tr>
            <CreateDialog open={open} onClose={handleClose} onSubmit={rentFilm} filmTitle={filmTitle} first_name={first_name} customerSelected={customerSelected}/>
        </>
    )
}

function CreateDialog({ open, onClose, onSubmit, filmTitle, first_name, customerSelected }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Rent Film to Customer</DialogTitle>
            <DialogContent>
                <DialogContentText>{`Are you sure you want to rent ${filmTitle} to ${first_name}?`}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSubmit}>Continue</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CustomerTable;