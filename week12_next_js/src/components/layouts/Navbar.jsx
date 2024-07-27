import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='flex align-center justify-center bg-slate-900 text-orange-400 py-4'>
                    <Link href={`/`} className='px-8'>
                        <li>Home</li>
                    </Link>
                    <Link href={`/books`} className='px-8'>
                        <li>Books</li>
                    </Link>
                    <Link href={`/contact`} className='px-8'>
                        <li>Contacts</li>
                    </Link>
                    <Link href={`/services`} className='px-8'>
                        <li>Services</li>
                    </Link>
                    <Link href={`/add-book`} className='px-8'>
                        <li>Add Book</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar