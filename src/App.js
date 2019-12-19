import React from 'react';
import './App.css';
import { Form, Field, ErrorMessage, FieldArray } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
debugger

const App = ({
  values,
  setFieldValue,
  isSubmitting
}) => (
    <div className="App">
      
      <h1 style={{ textAlign: "center" }}> Form Validation</h1>
      <Form className="App-Form">
        <div className="field-block">
          <label className="label">First Name  : </label>
          <Field type="text" name="firstname" className="field" placeholder="First Name" />
          <ErrorMessage name="firstname" />
        </div>
        <div className="field-block">
          <label className="label">Last Name  :  </label>
          <Field type="text" name="lastname" className="field" placeholder="Last Name" />
          <ErrorMessage name="lastname" />
        </div>
        <div className="field-block">
          <label className="label">Email id  :  </label>
          <Field type='email' name='email' className="field" placeholder='Email' />
          <ErrorMessage name='email' />
        </div>
        <div className="field-block">
          <label className="label">Enter Your Password  :  </label>
          <Field type='password' name='password' className="field" placeholder='password' />
          <ErrorMessage name='password' />
        </div>
        <div className="field-block">
          <label className="label">Confirm Your Password  :  </label>
          <Field type='password' name='passwordConfirmation' className="field" placeholder='confirm your password' />
          <ErrorMessage name='passwordConfirmation' />
        </div>
        <div className="field-block">
          <label className="label">Date Of Birth :  </label>
          <label className="field">
            <DayPickerInput
              name="day"
              value={values.day}
              dayPickerProps={{
                month: new Date(1997, 1)
              }}
              onDayChange={e => setFieldValue('day', e.toLocaleDateString())}
            />
            <ErrorMessage name="day" />
          </label>
        </div >
        <div className="field-block">
          <label className="label">Gender :  </label>
          <Field component="select" className="field" name='gender' >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" />
        </div>
        <div className="field-block">
          <label className="label">Enter Your Address  :  </label>
          <Field type="textarea" name="address" className="field" placeholder="Enter Your Address" size="50" />
          <ErrorMessage name="address" />
        </div>
        <div className="field-block">
          <label className="label">Pincode  :  </label>
          <Field type="text" name="pincode" className="field" placeholder="Pincode" />
          <ErrorMessage name="pincode" />
        </div>
        <div className="field-block">
          <label className="label">Select One :  </label>
          <label><Field type="radio" name="location" className="field" value="home" />Home</label>
          <label><Field type="radio" name="location" className="field" value="office" />Office</label>
        </div>
        <div className="field-block">
          <label style={{ float: "left" }} className="label">Enter Your Hobby :</label>
          <FieldArray name="hobby"
            render={
              arrayHelpers => (
                <div style={{ margin: "10px", clear: "left" }}>
                  {values.hobby && values.hobby.length > 0 && (
                    values.hobby.map((val, index) => (
                      <div key={index}>
                        <Field name={`hobby.${index}`} />
                        <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                      </div>
                    )))
                  }
                  <div>
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      Add a hobby
                      </button>
                  </div>
                </div>
              )
            }
          ></FieldArray>
          <ErrorMessage name="hobby" />
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </Form>
    </div >
  )
export default App;