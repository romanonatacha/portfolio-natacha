import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Index extends Component {

    render() {

        return (
            <BaseLayout>
                <div className="home">
                    <div className="home_left"></div>
                    <div className="home_right"></div>
                </div>
            </BaseLayout>
        )
    }
}