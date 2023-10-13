import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function StoreHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDropDown, setShowDropDown] = useState({
    deals: false,
    category1: false,
    category2: false,
  });
  const [follow, setFollow] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState({
    category: "",
    subCategory: "",
  });
  const [moreSidebar, setMoreSidebar] = useState(false);
  const motionMoreDivRef = useRef();

  useEffect(() => {
    function hideMoreSidebar(e) {
      if (e.target.contains(motionMoreDivRef.current)) {
        setMoreSidebar(false);
      }
    }

    document.body.addEventListener("click", (e) => {
      hideMoreSidebar(e);
    });

    return document.body.removeEventListener("click", (e) => {
      hideMoreSidebar(e);
    });
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={
          scrollPosition >= 400
            ? "bg-white dark:bg-gray-900 fixed w-full z-5 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
            : "bg-white dark:bg-gray-900 sticky w-full z-5 top-[400px] left-0 border-b border-gray-200 dark:border-gray-600"
        }
      >
        <div className="font-shopFont max-w-screen-xl flex flex-wrap items-center justify-between mx-6 py-2">
          <div className="flex flex-col pr-8 w-[340px] max-w-[340px]">
            <div className="flex flex-auto items-center">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-emblem.png"
                className="h-8 mr-3 w-12"
                alt="Seller Shop Logo"
              />
              <div className="grid grid-rows-8 items-center">
                {/* Breadcumb start */}
                <nav
                  className="flex pb-2 max-w-[260px]"
                  aria-label="Breadcrumb"
                >
                  <ol className="inline-flex items-center space-x-1 md:space-x-0 max-w-full">
                    <li className="inline-flex items-center">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        Samsung
                      </a>
                    </li>
                    {breadcrumb.category && (
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            {breadcrumb.category}
                          </a>
                        </div>
                      </li>
                    )}
                    {breadcrumb.category && breadcrumb.subCategory !== "" && (
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            {breadcrumb.subCategory}
                          </a>
                        </div>
                      </li>
                    )}
                  </ol>
                </nav>
                {/* Breadcumb end */}
                <div
                  onClick={() => {
                    setFollow(!follow);
                  }}
                  className="text-xs border flex flex-none border-gray-400 outline outline-1 rounded-sm text-center justify-center w-[100px] max-w-[100px] h-[110%] hover:cursor-pointer hover:bg-gray-200 py-1"
                >
                  {follow ? (
                    <p className="text-xs">✓ Following</p>
                  ) : (
                    <p className="text-xs">+ Follow</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Search start */}
          <div className="flex md:order-2 w-[200px] max-w-[200px] pl-[180px]">
            <div className="relative md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                className="block p-2 pl-10 rounded-lg text-sm border w-[200px] border-gray-300"
                placeholder="Search..."
              ></input>
            </div>
          </div>
          {/* Search end */}

          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-6">
              <li name="Home">
                <a
                  href="#"
                  className="block text-lg py-2 px-1 text-gray-500 rounded md:bg-transparent hover:underline md:p-0"
                >
                  HOME
                </a>
              </li>
              <li
                onMouseLeave={() => {
                  setShowDropDown({
                    ...showDropDown,
                    deals: false,
                    category1: false,
                    category2: false,
                  });
                }}
              >
                <button
                  name="Deals"
                  onClick={() => {
                    setShowDropDown({
                      ...showDropDown,
                      deals: !showDropDown.deals,
                    });
                  }}
                  className="flex items-center text-lg justify-between w-full py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 md:w-auto dark:text-white md:dark:hover:underline dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  DEALS{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {showDropDown.deals && (
                  <div
                    className="z-20 font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          name="Deals"
                          href="#"
                          className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Deals
                        </a>
                      </li>
                      <li>
                        <a
                          name="Phones & Watches"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Phones & Watches
                        </a>
                      </li>
                      <li>
                        <a
                          name="TV & Audio"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          TV & Audio
                        </a>
                      </li>
                      <li>
                        <a
                          name="Computing"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Computing
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                onMouseLeave={() => {
                  setShowDropDown({
                    ...showDropDown,
                    deals: false,
                    category1: false,
                    category2: false,
                  });
                }}
              >
                <button
                  name="Phones & Watches"
                  onClick={() => {
                    setShowDropDown({
                      ...showDropDown,
                      category1: !showDropDown.category1,
                    });
                  }}
                  className="flex items-center text-lg justify-between w-full py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 md:w-auto dark:text-white md:dark:hover:underline dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  PHONES & WATCHES{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {showDropDown.category1 && (
                  <div
                    
                    className="z-20 font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                         
                          name="Phones & Watches"
                          href="#"
                          className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Phones & Watches
                        </a>
                      </li>
                      <li>
                        <a
                          name="Galaxy Z Series"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Galaxy Z Series
                        </a>
                      </li>
                      <li name="Galaxy S Series">
                        <a
                          
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Galaxy S Series
                        </a>
                      </li>
                      <li name="Galaxy A Series">
                        <a
                          
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Galaxy A Series
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                onMouseLeave={() => {
                  setShowDropDown({
                    ...showDropDown,
                    deals: false,
                    category1: false,
                    category2: false,
                  });
                }}
              >
                <button
                  name="TV & Audios"
                  onClick={(e) => {
                    setShowDropDown({
                      ...showDropDown,
                      deals: false,
                      category1: false,
                      category2: !showDropDown.category2,
                    });
                  }}
                  className="flex items-center text-lg justify-between w-full py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 md:w-auto dark:text-white md:dark:hover:underline dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  TV & AUDIO{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {showDropDown.category2 && (
                  <div
                    
                    className="z-20 font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          
                          
                          name="TV & Audio"
                          href="#"
                          className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          TV & Audio
                        </a>
                      </li>
                      <li>
                        <a
                          
                          name="QLED"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          QLED
                        </a>
                      </li>
                      <li>
                        <a
                          
                          name="Neo QLED"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Neo QLED
                        </a>
                      </li>
                      <li>
                        <a
                          
                          name="OLED"
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          OLED
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <button
                  onClick={() => {
                    setMoreSidebar(true);
                  }}
                  className="flex items-center text-lg justify-between w-full py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 md:w-auto dark:text-white md:dark:hover:underline dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  MORE{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {moreSidebar && (
        <div
          className="w-full h-screen text-black fixed top-0 right-0 bg-amazon_blue
            bg-opacity-50 z-40"
        >
          <motion.div
            ref={motionMoreDivRef}
            initial={{ x: 600, y: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="fixed font-shopFont top-0 right-0 w-[380px] h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800">
              <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                Menu
              </h5>
              <button
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Kanban
                      </span>
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Pro
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Inbox
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        3
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Users
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Products
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                        />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign In
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign Up
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
