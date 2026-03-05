import { useState } from "react";

import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

function LineContainerLeft({ customerSelected, setCustomers, setCustomerSelected }) {
    // Pagination states
    const [totalItems, setTotalItems] = useState(500);
    const [itemsPerPage, setItemsPerPage] = useState(customerSelected ? 3 : 20);
    const [currentPage, setCurrentPage] = useState(1);

    return (
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
    )
}

export default LineContainerLeft;