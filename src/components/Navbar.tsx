import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="border-b-2">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-text-light">
          <div className="relative flex gap-4 h-16 items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src="/img/dt.png" alt="dt-blogs" />
            </div>
            <div className="mr-auto gap-2 items-center rounded-[40px] px-2 h-10 bg-slate-100 text-text-light hidden md:flex">
              <span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="bg-transparent pr-2 text-text-dark outline-none h-full w-full"
              />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full p-1 hover:text-pri-hover md:hidden"
              >
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 hover:text-pri-hover flex items-center gap-1"
              >
                <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                <span className="hidden md:block font-thin">Write</span>
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 hover:text-pri-hover focus:outline-none focus:ring-1 focus:ring-pri"
              >
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-pri text-sm focus:outline-none focus:ring-2 focus:ring-pri ">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
