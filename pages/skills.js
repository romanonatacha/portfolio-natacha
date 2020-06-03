import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Skills extends Component {
    render() {
        return (
            <BaseLayout title="Skills">
                <div className="boxed">
                    <div id="words">
                        <div id="word1" className="word Foreground">HTML</div>
                        <div id="word2" className="word Background">World!</div>
                        <div id="word3" className="word Foreground">This</div>
                        <div id="word4" className="word Background">is</div>
                        <div id="word5" className="word Foreground">Word</div>
                        <div id="word6" className="word Background">Floating</div>
                        <div id="word7" className="word Foreground">Space</div>
                        <div id="word8" className="word Background"> Build</div>
                        <div id="word9" className="word Background">by</div>
                        <div id="word10" className="word Foreground">Bhargav</div>
                        <div id="word11" className="word Background">Gandhi</div>
                        <div id="word12" className="word Background">Try</div>
                        <div id="word13" className="word Background">Entering</div>
                        <div id="word14" className="word Background">One</div>
                        <div id="word15" className="word Foreground">Word</div>
                    </div>
                </div>
            </BaseLayout>
        )
    }
}