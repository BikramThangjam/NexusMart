"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { navLinks } from '@/lib/contants';

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className='min-h-screen top-0 left-0 sticky p-10 flex flex-col gap-16 bg-zinc-100 shadow-lg max-lg:hidden'>
      <Image src="/logo.png" alt="logo" width={150} height={70}/>

      <div className='flex flex-col gap-12'>
            {
                navLinks.map(link => (
                    <Link href={link.url} key={link.label} className={`flex gap-4 font-semibold hover:text-blue-800 ${pathname === link.url ? "text-blue-800" : "text-slate-600"}`}>
                        {link.icon} 
                        <p>{link.label}</p>
                    </Link>
                ))
            }
      </div>

      <div className='flex gap-4 font-semibold items-center cursor-pointer text-slate-500 hover:text-blue-500'>
            <UserButton />
            <p>Edit Profile</p>
      </div>
    </div>
  )
}

export default LeftSideBar
