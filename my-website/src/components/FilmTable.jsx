import { useState } from "react";

import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

// function FilmTable({ customers, customerSelected, setCustomerSelected, setCustomers }) {
function FilmTable({ rowItems, setRowItems, rowItemSelected, setRowItemSelected }) {
    // Pagination states
    const [totalItems, setTotalItems] = useState(500);
    const [itemsPerPage, setItemsPerPage] = useState(customerSelected ? 3 : 20);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <div className="line-container">
                <SearchBar
                    setTotalItems={setTotalItems}
                    setCustomers={setCustomers}
                    setCustomerSelected={setCustomerSelected}
                />
                <PaginationControls
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    page={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div className="customer-table" style={divStyle}>
                <table style={tableStyle}>
                    <tr style={rowStyle}>
                        <th>customer_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                    </tr>
                    {customers.map(c => (
                        <CustomerRow key={c.customer_id} id={c.customer_id} first_name={c.first_name} last_name={c.last_name} store_id={c.store_id} customerSelected={customerSelected} setCustomerSelected={setCustomerSelected} setOutgoingRecords={setOutgoingRecords} setRentalRecords={setRentalRecords}/>
                    ))}
                </table>
            </div>
        </>
    )
}

export default FilmTable;