import React, { Fragment } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  changeCategory,
  changeSubCategory,
  toggleMoreSideBar,
  toggleMoreCategory
} from "../../../features/sellerStore/sellerStoreSlice";

function MoreSideBar() {
  const moreSideBar = useSelector((state) => state.sellerStore.moreSideBar);
  const moreCategoryToggle = useSelector(
    (state) => state.sellerStore.moreCategoryToggle
  );
  const motionMoreDivRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function hideMoreSidebar(e) {
      if (e.target.contains(motionMoreDivRef.current)) {
        dispatch(toggleMoreSideBar(false));
      }
    }

    document.body.addEventListener("click", (e) => {
      hideMoreSidebar(e);
    });

    return document.body.removeEventListener("click", (e) => {
      hideMoreSidebar(e);
    });
  }, []);

  return (
    <Fragment>
      {moreSideBar && (
        <div
          className="w-full font-shopFont h-screen text-black fixed top-0 right-0 bg-amazon_blue
            bg-opacity-50 z-40"
        >
          <motion.div
            ref={motionMoreDivRef}
            initial={{ x: 600, y: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="fixed font-shopFont top-0 right-0 w-[380px] h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800">
              <a
                onClick={() => {
                  dispatch(toggleMoreSideBar(false));
                }}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                  />
                </svg>
                <span className="ml-3">Back to Samsung</span>
              </a>

              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ml-3 font-light">Home</span>
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        dispatch(toggleMoreCategory("deals"));
                      }}
                      type="button"
                      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 text-left whitespace-nowrap font-light">
                        Deals
                      </span>
                      <svg
                        class="w-3 h-3"
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
                    {moreCategoryToggle.deals && (
                      <ul class="py-2 space-y-2">
                        <li>
                          <a
                            href="#"
                            class="flex items-center font-medium w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Deals
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center font-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Phones & Watches
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center font-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            TV & Audio
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center font-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Computing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center font-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Home Appliances
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 text-left whitespace-nowrap font-light">
                        Phones & Watches
                      </span>
                      <svg
                        class="w-3 h-3"
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
                    <ul class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 text-left whitespace-nowrap font-light">
                        TV & Audio
                      </span>
                      <svg
                        class="w-3 h-3"
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
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 text-left whitespace-nowrap font-light">
                        Computing
                      </span>
                      <svg
                        class="w-3 h-3"
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
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 text-left whitespace-nowrap font-light">
                        Home Appliances
                      </span>
                      <svg
                        class="w-3 h-3"
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
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </Fragment>
  );
}

export default MoreSideBar;
