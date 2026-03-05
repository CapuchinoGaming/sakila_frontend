// Allow the use of states (React variables)
import { useState } from "react";
import { sendRequest } from "../api/handler";

// LineContainer components
import Session from "../components/Session";
import SearchBar from "../components/SearchBar";
import PaginationControls from "../components/PaginationControls";

import LineContainerLeft from "../components/LineContainerLeft";
import LineContainerRight from "../components/LineContainerRight";

import CustomerTable from "../components/CustomerTable";
import OutgoingHistory from "../components/OutgoingHistory";
import RentalHistory from "../components/RentalHistory";
import CustomerInfo from "../components/CustomerInfo";


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
function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [outgoingRecords, setOutgoingRecords] = useState([]);
    const [rentalRecords, setRentalRecords] = useState([]);

    const [customerSelected, setCustomerSelected] = useState(null);
    const [editCustomer, setEditCustomer] = useState(false);

    const refreshRentalsForCustomer = async (id) => {
        try {
            const data = await sendRequest("/details/customer", { customer_id: id });
            console.log("Full response:", data);
            if (data && (data.customer.rental_history || data.customer.outgoing_rentals)) {
                setRentalRecords(data.customer.rental_history || []);
                setOutgoingRecords(data.customer.outgoing_rentals || []);
            } else {
                setRentalRecords([]);
                setOutgoingRecords([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="customer-page">
                <div className="customer-page-left">
                    <LineContainerLeft customerSelected={customerSelected} setCustomers={setCustomers} setCustomerSelected={setCustomerSelected}/>
                    <h3>Customers</h3>
                    <CustomerTable
                        customers={customers}
                        customerSelected={customerSelected}
                        setCustomerSelected={setCustomerSelected}
                        setOutgoingRecords={setOutgoingRecords}
                        setRentalRecords={setRentalRecords}
                        refreshRentalsForCustomer={refreshRentalsForCustomer}
                    />
                    <h3>Outgoing Rentals</h3>
                    <OutgoingHistory records={outgoingRecords} customerSelected={customerSelected} refreshRentalsForCustomer={refreshRentalsForCustomer} />
                    <h3>Rental History</h3>
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

export default CustomerPage;
