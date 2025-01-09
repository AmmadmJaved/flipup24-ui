'use client'
import React from "react";
import { Card, Button } from "react-bootstrap";

interface GigCardProps {
  image: string;
  title: string;
  sellerName: string;
  rating: number;
  reviews: number;
  price: string;
  badge?: string; // Optional, for badges like "Fiverr's Choice"
}

const GigCard: React.FC<GigCardProps> = ({
  image,
  title,
  sellerName,
  rating,
  reviews,
  price,
  badge,
}) => {
  return (
    <Card className="gig-card mb-4 shadow-sm">
      <Card.Img variant="top" src={image} className="gig-card-img" />
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <strong className="text-dark me-auto">{sellerName}</strong>
          {badge && (
            <span className="badge bg-success text-white ms-2">{badge}</span>
          )}
        </div>
        <Card.Title className="gig-title">{title}</Card.Title>
        <div className="gig-rating d-flex align-items-center my-2">
          <span className="text-warning me-2">★ {rating}</span>
          <span className="text-muted">({reviews})</span>
        </div>
        <div className="gig-price text-dark fw-bold">From {price}</div>
      </Card.Body>
    </Card>
  );
};

export default GigCard;