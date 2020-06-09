import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import skills from '../data/skills'

export default class Skills extends Component {
    render() {
        return (
            <BaseLayout title="Skills">
                <div className="boxed skills">
                    <div className="items">
                        {skills && skills.map((item, i) => (
                            <>
                                <input key={i} type="radio" name="switch-skill" id={item.name} />
                                <span>
                                    <label name="switch-skill" htmlFor={item.name} className={`item ${item.class} font-md`}>{item.name}</label>
                                </span>
                            </>
                        ))}
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
                        <div className="info top64 font-md light uppercase">click on the skills to see the level</div>
                    </div>
                </div>
            </BaseLayout >
        )
    }
}