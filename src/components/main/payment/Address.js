import React, { useEffect, useState } from "react";
import { findAddress } from "../../../api/addressAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

Modal.setAppElement("#root");

function Address() {
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
  
  return (
    <div class="px-20 py-3 ">
      <div class="">
        {isAddress ? (
          <div class="grid grid-cols-3 border-b border-gray-400">
            <div class="...">
              <h2 className="text-xl font-bold font-sans">
                <span class="pr-4">1</span>Shipping address
              </h2>
            </div>
            <div class="text-md">
              <div>Pham Quoc Khanh</div>
              <div class="w-23">
                0985664780 Chung cu B1 Truong Sa, Binh Thanh, Phuong 17
              </div>
              <div>Ho Chi Minh, 700000</div>
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
          <div class="grid grid-cols-2 ">
            <div class="...">
              <h2 className="text-xl font-bold font-sans text-orange-700">
                <span class="pr-4">1</span>Choose a shipping address
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
            <div class="col-span-2 border border-gray-400 rounded-md mx-8 mt-2">
              <div class="px-6">
                <div class="grid grid-cols-2 border-b border-gray-400 my-4">
                  <div class="">
                    <h2 className="text-xl font-bold font-sans">
                      Your addresses
                    </h2>
                  </div>
                  <div class="text-right">
                    <button class="text-md font-sans font-bold text-blue-600 hover:text-orange-500 hover:underline">
                      Shipping to more than one address ?
                    </button>
                  </div>
                </div>
                <div class="text-md rounded-md border border-orange-300 bg-orange-100/40 my-2 p-3">
                  <input type="radio" class="mr-2" />
                  <span class="font-semibold">Pham Quoc Khanh</span> 0985664780
                  Chung cu B1 Truong Sa, Binh Thanh, Phuong 17, Ho Chi Minh,
                  700000, Vietnam
                  <button class="text-blue-600 px-2 text-sm hover:text-orange-500 hover:underline">
                    Edit address
                  </button>
                </div>
                <div class="text-md rounded-md my-2 p-3">
                  <input type="radio" class="mr-2" />
                  <span class="font-semibold">Pham Quoc Khanh</span> 0985664780
                  Chung cu B1 Truong Sa, Binh Thanh, Phuong 17, Ho Chi Minh,
                  700000, Vietnam
                  <button class="text-blue-600 px-2 text-sm hover:text-orange-500 hover:underline">
                    Edit address
                  </button>
                </div>
                <div class="flex">
                  <div class="flex-none">
                    <button class="text-gray-400 text-3xl hover:text-gray-300">
                      +
                    </button>
                  </div>
                  <div class="flex-initial pl-2">
                    <button
                      class="text-blue-600 mt-1 hover:text-orange-500 hover:underline"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Add a new address
                    </button>
                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={() => setIsModalOpen(false)}
                      contentLabel="Add New Address"
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-2/5 rounded-lg border border-gray-400"
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
                        Enter a new shipping address
                      </div>
                      <h2 className="text-2xl font-semibold p-6">
                        Add New Address
                      </h2>
                      <Formik
                        initialValues={formAddress}
                        validationSchema={AddressSchema}
                        onSubmit={(values) => {
                          // handleSubmitAddress();
                          // addNewAddress(values);
                        }}
                      >
                        <Form>
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
                        </Form>
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

export default Address;
