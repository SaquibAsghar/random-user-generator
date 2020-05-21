import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaBirthdayCake } from "react-icons/fa";

const CardComp = ({ details }) => {
	return (
		<Card>
			<CardBody className="text-center">
				<img
					height="150px"
					width="150px"
					className="rounded-circle img-thumbnail border-danger"
					src={details.picture?.large}
				/>
				<CardTitle className="text-primary">
					<h1>
						<span className="pr-2">{details.name?.title}</span>
						<span className="pr-2">{details.name?.first}</span>
						<span>{details.name?.last}</span>
					</h1>
				</CardTitle>
				<CardText>
					<FaMapMarkedAlt />
					<span className=" pl-1 pr-2">{details.location?.city}</span>
					<FaEnvelope />
					<span className=" pl-1 pr-2">{details.email}</span>
					<FaBirthdayCake />
					<span className=" pl-1 pr-2">{details.dob?.age}</span>
				</CardText>
			</CardBody>
		</Card>
	);
};

export default CardComp;
