import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";

export default function DateTimePicker({
  handleChange = () => {},
  endDate = "",
  endTime = "",
}) {
  return (
    <Row>
      <Col lg="2">
        <FormGroup>
          <Input
            type="date"
            name="date"
            id={"endDate"}
            placeholder="Completion Date"
            onChange={handleChange}
            value={endDate}
          />
        </FormGroup>
      </Col>
      <Col lg="2">
        <FormGroup>
          <Input
            type="time"
            name="time"
            id={"endTime"}
            placeholder="Completion Time"
            onChange={handleChange}
            value={endTime}
          />
        </FormGroup>
      </Col>
    </Row>
  );
}