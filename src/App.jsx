import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Fooder from "./Components/Fooder/Fooder.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle={'Our PROGRAM'} title={'What We Offer'} />
                <Programs />
                <About />
                <Title subTitle={'Gallery'} title={'Campus Photos'}></Title>
                <Campus />
                <Title subTitle={'TESTIMONIALS'} title={'What Student Says'}></Title>
                <Testimonials />
                <Title subTitle={'Contact us'} title={'Get in Touch'}></Title>
                <Contact />
                <Fooder />
            </div>

        </div>
    );
};

export default App;