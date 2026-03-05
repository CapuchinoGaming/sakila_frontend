import { useLocation, NavLink } from 'react-router-dom';
import Session from "./Session";

/*  Navigation Bar
    Positioned on top of all pages.
    It contains the "logo" and has links to the other pages. */
function NavigationBar() {
    const { pathname } = useLocation();
    let colorPalette = { backgroundColor: "#4F7A2B" };

    if (pathname == "/") {
        colorPalette = { backgroundColor: "#4F7A2B" };
    } else if (pathname == "/films") {
        colorPalette = { backgroundColor: "#2F6FA8" };
    } else if (pathname == "/customers") {
        colorPalette = { backgroundColor: "#D3A53A" };
    }
    
    return (
        <nav>
            <div className="bar" style={colorPalette}>
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