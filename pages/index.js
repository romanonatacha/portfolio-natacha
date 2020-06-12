import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Index extends Component {

    render() {

        return (
            <BaseLayout title="Natacha Romano" pageClass="index">
                <div className="boxed">
                    <div class="typewriter default">
                        <h2>front-end engineer</h2>
                        <h2>css specialist</h2>
                    </div>
                    <img className="rocket" src="/images/rockets.svg" />
                </div>
            </BaseLayout>
        )
    }
}