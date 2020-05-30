import React, { Component } from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        const { title, children, handleClick } = this.props

        const menu = [
            {
                title: 'home',
                url: '/'
            },
            {
                title: 'about',
                url: '/about'
            },
            {
                title: 'skills',
                url: '/skills'
            },
            {
                title: 'portfolio',
                url: '/portfolio'
            }
        ]

        return (
            <>
                <div className="header mb_hide">
                    <div className="header_left white">
                        <div className="text-right padding32 font-xl x-bold">NATACHA ROMANO</div>
                    </div>
                    <div className="header_right text-right bold">
                        {menu.map((item, i) => (
                            <Link key={i} href={item.url}>
                                <a className="padding16">{item.title}</a>
                            </Link>
                        ))}
                        <div className="padding16 inline">
                            <button className="toggle-mode" onClick={handleClick}>
                                <i class="fas fa-moon"></i>
                                <i class="fas fa-sun"></i>
                            </button>
                        </div>

                    </div>
                </div>

                <Navbar className="dt_hide tb_hide" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                             </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}