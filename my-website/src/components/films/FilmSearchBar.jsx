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

        let data;
        try {
            if (query == "") {
                data = await sendRequest("/query/films", {
                    offset: 0,
                    top_n: 100,
                });
            } else {
                data = await sendRequest("/query/films", {
                    filter_var: filmFilter,
                    filter_value: query,
                    offset: 0,
                    top_n: 100,
                });
            }

            console.log("Searching for:", query);
            console.log("Full response:", data);
        } catch (error) {
            console.error("Error:", error);
        }

        // Count frequency per film_id
        const freq = {};
        for (const obj of data.films) {
            const id = obj.film.film_id;
            freq[id] = (freq[id] || 0) + 1;
        }

        // 2) Enumerate duplicates per film_id
        const seen = {}; // tracks how many of each id we've already labeled

        // 3) Append new attributes onto each object (mutates objects)
        for (const obj of data.films) {
            const id = obj.film.film_id;

            seen[id] = (seen[id] || 0) + 1;

            obj.in_stock = freq[id];          // total copies of this film in the list
            obj.number_found = seen[id];      // 1..N for duplicates of same film_id
        }

        // 4) Remove duplicates
        if (data?.films) {
            const uniqueFilms = [];
            const kept = new Set();

            for (const obj of data.films) {
                const id = obj.film.film_id;
                if (!kept.has(id)) {
                kept.add(id);
                uniqueFilms.push(obj);
                }
            }

            setFilms(uniqueFilms);
        } else {
            setFilms([]);
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