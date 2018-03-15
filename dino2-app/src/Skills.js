import React, { Component } from 'react'

export default class Skills extends Component {

    render() {
        //let dinosaurs = this.state.dinosaurs
        return (
            <section className={`skills-container ${this.props.dinosaur.showSkills ? '' : 'hidden'}`}>
                <h4>Skills</h4>
                <ul className="skills-list">
                    {this.props.dinosaur.skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </section>
        )
    }
}