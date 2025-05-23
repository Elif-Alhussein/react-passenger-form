import * as Yup from "yup";

export const PassengersFormSchemas = Yup.object().shape({
  info: Yup.array().of(
    Yup.object().shape({
      gender: Yup.string().required("Gender is required"),
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
      surname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Surname is required"),
      nationality: Yup.string().required("Please select nationality"),
      birthDate: Yup.string().required(
        "Please enter a valid date (DD/MM/YYYY)"
      ),
    })
  ),
});
