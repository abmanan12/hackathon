import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from '../Home'
import Auth from '../Auth'

export default function Index() {

    const { user } = useSelector(state => state.AuthReducer?.authData)

    // const user = false

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/auth/*" element={!user ? <Auth /> : <Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
