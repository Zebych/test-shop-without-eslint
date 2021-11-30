import React, {useEffect, useState} from 'react';
import {
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik';
import {AppRootStateType} from "../../../../../02_bisnessLogik/store";
import {ProductObjType} from "../../../../../03.1_server simulator/server";
import {buyTC} from '../../../../../02_bisnessLogik/cart-reducer';

export type FormikErrorType = {
    country?: string
    town?: string
    city?: string
    house?: string

    apartment?: string
    index?: string
    surname?: string
    name?: string

    firstLastName?: string
    cardNumber?: string
    expirationDate?: string
    password?: string
    rememberMe?: boolean
}

export const PaymentForm = () => {
    const dispatch = useDispatch()
    const addedCart = useSelector<AppRootStateType, Array<ProductObjType>>(state => state.cart.addedCart)

    //media hook
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 550px)").matches)
    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        window.matchMedia("(min-width: 550px)").addEventListener('change', handler);
    }, []);
    const mediaStyle = matches ? {display: 'flex'} : {display: 'block'}

    //formik
    const formik = useFormik({
        initialValues: {
            country: '',
            town: '',
            city: '',
            house: '',

            apartment: '',
            index: '',
            surname: '',
            name: '',

            firstLastName: '',
            cardNumber: '',
            expirationDate: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.cardNumber) {
                errors.cardNumber = 'Required';
            } else if (values.cardNumber.length !== 19
                || !/^[0-9]+\ [0-9]+\ [0-9]+\ [0-9]{4}$/i.test(values.cardNumber)) {
                errors.cardNumber = 'Invalid card number';
            }
            if (!values.firstLastName) {
                errors.firstLastName = 'Required';
            } else if (!/^[A-Z]+\ [A-Z]{2,20}$/i.test(values.firstLastName)) {
                errors.firstLastName = 'Invalid firstLastName';
            }
            if (!values.expirationDate) {
                errors.expirationDate = 'Required';
            } else if (values.expirationDate.length !== 5
                || !/^[0-9]+\/[0-9]{2}$/i.test(values.expirationDate)) {
                errors.expirationDate = 'Invalid expirationDate';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (!/^[0-9]{3}$/i.test(values.password)) {
                errors.password = 'Invalid password';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(buyTC(addedCart, values))
            formik.resetForm()
        },
    })

    return (
        <FormControl>
            <form onSubmit={formik.handleSubmit} style={mediaStyle}>
                <FormGroup>
                    <TextField
                        variant={"outlined"}
                        label={"Country"}
                        margin={"normal"}
                        {...formik.getFieldProps('country')}

                    />
                    <TextField
                        variant={"outlined"}
                        label={"Town"}
                        margin={"normal"}
                        {...formik.getFieldProps('town')}

                    />
                    <TextField
                        variant={"outlined"}
                        label={"City"}
                        margin={"normal"}
                        {...formik.getFieldProps('city')}

                    />
                    <TextField
                        variant={"outlined"}
                        label={"House"}
                        margin={"normal"}
                        {...formik.getFieldProps('house')}

                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        variant={"outlined"}
                        label={"Apartment"}
                        margin={"normal"}
                        {...formik.getFieldProps('apartment')}

                    />
                    <TextField
                        variant={"outlined"}
                        type={"tel"}
                        label={"index"}
                        margin={"normal"}
                        {...formik.getFieldProps('index')}

                    />
                    <TextField
                        variant={"outlined"}
                        label={"Surname"}
                        margin={"normal"}
                        {...formik.getFieldProps('surname')}

                    />
                    <TextField
                        variant={"outlined"}
                        label={"Name"}
                        margin={"normal"}
                        {...formik.getFieldProps('name')}

                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        variant={"outlined"}
                        type={"tel"}
                        label={"0000 0000 0000 0000"}
                        margin={"normal"}
                        {...formik.getFieldProps('cardNumber')}

                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber &&
                    <div style={{color: 'red'}}>{formik.errors.cardNumber}</div>}

                    <TextField
                        variant={"outlined"}
                        label={"IVAN IVANOV"}
                        margin={"normal"}
                        {...formik.getFieldProps('firstLastName')}
                    />
                    {formik.touched.firstLastName && formik.errors.firstLastName &&
                    <div style={{color: 'red'}}>{formik.errors.firstLastName}</div>}


                    <TextField
                        variant={"outlined"}
                        label={"00/00"}
                        margin={"normal"}
                        {...formik.getFieldProps('expirationDate')}
                    />
                    {formik.touched.expirationDate && formik.errors.expirationDate &&
                    <div style={{color: 'red'}}>{formik.errors.expirationDate}</div>}

                    <TextField
                        variant={"outlined"}
                        label={"000"}
                        margin={"normal"}
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                    <FormControlLabel
                        label={'remember me'}
                        control={<Checkbox {...formik.getFieldProps('rememberMe')}/>}
                        checked={formik.values.rememberMe}
                    />

                    <Button type={"submit"} variant={"contained"} color={"primary"}>
                        buy
                    </Button>
                </FormGroup>
            </form>
        </FormControl>
    )
        ;
};

