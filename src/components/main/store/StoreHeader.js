import React from "react";
import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import MoreSideBar from "./MoreSideBar";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  changeSubCategory,
  toggleMoreSideBar
} from "../../../features/sellerStore/sellerStoreSlice";
import HeaderBreadcrumb from "./HeaderBreadcrumb";

export default function StoreHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const dispatch = useDispatch();

  let category = useRef("");
  const [showDropDown, setShowDropDown] = useState({
    deals: false,
    category1: false,
    category2: false,
  });
  const [follow, setFollow] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Fragment>
      <nav
        className={
          scrollPosition >= 400
            ? "bg-white dark:bg-gray-900 fixed w-full z-[5] top-0 left-0 border-b border-gray-200 dark:border-gray-600"
            : "bg-white dark:bg-gray-900 sticky w-full z-[5] top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        }
      >
        <HeaderBreadcrumb />
        <nav>
          <div className="font-shopFont max-w-screen-xl flex flex-wrap items-center justify-between mx-6 py-2">
            <div className="grid grid-cols-2 w-[160px]">
              <div className="w-full h-full">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-emblem.png"
                  className="h-8 w-12 pr-0 mr-0"
                  alt="Seller Shop Logo"
                />
              </div>
              <div
                onClick={() => {
                  setFollow(!follow);
                }}
                className="text-sm border border-gray-400 outline outline-gray-400 outline-1 rounded-sm text-center w-[100px] max-w-[100px] h-[30px] hover:cursor-pointer hover:bg-gray-200 py-1 max-auto"
              >
                {follow ? <p>✓ Following</p> : <p>+ Follow</p>}
              </div>
            </div>

            {/* Search start */}
            <div className="flex md:order-2 w-[200px] pl-[100px]">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  className="block p-2 pl-10 rounded-lg text-sm border w-[240px] border-gray-300"
                  placeholder="Search..."
                ></input>
              </div>
            </div>
            {/* Search end */}

            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1 pl-[72px]"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-8">
                <li name="Home">
                  <a
                    onClick={() => {
                      dispatch(changeCategory(""));
                      dispatch(changeSubCategory(""));
                    }}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {showDropDown.deals && (
                    <div className="font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            name="Deals"
                            onMouseOver={(e) => {
                              category.current = e.target.name;
                            }}
                            onClick={() => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(""));
                            }}
                            href="#"
                            className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Deals
                          </a>
                        </li>
                        <li>
                          <a
                            name="Phones & Watches"
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Phones & Watches
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            name="TV & Audio"
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            TV & Audio
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {showDropDown.category1 && (
                    <div className="font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onMouseOver={(e) => {
                              category.current = e.target.name;
                            }}
                            onClick={() => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(""));
                            }}
                            name="Phones & Watches"
                            href="#"
                            className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Phones & Watches
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));

                              dispatch(changeSubCategory(e.target.name));
                            }}
                            name="Galaxy Z Series"
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Galaxy Z Series
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            href="#"
                            name="Galaxy S Series"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Galaxy S Series
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            href="#"
                            name="Galaxy A Series"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {showDropDown.category2 && (
                    <div className="font-shopFont absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onMouseOver={(e) => {
                              category.current = e.target.name;
                            }}
                            onClick={() => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(""));
                            }}
                            name="TV & Audio"
                            href="#"
                            className="font-semibold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            TV & Audio
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            name="QLED"
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            QLED
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
                            name="Neo QLED"
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Neo QLED
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => {
                              dispatch(changeCategory(category.current));
                              dispatch(changeSubCategory(e.target.name));
                            }}
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
                      dispatch(toggleMoreSideBar(true));
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>

      <MoreSideBar />
    </Fragment>
  );
}
