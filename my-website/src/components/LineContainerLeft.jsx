import { useState } from "react";

import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

function LineContainerLeft({ customerSelected, setCustomers, setCustomerSelected }) {
    // Query states
    const [query, setQuery] = useState("");
    const [searchField, setSearchField] = useState("first_name");
    
    // Pagination states
    const [totalItems, setTotalItems] = useState(500);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="line-container">
            <SearchBar
                setTotalItems={setTotalItems}
                setCustomers={setCustomers}
                setCustomerSelected={setCustomerSelected}
                query={query}
                setQuery={setQuery}
                searchField={searchField}
                setSearchField={setSearchField}
            />
            <div className="line-label" style={{backgroundColor: "#D3A53A"}}>
                  <div>Select a Customer</div>
            </div>
            <PaginationControls
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setCustomers={setCustomers}
                setCustomerSelected={setCustomerSelected}
                query={query}
                searchField={searchField}
            />
        </div>
    )
}

export default LineContainerLeft;