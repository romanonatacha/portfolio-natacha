import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class About extends Component {
    render() {
        return (
            <div>
                <BaseLayout title="About me">
                    <div className="boxed">
                        <div className="about-title default light bottom16">WHO AM I AND WHAT I DO</div>
                        <div className="about bottom64">
                            <div className="font-sm">
                                <p>
                                    I am a very practical and meticulous person, eager to learn and passionate about technology.
                                </p>
                                <p>
                                    I have always received very positive feedback on agility to deliver and execute tasks on projects, and also on learning fast.
                                </p>
                                <p>
                                    Today I have experience with HTML, CSS and JavaScript, which is the basics, and have worked with some technologies like React, Angular, TypeScript, jQuery, Bootstrap, CSS preprocessors, Python, Plotly Dash, Node, Docker and Git. And I'm always studying new things, I want to be full stack, studying is part of my routine.
                                </p>
                                <p>
                                    I used to work with design, but I wasn't 100% happy, I was looking for a new challenge in my career, so I started to study Front End and fell in love, and I think the design background helps me a lot in this area.
                                </p>
                                <p>
                                    All I learned was by myself, studying on my own, so I consider myself a self-taught person, with easy and fast learning, because I always go after solving problems, as much as I do not understand much about that technology, I research and try hard to accomplish that challenge.
                                </p>
                                <p>
                                    I encourage women to enter the technology area and I think about participating or creating a project about it.
                                </p>
                                <p>
                                    I am open to opportunities as a freelancer.
                                </p>
                            </div>
                        </div>
                        <div className="about-title default light bottom16">LANGUAGES</div>
                        <div className="about info uppercase padding24 bottom64">
                            <span className="padding4 font-sm">
                                English
                                <i class="fas font-lg icon fa-battery-full"></i>
                            </span>
                            <span className="padding4 font-sm">
                                Spanish
                                <i class="fas font-lg icon fa-battery-half"></i>
                            </span>
                            <span className="padding4 font-sm">
                                Portuguese
                                <i class="fas font-lg icon fa-battery-full"></i>
                            </span>
                        </div>
                        <div className="about-title default light bottom16">SOFT SKILLS</div>
                        <div className="about info uppercase padding24 font-xs light bottom64">
                            <span className="padding4">
                                fast learning
                            </span>
                            <span className="padding4">
                                self-learning
                            </span>
                            <span className="padding4">
                                responsible
                            </span>
                            <span className="padding4">
                                organized
                            </span>
                            <span className="padding4">
                                Punctual
                            </span>
                            <span className="padding4">
                                Meticulous
                            </span>
                            <span className="padding4">
                                Proactive
                            </span>
                        </div>
                        <div className="about-title default light bottom16">HOBBIES</div>
                        <div className="about info uppercase padding24 font-xs light">
                            <span className="padding4">
                                <img src="/images/planet.svg" />
                                        astronomy
                                </span>
                            <span className="padding4">
                                <img src="/images/science.svg" />
                                        science
                                 </span>
                            <span className="padding4">
                                <img src="/images/tech.svg" />
                                        tech
                                </span>
                            <span className="padding4">
                                <img src="/images/rockets.svg" />
                                        missions
                                </span>
                            <span className="padding4">
                                <img src="/images/music.svg" />
                                        music
                                </span>
                            <span className="padding4">
                                <img src="/images/yoga.svg" />
                                        yoga
                                </span>
                        </div>
                    </div>
                </BaseLayout>
            </div>
        )
    }
}