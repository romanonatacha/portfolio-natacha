import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Skills extends Component {
    render() {
        return (
            <BaseLayout title="Skills">
                <div className="boxed skills">
                    <div className="items">
                        <span>
                            <label name="switch-skill" htmlFor="html" className="item item1 font-xxl">HTML</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="js" className="item item2 font-xl">JavaScript</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="css" className="item item3 font-xxl">CSS</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="react" className="item item1 font-xl">React</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="angular" className="item item2 font-xxl">Angular</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="jquery" className="item item3 font-xl">jQuery</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="python" className="item item1 font-xxl">Python</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="bootstrap" className="item item2 font-xl">Bootstrap</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="dash" className="item item3 font-xxl">Dash</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="git" className="item item1 font-xl">Git</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="sass" className="item item2 font-xxl">SASS</label>
                        </span>
                        <span>
                            <label name="switch-skill" htmlFor="gulp" className="item item3 font-xl">Gulp</label>
                        </span>
                    </div>

                    <div className="container top64">
                        <section>
                            <article>
                                <input type="radio" name="switch-skill" id="html" />
                                <input type="radio" name="switch-skill" id="js" />
                                <input type="radio" name="switch-skill" id="css" />
                                <input type="radio" name="switch-skill" id="react" />
                                <input type="radio" name="switch-skill" id="angular" />
                                <input type="radio" name="switch-skill" id="jquery" />
                                <input type="radio" name="switch-skill" id="python" />
                                <input type="radio" name="switch-skill" id="bootstrap" />
                                <input type="radio" name="switch-skill" id="dash" />
                                <input type="radio" name="switch-skill" id="git" />
                                <input type="radio" name="switch-skill" id="sass" />
                                <input type="radio" name="switch-skill" id="gulp" />
                                <div className="chart">
                                    <div className="bar bar-75 white">
                                        <div className="face top">
                                            <div className="growing-bar"></div>
                                        </div>
                                        <div className="face side-0">
                                            <div className="growing-bar"></div>
                                        </div>
                                        <div className="face floor">
                                            <div className="growing-bar"></div>
                                        </div>
                                        <div className="face side-a"></div>
                                        <div className="face side-b"></div>
                                        <div className="face side-1">
                                            <div className="growing-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="info top64 font-lg light">click on the skills to see the level</div>
                            </article>
                        </section>
                    </div>
                </div>
            </BaseLayout>
        )
    }
}