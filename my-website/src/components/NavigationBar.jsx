import { Link } from 'react-router-dom';
import Session from "./Session";

/*  Navigation Bar
    Positioned on top of all pages.
    It contains the "logo" and has links to the other pages. */
function NavigationBar() {
    return (
        <nav>
            <div className="bar">
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