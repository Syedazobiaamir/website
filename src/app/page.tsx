import Image from "next/image";
import Navbar from "./Navbar/Navbar";
 import Hero from "./Hero/Hero";
 import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Categoriessec from "./Categoriessection/Categoriessection";
import Featuredproduct from "./Featuredproduct/Featuredproduct copy";
import BlogSection from "./Blogsection/Blogsection";
import Footer from "./Footer/Footer";
import Instagram from "./Instagram/Instagram";


export default function Home() {
  return (
    <div>
<Navbar/>
<Hero/>
 <ProductDisplay/>
<Categoriessec/>
<Featuredproduct/>
<BlogSection/>
<Instagram/>
<Footer/>

    </div>
  );
}
