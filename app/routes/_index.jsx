import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from '../services/index.js'
import MainSection from "../components/MainSection";
import ImageSection from "../components/ImageSection";


export default function Index() {
  return (
    <main>
    <Header/>
    <MainSection/>
    <ImageSection/>
    <Footer/>
    </main>
  );
}