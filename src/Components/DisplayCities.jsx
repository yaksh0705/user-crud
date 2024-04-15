import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { deleteCity } from "../store/slice/CitiesSlice";

const DisplayCities = () => {
  const dispatch = useDispatch();

  const cityData = useSelector((state) => {
    return state.Cities;
  });

  const deleteCities = (id) => {
    dispatch(deleteCity(id));
  };

  return (
    <>
      <div style={{ width: "50%", margin: "300px 0px 0px 500px" }}>
        <h1>Cities List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cityData.map((city, id) => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.EnterCity}</td>
                <td>
                  <Button
                    className="btn bg-danger border-0 delbtn"
                    onClick={() => deleteCities(id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DisplayCities;
