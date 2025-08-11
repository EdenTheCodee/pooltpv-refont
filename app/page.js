'use client'
import Head from "next/head";
import Navbar from "../components/Navbar"; // Updated path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Membres from "@/components/Membres";

import Appeloffre from "@/components/Appeloffre";


export default function Home() {
 return (
    <> 
      
      <Header/>
      <About/>
      <Navbar/>
      <Membres/>
      <Appeloffre/>
      
      
      </>
  
  
 )
 
}

