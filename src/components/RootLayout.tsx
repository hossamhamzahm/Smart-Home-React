import axios from "axios";
import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar";
import UpperSection from "./UpperSection/UpperSection";



    // <link rel="stylesheet" href="/styles/home/overview.css">
        // <title>Overview</title>

const baseURL = "http://16.171.43.208:8080/api/v1/";

const axios_instance = axios.create({
    baseURL,
    // timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});


export default function RootLayout(){
    return (
    <>
        {/* <header>
            <Navbar />
        </header> */}
        
            <UpperSection axios_instance={axios_instance} />
        
            <Footer axios_instance={axios_instance} />
    </>
    )
}