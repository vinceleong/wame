import { useState } from "react";
import { countryPhoneUniqueList } from "utils/constants";
import Modal from "./Modal";
import Icon from "./Icon";
import { motion } from "framer-motion";

function CountrySelectorDialog({ value, setValue, open, onClose }) {
  const [searchText, setSearchText] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const countryList =
    searchText.length > 0 ? searchCountry : countryPhoneUniqueList;

  const handleSearch = (e) => {
    const searchText = e.target.value || "";
    const lowercaseSearchText = searchText.toLowerCase();
    const searchResults = countryPhoneUniqueList.filter((country) => {
      const searchableText = `${country.phone}${country.name}`.toLowerCase();
      return searchableText.indexOf(lowercaseSearchText) > -1;
    });
    setSearchText(e.target.value);
    setSearchCountry(searchResults);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="sticky top-0 mb-2 bg-white dark:bg-black rounded-md border-2 border-neutral-200 dark:border-[#FFFFFF] hidden md:block md:min-w-[400px]">
        <div className="flex flex-row items-center justify-between">
          <input
            autoFocus
            className="bg-transparent outline-0 p-2 focus:outline-none grow"
            placeholder="Search Country.."
            value={searchText}
            onChange={handleSearch}
          />
          <motion.div
            className="mr-2 cursor-pointer"
            onClick={() => {
              setSearchText("");
              setSearchCountry([]);
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Icon>x</Icon>
          </motion.div>
        </div>
      </div>
      {searchText.length > 0 && searchCountry.length === 0 && (
        <div>No result</div>
      )}
      {countryList.map((country, index) => {
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
