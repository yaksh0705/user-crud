import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../store/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    id: Date.now(),
    Name: "",
    Email: "",
    PhoneNumber: "",
    City: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUsers(Data));
    navigate(`/display`);
  };

  const cityData = useSelector((state) => {
    return state.Cities;
  });

  return (
    <>
      <form
        className="row g-3"
        onSubmit={handleSubmit}
        style={{
          width: "30%",
          border: "2px solid black",
          margin: "300px 0px 0px 650px",
          padding: "20px",
        }}
      >
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={Data.Name}
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            name="Email"
            value={Data.Email}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            onChange={handleChange}
            name="PhoneNumber"
            value={Data.PhoneNumber}
          />
        </div>
        <div className="col-12">
          <select
            placeholder="Select City"
            style={{ width: "50%" }}
            onChange={handleChange}
            value={Data.City}
            name="City"
          >
            {cityData.map((city) => (
              <option key={city.id} value={city.EnterCity}>
                {city.EnterCity}
              </option>
            ))}
          </select>
        </div>
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate(`/display`)}
          >
            List page
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate(`/cities`)}
          >
            Cities Page
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
