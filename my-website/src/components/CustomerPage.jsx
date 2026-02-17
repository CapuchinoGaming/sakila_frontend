import { useState } from "react";

import SessionContainer from "./SessionContainer";
import CustomerTable from "./CustomerTable";
import RentalHistory from "./RentalHistory";
import CustomerInfo from "./CustomerInfo";

const customers = [
    {id: 1, first_name: 'Mary', last_name: 'Smith'},
    {id: 2, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 3, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 4, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 5, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 6, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 7, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 8, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 9, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 10, first_name: 'Patricia', last_name: 'Johnson'},
];

const records = [
    {rental_id: 1, inventory_id: 5623, title: 'Bloody Mary', rental_date: 'no clue', return_date: 'whenever'},
    {rental_id: 1, inventory_id: 5623, title: 'Bloody Mary', rental_date: 'no clue', return_date: 'whenever'},
    {rental_id: 1, inventory_id: 5623, title: 'Bloody Mary', rental_date: 'no clue', return_date: 'whenever'}
];

/*  Customer Page
    The customer page is a flexbox. It contains 3 objects within it:
    |=======================|
    |     NavigationBar     |
    |=======================|
    |    Query    |   [edit]|
    |    Table    |    [del]|
    |=============|         |
    |             |  Client |
    |   Rental    |  Info   |
    |   History   |         |
    |=============|=========|
*/
function CustomerPage() {
    const [customerSelected, setCustomerSelected] = useState(true);

    return (
        <>
            <SessionContainer/>
            <div className="customer-page">
                <div className="customer-page-left">
                    <CustomerTable customers={customers} customerSelected={customerSelected}/>
                    <RentalHistory records={records} customerSelected={customerSelected}/>
                </div>
                <div className="customer-page-right">
                    <CustomerInfo customerSelected={customerSelected}/>
                </div>
            </div>
        </>
    )
}

export default CustomerPage;
