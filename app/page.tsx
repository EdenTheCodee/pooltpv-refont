'use client';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Updated path to relative
import About from "../components/About";
import Contact from "../components/Contact";
import Membres from "../components/Membres" ;
import Actuality from "../components/Actuality" ;
import Appeloffre from "../components/Appeloffre" ;



const Home: React.FC = () => {
    return (
        <>
            <Header />
            <About />
            <Navbar />
            <Contact />
            <Membres />
            <Appeloffre />
            <Actuality />
        </>
    );
};

export default Home;
