import * as Yup from "yup";

const regex = /^[A-Za-z ]*$/;

export const PassengersFormSchemas = Yup.object().shape({
  info: Yup.array().of(
    Yup.object().shape({
      gender: Yup.string().required("Gender is required"),
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .matches(regex, {
          message: "Name must be 2-50 characters long and contain only letters",
        })
        .required("Name is required"),
      surname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .matches(regex, {
          message: "Name must be 2-50 characters long and contain only letters",
        })
        .required("Surname is required"),
      nationality: Yup.string().required("Please select nationality"),
      birthDate: Yup.string().required(
        "Please enter a valid date (DD/MM/YYYY)"
      ),
    })
  ),
});
