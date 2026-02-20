import { useState } from "react";

function SearchBar({ setCustomers }) {
    const [query, setQuery] = useState("");     // This is the query stored in a state

    // This event activates when the "search" button is pressed
    const fetchCustomers = async (e) => {
    e.preventDefault();

    try {
        let filters = [];

        // If query[0] is letter, query by name. If query[0] is number, query by id.
        if (/^[a-zA-Z]/.test(query)) {
            filters = ["first_name", "last_name"];
        } else if (/^[0-9]/.test(query)) {
            filters = ["customer_id"];
        }

        let customers = [];

        // Loop through filters
        for (const filter of filters) {
            const response = await fetch(
                "http://localhost:8000/api/query/customer",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        filter_var: filter,
                        filter_value: query,
                        offset: 0,
                        top_n: 20,
                    }),
                }
            );

            const data = await response.json();

            customers = [
                ...customers,
                ...data.customers,
            ];
        }

        // Remove duplicates
        customers = customers.filter(
            (customer, index, self) =>
                index ===
                self.findIndex(
                    (c) => c.customer_id === customer.customer_id
                )
        );

        setCustomers(customers);

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
            <button type="submit" style={{ padding: "8px 12px" }}>
                Search
            </button>
        </form>
    )
}

export default SearchBar;