import { useState, useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { sendRequest } from "../api/handler";

function T5Rentals() {
    const { storeID } = useContext(SessionContext);
    const [rentals, setRentals] = useState([]);

    if (rentals.length === 0) {
        sendRequest("/top_5_rentals", { store_id: storeID })
        .then(data => setRentals(data.rentals || []))
        .catch(console.error);
    }
    
    console.log(rentals);

    return (
        <ul>
            {rentals.map((r, i) => (
                <li key={i}>{r.film.title} (cat={r.category}) (lang={r.language}) - {r.rental_count} rentals</li>
            ))}
        </ul>
    );
}

function T5Actors() {
    const [actors, setActors] = useState([]);
    const { storeID } = useContext(SessionContext);

    if (actors.length === 0) {
        sendRequest("/top_5_actors", { store_id: storeID })
            .then(data => setActors(data.actors || []))
            .catch(console.error);
    }
    return (
        <ul>
            {actors.map((a, idx) => (
                <li key={idx}>{a.actor_id}: {a.first_name} {a.last_name}</li>
            ))}
        </ul>
    );
}

export default function LandingPage() {
    
    return (
        <div>
            <h1>Landing Page</h1>

            <br /><br />
            
            <h2>Top 5 Rentals:</h2>
            <T5Rentals />
            
            <br />
            <h2>Top 5 Actors</h2>
            <T5Actors />

        </div>
    );
}