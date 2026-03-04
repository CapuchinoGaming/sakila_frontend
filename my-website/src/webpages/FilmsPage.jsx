// Allow the use of states (React variables)
import { useState } from "react";

import LineContainerLeft from "../components/LineContainerLeft";
import LineContainerRight from "../components/LineContainerRight";

import CustomerTable from "../components/CustomerTable";
import OutgoingHistory from "../components/OutgoingHistory";
import RentalHistory from "../components/RentalHistory";
import CustomerInfo from "../components/CustomerInfo";

import FilmTable from "../components/FilmTable";

/*  Customer Page
    The customer page is a flexbox. It contains 3 objects within it:
    |=======================|
    |     NavigationBar     |
    |=======================|
    |   Customer  |   [edit]|
    |    Table    |    [del]|
    |=============|         |
    |             |  Cust.  |
    |   Rental    |  Info   |
    |   History   |         |
    |=============|=========|
*/
function FilmsPage() {
    // States for API Queries
    const [customers, setCustomers] = useState([]);
    const [outgoingRecords, setOutgoingRecords] = useState([]);
    const [rentalRecords, setRentalRecords] = useState([]);

    // States for webpage-wide behavior
    const [customerSelected, setCustomerSelected] = useState(0);
    const [editCustomer, setEditCustomer] = useState(false);

    return (
        <>
            <div className="customer-page">
                <div className="customer-page-left">
                    <FilmTable customerSelected={customerSelected} setCustomers={setCustomers} setCustomerSelected={setCustomerSelected}/>
                    <CustomerTable customers={customers} customerSelected={customerSelected} setCustomerSelected={setCustomerSelected} setOutgoingRecords={setOutgoingRecords} setRentalRecords={setRentalRecords}/>
                    <OutgoingHistory records={outgoingRecords} customerSelected={customerSelected}/>
                    <RentalHistory records={rentalRecords} customerSelected={customerSelected}/>
                </div>
                <div className="customer-page-right">
                    <LineContainerRight/>
                    <CustomerInfo customerSelected={customerSelected}/>
                </div>
            </div>
        </>
    )
}

export default FilmsPage;