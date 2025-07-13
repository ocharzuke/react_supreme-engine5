import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useFlashMessage } from "./FlashMessageStore";
import { useLocation } from "wouter";

export default function RegistrationPage() {
  const { showMessage } = useFlashMessage();
  const [_, setLocation] = useLocation();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Za-z0-9]{8,20}$/,
        "Password must be 8–20 characters, letters and numbers only, no spaces or special characters"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Please retype your password to confirm it"),
    salutation: Yup.string().required("Salutation is required"),
    country: Yup.string().required("Country is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    salutation: "",
    marketingPref: [],
    country: "",
  };

  const handleSubmit = (values, formikHelpers) => {
    console.log("form values =>", values);

    setTimeout(function () {
      formikHelpers.setSubmitting(false);
      showMessage("You have been registered!", "success");
      setLocation("/");
    }, 500);
  };

  return (
    <>
      <div className="container-fluid px-5 py-5 bg-body-tertiary">
        <h1>Register here</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="d-flex flex-column bg-body-tertiary px-5">
              <div className="p-2">
                <label className="form-label">Salutation</label>
                <br />
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="salutation"
                    id="mr"
                    value="Mr"
                  />
                  <label className="form-check-label" htmlFor="mr">
                    Mr
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="salutation"
                    id="ms"
                    value="Ms"
                  />
                  <label className="form-check-label" htmlFor="ms">
                    Ms
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="salutation"
                    id="miss"
                    value="Miss"
                  />
                  <label className="form-check-label" htmlFor="miss">
                    Miss
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="salutation"
                    id="mdm"
                    value="Mdm"
                  />
                  <label className="form-check-label" htmlFor="mdm">
                    Mdm
                  </label>
                </div>
              </div>
              <div className="p-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="p-2">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="postcard@for-you.com"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="p-2">
                <label
                  htmlFor="password"
                  className="form-label"
                  name="password"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <div id="passwordHelpBlock" className="form-text">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="p-2">
                <label
                  htmlFor="confirmPassword"
                  className="form-label"
                  name="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  aria-describedby="passwordConfirmationBlock"
                />
                <div id="passwordConfirmationBlock" className="form-text">
                  Re-type the same password.
                </div>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div className="text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <div className="p-2">
                <label
                  htmlFor="marketingPref"
                  className="form-label"
                  name="marketingPref"
                >
                  I am happy to receive:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    id="newsletters"
                    name="marketingPref"
                    value="newsletters"
                  />
                  <label className="form-check-label" htmlFor="newsletters">
                    Newsletters
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    name="marketingPref"
                    id="emails"
                    value="emails"
                  />
                  <label className="form-check-label" htmlFor="emails">
                    Emails
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    name="marketingPref"
                    id="neither"
                    value="neither"
                  />
                  <label className="form-check-label" htmlFor="neither">
                    Neither
                  </label>
                </div>
              </div>
              <div className="p-2">
                <label htmlFor="country" className="form-label">
                  Where do you live?
                </label>
                <Field
                  name="country"
                  id="country"
                  type="text"
                  list="countryOptions"
                  className="form-control"
                  placeholder="Type to search..."
                />
                <datalist id="countryOptions">
                  <option value="Singapore" />
                  <option value="Malaysia" />
                  <option value="Indonesia" />
                  <option value="Brunei" />
                  <option value="Thailand" />
                  <option value="Vietnam" />
                  <option value="Cambodia" />
                </datalist>
                {formik.errors.country && formik.touched.country ? (
                  <div className="text-danger">{formik.errors.country}</div>
                ) : null}
              </div>

              <div className="px-2 py-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
