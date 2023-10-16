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
        <div className="p-4">
            <h2 className="text-xl mb-4">
                1. <span></span>Choose a shipping address
            </h2>
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
                className="bg-amazon-ember text-white px-4 py-2 mt-4 rounded-lg"
            >
                Add New Address
            </button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Add New Address"
            >
                <h2 className="text-2xl mb-4">Add New Address</h2>
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
                            <label className="block text-sm font-medium text-gray-700">
                                Street:
                            </label>
                            <Field
                                type="text"
                                name="street"
                                className="form-input block w-full mt-1 rounded-lg"
                            />
                            <ErrorMessage
                                name="street"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Ward:</label>
                            <Field
                                type="text"
                                name="ward"
                                className="form-input block w-full mt-1 rounded-lg"
                            />
                            <ErrorMessage
                                name="ward"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                District:
                            </label>
                            <Field
                                type="text"
                                name="district"
                                className="form-input block w-full mt-1 rounded-lg"
                            />
                            <ErrorMessage
                                name="district"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">City:</label>
                            <Field
                                type="text"
                                name="city"
                                className="form-input block w-full mt-1 rounded-lg"
                            />
                            <ErrorMessage
                                name="city"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-amazon-yellow text-bodyFont px-4 py-2 mt-4 rounded-lg"
                        >
                            Use This Address
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}
export default Address;