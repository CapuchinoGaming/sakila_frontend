// Allow the use of states (React variables)
import { useState } from "react";

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

/*  API: customers array
    CustomerTable will inmediately render anything placed on this array,
    one customer per row.

    CustomerTable can handle any amount of customers thanks to scrolling rows.
    - It would be nice to avoid this scrolling behavior though.
    - Follow instructions below (if you can)

    TODO: Please write your "customer query function" so it does the following:
    - Search 10 customers at a time (to display all customers w/ pagination).
    - Sort by ID, ascending order: display id [1-10], then [11-20], etc.
    - Note: CustomerTable can handle when the query returns less than 10 customers.

    - Query any customers according depending in the search bar.
      if (query[0].isDigit)             // Always returns 1 customer
        search by id
      else if (query[0].isAlpha)        // Might return more than 1 customer
        search by first_name JOIN
        search by last_name
      if (counter == 1)                 // If query returned only 1 customer
        inmediately "select" that customer,
        that is, run the "records query function" with the customer_id
*/
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
    {id: 11, first_name: 'Mary', last_name: 'Smith'},
    {id: 12, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 13, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 14, first_name: 'Patricia', last_name: 'Johnson'},
    {id: 15, first_name: 'Patricia', last_name: 'Johnson'},
];

const outgoingRecords = [
    // Note: empty cells can be written as "null" or simply do not write it on the array
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03', return_date: null},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03'},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03', return_date: null},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03'},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03', return_date: null},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03'},
];

/*  API: records array
    RentalHistory will inmediately render anything placed on this array,
    one record per row.

    There is no limit, any "overflowing" rows can be scrolled down for.
    - We are not doing pagination for this.
    - Return the whole rental history at once.

    Note: missing values (a.k.a.) missing cells can be handled
    - you can return null
    - you can return an array of size n-1, that skips the missing field

    TODO: Please write your "records query function" so it does the following:
    - Given a customer_id return the whole rental history at once.
    - Sort by rental_id, descending order
*/
const records = [
    // Note: empty cells can be written as "null" or simply do not write it on the array
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03', return_date: null},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03'},
    {rental_id: 9043, inventory_id: 4127, title: 'TORQUE BOUND', rental_date: '2005-07-30 06:34:07', return_date: '2005-08-02 01:16:07'},
    {rental_id: 4748, inventory_id: 4279, title: 'VALENTINE VANISHING', rental_date: '2005-07-08 13:59:38', return_date: '2005-07-15 16:51:38'},
    {rental_id: 4796, inventory_id: 2484, title: 'MADNESS ATTACKS', rental_date: '2005-07-08 16:35:44', return_date: '2005-07-13 11:08:44'},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03', return_date: null},
    {rental_id: 15813, inventory_id: 981, title: 'DEEP CRUSADE', rental_date: '2006-02-14 15:16:03'},
    {rental_id: 9043, inventory_id: 4127, title: 'TORQUE BOUND', rental_date: '2005-07-30 06:34:07', return_date: '2005-08-02 01:16:07'},
    {rental_id: 4748, inventory_id: 4279, title: 'VALENTINE VANISHING', rental_date: '2005-07-08 13:59:38', return_date: '2005-07-15 16:51:38'},
    {rental_id: 4796, inventory_id: 2484, title: 'MADNESS ATTACKS', rental_date: '2005-07-08 16:35:44', return_date: '2005-07-13 11:08:44'},
];

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
    // States for API Queries
    const [customers, setCustomers] = useState([]);
    const [outgoingRecords, setOutgoingRecords] = useState([]);
    const [rentalRecords, setRentalRecords] = useState([]);

    // States for webpage-wide behavior
    const [customerSelected, setCustomerSelected] = useState(false);
    const [editCustomer, setEditCustomer] = useState(false);

    return (
        <>
            <div className="customer-page">
                <div className="customer-page-left">
                    <LineContainerLeft customerSelected={customerSelected} setCustomers={setCustomers} setCustomerSelected={setCustomerSelected}/>
                    <h3>Customers</h3>
                    <CustomerTable customers={customers} customerSelected={customerSelected} setCustomerSelected={setCustomerSelected} setOutgoingRecords={setOutgoingRecords} setRentalRecords={setRentalRecords}/>
                    <h3>Outgoing Rentals</h3>
                    <OutgoingHistory records={outgoingRecords} customerSelected={customerSelected}/>
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
