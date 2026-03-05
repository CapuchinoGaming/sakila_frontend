// Allow the use of states (React variables)
import { useState } from "react";

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
                        customers={customers}
                        setCustomers={setCustomers}
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