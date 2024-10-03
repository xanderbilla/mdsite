import Link from 'next/link'
import React from 'react'

type Props = object

export default function Navbar({}: Props) {

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]

  return (
    <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
        <nav>
            <ul>
                <li>
                    <Link href='/' aria-label='Home Page'>
                        Xander
                    </Link>
                </li>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}