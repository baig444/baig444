
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-2 '>
      <Link href='/'>
        <Image src='/Emirates.png' alt='logo' width={134} height={19} />
      </Link>


      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button 
        type='button'
        title='Login'
        icon='/user.svg'
        variant='btn_dark_green' />
      </div>
    <Image
    src='menu.svg'
    alt='menu'
    width={30}
    height={30}
    className='inline-block cursor-pointer lg:hidden' />
    </nav>
  )
}

export default Navbar
