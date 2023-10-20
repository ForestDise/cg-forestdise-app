import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PaymentMethod = () => {
    const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

    const openAddCardModal = () => {
        setIsAddCardModalOpen(true);
    };

    const closeAddCardModal = () => {
        setIsAddCardModalOpen(false);
    };

    const initialValues = {
        cardNumber: '',
        cardName: '',
        expirationMonth: '',
        expirationYear: '',
        securityCode: '',
        setAsDefault: false,
    };

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string().required('Card Number is required'),
        cardName: Yup.string().required('Card Name is required'),
        expirationMonth: Yup.string().required('Expiration Month is required'),
        expirationYear: Yup.string().required('Expiration Year is required'),
        securityCode: Yup.string().required('Security Code is required'),
    });

    const onSubmit = (values) => {
        console.log(values);
        closeAddCardModal();
    };

    return (
        <div className="p-10 space-y-4">
            <h2 className="text-xl mb-4 text-red-600">2. Payment Method</h2>
            <div className="shadow-inner">
                <h2 className="text-xl mb-4 text-black">Your credit and debit cards</h2>
                <hr className="border-gray-300 mb-4" />
                <button onClick={openAddCardModal} className="text-amazon_ember hover:underline">
                    Add your debit card
                </button>
                <div className="space-y-4">
                </div>
                {isAddCardModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 z-50" onClick={closeAddCardModal}>
                        <div className="bg-white rounded-lg p-6 shadow-md w-80" onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={closeAddCardModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Add Your Debit Card</h2>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <div className="mb-4">
                                        <label className="text-sm font-semibold">Card Number:</label>
                                        <Field type="text" name="cardNumber" className="form-input w-full" />
                                        <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-sm font-semibold">Card Name:</label>
                                        <Field type="text" name="cardName" className="form-input w-full" />
                                        <ErrorMessage name="cardName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="flex space-x-2 mb-4">
                                        <div className="w-1/2">
                                            <label className="text-sm font-semibold">Expiration Month:</label>
                                            <Field as="select" name="expirationMonth" className="form-select w-full">
                                                <option value="">Select</option>
                                                {/* Add your options for months */}
                                            </Field>
                                            <ErrorMessage name="expirationMonth" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="text-sm font-semibold">Expiration Year:</label>
                                            <Field as="select" name="expirationYear" className="form-select w-full">
                                                <option value="">Select</option>
                                                {/* Add your options for years */}
                                            </Field>
                                            <ErrorMessage name="expirationYear" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-sm font-semibold">Security Code:</label>
                                        <Field type="text" name="securityCode" className="form-input w-full" />
                                        <ErrorMessage name="securityCode" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="flex items-center space-x-2">
                                            <Field type="checkbox" name="setAsDefault" className="form-checkbox bg-amazon_yellow" />
                                            <span className="text-sm">Set as default payment method</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="button" onClick={closeAddCardModal} className="text-gray-600 mr-4 hover:text-gray-800">
                                            Cancel
                                        </button>
                                        <button type="submit" className="bg-amazon_yellow text-black px-4 py-2 rounded-lg">
                                            Add Your Card
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentMethod;
