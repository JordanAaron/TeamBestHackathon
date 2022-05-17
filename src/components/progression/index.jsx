import React, { useEffect, useState } from "react";
import {
  Accordion,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Tab,
  Button,
} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";

import "./progression.css";
import { data } from "../../data";

export const Progression = () => {
  const [role, setRole] = useState("PD");
  const [jsonData, setJsonData] = useState(data.pd);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (role === "PD") {
      setJsonData(data.pd);
    } else if (role === "PA") {
      setJsonData(data.pa);
    } else {
      setJsonData(data.ux);
    }
  }, [role]);

  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea className="feedback-entry" placeholder="Enter feedback" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button className="main-btn" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="header">
        <img src={require("../../assets/luna-logo.png")} alt="luna logo" />
        <h1>Level 2</h1>
        <div className="role-filter">
          <DropdownButton title={role} className="main-btn">
            <Dropdown.Item
              key={0}
              onClick={() => {
                setRole("PD");
              }}
            >
              PD
            </Dropdown.Item>
            <Dropdown.Item
              key={1}
              onClick={() => {
                setRole("PA");
              }}
            >
              PA
            </Dropdown.Item>
            <Dropdown.Item
              key={2}
              onClick={() => {
                setRole("UX");
              }}
            >
              UX
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="background">
        {/* <hr /> */}
        <div className="summary-section">
          <h3>Summary</h3>
          <p>{jsonData.summary}</p>
        </div>
        <div className="target-section">
          <h3>Targets</h3>
          <Tabs defaultActiveKey={0} className="mb-3">
            {jsonData.skills.map((item) => {
              let target = item.body;
              return (
                <Tab key={item.title} eventKey={item.key} title={item.title}>
                  <Form>
                    {target.ex1 ? (
                      <div className="target">
                        <Form.Check />
                        <Accordion>
                          <Accordion.Header>{target.ex1.body}</Accordion.Header>
                          <Accordion.Body>
                            <hr />
                            {target.ex1.feedback}
                            <div
                              className="add-button"
                              onClick={() => setShowModal(true)}
                            >
                              +
                            </div>
                          </Accordion.Body>
                        </Accordion>
                      </div>
                    ) : null}
                    {target.ex2 ? (
                      <div className="target">
                        <Form.Check />
                        <Accordion>
                          <Accordion.Header>{target.ex2.body}</Accordion.Header>
                          <Accordion.Body>
                            <hr />
                            {target.ex2.feedback}
                            <div
                              className="add-button"
                              onClick={() => setShowModal(true)}
                            >
                              +
                            </div>
                          </Accordion.Body>
                        </Accordion>
                      </div>
                    ) : null}
                    {target.ex3 ? (
                      <div className="target">
                        <Form.Check />
                        <Accordion>
                          <Accordion.Header>{target.ex3.body}</Accordion.Header>
                          <Accordion.Body>
                            <hr />
                            {target.ex3.feedback}
                            <div
                              className="add-button"
                              onClick={() => setShowModal(true)}
                            >
                              +
                            </div>
                          </Accordion.Body>
                        </Accordion>
                      </div>
                    ) : null}
                  </Form>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};
