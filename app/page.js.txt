'use client'
import Head from "next/head";
import Navbar from "../components/Navbar"; // Updated path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Membres from "@/components/Membres";
import Actuality from "@/components/Actuality";
import Appeloffre from "@/components/Appeloffre";


export default function Home() {
 return (
    <> 
      
      <Header/>
      <About/>
      <Navbar/>
      <Contact/>
      <Membres/>
      <Appeloffre/>
      <Actuality/> 
      
      </>
  
  
 )
 
}

