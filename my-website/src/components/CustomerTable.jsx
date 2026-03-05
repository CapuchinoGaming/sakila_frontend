
function CustomerTable({ customers, customerSelected, setCustomerSelected, refreshRentalsForCustomer }) {
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
                <thead>
                    <tr style={rowStyle}>
                        <th>customer_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c => (
                        <CustomerRow
                            key={c.customer_id}
                            id={c.customer_id}
                            first_name={c.first_name}
                            last_name={c.last_name}
                            customerSelected={customerSelected}
                            setCustomerSelected={setCustomerSelected}
                            refreshRentalsForCustomer={refreshRentalsForCustomer}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function CustomerRow( { id, first_name, last_name, customerSelected, setCustomerSelected, refreshRentalsForCustomer }) {
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
    };

    const fetchDetails = (id) => {
        // delegate to parent
        refreshRentalsForCustomer(id);
    };

    return (
        <tr style={rowStyle} onClick={() => {
            setCustomerSelected(id);
            fetchDetails(id);
        }}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    )
}
export default CustomerTable;