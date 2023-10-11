import React, { Fragment, useEffect, useState } from "react";
import { logo } from "../../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeaderBottom from "./HeaderBottom";
import { allItems } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../../features/user/userSlice";

function Header() {
  const [showAll, setShowAll] = useState(false);
  const [showUserOption, setShowUserOption] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const products = useSelector((state) => state.cart.products);
  const [numberCart, setNumberCart] = useState(0);
  

  useEffect(() => {
    let quantity = 0;
    products.map((item) => {
      quantity += item.quantity;
      return setNumberCart(quantity);
    });
  }, [products]);

  const changeScroll = () => {
    let style = document.body.style.overflow;
    document.body.style.overflow = style === "hidden" ? "auto" : "hidden";
  };

  const handleLogOut = async () => {
    dispatch(logOutUser());
    window.localStorage.removeItem("token");
    changeScroll();
    navigate("/signin");
  };

  return (
    <div>
      <div className="w-full sticky top-0 z-10">
        <div className="w-full bg-amazon_blue text-white px-4 py-1 flex items-center gap-4">
          {/* Logo start */}
          <div onClick={() => navigate("/")} className="headerHover">
            <img className="w-[7rem] mt-0" src={logo} alt="logo"></img>
          </div>
          {/* Logo end */}

          {/* Deliver start */}
          <div className="headerHover hidden mdl:inline-flex">
            <LocationOnIcon />
            <p className="text-sm text-lightText font-light flex flex-col">
              Deliver to
              <span className="text-sm font-semibold -mt-1 text-whiteText">
                Vietnam
              </span>
            </p>
          </div>
          {/* Deliver end */}

          {/* Searchbar start */}
          <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
            <span
              onClick={() => {
                setShowAll(!showAll);
              }}
              className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
            >
              All<span></span>
              <ArrowDropDownIcon />
            </span>
            {showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                  <li className="text-sm tracking-wide font-titlefont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                    All Departments
                  </li>
                  {allItems.map((item) => (
                    <li className="text-sm tracking-wide font-titlefont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <input
              type="text"
              className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
              placeholder="Search ForestDise"
            ></input>
            <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
              <SearchIcon />
            </span>
          </div>
          {/* Searchbar end */}

          {/* Signin start */}
          <div
            onMouseEnter={() => {
              setShowUserOption(true);
              changeScroll();
            }}
            onMouseLeave={() => {
              setShowUserOption(false);
              changeScroll();
            }}
            className="flex flex-col items-start justify-center headerHover"
          >
            {userInfo ? (
              <p className="text-xs text-lightText font-light">
                Hello, {userInfo.clientName}
              </p>
            ) : (
              <p
                className="text-xs text-lightText font-light"
                onClick={() => {
                  changeScroll();
                  navigate("/signin");
                }}
              >
                Hello, sign in
              </p>
            )}

            <p className="text-sm font-semibold -m1-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>

          {/* Signin end */}

          {/* Orders start */}
          <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Returns
            </p>
            <p className="text-sm font-semibold -mt-1 text-whiteText">
              & Orders
            </p>
          </div>
          {/* Orders end */}

          {/* Carts start */}
          <Link to="/cart">
            <div className="flex items-start justify-center headerHover relative">
              <ShoppingCartIcon />
              <p className="text-xs font-semibold mt-3 text-whiteText">
                Cart{" "}
                <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                  {products.length > 0 ? numberCart : 0}
                </span>
              </p>
            </div>
          </Link>
          {/* Carts end */}
        </div>
        <HeaderBottom />
      </div>

      {showUserOption && (
        <div className="fixed bg-white bg-opacity-0 top-[49px] left-[998px] right-[0px] z-50 w-[28%] p-3 overflow-hidden h-[37%]">
          <div
            onMouseLeave={() => {
              setShowUserOption(false);
              changeScroll();
            }}
            onMouseEnter={() => {
              setShowUserOption(true);
              changeScroll();
            }}
            className="relative max-w-2xl"
          >
            <div className="font-bodyFont relative w-[60%] h-[40%] left-[85px] -top-[10px] bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="w-[100px mx-auto text-center flex flex-col gap-1 justify-between p-4 border-b rounded-t dark:border-gray-600">
                {userInfo ? (
                  <Fragment>
                    <button
                      className="w-full py-1 text-sm font-semibold
              rounded-md bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                    >
                      Manage Profiles
                    </button>

                    <p className="text-xs mt-1 text-black">
                      Who shopping? Select a profile.
                    </p>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link to="/signin">
                      <button
                        onClick={() => {
                          changeScroll();
                        }}
                        className="w-full bg-yellow-400 rounded-md py-1
                font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
                      >
                        Sign in
                      </button>
                    </Link>
                    <p className="text-xs mt-1">
                      New Customer?
                      <Link to="/register">
                        <span className="text-blue-600 ml-1 cursor-pointer">
                          {" "}
                          Start here.
                        </span>
                      </Link>
                    </p>
                  </Fragment>
                )}
              </div>

              <div className="font-bodyFont text-sm p-6 space-y-2 justify-center text-center">
                <p className="hover:text-blue-300 leading-relaxed text-gray-500 dark:text-gray-400">
                  Your wishlist &nbsp;
                  <FavoriteBorderIcon />
                </p>
                <p className="hover:text-blue-300 leading-relaxed text-gray-500 dark:text-gray-400">
                  Orders &nbsp;
                  <LocalShippingIcon />
                </p>
                <p className="hover:text-blue-300 leading-relaxed text-gray-500 dark:text-gray-400">
                  Browsing History &nbsp;
                  <HistoryIcon />
                </p>
                {userInfo && (
                  <p
                    onClick={handleLogOut}
                    className="hover:text-blue-300 leading-relaxed text-gray-500 dark:text-gray-400"
                  >
                    Sign out &nbsp;
                    <LogoutIcon />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
