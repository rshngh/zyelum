import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const SelectDropdown = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const baseurl =
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api"
      : `https://dynamic-search-backend.onrender.com/api`;

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
      </div>
    </div>
  );
};
export default SelectDropdown;
