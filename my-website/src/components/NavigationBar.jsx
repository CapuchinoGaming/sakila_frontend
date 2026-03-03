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
                    <li>Home</li>
                    <li>Films</li>
                    <li>Customers</li>
                </ul>

                <Session/>
            </div>
        </nav>
    )
}

export default NavigationBar;