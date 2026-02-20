import { useState } from "react";

function SearchBar({ setTotalItems, setCustomers, setCustomerSelected }) {
    const [query, setQuery] = useState("");
    const [searchField, setSearchField] = useState("first_name");

    // This event activates when the "search" button is pressed
    const fetchCustomers = async (e) => {
    e.preventDefault();

    // If query is empty, retrieve all customers and expand CustomerTable
    if (query === "")
    {
        setCustomerSelected(false);
    }

    try {
        const response = await fetch(
            "http://localhost:8000/api/query/customer",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    filter_var: searchField,
                    filter_value: query,
                    offset: 0,
                    top_n: 15,
                }),
            }
        );

        // Query and store the response
        const data = await response.json();
        console.log("Full response:", data);

        if (data && data.customers) {
            setCustomers(data.customers);
            setTotalItems(data.customers.length);
        } else {
            setCustomers([]);
            setTotalItems(0);
        }

    } catch (error) {
        console.error("Error:", error);
    }

        console.log("Searching for:", query);
    };

    return (
        <form onSubmit={fetchCustomers} style={{ display: "flex" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or id..."
                style={{ flex: 1, padding: "8px" }}
            />
            <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                style={{ padding: "8px" }}
            >
                <option value="first_name">First Name</option>
                <option value="last_name">Last Name</option>
                <option value="customer_id">Customer ID</option>
            </select>
            <button type="submit" style={{ padding: "8px 12px" }}>
                Search
            </button>
        </form>
    )
}

export default SearchBar;