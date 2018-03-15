import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Profiles from './Profiles'
// import Skills from './Skills'
import Footer from './Footer'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section id="profiles-container">
                        <h2>Profiles</h2>
                        <Profiles />
                        <Footer />
                    
                    </section>
                </main>
            </div>
        )
    }
}