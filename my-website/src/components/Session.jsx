import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

function Session() {
    const {storeID, employeeID, setStoreID, setEmployeeID} = useContext(SessionContext);
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
        <div className="session" style={colorPalette}>
            <p>I am</p>
            <li>Employee id={employeeID}</li>
            <p>at</p>
            <li>Store id={storeID}</li>
        </div>
    )
}

export default Session;