import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function EditSchedule() {
  return (
    <Card.Body>
      <Card.Title>Edit Schedule</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card.Body>
  );
}
