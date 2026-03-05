import { use, useState } from "react";
import { sendRequest } from "../../api/handler";
import { SessionContext } from "../../contexts/SessionContext";
import { useContext } from "react";

function SearchBar({ setCustomers, setCustomerSelected }) {
    const [query, setQuery] = useState("");
    const [searchField, setSearchField] = useState("first_name");
    const { storeID } = useContext(SessionContext)

    const fetchCustomers = async (e) => {
        e.preventDefault();
        setCustomerSelected(0);

        let data;
        try {
            if (query == "") {
                data = await sendRequest("/query/customer", {
                    offset: 0,
                    top_n: 700,
                });
            } else {
                data = await sendRequest("/query/customer", {
                    filter_var: searchField,
                    filter_value: query,
                    offset: 0,
                    top_n: 100,
                });
            }

            if (data && data.customers) {
                setCustomers(data.customers);
            } else {
                setCustomers([]);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        
        console.log("Searching for:", query);
    };

    return (
        <>
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
        </>
    )
}

export default SearchBar;