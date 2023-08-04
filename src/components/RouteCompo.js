import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Students from './Students';
import Home from './Home';
import Contact from './Contact';

function RouteCompo(){
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                </Routes>

        </div>
    )

}
export default RouteCompo;