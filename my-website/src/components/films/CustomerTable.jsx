import SearchBar from "../SearchBar";

function CustomerTable({ customers, setCustomers, customerSelected, setCustomerSelected, filmSelected, refreshRentalsForCustomer }) {
    const divStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const tableStyle = {
        height: customerSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: customerSelected ? "36px" : "36px"
    };

    
    if (filmSelected == 0)
    {
        return null; // no need to return anything
    }
    return (
        <>
            <div className="line-container">
                <SearchBar
                    setCustomers={setCustomers}
                    setCustomerSelected={setCustomerSelected}
                />
                <div className="line-label" style={{backgroundColor: "#D3A53A"}}>
                  <div>Select a customer to rent this film to</div>
                </div>
            </div>
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
        </>
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