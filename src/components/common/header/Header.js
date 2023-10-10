import React, { useEffect, useState } from "react";
import { logo } from "../../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HeaderBottom from "./HeaderBottom";
import { allItems } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../../features/user/userSlice";
import Modal from "react-modal";

const userModalStyles = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    position: "fixed"
  },
};

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

  const handleLogOut = async () => {
    dispatch(logOutUser());
    window.localStorage.removeItem("token");
    console.log(userInfo);
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
              setShowUserOption(!showUserOption);
            }}
            onMouseLeave={() => {
              setShowUserOption(!showUserOption);
            }}
            className="flex flex-col items-start justify-center headerUserHover"
          >
            {userInfo ? (
              <p className="text-xs text-lightText font-light">
                Hello, {userInfo.clientName}
              </p>
            ) : (
              <p
                className="text-xs text-lightText font-light"
                onClick={() => {
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
          {userInfo && (
            <div
              onClick={handleLogOut}
              className="flex flex-col justify-center items-center headerHover relative"
            >
              <LogoutIcon />
              <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
                Log out
              </p>
            </div>
          )}
          {/* Carts end */}
        </div>
        <HeaderBottom />
      </div>

        {showUserOption && (
          <Modal
            isOpen={showUserOption}
            contentLabel="User Modal"
            style={userModalStyles}
          >
            <h2>Hello</h2>
            <div>I am a modal</div>
          </Modal>
        )}
      
    </div>
  );
}

export default Header;