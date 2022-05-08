import { countries } from "countries-list";

const countryList = Object.values(countries);
const sortedCountry = countryList.sort((countryA, countryB) => {
  return countryA.name.localeCompare(countryB.name);
});

export const countryPhoneUniqueList = sortedCountry.reduce((arr, country) => {
  const phoneList = country.phone.split(",");
  phoneList.forEach((phone) => {
    arr.push({
      ...country,
      phone: phone,
    });
  });
  return arr;
}, []);
