/*  Login Pop-Up (UNUSED)
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

export default Login;