import { useState } from "react";

import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

function LineContainer() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="line-container">
            <SearchBar/>
            <PaginationControls
                totalItems={45}
                itemsPerPage={10}
                page={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default LineContainer;