import React, { useState } from "react";
import "./InputArrowButton.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
const InputArrowButton = ({ InputLabel, InputName, InputType }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {

    setValue(e.target.value);
  };
  return (
    <Form className="form-arrow" onSubmit={handleSubmit}>
      <Form.Group controlId="formGroup">
        <Form.Label className="font-weight-bold label p-0 pl-lg-4">
          {InputLabel}
        </Form.Label>
        <InputGroup className="arrow-block mb-2 mr-sm-2">
          <Form.Control
            type={InputType}
            name={InputName}
            value={value}
            onChange={handleChange}
            placeholder="Type your Email address here"
            className="border-0 shadow-none input-field p-4"
          />
          <InputGroup.Append>
            <Button
              className="py-0 px-0 border-0 shadow-none arrow-button"
              type="submit"
            >
              <i
                className="px-3 fas fa-arrow-right"
                style={{ color: "black" }}
              ></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default InputArrowButton;
