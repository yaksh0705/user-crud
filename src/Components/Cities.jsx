import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCities } from "../store/slice/CitiesSlice";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [city, setCity] = useState({
    id: Date.now(),
    EnterCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCities(city));
    navigate(`/displaycities`);
  };

  const handleUserListpage = () => {
    navigate(`/display`);
  };
  const handleUserFormPage = () => {
    navigate(`/`);
  };

  const handleCityListPage = () => {
    navigate(`/displaycities`);
  };

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
            placeholder="Enter City"
            onChange={handleChange}
            name="EnterCity"
            value={city.EnterCity}
          />
        </div>
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button type="submit" className="btn btn-primary">
            Add City
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCityListPage}
          >
            Cities List
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUserListpage}
          >
            User List page
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUserFormPage}
          >
            User Form Page
          </button>
        </div>
      </form>
    </>
  );
};

export default Cities;
