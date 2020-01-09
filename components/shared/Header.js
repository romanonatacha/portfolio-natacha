import React, { Component, Fragment } from 'react'
import Link from 'next/link'
  
export default class Header extends Component {
    render() {
        const title = this.props.title

        return (
            <Fragment>
                <p>{title}</p>
                {this.props.children}
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
                <Link href="/cv">
                    <a>CV</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <style jsx>
                    {`
                        a {
                            font-size: 20px;
                        }
                    `}
                </style>
            </Fragment>
        )
    }
}