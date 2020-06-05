import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Skills extends Component {
    render() {
        return (
            <BaseLayout title="Skills">
                <div className="boxed">
                    <div className="items default">
                        <span className="item item1 font-xxl">HTML</span>
                        <span className="item item2 font-xl">JavaScript</span>
                        <span className="item item3 font-xxl">CSS</span>
                        <span className="item item1 font-xl">React</span>
                        <span className="item item2 font-xxl">Angular</span>
                        <span className="item item3 font-xl">jQuery</span>
                        <span className="item item1 font-xxl">Python</span>
                        <span className="item item2 font-xl">Bootstrap</span>
                        <span className="item item3 font-xxl">Dash</span>
                        <span className="item item1 font-xl">Git</span>
                        <span className="item item2 font-xxl">SASS</span>
                        <span className="item item3 font-xl">Gulp</span>
                    </div>

                    <a href="http://maxmiracolo.com" className="logo" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M48.9 79.3c-.1-.4-.5-8.2-.8-17.3l-.6-16.5-2.3 8.9c-1.2 4.8-3.2 11-4.3 13.7-1.9 4.3-2.5 4.9-5 4.9-3.8 0-4.6-2.2-6.6-16.5C27.6 43.3 27.2 41.9 26 44c-.9 1.7-7.7 28.2-8.2 32-.4 3-3.5 3.4-5.2.7-.9-1.3-.1-5.7 3.5-20C21.6 35.4 24.9 27 27.9 27s3.6 2 6.2 18.8c1.3 8.4 2.6 14.7 3 14 .4-.7 2.1-7.1 3.8-14.3C45.7 25.7 46.7 23 49.5 23c1.2 0 2.6.7 2.9 1.6s.9 7.7 1.3 15.2l.6 13.6L57 45c3.4-10.9 4.8-13.2 8-12.8 3.1.4 3.8 2.8 3.9 14.7.1 5.2.4 9.2.7 8.8.3-.3 1.6-5.4 2.9-11.4 2.5-11.9 5.8-21.5 8-23.3.8-.6 2.4-1 3.7-.8l2.3.3v56l-2.2.3c-1.3.2-2.5-.4-3.1-1.5-.5-1-.9-9.8-.8-19.5 0-9.7 0-17.5-.2-17.3-.1.1-1.4 6-2.7 13.1-3 15.7-4.1 19.1-6.4 20.4-4 2.1-6.6-3.3-7.9-16l-.8-7.5L59.7 59c-5.7 21.9-5.2 20.5-8.1 20.8-1.4.2-2.7 0-2.7-.5z" />
                        </svg>
                    </a>
                </div>
            </BaseLayout>
        )
    }
}