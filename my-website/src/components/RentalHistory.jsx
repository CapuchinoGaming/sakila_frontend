function RentalHistory({ records, customerSelected }) {
    if (customerSelected == 0)
    {
        return null;
    }
    else {
        return (
            <>
                <div className="line-label" style={{backgroundColor: "#2F6FA8"}}>
                    <div>Rental History</div>
                </div>
                <div className="rental-history">
                    <table>
                        <thead>
                            <tr>
                                <th>rent_id</th>
                                <th>inv_id</th>
                                <th>title</th>
                                <th>rental_date</th>
                                <th>return_date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map(r => (
                                <RentalRow
                                    key={r.rental.rental_id}
                                    rental_id={r.rental.rental_id}
                                    inventory_id={r.rental.inventory_id}
                                    title={r.film.title}
                                    rental_date={r.rental.rental_date}
                                    return_date={r.rental.return_date}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
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