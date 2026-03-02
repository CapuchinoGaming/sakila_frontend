import { useState, useEffect } from "react";

export default function LandingPage() {
    
    
    return (
        <div>
            <h1>Landing Page</h1>

            <br /><br />
            
            <h2>Top 5 Rentals:</h2>
            <t5Rentals />
            
            <br />
            <h2>Top 5 Actors</h2>
            <t5Actors />

        </div>
    );
}