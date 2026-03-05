import { useState } from "react";

import FilmSearchBar from "./FilmSearchBar";

// function FilmTable({ customers, setCustomers, customerSelected, setCustomerSelected }) {
function FilmTable({ films, setFilms, filmSelected, setFilmSelected, setCustomerSelected }) {
    const divStyle = {
        height: filmSelected ? "calc(36px * 4 + 1px) " : "100%"
    };
    const tableStyle = {
        height: filmSelected ? "auto" : "auto"
    };
    const rowStyle = {
        height: filmSelected ? "36px" : "36px"
    };

    return (
        <>
            <div className="line-container">
                <FilmSearchBar
                    setFilms={setFilms}
                    setFilmSelected={setFilmSelected}
                    setCustomerSelected={setCustomerSelected}
                />
                <div className="line-label" style={{backgroundColor: "#2F6FA8"}}>
                  <div>Select a Film</div>
                </div>
            </div>

            <div className="customer-table" style={divStyle}>
                <table style={tableStyle}>
                  <thead>
                    <tr style={rowStyle}>
                        <th>film_id</th>
                        <th>title</th>
                        <th>category</th>
                        <th>in_stock</th>
                    </tr>
                  </thead>

                  <tbody>
                    {films.map(f => (
                        <FilmRow
                            key={`${f.film.film_id}-${f.number_found}`}
                            film_id={f.film.film_id}
                            title={f.film.title}
                            category={f.category}
                            in_stock={f.in_stock}
                            filmSelected={filmSelected}
                            setFilmSelected={setFilmSelected}
                        />
                    ))}
                  </tbody>
                </table>
            </div>
        </>
    )
}

function FilmRow( { film_id, title, category, in_stock, filmSelected, setFilmSelected, refreshRentalsForCustomer }) {
    const rowStyle = {
        height: filmSelected ? "36px" : "auto"
    };

    const fetchDetails = (film_id) => {
        // delegate to parent
        console.log("Fetching details for film_id:", film_id);
    };

    return (
        <tr style={rowStyle} onClick={() => {
            setFilmSelected(film_id);
            fetchDetails(film_id);
        }}>
            <td>{film_id}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{in_stock}</td>
        </tr>
    )
}

export default FilmTable;