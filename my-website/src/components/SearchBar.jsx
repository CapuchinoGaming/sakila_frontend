import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("");     // This is the query stored in a state

    // This event activates when the "search" button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();                     // prevents page reload
        console.log("Searching for:", query);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
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