import { useState } from "react";
import { sendRequest } from "../../api/handler";

function FilmSearchBar({ setFilms, setFilmSelected, setCustomerSelected }) {
    // States for the film search query
    const [query, setQuery] = useState("");
    const [filmFilter, setFilmFilter] = useState("name");

    // Event Function to fetch films from SearchBar's query
    const fetchFilms = async (e) => {
        e.preventDefault();
        setFilmSelected(0);
        setCustomerSelected(0);

        try {
            const data = await sendRequest("/query/films", {
                filter_var: filmFilter,
                filter_value: query,
                offset: 0,
                top_n: 15,
            });

            if (data && data.films) {
                setFilms(data.films);
            } else {
                setFilms([]);
            }
            console.log("Searching for:", query);
            console.log("Full response:", data);
        } catch (error) {
            console.error("Error:", error);
        }


    };

    // FilmSearchBar component
    return (
        <form onSubmit={fetchFilms} style={{ display: "flex" }}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search by ${filmFilter}...`}
                style={{ flex: 1, padding: "8px" }}
            />
            <select
                value={filmFilter}
                onChange={(e) => setFilmFilter(e.target.value)}
                style={{ padding: "8px" }}
            >
                <option value="name">Name</option>
                <option value="genre">Genre</option>
                <option value="actor">Actor</option>
            </select>
            <button type="submit" style={{ padding: "8px 12px" }}>
                Search
            </button>
        </form>
    )
}

export default FilmSearchBar;