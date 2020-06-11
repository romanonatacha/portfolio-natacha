import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

export default class Index extends Component {

    render() {

        return (
            <BaseLayout title="Natacha Romano">
                <div className="boxed">
                    <img className="rocket" src="/images/rockets.svg"/>
                </div>
            </BaseLayout>
        )
    }
}