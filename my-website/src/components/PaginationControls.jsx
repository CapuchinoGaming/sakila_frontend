function PaginationControls({ totalItems, itemsPerPage, page, setCurrentPage }) {
    // Calculate pagination
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const start = (page - 1) * itemsPerPage + 1;
    const end = Math.min(page * itemsPerPage, totalItems);

    return (
        <div style={styles.container}>
            <span>
            {start}-{end} of {totalItems}
            </span>

            <div>
                <button
                    onClick={() => setCurrentPage(page - 1)}
                    disabled={page === 1}
                    >
                    {"<"}
                </button>

                <button
                    onClick={() => setCurrentPage(page + 1)}
                    disabled={page === totalPages}
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
        alignItems: "center",
        padding: "6px",
        gap: "16px",
        fontSize: "14px",
        backgroundColor: "#dddddd",
    },
};

export default PaginationControls;