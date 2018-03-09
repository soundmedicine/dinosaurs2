import React, { Component } from 'react'
import Skills from './Skills'
import dino1 from './assets/dino-1.png'
import dino2 from './assets/dino-2.png'
import dino3 from './assets/dino3.png'

export default class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {dinosaurs: []}
    }

    componentDidMount() {
        return fetch('./dinosaurs.json')
        .then(response => response.json())
        .then(dinosaurs => this.setState({dinosaurs: dinosaurs}))
    }

    render() {
        let dinosaurs = this.state.dinosaurs
        return (
            <ul id="profiles">
                {dinosaurs.map(dinosaur => {
                    return <div className="profile-card">
                        <header className="profile-header">
                            <img src={dino1} alt="image goes here"/>
                            <h2>{dinosaur.name}</h2>
                        </header>
                        <Skills />
                    </div>
                })}
            </ul>  
        )
    }
}