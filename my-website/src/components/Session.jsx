import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

function Session() {
    const {storeID, employeeID, setStoreID, setEmployeeID} = useContext(SessionContext);
    return (
        <div className="session">
            <p>I am</p>
            <li>Employee id={employeeID}</li>
            <p>at</p>
            <li>Store id={storeID}</li>
        </div>
    )
}

export default Session;