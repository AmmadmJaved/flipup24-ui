import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GigCard from "../gigs_card/gigs_card";

const gigData = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will create 3D modeling and realistic 3D renders for Amazon listing images",
    sellerName: "Rafik Hamada",
    rating: 5.0,
    reviews: 298,
    price: "PKR 14,630",
    badge: "Fiverr's Choice",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will do 3D modeling, product design, rendering, STL 3D printing",
    sellerName: "Pico",
    rating: 4.9,
    reviews: 215,
    price: "PKR 1,463",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will do 3D CAD modeling product design, 3D printing STL",
    sellerName: "Shalika Kosgoll",
    rating: 5.0,
    reviews: 334,
    price: "PKR 2,926",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will repair, edit, and modify your STL files for 3D printing printing STL",
    sellerName: "Design N Model",
    rating: 4.9,
    reviews: 321,
    price: "PKR 1,463",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will create 3D modeling and realistic 3D renders for Amazon listing images",
    sellerName: "Rafik Hamada",
    rating: 5.0,
    reviews: 298,
    price: "PKR 14,630",
    badge: "Fiverr's Choice",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will do 3D modeling, product design, rendering, STL 3D printing",
    sellerName: "Pico",
    rating: 4.9,
    reviews: 215,
    price: "PKR 1,463",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will do 3D CAD modeling product design, 3D printing STL",
    sellerName: "Shalika Kosgoll",
    rating: 5.0,
    reviews: 334,
    price: "PKR 2,926",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "I will repair, edit, and modify your STL files for 3D printing printing STL",
    sellerName: "Design N Model",
    rating: 4.9,
    reviews: 321,
    price: "PKR 1,463",
  }
];

const GigCardGrid: React.FC = () => {
  return (
    <Container className="gig-card-grid mt-5">
      <Row>
        {gigData.map((gig, index) => (
          <Col key={index} md={6} lg={4} xl={3}>
            <GigCard {...gig} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GigCardGrid;