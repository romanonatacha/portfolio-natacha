import React, { Component } from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'
  
export default class Portfolio extends Component {

    static async getInitialProps() {
        let posts = []

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = response.data
        } catch(err) {
            console.error(err)
        }

        return {posts: posts.splice(0, 10)}
    }

    renderPosts(posts) {
        return posts.map(post => {
            return (
                <li>{post.title}</li>
            )
        })
    }

    render() {

        const { posts } = this.props

        return (
            <BaseLayout>
                <h1>Portfolio page</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}