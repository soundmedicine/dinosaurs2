import React, { Component } from 'react'

export default class Skills extends Component {
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
            <section className={`skills-container ${this.props.showSkills ? '' : 'hidden'}`}>
                <h4>Skills</h4>
                <ul className="skills-list">
                {dinosaurs.map(dinosaur => {
                    return dinosaur.skills.map(skill => {
                        return <li>{skill}</li>
                    })
                })}
                </ul>
            </section>
        )
    }
}