// Import NavigationBar and ./webpage components
import NavigationBar from "./components/NavigationBar";
import CustomerPage from "./webpages/CustomerPage";
import FilmsPage from "./webpages/FilmsPage";
import HomePage from "./webpages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/films" element={<FilmsPage/>} />
                <Route path="/customers" element={<CustomerPage/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
