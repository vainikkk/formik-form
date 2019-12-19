import App from './App';
import * as Yup from 'yup';
import { withFormik } from 'formik';

export const FormikApp = withFormik({
    mapPropsToValues({ email, password, gender, passwordConfirmation, day, location, firstname, lastname, address, pincode, hobby }) {
      return {
        email: email || "",
        password: password || '',
        gender: gender || 'male',
        passwordConfirmation: passwordConfirmation || '',
        day: day || '',
        location: location || 'Home',
        firstname: firstname || "",
        lastname: lastname || "",
        address: address || "",
        pincode: pincode || "",
        hobby: hobby || ['Gaming'],
      }
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Only Contain Alphabet ').min(2, 'Too Short!').max(10, 'Too Long!').required("Firstname is required"),
      lastname: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Only Contain Alphabet').required("Lastname is required"),
      email: Yup.string().email('Email not valid').required('Email is required'),
      password: Yup
        .string()
        .required("Please Enter your password")
        .test(
          "password",
          "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
          val => {
            let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
            return regExp.test(val);
          }
        ),
      passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required("confirm password is required"),
      day: Yup.date().min('3/3/1940', "Enter valid birth date").max('1/1/2006', "Only 18+").required("birthdate required"),
      address: Yup.string().max(60).required("Address is required"),
      pincode: Yup.string().matches(/^[1-9][0-9]{5}$/, 'Enter valid pincode'),
      hobby: Yup.array().of(Yup.string().matches(/^[a-zA-Z\s]+$/, 'Only Contain Alphabet '))
        .required('Must have Hobby')
        .min(3, 'Enter minimum 3 hobbies'),
  
    }),
    handleSubmit(values, { setErrors, setSubmitting, resetForm }) {
      setTimeout(() => {
        if (values.email === 'vainik@gmail.com') {
          setErrors({ email: "That email is already taken" })
        } else {
          resetForm()
        }
        setSubmitting(false)
      }, 2000)
      console.log(values)
    }
  })(App)