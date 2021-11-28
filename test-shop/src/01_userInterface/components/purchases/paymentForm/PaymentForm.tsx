import React from 'react';
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from 'formik';

type FormikErrorType = {
    firstLastName?: string//email
    cardNumber?: string
    expirationDate?: string
    password?: string//password
    rememberCard?: boolean
}

export const PaymentForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            firstLastName: '',
            cardNumber: '',
            expirationDate: '',
            password: '',
            rememberCard: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.firstLastName) {
                errors.firstLastName = 'Required';
            } else if (!/^[A-Z]+[A-Z]$/i.test(values.firstLastName)) {
                errors.firstLastName = 'Invalid firstLastName';
            }
            if (!values.cardNumber) {
                errors.cardNumber = 'Required';
            } else if (!/^(?:[0-9]{16})$/i.test(values.cardNumber)) {
                errors.cardNumber = 'Invalid card number';
            }//{4}+dsS[0-9]{4}+dsS[0-9]{4}+dsS[0-9]{4}
            if (!values.expirationDate) {
                errors.expirationDate = 'Required';
            } else if (!/^[0-9]{4}$/i.test(values.expirationDate)) {
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
            //JSON.stringify(values)
            debugger
            alert(JSON.stringify(values,null,2))
            // dispatch(loginTC(values))
            formik.resetForm()
        },
    })
    return (
        <FormControl>
        <form onSubmit={formik.handleSubmit}>

                <FormGroup>
                    <TextField
                        variant={"outlined"}
                        // type={"tel"}
                        // inputProps={{  pattern: "/[0-9]{4}+\d\s\S[0-9]{4}+\d\s\S[0-9]{4}+\d\s\S[0-9]{4}/"}}
                        label={"0000 0000 0000 0000"}
                        margin={"normal"}
                        name={"cardNumber"}
                        onChange={formik.handleChange}
                        value={formik.values.cardNumber}

                    />
                    {formik.errors.cardNumber && <div>{formik.errors.cardNumber}</div>}
                  {/*  {...formik.getFieldProps('cardNumber')}*/}
                    <TextField
                        variant={"outlined"}
                        label={"name"}
                        margin={"normal"}
                        name={"firstLastName"}
                        onChange={formik.handleChange}
                        value={formik.values.firstLastName}

                    />{/*{...formik.getFieldProps('firstLastName')}*/}
                    <TextField
                        // type={"month"}
                        variant={"outlined"}
                        label={"00/00"}
                        margin={"normal"}
                        name={"expirationDate"}
                        onChange={formik.handleChange}
                        value={formik.values.expirationDate}

                    /> {/*{...formik.getFieldProps('expirationDate')}*/}
                    <TextField
                        variant={"outlined"}
                        label={"000"}
                        margin={"normal"}
                        name={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}

                    />{/*{...formik.getFieldProps('password')}*/}
                    <Button type={"submit"} variant={"contained"} color={"primary"}>
                        оплатить
                    </Button>
                </FormGroup>

        </form>
</FormControl>
    );
};

