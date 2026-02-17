function RentalHistory({ records, customerSelected }) {
    if (customerSelected == false)
    {
        return (<></>)
    }
    return (
        <div className="rental-history">
            <table>
                <tr>
                    <th>rental_id</th>
                    <th>inventory_id</th>
                    <th>title</th>
                    <th>rental_date</th>
                    <th>return_date</th>
                </tr>
                {records.map(r => (
                    <RentalRow
                        rental_id={r.rental_id}
                        inventory_id={r.inventory_id}
                        title={r.title} 
                        rental_date={r.rental_date}
                        return_date={r.return_date}
                    />
                ))}
            </table>
        </div>
    )
}

function RentalRow({ rental_id, inventory_id, title, rental_date, return_date }) {
    return (
        <tr>
            <td>{rental_id}</td>
            <td>{inventory_id}</td>
            <td>{title}</td>
            <td>{rental_date}</td>
            <td>{return_date}</td>
        </tr>
    )
}

export default RentalHistory;