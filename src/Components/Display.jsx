import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, editUsers } from "../store/slice/UserSlice";
import { useNavigate } from "react-router-dom";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";

const Display = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.Users;
  });
  const [show, setShow] = useState(false);
  const [current, setcurrent] = useState(data[0] || {});

  const deleteUser = (id) => {
    dispatch(deleteUsers(id));
  };

  const handleAdduserBtn = () => {
    navigate(`/`);
  };

  const handleShow = (user) => {
    setcurrent(user);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUsers({ id: current.id, newData: current }));
    handleClose();
  };

  const handleCityFormPage = () => {
    navigate(`/cities`)
  }

  return (
    <>
      <Container>
        <div className="headers">
          <h1>All User Details</h1>
          <Button onClick={handleAdduserBtn} style={{margin:"80px 0px 30px 0px"}}>Add Users</Button>
          <Button onClick={handleCityFormPage} style={{margin:"80px 0px 30px 0px"}}>Add Cities</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, id) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.PhoneNumber}</td>
                <td>{user.City}</td>

                <td>
                  <Button
                    className="btn bg-success border-0 editbtn"
                    onClick={() => handleShow(user)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn bg-danger border-0 delbtn"
                    onClick={() => deleteUser(id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="Name"
                value={current?.Name || ""}
                onChange={(e) =>
                  setcurrent({ ...current, Name: e.target.value })
                }
                required
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="Email"
                value={current?.Email || ""}
                onChange={(e) =>
                  setcurrent({ ...current, Email: e.target.value })
                }
                required
              />
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PhoneNumber"
                name="PhoneNumber"
                value={current?.PhoneNumber || ""}
                onChange={(e) =>
                  setcurrent({
                    ...current,
                    PhoneNumber: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <br />
            <div className="btns">
              <Button type="submit" onClick={handleUpdate}>
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Display;
