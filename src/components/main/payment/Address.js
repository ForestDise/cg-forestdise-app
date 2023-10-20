import React, {useEffect, useState} from "react";
import {findAddress} from "../../../api/addressAPI";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Address() {
    const AddressSchema = Yup.object().shape({
        street: Yup.string().required('Street is required'),
        ward: Yup.string().required('Ward is required'),
        district: Yup.string().required('District is required'),
        city: Yup.string().required('City is required'),
    });

    const [formAddress, setFormAddress] = useState({});
    const [successNotify, setSuccessNotify] = useState("");
    const navigate = useNavigate();
    const [userAddress, setUserAddress] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    useEffect(() => {
        findAddress()
            .then((res) => {
                setUserAddress(res.data);
            })
            .catch((err) => {
                console.log("Error fetching user addresses: ", err)
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
        <div className="p-10">
            <h2 className="text-xl mb-4 text-red-600">
                1. Choose a shipping address
            </h2>
            <div className="shadow-inner">
                <h2 className="text-xl mb-4 text-black">Your Address</h2>
                <hr className="border-gray-300 mb-4" />
                <ul className="list-disc pl-4">
                    {userAddress.map((address, index) => (
                        <li key={index} className="mb-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="selectedAddress"
                                    value={index}
                                    onChange={() => setSelectedAddress(index)}
                                    className="form-radio text-amazon-ember border-gray-300"
                                />
                                <span className="text-base">
              {address.street}, {address.ward}, {address.district}, {address.city}
            </span>
                            </label>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-amazon_ember px-4 py-2 mt-4 rounded-lg hover:underline"
                >
                    Add New Address
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Add New Address"
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 max-w-[24rem]"
                >
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="mb-4 bg-gray-100 text-black p-2 px-6 rounded-lg font-semibold">
                        Enter a new shipping address
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 mt-4">Add New Address</h2>
                    <Formik
                        initialValues={formAddress}
                        validationSchema={AddressSchema}
                        onSubmit={(values) => {
                            // handleSubmitAddress();
                            // addNewAddress(values);
                        }}
                    >
                        <Form>
                            <div className="mb-4">
                                <div className="flex flex-col items-start">
                                    <label className="text-base font-semibold text-gray-700 ml-4">
                                        Street:
                                    </label>
                                    <Field
                                        type="text"
                                        name="street"
                                        className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-col items-start">
                                    <label className="text-base font-semibold text-gray-700 ml-4">
                                        Ward:
                                    </label>
                                    <Field
                                        type="text"
                                        name="ward"
                                        className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-col items-start">
                                    <label className="text-base font-semibold text-gray-700 ml-4">
                                        District:
                                    </label>
                                    <Field
                                        type="text"
                                        name="district"
                                        className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-col items-start">
                                    <label className="text-base font-semibold text-gray-700 ml-4">
                                        City:
                                    </label>
                                    <Field
                                        type="text"
                                        name="city"
                                        className="form-input w-full mt-1 ml-4 rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                            <label className="flex items-center mt-6 ml-4">
                                <Field type="checkbox" name="defaultAddress" className="form-checkbox text-amazon-ember border-gray-300" />
                                <span className="text-sm text-gray-700 ml-2">Use as my default address</span>
                            </label>
                            <button
                                type="submit"
                                className="bg-amazon_yellow text-white px-4 py-2 mt-4 rounded-lg mx-auto"
                            >
                                Use This Address
                            </button>
                        </Form>
                    </Formik>
                </Modal>

            </div>
        </div>
    );
}

export default Address;