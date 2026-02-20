function CustomerTable({ customers, customerSelected, setCustomerSelected, setOutgoingRecords, setRentalRecords }) {
    const divStyle = {
        height: customerSelected ? "calc(36px * 4 + 1px) " : "100%"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "36px"
    };

    return (
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
    )
}

function CustomerRow( { id, first_name, last_name, store_id, customerSelected, setCustomerSelected, setOutgoingRecords, setRentalRecords }) {
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
    };

    // This event activates when the "search" button is pressed
    const fetchDetails = async (id, store_id) => {
        // If query is empty, retrieve all customers and expand CustomerTable
        try {
            const response = await fetch(
                "http://localhost:8000/api/details/customer",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "customer_id": id,
                        "store_id": store_id
                    }),
                }
            );

            // Query and store the response
            const data = await response.json();
            console.log("Full response:", data);

            if (data && data.customer.rental_history) {
                setRentalRecords(data.customer.rental_history);
                setOutgoingRecords(data.customer.outgoing_rentals);
            } else {
                setRentalRecords([]);
                setOutgoingRecords([]);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <tr style={rowStyle} onClick={() => {
            setCustomerSelected(true);
            fetchDetails(id, store_id);
        }}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    )
}
export default CustomerTable;