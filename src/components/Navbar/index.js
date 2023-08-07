"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DM_Sans } from 'next/font/google'
import { MenuData } from '@/data/CommonData';
import Image from 'next/image';
import Logo from '../../assets/logo.svg'


const dmSans = DM_Sans({
    subsets: ['latin'],
})

const Menubar = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Link href="#">
                    <Image src={Logo} loading='lazy' alt='logo' />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {
                            MenuData.map((item, i) => (
                                <Link className={dmSans.className} href={item.link} key={i}>{item.title}</Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar