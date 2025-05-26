import { Formik, Form, FieldArray } from "formik";
import { PassengersFormSchemas } from "../Schemas/PassengersFormSchemas";
import { initialValues } from "./Constant";
import { GrFormClose } from "react-icons/gr";
import FormSection from "./FormSection";

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
                      <FormSection i={i} />
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
