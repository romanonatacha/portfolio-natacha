import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Skills extends Component {
    render() {
        return (
            <BaseLayout title="Skills">
                <div className="boxed skills">
                    <div className="items">
                        <input type="radio" name="switch-skill" id="html" />
                        <span>
                            <label name="switch-skill" htmlFor="html" className="item item1 font-xxl">HTML</label>
                        </span>
                        <input type="radio" name="switch-skill" id="js" />
                        <span>
                            <label name="switch-skill" htmlFor="js" className="item item2 font-xl">JavaScript</label>
                        </span>
                        <input type="radio" name="switch-skill" id="css" />
                        <span>
                            <label name="switch-skill" htmlFor="css" className="item item3 font-xxl">CSS</label>
                        </span>
                        <input type="radio" name="switch-skill" id="react" />
                        <span>
                            <label name="switch-skill" htmlFor="react" className="item item1 font-xl">React</label>
                        </span>
                        <input type="radio" name="switch-skill" id="angular" />
                        <span>
                            <label name="switch-skill" htmlFor="angular" className="item item2 font-xxl">Angular</label>
                        </span>
                        <input type="radio" name="switch-skill" id="jquery" />
                        <span>
                            <label name="switch-skill" htmlFor="jquery" className="item item3 font-xl">jQuery</label>
                        </span>
                        <input type="radio" name="switch-skill" id="python" />
                        <span>
                            <label name="switch-skill" htmlFor="python" className="item item1 font-xxl">Python</label>
                        </span>
                        <input type="radio" name="switch-skill" id="bootstrap" />
                        <span>
                            <label name="switch-skill" htmlFor="bootstrap" className="item item2 font-xl">Bootstrap</label>
                        </span>
                        <input type="radio" name="switch-skill" id="dash" />
                        <span>
                            <label name="switch-skill" htmlFor="dash" className="item item3 font-xxl">Dash</label>
                        </span>
                        <input type="radio" name="switch-skill" id="git" />
                        <span>
                            <label name="switch-skill" htmlFor="git" className="item item1 font-xl">Git</label>
                        </span>
                        <input type="radio" name="switch-skill" id="sass" />
                        <span>
                            <label name="switch-skill" htmlFor="sass" className="item item2 font-xxl">SASS</label>
                        </span>
                        <input type="radio" name="switch-skill" id="gulp" />
                        <span>
                            <label name="switch-skill" htmlFor="gulp" className="item item3 font-xl">Gulp</label>
                        </span>

                        <div className="chart margin-auto top64">
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
                    </div>
                </div>
            </BaseLayout >
        )
    }
}