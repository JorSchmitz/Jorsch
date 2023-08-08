'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/jorsch-logo.gif'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

enum Routes {
  HOME = '',
  ABOUT = 'about',
  PROJECTS = 'projects',
  BOOKMARKS = 'bookmarks',
  CONTACT = 'contact',
}

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [activeRoute, setActiveRoute] = useState(Routes.HOME)
  const checkboxRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    switch (pathname.split('/')[1]) {
      case Routes.HOME:
        setActiveRoute(Routes.HOME)
        break
      case Routes.ABOUT:
        setActiveRoute(Routes.ABOUT)
        break
      case Routes.PROJECTS:
        setActiveRoute(Routes.PROJECTS)
        break
      case Routes.BOOKMARKS:
        setActiveRoute(Routes.BOOKMARKS)
        break
      case Routes.CONTACT:
        setActiveRoute(Routes.CONTACT)
        break
    }
  }, [pathname])

  const handleCheckbox = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false
    }
  }

  return (
    <div className="daisy-drawer lg:daisy-drawer-open text-white font-mono h-screen">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="daisy-drawer-toggle"
        ref={checkboxRef}
      />
      <div className="daisy-drawer-content flex flex-col bg-gradient-to-b from-[#0f1b2a] to-cyan-950 lg:bg-gradient-to-r">
        {/* Navbar */}
        <div className="w-full daisy-navbar lg:hidden border-b border-cyan-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="daisy-btn daisy-btn-square daisy-btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 py-4">
            <Link href="/">
              <Image alt="Logo" src={Logo} />
            </Link>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="daisy-drawer-side lg:border-r lg:border-cyan-300">
        <label htmlFor="my-drawer-3" className="daisy-drawer-overlay"></label>
        <aside className="bg-base-100 h-full flex flex-col">
          <div className="px-2 mx-2 mt-7 hidden lg:block">
            <Link href="/">
              <Image alt="Logo" src={Logo} />
            </Link>
          </div>
          <ul className="daisy-menu flex-1 p-4 text-base justify-center">
            {/* Sidebar content here */}
            <li>
              <Link
                href="/"
                className={twMerge(
                  'justify-center hover:text-[#66fcf1]',
                  activeRoute === Routes.HOME && '!text-[#66fcf1]'
                )}
                onClick={handleCheckbox}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={twMerge(
                  'justify-center hover:text-[#66fcf1]',
                  activeRoute === Routes.ABOUT && '!text-[#66fcf1]'
                )}
                onClick={handleCheckbox}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={twMerge(
                  'justify-center hover:text-[#66fcf1]',
                  activeRoute === Routes.PROJECTS && '!text-[#66fcf1]'
                )}
                onClick={handleCheckbox}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/bookmarks"
                className={twMerge(
                  'justify-center hover:text-[#66fcf1]',
                  activeRoute === Routes.BOOKMARKS && '!text-[#66fcf1]'
                )}
                onClick={handleCheckbox}
              >
                Bookmarks
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={twMerge(
                  'justify-center hover:text-[#66fcf1]',
                  activeRoute === Routes.CONTACT && '!text-[#66fcf1]'
                )}
                onClick={handleCheckbox}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center gap-4 py-10">
            <Link
              target="_blank"
              href="https://github.com/JorSchmitz"
              className="hover:text-[#66fcf1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jorge-l-pl"
              className="hover:text-[#66fcf1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              target="_blank"
              href="https://wa.me/573157757329"
              className="hover:text-[#66fcf1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                id="whatsapp"
              >
                <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
              </svg>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
