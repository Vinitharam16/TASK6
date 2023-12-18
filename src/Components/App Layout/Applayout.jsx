import React from "react";
import { Row, Col, Container } from "reactstrap"
import Navbar from "../Navbar/Navbar";

export default function Applayout({ children }) {
    return (
        <Container fluid="xxl">
            <Row>
                <Col xs="3">
                    <Navbar />
                </Col>
                <Col xs="9">
                    {children}
                </Col>
            </Row>
        </Container>
    );
}