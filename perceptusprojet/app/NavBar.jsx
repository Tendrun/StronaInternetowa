'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' 
import React from 'react'

const NavBar = () => {
    const currentPath = usePathname();
    

    const links = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/ProductsList" },
        { label: "Create new Product", href: "/ProductsList/ProductCreatePage"}
    ]

    return (
        <header className='bg-gray-500 py-2 border-b'>
          <nav>
            <ul className='flex gap-11 font-medium uppercase tracking-widest mx-8'>
                {/*
                    elastycznie ulozone elementy nav baru 
                */} 
                { 
                    links.map(link => 
                    <Link 
                        key={link.href} className={`${ link.href === currentPath ? 'text-zinc-900' : 'text-zinc-300'} flex gap-11 hover:text-zinc-800 transition-colors`}
                        href={link.href}> { link.label } 
                    </Link>
                    )
                }
                {/*
                    absolutne ulozone elementy nav baru 
                */} 
                {
                    <Link 
                    className={`${ "/LoginPage" === currentPath ? 'text-zinc-900' : 'text-zinc-300'} hover:text-zinc-800 transition-colors absolute right-8`}
                    href={"/LoginPage"}> Log in
                    </Link>
                }
            </ul>

            
          </nav>
        </header>
    )
}

export default NavBar