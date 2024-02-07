import React from "react";
import { Form, Button } from "react-bootstrap";
import img from "../image/Untitled_design_1.png";
// import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginAdmin() {
  return (
    <div className="log_admin">
      <div className="all">
        <div className="text">
          <div className="buttons">
            <Form>
              <Form.Group controlId="Email">
                <Form.Label>
                  <FaUserCheck />
                  Enter Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>
                  <RiLockPasswordFill />
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
