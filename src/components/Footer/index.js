import React from 'react'
import Link from 'next/link'
import Logo from '../../assets/logo.svg'
import Image from 'next/image'
import { Montserrat, DM_Sans } from 'next/font/google'
import { FooterBeforeLists } from '@/data/CommonData'

const monserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='short-info-footer'>
                                <Link href="/" >
                                    <Image src={Logo} loading='lazy' alt='logo' />
                                </Link>
                                <div className='short-text'>
                                    <p className={monserrat.className}>There are many variations of passages of available, but the majority have suffered.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='footer-brefore-list'>
                                <h4 className={monserrat.className}>Services</h4>
                                <div className='before-list'>
                                    {
                                        FooterBeforeLists.map((item, i) => (
                                            <Link className={dmSans.className} href={item.link} key={i}>{item.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer