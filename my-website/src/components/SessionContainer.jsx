import Login from "./Login";

function SessionContainer() {
    return (
        <div className="session-container">
            <div className="session">
                <text>I am</text>
                <li>John Doe [id: 32]</li>
                <text>at</text>
                <li>47 MySakila Drive, Newark</li>
            </div>

            <Login/>
        </div>
    )
}

export default SessionContainer;