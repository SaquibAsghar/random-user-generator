import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import CardComp from "./Components/CardComponent/Card";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
	const [details, setDetails] = useState({});

	useEffect(() => {
		fetchDetails();
	}, []);
	const fetchDetails = async () => {
		// const response = await Axios.get("https://randomuser.me/api/");
		//  destructring the response on the go
		const { data } = await Axios.get("https://randomuser.me/api/");
		const details = data.results[0];
		console.log(details.picture.large);

		setDetails(details);
	};
	return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <CardComp details={details} />
        </Col>
      </Row>
  </Container>
	);
}

export default App;
