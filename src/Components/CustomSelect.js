import { ErrorMessage, useField } from "formik";

const CustomSelect = ({ label, ...props }, ref) => {
  const [field] = useField(props);

  return (
    <>
      <div width="100%">
        <select {...field} {...props} autoComplete="true">
          <option value="Netherlands">Netherlands</option>
          <option value="Turkey">Turkey</option>
          <option value="United State">United State</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500 text-sm"
        />
      </div>
    </>
  );
};

export default CustomSelect;
