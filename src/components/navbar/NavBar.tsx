import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import './NavBar.scss'
import companyLogo from '../../images/logo.gif'

const NavBar = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }

    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__content__logo">
                    <img id="companyLogo" src={companyLogo} alt="" />
                </Link>
                <nav
                    className={`${'header__content__nav'} 
          ${menuOpen && size.width < 768 ? `${'isMenu'}` : ''} 
          }`}
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalogue">Courses</Link>
                        </li>
                        <li>
                            <Link to="/addCourse">Add Course</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                        <Link to="/login">
                            <button className="btn btn__login">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn">Register</button>
                        </Link>
                    </ul>
                </nav>
                <div className="header__content__toggle">
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    )
}

export default NavBar
