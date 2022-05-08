import { countryPhoneUniqueList } from "utils/constants";
import Modal from "./Modal";

function CountrySelectorDialog({ value, setValue, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="sticky top-0 flex w-full mb-2 bg-white dark:bg-black rounded-md border-2 border-neutral-200 dark:border-[#FFFFFF] hidden md:block">
        <input
          autoFocus
          className="bg-transparent outline-0 p-2 focus:outline-none grow"
          placeholder="Search Country.."
        />
      </div>
      {countryPhoneUniqueList.map((country, index) => {
        const selected = value === country.phone;
        return (
          <div
            className={`flex cursor-pointer flex items-center ${
              selected
                ? "rounded-md border-2 border-black dark:border-white"
                : ""
            }`}
            key={index}
            onClick={() => {
              setValue(country.phone);
              onClose();
            }}
          >
            <div className="w-[80px] p-2">{country.phone}</div>
            <div>{country.name}</div>
          </div>
        );
      })}
    </Modal>
  );
}

export default CountrySelectorDialog;
