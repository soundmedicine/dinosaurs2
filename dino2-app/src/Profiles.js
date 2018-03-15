import React, { Component } from 'react'
import Skills from './Skills'
import './profile.css'

export default class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {dinosaurs: []}

        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        return fetch('./dinosaurs.json')
        .then(response => response.json())
        .then(dinosaurs => {
            dinosaurs.forEach(dinosaur => {
                dinosaur.showSkills = false
            })
            this.setState({dinosaurs})
        })
    }

    // handleClick() {
    //     this.setState(prevState => ({
    //         {dinosaur.showSkills = true}
    //     }))
    // }

    render() {
        let dinosaurs = this.state.dinosaurs
        return (
            <ul id="profiles">
                {dinosaurs.map(dinosaur => {
                    return <li key={dinosaur.name}>
                                <div className="profile-card">
                                    <header className="profile-header">
                                        <img src={dinosaur.image} alt=""/>
                                        <h2>{dinosaur.name}</h2>
                                    </header>
                                    <Skills />
                                </div>
                            </li>
                })}
            </ul>  
        )
    }
}