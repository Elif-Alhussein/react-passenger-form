import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

export default function FormSection({ i }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4">{i + 1}. Adult (12+)</h3>
      <div id="my-radio-group" className="block mb-2">
        Gender<span className="text-red-500">*</span>
      </div>
      <div
        role="group"
        aria-labelledby="my-radio-group"
        className="flex items-center space-x-4"
      >
        <div className="flex">
          <CustomInput type="radio" name={`info.${i}.gender`} value="Male" />
          <label className="ml-2">Male</label>
        </div>

        <div className="flex">
          <CustomInput type="radio" name={`info.${i}.gender`} value="Female" />
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
            Nationality <span className="text-red-500">*</span>
          </label>

          <CustomSelect
            name={`info.${i}.nationality`}
            className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
          />
        </div>

        <div>
          <label className="block mb-3">
            Date of birth <span className="text-red-500">*</span>{" "}
          </label>

          <CustomInput
            type="date"
            name={`info.${i}.birthDate`}
            className="w-full border border-indigo-200 focus:border-green-300 hover:border-indigo-500  p-3"
          />
        </div>
      </div>
    </div>
  );
}
