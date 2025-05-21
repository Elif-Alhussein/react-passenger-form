import { Formik, Form, Field } from "formik";
import { PassengersFormSchemas } from "../Schemas/PassengersFormSchemas";

export const PassengersForm = () => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto m-30 mt-5">
    <h2 className="text-2xl font-semibold mb-6">Passenger Information</h2>
    <Formik
      initialValues={{
        gender: "",
        name: "",
        surname: "",
        nationality: "",
        birthDate: "",
      }}
      validationSchema={PassengersFormSchemas}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div className="inivite-passenger">
            {/*/////// MAP ////// */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">1. Adult (12+)</h3>
              <div id="my-radio-group" className="mb-2">
                Gender<span className="text-red-500">*</span>
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="gender" value="Male" />
                  <> Male</>
                </label>
                <label className="ml-2">
                  <Field type="radio" name="gender" value="Female" />
                  <> Female</>
                </label>
                {touched.gender && errors.gender && (
                  <div className="text-red-500 text-sm">{errors.gender}</div>
                )}{" "}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Name and Surname div */}
                <div>
                  <label className="block mb-3">
                    Name <span className="text-red-500">*</span>
                    <Field
                      name="name"
                      className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                    />
                    {touched.name && errors.name && (
                      <div className="text-red-500 text-sm">{errors.name}</div>
                    )}
                  </label>
                </div>

                <div>
                  <label className="block mb-3">
                    Surname <span className="text-red-500">*</span>
                    <Field
                      name="surname"
                      className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                    />
                    {touched.surname && errors.surname && (
                      <div className="text-red-500 text-sm">
                        {errors.surname}
                      </div>
                    )}
                  </label>
                </div>

                {/* Nationality AND Birth Date div */}
                <div>
                  <label className="mb-3">
                    Nationality <span className="text-red-500">*</span>
                    <Field
                      as="select"
                      name="nationality"
                      className="w-full border border-indigo-200 hover:border-indigo-500  p-3"
                    >
                      <option value="Netherlands">Netherlands</option>
                      <option value="Turkey">Turkey</option>
                      <option value="United State">United State</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </Field>
                    {touched.nationality && errors.nationality && (
                      <div className="text-red-500 text-sm">
                        {errors.nationality}
                      </div>
                    )}
                  </label>
                </div>

                <div>
                  <label className="block mb-3">
                    Date of birth <span className="text-red-500">*</span>
                    <Field
                      type="date"
                      name="birthDate"
                      className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                    />
                    {touched.birthDate && errors.birthDate && (
                      <div className="text-red-500 text-sm">
                        {errors.birthDate}
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
            {/* //////===== MAP LOOP =====////// */}

            {/* Save Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
