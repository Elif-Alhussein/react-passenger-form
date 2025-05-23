import { Formik, Form, FieldArray } from "formik";
import CustomInput from "./CustomInput";
import { PassengersFormSchemas } from "../Schemas/PassengersFormSchemas";
import { initialValues } from "./Constant";
import { GrFormClose } from "react-icons/gr";
import CustomSelect from "./CustomSelect";

export default function PassengersForm() {
  const removeFromList = (i, values, setValues) => {
    const info = [...values.info];
    info.splice(i, 1);
    setValues({ ...values, info });
  };

  const updateForm = (values, setValues) => {
    const info = [...values.info];
    info.push({
      gender: "",
      name: "",
      surname: "",
      nationality: "",
      birthDate: "",
    });
    setValues({ ...values, info });
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto m-30 mt-5">
      <h2 className="text-2xl font-semibold mb-6">Passenger Information</h2>

      <Formik
        validationSchema={PassengersFormSchemas}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => (
          <Form>
            <FieldArray name="info">
              {() =>
                values.info.map((item, i) => {
                  return (
                    <div key={i}>
                      {values.info.length > 1 && (
                        <button
                          className="text-indigo-600 text-3xl border border-indigo-200"
                          onClick={() => removeFromList(i, values, setValues)}
                        >
                          <GrFormClose />
                        </button>
                      )}

                      <div className="mb-10">
                        <h3 className="text-lg font-semibold mb-4">
                          {i + 1}. Adult (12+)
                        </h3>
                        <div id="my-radio-group" className="block mb-2">
                          Gender<span className="text-red-500">*</span>
                        </div>
                        <div
                          role="group"
                          aria-labelledby="my-radio-group"
                          className="flex items-center space-x-4"
                        >
                          <div className="flex">
                            <CustomInput
                              type="radio"
                              name={`info.${i}.gender`}
                              value="Male"
                            />
                            <label className="ml-2">Male</label>
                          </div>

                          <div className="flex">
                            <CustomInput
                              type="radio"
                              name={`info.${i}.gender`}
                              value="Female"
                            />
                            <label className="ml-2">Female</label>
                          </div>
                        </div>
                        {/* Name and Surname div */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block mb-3">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <CustomInput
                              name={`info.${i}.name`}
                              className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                            />
                          </div>

                          <div>
                            <label className="block mb-3">
                              Surname <span className="text-red-500">*</span>{" "}
                            </label>
                            <CustomInput
                              name={`info.${i}.surname`}
                              className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                            />
                          </div>

                          {/* Nationality AND Birth Date div */}
                          <div>
                            <label className="block mb-3">
                              Nationality{" "}
                              <span className="text-red-500">*</span>
                            </label>

                            <CustomSelect
                              name={`info.${i}.nationality`}
                              className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                            />
                          </div>

                          <div>
                            <label className="block mb-3">
                              Date of birth{" "}
                              <span className="text-red-500">*</span>{" "}
                            </label>

                            <CustomInput
                              type="date"
                              name={`info.${i}.birthDate`}
                              className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </FieldArray>

            <button
              className="mt-25 mr-10 ml-10 font-bold text-indigo-600 hover:text-indigo-400"
              type="button"
              onClick={(e) => updateForm(values, setValues)}
            >
              Click to add Adult
            </button>

            {/* Save Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
