import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import './style.css'
class Home extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Main/>

            </React.Fragment>
        );
    }
}
export default Home;