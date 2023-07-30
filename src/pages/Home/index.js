import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Hero from './Hero'
import Contact from './Contact'
import PrivateRoute from '../Routes/PrivateRoute'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import About from './About'

export default function index() {

    return (
        <>

            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<PrivateRoute Component={Contact} />} />
                </Routes>
            </main>
            <Footer />

        </>
    )
}
