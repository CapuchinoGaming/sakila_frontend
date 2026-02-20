function OutgoingHistory({ records, customerSelected }) {
    const divStyle = {
        height: customerSelected ? "calc(36px * 4 + 1px) " : "100%"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "36px"
    };

    if (customerSelected == false)
    {
        return (<></>)
    }
    return (
        <div className="outgoing-history" style={divStyle}>
            <table style={tableStyle}>
                <tr style={rowStyle}>
                    <th>rent_id</th>
                    <th>inv_id</th>
                    <th>title</th>
                    <th>rental_date</th>
                </tr>
                {records.map(r => (
                    <RentalRow
                        rental_id={r.rental_id}
                        inventory_id={r.inventory_id}
                        title={r.title} 
                        rental_date={r.rental_date}
                    />
                ))}
            </table>
        </div>
    )
}

function RentalRow({ rental_id, inventory_id, title, rental_date }) {
    const rowStyle = {
        height: "36px"
    };

    return (
        <tr style={rowStyle}>
            <td>{rental_id}</td>
            <td>{inventory_id}</td>
            <td>{title}</td>
            <td>{rental_date}</td>
        </tr>
    )
}

export default OutgoingHistory;