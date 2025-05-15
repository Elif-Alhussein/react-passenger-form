import { useState, useEffect } from "react";
import { Inputs } from "./Inputs";

export default function Passenger() {
  const [values, setValues] = useState({
    gender: "",
    name: "",
    surname: "",
    nationality: "",
    birthDate: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [invitePassengers, setInvitePassengers] = useState([
    {
      gender: "",
      name: "",
      surname: "",
      nationality: "",
      birthDate: "",
      id: "1",
    },
    {
      gender: "",
      name: "",
      surname: "",
      nationality: "",
      birthDate: "",
      id: "2",
    },
    {
      gender: "",
      name: "",
      surname: "",
      nationality: "",
      birthDate: "",
      id: "3",
    },
  ]);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  // Validation function
  const validate = (values) => {
    const errors = {};
    const regexName = /^[a-zA-Z]{2,50}$/i;
    const regexSurname = /^[a-zA-Z]{2,50}$/i;
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!regexName.test(values.name)) {
      errors.name =
        "Name must be 2-50 characters long and contain only letters";
    }
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (!regexSurname.test(values.surname)) {
      errors.surname =
        "Surname must be 2-50 characters long and contain only letters";
    }
    if (!values.nationality) {
      errors.nationality = "Please select nationality";
    }
    if (!values.birthDate) {
      errors.birthDate = "Please enter a valid date (DD/MM/YYYY)";
    }
    return errors;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 m-30">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Passenger Information</h2>
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* PASSENGERS */}

          <div className="inivite-passenger">
            {invitePassengers.map((passenger) => (
              <div className="mb-4" key={passenger.id}>
                <h3 className="text-lg font-semibold mb-4">
                  {passenger.id}. Adult (12+)
                </h3>

                  {/* GENDER */}
                  <label className="block mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        onChange={(e) => handleChanges(e)}
                      />
                      <label className="ml-2">Male</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value="Female"
                        name="gender"
                        onChange={(e) => handleChanges(e)}
                      />
                      <label className="ml-2">Female</label>
                    </div>
                  </div>
                  <p className="text-red-500 text-sm">{formErrors.gender}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* NAME AND SURNAME */}
                    {/* NAME */}
                    <div>
                      <label className="block mb-3" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          className="w-full border border-indigo-200 hover:border-indigo-500  invalid:border-red-500 p-3"
                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <p className="text-red-500 text-sm">{formErrors.name}</p>
                    </div>

                    {/* SURNAME */}
                    <div>
                      <label className="block mb-3">
                        Surname <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Surname"
                        name="surname"
                        className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
                        onChange={(e) => handleChanges(e)}
                      />
                      <p className="text-red-500 text-sm">
                        {formErrors.surname}
                      </p>
                    </div>

                    {/* Nationality AND Birth Date */}

                    {/* Nationality */}
                    <div>
                      <label className="block mb-3">
                        Nationality <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="nationality"
                        className="w-full border border-indigo-200 hover:border-indigo-500  p-3"
                        onChange={(e) => handleChanges(e)}
                      >
                        <option value="">Select</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United State">United State </option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                      <p className="text-red-500 text-sm">
                        {formErrors.nationality}
                      </p>
                    </div>

                    {/* Birth Date */}
                    <div>
                      <label className="block mb-3">
                        Date of birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        className="w-full border border-indigo-200 hover:border-indigo-500 p-3"
                        onChange={(e) => handleChanges(e)}
                      />
                      <p className="text-red-500 text-sm">
                        {formErrors.birthDate}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
            {/* SAVE BUTTON */}
            <div className="w-full md:w-1/2 justify-center mt-16">
              <button
                type="submit"
                // className="w-32 h-13 bg-slate-50 text-red-600 font-bold border-4 border-red-500 border-solid"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
