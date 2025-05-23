import { ErrorMessage, useField } from "formik";

const CustomInput = ({ label, ...props }, ref) => {
  const [field] = useField(props);

  return (
    <>
      <div width="100%">
        <input {...field} {...props} autoComplete="true" />
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500 text-sm"
        />
      </div>
    </>
  );
};

export default CustomInput;
