function CustomerTable({ customers, customerSelected }) {
    const tableStyle = {
        height: customerSelected ? "calc(37.5px * 4)" : "100%"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "auto"
    };

    return (
        <div className="customer-table" style={tableStyle}>
            <table style={tableStyle}>
                <tr style={rowStyle}>
                    <th>customer_id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                </tr>
                {customers.map(c => (
                    <CustomerRow key={c.id} id={c.id} first_name={c.first_name} last_name={c.last_name} customerSelected={customerSelected}/>
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