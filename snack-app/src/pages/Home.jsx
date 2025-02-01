import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/Slider";
import Snacks from "../components/SnacksCard";
function Home () {
    return (
        <div>
            <Header />
            <ImageSlider />
            <Snacks />
            <Footer />
            
        </div>
       
    );
}

export default Home;