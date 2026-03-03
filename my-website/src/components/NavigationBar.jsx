import Session from "./Session";
import { NavLink } from "react-router-dom";

/*  Navigation Bar
    Positioned on top of all pages.
    It contains the "logo" and has links to the other pages. */
function NavigationBar() {
    return (
        <nav>
            <div className="bar">
                <div className="logo">Sekila</div>

                <ul className="links">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/films">
                        Films
                    </NavLink>
                    <NavLink to="/customers">
                        Customers
                    </NavLink>
                </ul>

                <Session/>
            </div>
        </nav>
    )
}

export default NavigationBar;