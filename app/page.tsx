'use client';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Updated path to relative
import About from "../components/About";
import Membres from "../components/Membres" ;
import Appeloffre from "../components/Appeloffre" ;
import Navigation from "../components/Navigation"; // Updated path to relative



const Home: React.FC = () => {
    return (
        <>
            <Header />
            <About />
            <Navbar />
           <Navigation />
            <Membres />
            <Appeloffre />
          
        </>
    );
};

export default Home;
