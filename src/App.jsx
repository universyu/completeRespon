import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Programs />
            </div>

        </div>
    );
};

export default App;