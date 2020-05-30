import { Fragment, useState } from 'react'
import Header from '../shared/Header'
import '../../styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const BaseLayout = (props) => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={`portfolio-app ${darkMode ? "dark-mode" : "light-mode"}`}>
            <Header handleClick={handleClick} />
            {props.children}
        </div>
    )
}

export default BaseLayout