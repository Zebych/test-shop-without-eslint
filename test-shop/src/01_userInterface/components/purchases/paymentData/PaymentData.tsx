import React from 'react';
import {PaymentForm} from "./paymentForm/PaymentForm";
import {AddressForm} from "./addressForm/AddressForm";

export const PaymentData = () => {
    return (
        <div>
            <AddressForm/>
            <PaymentForm/>
        </div>
    );
};

