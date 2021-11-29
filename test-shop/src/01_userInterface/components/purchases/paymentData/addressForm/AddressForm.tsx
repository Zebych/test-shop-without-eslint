import React from 'react';
import {
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    TextField
} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from 'formik';

type FormikErrorType = {
    town?: string
    city?: string
    house?: string
    apartment?: string
    index?: string
    surname?: string
    name?: string
}

export const AddressForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            town: '',
            city: '',
            house: '',
            apartment: '',
            index: '',
            surname: '',
            name: '',
        },
        onSubmit: values => {
            //JSON.stringify(values)
            alert(JSON.stringify(values, null, 2))
            // dispatch(loginTC(values))
            formik.resetForm()
        },
    })
    return (
        <FormControl>
            <form onSubmit={formik.handleSubmit}>

                <FormGroup>
                    <TextField
                        variant={"filled"}
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




                    <Button type={"submit"} variant={"contained"} color={"primary"}>
                        оплатить
                    </Button>
                </FormGroup>
            </form>
        </FormControl>
    );
};

