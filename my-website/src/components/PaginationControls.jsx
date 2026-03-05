import { useContext } from "react";
import { sendRequest } from "../api/handler";
import { SessionContext } from '../contexts/SessionContext';

function PaginationControls({ totalItems, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, setCustomers, setCustomerSelected, query, searchField }) {    
    // Query states
    const { storeID } = useContext(SessionContext);
    
    // Calculate pagination
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);

    const offset = (currentPage - 1) * itemsPerPage;

    const fetchPrevious = async (e) => {
        setCustomerSelected(0);

        try {
            let data;
            if (query !== '') {
                data = await sendRequest("/query/customer", {
                    store_id: storeID,
                    filter_var: searchField,
                    filter_value: query,
                    offset: Math.max(0, offset - itemsPerPage),
                    top_n: itemsPerPage,
                });
            }

            if (data && data.customers) {
                setCustomers(data.customers);
                setCurrentPage((p) => p - 1)
            } else {
                setCustomers([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }

        console.log("Searching for:", query);
    };

    const fetchNext = async (e) => {
        setCustomerSelected(0);

        try {
            let data;
            if (query !== '') {
                data = await sendRequest("/query/customer", {
                    store_id: storeID,
                    filter_var: searchField,
                    filter_value: query,
                    offset: offset + itemsPerPage,
                    top_n: itemsPerPage,
                });
            }

            if (data && data.customers) {
                setCustomers(data.customers);
                setCurrentPage((p) => p + 1)
            } else {
                setCustomers([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }

        console.log("Searching for:", query);
    };

    return (
        <div style={styles.container}>
            <span>
            {start}-{end} of {totalItems}
            </span>

            <div>
                <button
                    onClick={() => fetchPrevious()}
                    disabled={currentPage === 1}
                    >
                    {"<"}
                </button>

                <button
                    onClick={() => fetchNext()}
                    disabled={currentPage === totalPages}
                    >
                    {">"}
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flex: "1 0 auto",
        alignItems: "center",
        padding: "6px",
        gap: "16px",
        fontSize: "14px",
        backgroundColor: "#dddddd",
    },
};

export default PaginationControls;