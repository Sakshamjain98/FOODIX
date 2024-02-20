import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { LOGO_URL } from '../utils/constants';
import { useContext } from 'react';
import {Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import Image from "../assets/logo.jpg"
import { useSelector } from 'react-redux';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store)=> store.cart.items );
  return (
    <header className="bg-white">
      <nav className="mx-0 flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-0 p-0">
            <span className="sr-only">Your Company</span>
            <img src={Image} alt="App Logo" className="w-[150px] h-10 rounded-md mx-0 my-0 cursor-pointer" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Online Status: {onlineStatus ? '✅' : '⛔'}
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          <Link to="/About" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/grocery" className="links" onClick={() => setMobileMenuOpen(false)}>
              Grocery
            </Link>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart - ({cartItems.length} Items)</Link>
            </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900"
           onClick={() => {
            //   btnName = 'Logout';
            btnNameReact === 'Login'
              ? setBtnNameReact('Logout')
              : setBtnNameReact('Login');
            console.log(btnNameReact);
          }}
          >
            {btnNameReact} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={Image} alt="App Logo" className="w-[100px] rounded-md mx-6  cursor-pointer" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                 Online Status: {onlineStatus ? '✅' : '⛔'}
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                 <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                 <Link to="/About" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/grocery" className="links" onClick={() => setMobileMenuOpen(false)}>
              Grocery
            </Link>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                    <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart - ({cartItems.length} Items)</Link>
                  </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    //   btnName = 'Logout';
                    btnNameReact === 'Login'
                      ? setBtnNameReact('Logout')
                      : setBtnNameReact('Login');
                    console.log(btnNameReact);
                    setMobileMenuOpen(false);
                  }}
                >
                  {btnNameReact}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
