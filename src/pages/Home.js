import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hello from "../components/Hello";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import Navbar from "../components/Navbar/Navbar";
import Provinsi from "../components/provinsi/Provinsi"
import data from "../utils/constants/provinces";

function Main() {
  const { provinces,setProvinces} = useState(data.provinces) 
  return (
    <main>
      <Hero />
      <Indonesia />
      <Provinsi provinces={ provinces } />
      <Form provinces={provinces} setProvinces={setProvinces}/>
      <Hello />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      
      <Main />
      <Footer />
    </>
  );
}

export default Home;
