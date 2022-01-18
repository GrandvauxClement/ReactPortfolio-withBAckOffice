import logo from '../assets/logo/monLogoBlancFondTransparent.png';
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import '../styles/navbar.css'
import React, {useState, useRef, useLayoutEffect} from 'react'
const  isBrowser = typeof window !== 'undefined'

function getScrollPosition({element, useWindow}) {
    if (!isBrowser) return {x: 0, y: 0}

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    return useWindow
        ? {x: window.scrollX, y: window.scrollY}
        : {x: position.left, y: position.top}
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
    const position = useRef(getScrollPosition({useWindow}))
    let throttleTimeout = null

    const callBack = () => {
        const currPos = getScrollPosition({element, useWindow})
        effect({ prevPos: position.current, currPos})
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait)
                }
            } else {
                    callBack()
                }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }, deps)

}

function Navigation() {

    const [hideOnScroll, setHideOnScroll] = useState('navbar-transparent')
    useScrollPosition(({ prevPos, currPos}) => {
        if (currPos.y !== 0) {
            setHideOnScroll('navbar-my-Blue')
        } else {
            setHideOnScroll('navbar-transparent')
        }
    }, [hideOnScroll])

    return (
            <Navbar className={hideOnScroll} expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className='img-fluid mon-logo mx-5' alt='logo grandvaux clement'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#aPropos" className='text-white mx-2' >A propos</Nav.Link>
                            <Nav.Link href="#mesServices" className='text-white mx-2'>Mes services</Nav.Link>
                            <Nav.Link href="#fh5co-project" className='text-white mx-2'>Mes projets</Nav.Link>
                            <Nav.Link href="#contact" className='text-white mx-2'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation
