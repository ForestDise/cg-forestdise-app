import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function HeaderBreadcrumb() {
  const breadcrumb = useSelector((state) => state.sellerStore.breadcrumb);

  return (
    <Fragment>
      <nav className="flex w-full bg-white pl-6">
        <ol className="inline-flex items-center space-x-1 md:space-x-0 max-w-full">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-medium text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {breadcrumb.subCategory}
                </a>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </Fragment>
  );
}

export default HeaderBreadcrumb;
