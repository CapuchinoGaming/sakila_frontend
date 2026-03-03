import Session from "./Session";
import { useLocation, NavLink } from "react-router-dom";

/*  Navigation Bar
    Positioned on top of all pages.
    It contains the "logo" and has links to the other pages. */
function NavigationBar() {
    const { pathname } = useLocation();
    let navStyle = { backgroundColor: "red" };

    if (pathname == "/") {
        navStyle = { backgroundColor: "#4F7A2B" };
    } else if (pathname == "/films") {
        navStyle = { backgroundColor: "#2F6FA8" };
    } else if (pathname == "/customers") {
        navStyle = { backgroundColor: "#D3A53A" };
    }
    
    return (
        <nav>
            <div className="bar" style={navStyle}>
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
            </div>
        </nav>
    )
}

export default NavigationBar;