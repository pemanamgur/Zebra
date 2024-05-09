import {BrowserRouter , Routes , Route } from "react-router-dom"
import './App.css'

import Home from "./Pages/Home"
import Photos from "./Pages/Photos"
import Videos from "./Pages/Videos"
import Review from "./Pages/Review"
import Pricing from "./Pages/Pricing"
import Contact from "./Pages/Contact"
import Nab from "./components/Nab"
import Footer from "./components/Footer"
import { SignedIn , SignedOut , SignInButton , UserButton } from "@clerk/clerk-react"

function App() {

  return (
    <>
    <header>
          <SignedOut >
            <SignInButton />
          </SignedOut>
          <SignedIn >
            <UserButton />
          </SignedIn>
    </header>
     <BrowserRouter>
      <Nab />
        <Routes >
           <Route path="/" element={<Home/>} />
           <Route path="/photos" element={<Photos/>} />
           <Route path="/videos" element={<Videos/>} />
           <Route path="/reviews" element={<Review/>} />
           <Route path="/pricing" element={<Pricing/>} />
           <Route path="/contact" element={<Contact/>} />
        </Routes>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
