import { useLocation, Link } from 'react-router-dom';
import Session from "./Session";

/*  Navigation Bar
    Positioned on top of all pages.
    It contains the "logo" and has links to the other pages. */
function NavigationBar() {
    const { pathname } = useLocation();
    let navStyle = { backgroundColor: "#4F7A2B" };

    if (pathname == "/") {
        navStyle = { backgroundColor: "#4F7A2B" };
    } else if (pathname == "/films") {
        navStyle = { backgroundColor: "#2F6FA8" };
    } else if (pathname == "/customers") {
        navStyle = { backgroundColor: "#D3A53A" };
    }
    
    return (
        <nav>
            <div style={navStyle} className="bar">
                <div className="logo">Sekila</div>

                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/films">Films</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                </ul>

                <Session/>
            </div>
        </nav>
    )
}

export default NavigationBar;