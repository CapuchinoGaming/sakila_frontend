function App() {
    return (
        <>
            <NavigationBar/>
            <CustomerPage/>
        </>
    )
}

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
                
            </div>
            
            <div className="session-container">
                <div className="session">
                    <text>I am</text>
                    <li>John Doe [id: 32]</li>
                    <text>at</text>
                    <li>47 MySakila Drive, Newark</li>
                </div>

                <Login/>
            </div>
        </nav>
    )
}

/*  Login Pop-Up
    Positioned below the Navigation Bar.
    The login menu is contained inside the NavigationBar object.
    It contains a simple username/password form and a submit button.
    Note: This object is hidden by default.*/
function Login() {
    return (
        <div className="login">
            <form action="#" method="post">
                <label for="lastname">username: </label>
                <br></br>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter username"

                    required
                />
                <br></br><br></br>
                <label for="lastname">password: </label>
                <br></br>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter password"
                    required
                />
                <br></br><br></br>
                <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                    Submit
                </button>
            </form>
        </div>
    )
}

/*  Customer Page

    The customer page is a flexbox. It contains 3 objects within it:
    |=======================|
    |     NavigationBar     |
    |=======================|
    |    Query    |   [edit]|
    |    Table    |    [del]|
    |=============|         |
    |             |  Client |
    |   Rental    |  Info   |
    |   History   |         |
    |=============|=========|

*/
function CustomerPage() {
    return (
        <>
            <div className="customer-page">
                <div className="customer-page-left">
                    <CustomerTable/>
                    <RentalHistory/>
                </div>
                <div className="customer-page-right">
                    <CustomerInfo/>
                </div>
            </div>
        </>
    )
}

function CustomerTable() {
    return (
        <div className="customer-table">
            <table>
                <tr>
                    <th>customer_id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                </tr>
            </table>
        </div>
    )
}

function RentalHistory() {
    return (
        <div className="rental-history">
            <table>
                <tr>
                    <th>customer_id</th>
                    <th>first_name</th>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>text</td>
                    <td>text</td>
                </tr>
            </table>
        </div>
    )
}

function CustomerInfo() {
    return (
        <div className="customer-info">
            <b>customer_id</b>
                <p>42</p>
            <b>store_id</b>
                <p>2</p>
            <b>first_name</b>
                <p>Carolyn</p>
            <b>last_name</b>
                <p>Perez</p>
            <b>email</b>
                <p>CAROLYN.PEREZ@sakilacustomer.org</p>
            <b>address</b>
                <p>1632 Bislig Avenue, Nonthaburi, 61117</p>
            <b>phone</b>
                <p>471675840679</p>
            
        </div>
    )
}

export default App
