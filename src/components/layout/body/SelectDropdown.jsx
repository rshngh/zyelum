import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const SelectDropdown = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const baseurl =
    import.meta.env.MODE === "development"
      ? import.meta.env.LOCAL_HOST_URL
      : import.meta.env.PRODUCTION_URL;

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
    return inputValue;
  };

  const loadOptions = async (inputValue) => {
    const response = await fetch(`${baseurl}/cities/city?search=${inputValue}`);
    const data = await response.json();
    return data.map((city) => ({ label: city.name, value: city.name }));
  };

  return (
    <div className="z=1">
      <AsyncSelect
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "black",
            primary: "black",
          },
        })}
        value={selectedOption}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        loadOptions={loadOptions}
      />
      <div className="mt-8">
        {selectedOption ? <h1>Coming Soon...</h1> : "Type to search city"}
        <p className="text-xs opacity-50 mt-8">
          *Due to inactivity servers may take upto 50 seconds to fetch city
          data. Please be patient.
        </p>
      </div>
    </div>
  );
};
export default SelectDropdown;
