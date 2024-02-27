'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { gettingStartedRoutes, navbarRoutes, routes } from '../../routes/routes'
import { Accordion, Typography } from '../src'
import Search from './Search'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [theme, setTheme] = useState('dark-theme')
  const [showModal, setShowMainModal] = useState(false)
  const pathname = usePathname()

  const handleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split('/').pop()
    return str.toLocaleLowerCase() === '/' + lastPart
  }

  useEffect(() => {
    setActive(false)
    setShowMainModal(false)
    document.body.className = theme
  }, [pathname, theme])

  const handleModal = () => {
    setShowMainModal(!showModal)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-metal-100 bg-white">
      <div className="relative px-6 2xl:container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image width={130} src="/images/keep.svg" height={53} alt="Keep React" className="hidden md:block" />
              <Image width={100} src="/images/keep.svg" height={35} alt="Keep React" className="block md:hidden" />
            </Link>
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              {navbarRoutes.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.href}
                  target={nav.redirect ? '_blank' : '_self'}
                  className="text-body-5 font-normal text-metal-500 hover:text-metal-900 active:text-metal-900">
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          {showModal && <Search setShowMainModal={setShowMainModal} showModal={showModal} />}
          <div className="hidden items-end gap-3 lg:flex">
            <button
              onClick={handleModal}
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <span>
                <MagnifyingGlass size={20} color="#455468" />
              </span>
            </button>
            <a
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
            </a>
            <a
              href="https://react-storybook.keepdesign.io"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/fSxDJyvJmr"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
            </a>
            <Link
              href="/docs/getting-started/Introduction"
              className="group h-min w-fit justify-center rounded-md border border-metal-900  bg-metal-900 px-4 py-2.5 text-center text-body-5 font-medium capitalize text-white transition-all duration-75 ease-in hover:bg-metal-800 focus:ring-4 focus:ring-metal-800 active:bg-metal-900">
              get started
            </Link>
            <a
              target="_blank"
              onClick={() => handleTheme()}
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256">
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <button
              onClick={handleModal}
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <MagnifyingGlass size={20} color="#455468" />
            </button>
            <Link
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
            </Link>
            <Link
              href="https://react-storybook.keepdesign.io"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
            </Link>
            <Link
              href="https://discord.gg/xTf6w2nm9Z"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
            </Link>
            <button onClick={() => setActive(!active)}>
              {active ? (
                <span>
                  <X size={24} color="#455468" />
                </span>
              ) : (
                <span>
                  <List size={24} color="#455468" />
                </span>
              )}
            </button>
          </div>
          <div
            id="linkPage"
            className={`fixed right-0 top-[73px] h-screen w-72 overflow-y-auto border-l border-l-metal-100 bg-white pl-8 transition-all duration-300 lg:hidden ${
              active ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <div className="mt-5 space-y-3 pr-4">
              <Accordion flush>
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-4 font-semibold text-metal-900">Quick Link</Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <Typography variant="ul" className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {navbarRoutes.map((route) => (
                        <Typography variant="li" key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </Typography>
                      ))}
                    </Typography>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion flush className="border-none bg-transparent">
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-4 font-semibold text-metal-900">
                      Getting Started
                    </Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <Typography variant="ul" className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {gettingStartedRoutes.map((route) => (
                        <Typography variant="li" key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </Typography>
                      ))}
                    </Typography>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion flush className="border-none bg-transparent">
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-4 font-semibold text-metal-900">Components</Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <Typography variant="ul" className="mt-3 space-y-2 border-l border-l-metal-100 pb-24">
                      {routes.map((route) => (
                        <Typography variant="li" key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </Typography>
                      ))}
                    </Typography>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
