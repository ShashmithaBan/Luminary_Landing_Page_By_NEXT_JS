import Image from "next/image";
import { Hero } from "./hero/page";
import { Navbar } from "./navbar/page";
import { Contact } from "./contact/page";
import Head from "next/head";
import { About } from "./about/page";
import { Projects } from "./projects/page";
import { TechStacks } from "./techStacks/page";
import { Community } from "./community/page";
import { Pricing } from "./pricing/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
   <Projects/>
   <TechStacks/>
    <Community/>
    <Pricing/>
    </>
    
  );
}
