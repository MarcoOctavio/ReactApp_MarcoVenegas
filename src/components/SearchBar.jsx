import React from "react";
import Form from "react-bootstrap/Form";

const SearchBar = ({ value, onChange, placeholder = "Buscar artículos..." }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Buscar artículos"
      />
    </Form>
  );
};

export default SearchBar;
