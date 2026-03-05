// Allow the use of states (React variables)
import { useState, useContext } from "react";
import { sendRequest } from "../api/handler";
import { SessionContext } from "../contexts/SessionContext";

import LineContainerLeft from "../components/LineContainerLeft";
import LineContainerRight from "../components/LineContainerRight";

import CustomerTable from "../components/films/CustomerTable";
import OutgoingHistory from "../components/OutgoingHistory";
import RentalHistory from "../components/RentalHistory";
import CustomerInfo from "../components/CustomerInfo";

import SearchBar from "../components/SearchBar";
import FilmTable from "../components/films/FilmTable";
import FilmInfo from "../components/films/FilmInfo";


/*  Films Page
    The films page is a flexbox.
    |=======================|
    |     NavigationBar     |
    |=======================|
    |    Films    |   [edit]|
    |    Table    |    [del]|
    |=============|         |
    |             |  Film   |
    |   Customer  |  Info   |
    |    Table    |         |
    |=============|=========|
*/
function FilmsPage() {
    // States for API Queries
    const [customers, setCustomers] = useState([]);
    const [films, setFilms] = useState([]);
    const [filmDetails, setFilmDetails] = useState({});

    // States for webpage-wide behavior
    const [filmSelected, setFilmSelected] = useState(0);
    const [customerSelected, setCustomerSelected] = useState(0);
    const { storeID } = useContext(SessionContext);

    const refreshFilmDetails = async (film_id) => {
        try {
            const data = await sendRequest("/details/film", {
                "film_id": film_id
            });
            setFilmDetails(data.film);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const refreshFilms = async () => {
        try {
            const data = await sendRequest("/query/films", {
                store_id: storeID,
                offset: 0,
                top_n: 15,
            });
            if (data && data.films) {
                setFilms(data.films);
            } else {
                setFilms([]);
            }
            setFilmSelected(0);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <>
            <div className="customer-page">
                <div className="customer-page-left">
                    <FilmTable
                        films={films}
                        setFilms={setFilms}
                        filmSelected={filmSelected}
                        setFilmSelected={setFilmSelected}
                        filmDetails={filmDetails}
                        setFilmDetails={setFilmDetails}
                        setCustomers={setCustomers}
                        setCustomerSelected={setCustomerSelected}
                    />
                    <CustomerTable
                        filmSelected={filmSelected}
                        filmDetails={filmDetails}
                        customers={customers}
                        setCustomers={setCustomers}
                        refreshFilms={refreshFilms}
                        customerSelected={customerSelected}
                        setCustomerSelected={setCustomerSelected}
                    />
                </div>

                <div className="customer-page-right">
                    <FilmInfo
                        filmSelected={filmSelected}
                        filmDetails={filmDetails}
                    />
                </div>
            </div>
        </>
    )
}

export default FilmsPage;