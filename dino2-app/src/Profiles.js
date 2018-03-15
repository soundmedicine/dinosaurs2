import React, { Component } from 'react'
import Skills from './Skills'
import './profile.css'

export default class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {dinosaurs: []}

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        return fetch('./dinosaurs.json')
        .then(response => response.json())
        .then(dinosaurs => {
            dinosaurs.forEach(dinosaur => {
                dinosaur.showSkills = false
            })
            console.log(dinosaurs)
            this.setState({dinosaurs})
        })
    }

    handleClick(idx) {
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.dinosaurs[idx].showSkills = !newState.dinosaurs[idx].showSkills
        this.setState(newState)
    }

    render() {
        let dinosaurs = this.state.dinosaurs
        return (
            <ul id="profiles">
                {dinosaurs.map((dinosaur, idx) => {
                    return <li key={dinosaur.name}>
                                <div className="profile-card" onClick={() => this.handleClick(idx)}>
                                    <header className="profile-header">
                                        <img src={dinosaur.image} alt=""/>
                                        <h2>{dinosaur.name}</h2>
                                    </header>
                                    <Skills dinosaur = {dinosaur}/>
                                </div>
                            </li>
                })}
            </ul>  
        )
    }
}