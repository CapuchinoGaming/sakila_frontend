function LineContainerRight() {
    const placeholder1 = () => {
        // TODO: Add edit logic here
        console.log("Edit clicked");
    };

    const placeholder2 = () => {
        // TODO: Add delete logic here
        console.log("Delete clicked");
    };

    return (
        <div className="line-container">
            <button onClick={placeholder1}>
                Edit
            </button>

            <button onClick={placeholder2}>
                Delete
            </button>
        </div>
    )
}

export default LineContainerRight;