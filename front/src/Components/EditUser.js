import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from "react-router-dom"
import { editUserById } from '../JS/actions/actionUser'

const EditUser = () => {
    const [editUser, setEditUser] = useState({})

    const userId = useSelector(state => state.userId)
    const dispatch = useDispatch()

    useEffect(() => {
        setEditUser(userId)
    }, [userId])

    const handlChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                style={{
                    width: "22rem",
                    height: "25rem",
                    marginRight: "30px",
                    marginBottom: "20px",
                    marginTop: "30px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "transparent",
                    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
                }}
            >
                <Card.Header
                    style={{
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                        backgroundColor: "#277fa5",
                        color: "white",
                    }}
                >
                    Edit User
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >name :</Form.Label>
                                <Form.Control type="text" name="name" value={editUser.name} onChange={handlChange} placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >email :</Form.Label>
                                <Form.Control type="email" name="email" value={editUser.email} onChange={handlChange} placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >phone :</Form.Label>
                                <Form.Control type="text" name="phone" value={editUser.phone} onChange={handlChange} placeholder="Enter your phone" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
                <div className="buttons">
                    <Link to='/Users_List'>
                        <Button variant="outline-primary edit-button" onClick={() => dispatch(editUserById(editUser._id, editUser))}>Save</Button>
                    </Link>
                    <Link to='/Users_List'>
                        <Button variant="outline-danger edit-button">Cancel</Button>
                    </Link>
                </div>
            </Card>
        </div>

    )
}

export default EditUser