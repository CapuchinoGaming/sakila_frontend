// Import NavigationBar and ./webpage components
import { useState } from 'react';
import { SessionContext } from './contexts/SessionContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import CustomerPage from "./webpages/CustomerPage";
import LandingPage from "./webpages/LandingPage";
import FilmsPage from "./webpages/FilmsPage";

function App() {
    const[storeID, setStoreID] = useState(1);
    const[employeeID, setEmployeeID] = useState(1);

    return (
        <SessionContext.Provider value={{ storeID, employeeID, setStoreID, setEmployeeID }}>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/customers" element={<CustomerPage />} />
                    <Route path="/films" element={<FilmsPage/>} />
                </Routes>
            </BrowserRouter>
        </SessionContext.Provider>
    )
}

export default App;
