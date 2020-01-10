import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
  
export default class Index extends SuperComponent {

    constructor(props) {
        super(props)

        this.state = {
            title: 'I am a index page'
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle = () => {
        this.setState({title: 'I am updated index page'})
    }

    render() {

        const { title } = this.state

        return (
            <BaseLayout>
                <h1>Index page</h1>
                <h2>{title}</h2>
                <button onClick={this.updateTitle}>Change Title</button>
            </BaseLayout>
        )
    }
}