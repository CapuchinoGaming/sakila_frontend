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

    const filmArray = [
    {
      "film": {
        "film_id": 19,
        "title": "AMADEUS HOLY",
        "description": "A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon",
        "release_year": 2006,
        "language_id": 1,
        "original_language": null,
        "rental_duration": 6,
        "rental_rate": 0.99,
        "length": 113,
        "replacement_cost": 20.99,
        "rating": "PG",
        "special_features": "Behind the Scenes,Commentaries,Deleted Scenes",
        "last_update": "2006-02-15T05:03:42"
      },
      "actors": [
        {
          "actor_id": 5,
          "first_name": "JOHNNY",
          "last_name": "LOLLOBRIGIDA",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 27,
          "first_name": "JULIA",
          "last_name": "MCQUEEN",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 37,
          "first_name": "VAL",
          "last_name": "BOLGER",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 43,
          "first_name": "KIRK",
          "last_name": "JOVOVICH",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 84,
          "first_name": "JAMES",
          "last_name": "PITT",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 104,
          "first_name": "PENELOPE",
          "last_name": "CRONYN",
          "last_update": "2006-02-15T04:34:33"
        }
      ],
      "category": "Action",
      "language": "English",
      "rental_count": null
    },
    {
      "film": {
        "film_id": 19,
        "title": "AMADEUS HOLY",
        "description": "A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon",
        "release_year": 2006,
        "language_id": 1,
        "original_language": null,
        "rental_duration": 6,
        "rental_rate": 0.99,
        "length": 113,
        "replacement_cost": 20.99,
        "rating": "PG",
        "special_features": "Behind the Scenes,Commentaries,Deleted Scenes",
        "last_update": "2006-02-15T05:03:42"
      },
      "actors": [
        {
          "actor_id": 5,
          "first_name": "JOHNNY",
          "last_name": "LOLLOBRIGIDA",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 27,
          "first_name": "JULIA",
          "last_name": "MCQUEEN",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 37,
          "first_name": "VAL",
          "last_name": "BOLGER",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 43,
          "first_name": "KIRK",
          "last_name": "JOVOVICH",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 84,
          "first_name": "JAMES",
          "last_name": "PITT",
          "last_update": "2006-02-15T04:34:33"
        },
        {
          "actor_id": 104,
          "first_name": "PENELOPE",
          "last_name": "CRONYN",
          "last_update": "2006-02-15T04:34:33"
        }
      ],
      "category": "Action",
      "language": "English",
      "rental_count": null
    }
  ];

    return (
        <>
            <div className="line-container">
                <FilmSearchBar
                    setFilms={setFilms}
                    setFilmSelected={setFilmSelected}
                    setCustomerSelected={setCustomerSelected}
                />
            </div>

            <div className="customer-table" style={divStyle}>
                <table style={tableStyle}>
                    <tr style={rowStyle}>
                        <th>film_id</th>
                        <th>title</th>
                        <th>category</th>
                    </tr>
                    {filmArray.map(f => (
                        <FilmRow
                            key={f.film.film_id}
                            film_id={f.film.film_id}
                            title={f.film.title}
                            category={f.category}
                            filmSelected={filmSelected}
                            setFilmSelected={setFilmSelected}
                        />
                    ))}
                </table>
            </div>
        </>
    )
}

function FilmRow( { film_id, title, category, filmSelected, setFilmSelected, refreshRentalsForCustomer }) {
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
        </tr>
    )
}

export default FilmTable;