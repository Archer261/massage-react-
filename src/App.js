import React from 'react'

import { About, Ria, Find, Footer, Gallery, Header, Services, Video, Testimonials } from './container'

import { Book, NavBar } from './components'

import './App.css'


const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            <Services />
            <Ria />
            <Video />
            <Testimonials />
            <Gallery />
            <Find />
            <Footer />
            <Book />
        </div>
    )
}

export default App