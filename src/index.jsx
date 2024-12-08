
import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
const root = createRoot(document.getElementById("root"))

const ul = document.getElementById

function ShopContents() {
    return (
        <> 
            <Header />
            <MainContent />
            <Footer />
        </>
    )
} 

root.render(
    <ShopContents />
)