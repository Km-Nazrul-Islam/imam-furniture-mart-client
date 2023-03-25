import Banner from "@/components/Banner"
import BestSellProducts from "@/components/BestSellProducts"
import Footer from "@/components/Footer"
import KitchenDecoration from "@/components/KitchenDecoration"
import Menubar from "@/components/Menubar"
import Navbar from "@/components/Navbar"
import OurCarpenters from "@/components/OurCarpenters"
import ProductCategories from "@/components/ProductCategories"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Menubar />
        <Banner />
        <ProductCategories />
        <OurCarpenters />
        <BestSellProducts />
        <KitchenDecoration />
        <Footer />
      </div>
      <Script src="/node_modules//tw-elements/dist/js/index.min.js"></Script>
    </>
  )
}
