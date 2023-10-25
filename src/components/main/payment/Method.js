import React, { useEffect, useState } from "react";
import { findAddress } from "../../../api/addressAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

Modal.setAppElement("#root");

function Method() {
  const AddressSchema = Yup.object().shape({
    street: Yup.string().required("Street is required"),
    ward: Yup.string().required("Ward is required"),
    district: Yup.string().required("District is required"),
    city: Yup.string().required("City is required"),
  });

  const [formAddress, setFormAddress] = useState({});
  const [successNotify, setSuccessNotify] = useState("");
  const navigate = useNavigate();
  const [userAddress, setUserAddress] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddress, setIsAddress] = useState(true);

  useEffect(() => {
    findAddress()
      .then((res) => {
        setUserAddress(res.data);
      })
      .catch((err) => {
        console.log("Error fetching user addresses: ", err);
      });
  }, []);

  // const addAddress = async (newAddress) => {
  //     try {
  //         const response = await axios.post(`${API_URL}/addresses`, newAddress);
  //         return response.data;
  //     } catch (error) {
  //         throw error;
  //     }
  // };

  // const addNewAddress = (values) => {
  //     addAddress(values)
  //         .then(() => {
  //             setIsModalOpen(false); // Đóng modal sau khi thêm địa chỉ
  //             return findAddress();
  //         })
  //         .then((response) => {
  //             setUserAddress(response.data); // Cập nhật danh sách địa chỉ sau khi thêm
  //         })
  //         .catch((error) => {
  //             console.error('Error adding address:', error);
  //         });
  // };

  // const handleSubmitAddress = async () => {
  //     await axios
  //         .post("", formAddress)
  //         .then(() => {
  //             setSuccessNotify("Address created successfully");
  //             setTimeout(() => {
  //                 navigate("/payment");
  //             }, 1000);
  //         })
  //         .catch((err) => {
  //             throw err;
  //             setSuccessNotify("Failed to create address");
  //         });
  // }

  return (
    <div class="px-20 py-3">
      <div>
        {isAddress ? (
          <div class="grid grid-cols-3">
            <div class="...">
              <h2 className="text-xl font-bold font-sans">
                <span class="pr-4">2</span>Payment method
              </h2>
            </div>
            <div class="text-md">
              <div>
                <span class="font-semibold">Visa</span>
                <span class="text-gray-400 ml-2">ending in 8726</span>
              </div>
              <div class="w-23">
                Installments unavailable.{" "}
                <button class="text-blue-600 hover:text-orange-500 hover:underline">
                  Why ?
                </button>
              </div>
              <div>
                <button class="text-blue-600 hover:text-orange-500 hover:underline">
                  Billing address:
                </button>
                <span class="ml-3">khanh, Truong Sa Apartme ...</span>
              </div>
            </div>
            <div class="text-right">
              <button
                class="text-blue-600 hover:text-orange-500 hover:underline"
                onClick={() => setIsAddress(!isAddress)}
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          <div class="grid grid-cols-2">
            <div class="...">
              <h2 className="text-xl font-bold font-sans text-orange-700">
                <span class="pr-4">2</span>Choose a payment method
              </h2>
            </div>
            <div class="text-right ">
              <button
                class="text-blue-600 hover:text-orange-500 hover:underline text-md"
                onClick={() => setIsAddress(!isAddress)}
              >
                Close
              </button>
              <button class="pl-2" onClick={() => setIsAddress(!isAddress)}>
                <GrClose />
              </button>
            </div>
            <div class="col-span-2 border border-gray-400 mx-8 mt-2">
              <div class="grid grid-cols-8 text-md">
                <div class="col-span-6 ml-6">
                  Shopping in a foreign currency ? Use{" "}
                  <strong>Amazon Currency Converter </strong>at checkout and
                  lock in your exchange rate.
                  <div>Terms and Conditions apply.</div>
                </div>
                <div class="col-span-2 text-end">
                  <button class="bg-white rounded-lg text-sm m-3 px-2 p-1 hover:bg-gray-100 border border-gray-400 shadow-md">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div class="col-span-2 border border-gray-400 rounded-md mx-8 mt-2">
              <div class="px-6">
                <div class="border-b border-gray-400 my-4">
                  <div class="grid grid-cols-2">
                    <div class="">
                      <h2 className="text-xl font-bold font-sans">
                        Your credit and debit cards
                      </h2>
                    </div>
                  </div>
                  <div class="font-sans text-gray-400 grid grid-cols-8">
                    <div class="col-span-4"></div>
                    <div class="col-span-2 text-center">Name on card</div>
                    <div class="col-span-2 text-center">Expires on</div>
                  </div>
                </div>
                <div class="text-md rounded-md border border-orange-300 bg-orange-100/40 my-2 p-3">
                  <div class="grid grid-cols-8 gap-4">
                    <div class="grid grid-cols-4">
                      <div class="col-span-1">
                        <input type="radio" class="mr-2" />
                      </div>
                      <div class="col-span-3">
                        <img src="https://m.media-amazon.com/images/I/61a-ezJKtKL._SL40_.png" />
                      </div>
                    </div>
                    <div class="col-span-3">
                      <div class="grid grid-rows-3 grid-flow-col">
                        <div>
                          <span class="font-semibold">Visa Debit Classic </span>
                          <span>ending in 8726</span>
                        </div>
                        <div>My card is in Vietnamese Dong (VND)</div>
                        <div>
                          (
                          <button class="text-blue-600 text-sm hover:text-orange-500 hover:underline">
                            Change card currency
                          </button>
                          )
                        </div>
                      </div>
                    </div>
                    <div class="col-span-2 text-center">PHAM QUOC KHANH</div>
                    <div class="col-span-2 text-center">02/2024</div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none">
                    <button class="text-gray-400 text-3xl hover:text-gray-300">
                      +
                    </button>
                  </div>
                  <div class="px-3">
                    <img src="https://m.media-amazon.com/images/I/61a-ezJKtKL._SL40_.png" />
                  </div>
                  <div class="flex-initial">
                    <button
                      class="text-blue-600 mt-1 hover:text-orange-500 hover:underline"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Add a credit or debit card
                    </button>
                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={() => setIsModalOpen(false)}
                      contentLabel="Add New Address"
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/6 rounded-lg border border-gray-400"
                    >
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute right-2 my-5  text-gray-600 hover:text-gray-500 rounded-md border-4 border-sky-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <div className=" text-lg bg-gray-200 py-5 pl-6 rounded-t-lg font-semibold">
                        Add a credit or debit card
                      </div>
                      {/* <h2 className="text-2xl font-semibold p-6">
                        Add New Address
                      </h2> */}
                      <Formik
                        initialValues={formAddress}
                        validationSchema={AddressSchema}
                        onSubmit={(values) => {
                          // handleSubmitAddress();
                          // addNewAddress(values);
                        }}
                      >
                        {/* <Form>
                          <div class="px-6 w-5/6">
                            <div class="...">
                              <div className="flex flex-col items-start">
                                <label className="text-base font-semibold ml-4">
                                  Street:
                                </label>
                                <Field
                                  type="text"
                                  name="street"
                                  className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2 border border-gray-400"
                                />
                              </div>
                            </div>
                            <div className="mb-4">
                              <div className="flex flex-col items-start">
                                <label className="text-base font-semibold  ml-4">
                                  Ward:
                                </label>
                                <Field
                                  type="text"
                                  name="ward"
                                  className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2 border border-gray-400"
                                />
                              </div>
                            </div>
                            <div className="mb-4">
                              <div className="flex flex-col items-start">
                                <label className="text-base font-semibold  ml-4">
                                  District:
                                </label>
                                <Field
                                  type="text"
                                  name="district"
                                  className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2 border border-gray-400"
                                />
                              </div>
                            </div>
                            <div className="mb-4">
                              <div className="flex flex-col items-start">
                                <label className="text-base font-semibold  ml-4">
                                  City:
                                </label>
                                <Field
                                  type="text"
                                  name="city"
                                  className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2 border border-gray-400"
                                />
                              </div>
                            </div>
                            <label className="flex items-center mt-6 ml-4">
                              <Field
                                type="checkbox"
                                name="defaultAddress"
                                className="form-checkbox text-amazon-ember border-gray-300"
                              />
                              <span className="text-sm text-gray-700 ml-2 hover:text-orange-500 hover:underline">
                                Use as my default address
                              </span>
                            </label>
                            <button
                              type="submit"
                              className=" text-sm font-semibold bg-yellow-300 rounded-md hover:bg-yellow-400 px-4 p-1 my-5 ml-6"
                              onClick={() => setIsModalOpen(false)}
                            >
                              Use This Address
                            </button>
                          </div>
                        </Form> */}
                        <div>
                          <div class="grid grid-cols-5 gap-2 p-4">
                            <div class="font-semibold text-end mr-3">
                              Card number
                            </div>
                            <div class="...">
                              <input
                                type="text"
                                class="border border-gray-700 rounded-md w-full"
                              />
                            </div>
                            <div class="col-span-3">
                              Amazon accepts all major credit and debit cards:
                            </div>
                            <div class="font-semibold text-end mr-3">
                              Name on card
                            </div>
                            <div class="...">
                              <input
                                type="text"
                                class="border border-gray-700 rounded-md w-full"
                              />
                            </div>
                            <div class="col-span-3 row-span-3 content-center">
                              <img
                                class="w-32 ml-14"
                                src="https://www.psdgraphics.com/file/debit-card.jpg"
                              />
                            </div>
                            <div class="font-semibold text-end mr-3">
                              Expiration date
                            </div>
                            <div class="">
                              <select
                                class="form-select border border-gray-700 rounded-md"
                                id="month"
                                name="month"
                              >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>
                              <select
                                class="form-select border border-gray-700 rounded-md ml-2"
                                id="year"
                                name="year"
                              >
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                                <option value="2036">2036</option>
                                <option value="2037">2037</option>
                                <option value="2038">2038</option>
                                <option value="2039">2039</option>
                                <option value="2040">2040</option>
                                <option value="2041">2041</option>
                                <option value="2042">2042</option>
                                <option value="2043">2043</option>
                              </select>
                            </div>
                            <div class="col-span-2 w-full pl-8">
                              <input type="checkbox" />
                              <span class="text-sm ml-2">
                                Set as default payment method.
                              </span>
                            </div>
                          </div>
                          <div class="bg-gray-200 py-2">
                            <div class="text-end">
                              <button
                                type="submit"
                                className=" text-sm font-semibold border border-gray-400 bg-white rounded-md hover:bg-gray-100 px-4 p-1"
                                onClick={() => setIsModalOpen(false)}
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className=" text-sm font-semibold bg-yellow-300 rounded-md hover:bg-yellow-400 px-4 p-1 ml-6 mr-10"
                                onClick={() => setIsModalOpen(false)}
                              >
                                Add your cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </Formik>
                    </Modal>
                  </div>
                </div>
              </div>
              <div class="bg-gray-200/30 border-t border-gray-400 pl-2">
                <button
                  class="bg-yellow-300 rounded-lg font-semibold text-sm m-3 px-2 p-1 hover:bg-yellow-400"
                  onClick={() => setIsAddress(true)}
                >
                  Use this address
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Method;