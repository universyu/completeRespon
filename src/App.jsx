import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle={'Our PROGRAM'} title={'What We Offer'} />
                <Programs />
            </div>

        </div>
    );
};

export default App;