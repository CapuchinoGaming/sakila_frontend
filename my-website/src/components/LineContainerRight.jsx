import { sendRequest } from "../api/handler";

function LineContainerRight( {customerSelected} ) {
    const placeholder1 = () => {
        // TODO: Add edit logic here
        console.log("Edit clicked");
    };

    const deleteCustomer = async () => {
        try {
            await sendRequest('/customer/delete', {
                "customer_id": customerSelected,
            });
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div className="line-container">
            <button onClick={placeholder1}>
                Edit
            </button>

            <button onClick={deleteCustomer}>
                Delete
            </button>
        </div>
    )
}

export default LineContainerRight;