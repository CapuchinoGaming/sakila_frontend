function CustomerTable({ customers, customerSelected }) {
    const divStyle = {
        height: customerSelected ? "calc(36px * 4 + 1px) " : "100%"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "100%"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
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
                    <CustomerRow key={c.customer_id} id={c.customer_id} first_name={c.first_name} last_name={c.last_name} customerSelected={customerSelected}/>
                ))}
            </table>
        </div>
    )
}

function CustomerRow( { id, first_name, last_name, customerSelected } ) {
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
    };

    return (
        <tr style={rowStyle}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    )
}
export default CustomerTable;