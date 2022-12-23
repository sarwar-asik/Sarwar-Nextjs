import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Banner2 from "../components2/Banner2/Banner2";
import Projects2 from "../components2/Projetc2/Projects2";
import Footer from "../components2/Footer/Footer";
import Statistics from "../components2/statistic/Statistics";

export default function Home() {
  return (
    <div className="   max-w-[90%] mx-auto">
      
      <Banner2></Banner2>
      <Statistics/>
      <Projects2></Projects2>
     
    </div>
  );
}
