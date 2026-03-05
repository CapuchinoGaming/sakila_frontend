import { sendRequest } from "../../api/handler";

import FilmSearchBar from "./FilmSearchBar";

// function FilmTable({ customers, setCustomers, customerSelected, setCustomerSelected }) {
function FilmTable({ films, setFilms, filmSelected, setFilmSelected, filmDetails, setFilmDetails, setCustomers, setCustomerSelected }) {
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
                    setCustomers={setCustomers}
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
                    </tr>
                  </thead>

                  <tbody>
                    {films.map(f => (
                        <FilmRow
                            key={`${f.film.film_id}-${f.number_found}`}
                            film_id={f.film.film_id}
                            title={f.film.title}
                            category={f.category}
                            filmSelected={filmSelected}
                            setFilmSelected={setFilmSelected}
                            filmDetails={filmDetails}
                            setFilmDetails={setFilmDetails}
                        />
                    ))}
                  </tbody>
                </table>
            </div>
        </>
    )
}

function FilmRow( { film_id, title, category, filmSelected, setFilmSelected, filmDetails, setFilmDetails }) {
    const rowStyle = {
        height: filmSelected ? "36px" : "auto"
    };

    const fetchDetails = async (film_id) => {
        console.log("fetchDetails called:", film_id);
        let data;
        try {
            data = await sendRequest("/details/film", {
                "film_id": film_id
            });
        } catch (error) {
            console.error("Error:", error);
        }
        console.log("data from API:", data);
        setFilmDetails(data.film);

        console.log("Fetching details for film_id:", film_id);
    };

    return (
        <tr style={rowStyle} onClick={() => {
            console.log("row clicked film_id:", film_id);
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