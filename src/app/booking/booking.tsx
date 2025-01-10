'use client';
import OpenStreetMapExample from "@/components/Map/map";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookingLayout: React.FC = () => {
    const [mapHeight, setMapHeight] = useState<string>("400px");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Dynamically adjust map height to fill the viewport
  // useEffect(() => {
    
  //   const updateMapHeight = () => {
  //     const formHeight = document.getElementById("booking-form")?.offsetHeight || 0;
  //     if (typeof window !== undefined) {
  //       const viewportHeight = window.innerHeight;
  //     setMapHeight(`${viewportHeight - formHeight - 16}px`); // Subtract form height + margin
  //     }
      
  //   };

  //   updateMapHeight();
  //   if (typeof window !== undefined) {
  //   window.addEventListener("resize", updateMapHeight);
  //   }

  //   return () => {
  //     if (typeof window !== undefined) {window.removeEventListener("resize", updateMapHeight);}    
  //   };
  // }, []);
 

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Container fluid className="p-0">
      {/* Map Section */}
      <Row>
        <Col>
          <div style={{ position: "relative", height: mapHeight, width: "100%" }}>
          <OpenStreetMapExample onLocationSelect={handleLocationSelect} />

            {/* "Book a Service" Button */}
            <Button
              variant="primary"
              style={{
                position: "absolute",
                top: "10px",
                left: "50px",
                zIndex: 1020,
              }}
              onClick={togglePopup}
            >
              Book a Service
            </Button>

            {/* Sliding Popup from Bottom */}
            {
                showPopup?
                <div
              style={{
                position: "absolute",
                bottom: showPopup ? "0" : "-500px", // Slide in from bottom
                left: "0",
                height: "600px", // You can adjust the height as needed
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                transition: "bottom 0.3s ease", // Smooth transition for the slide
                zIndex: 1025,
              }}
            >
              <h5>Book a Service</h5>
              <Form>
                <Form.Group className="mb-3" controlId="popupWorkLocation">
                  <Form.Label>Work Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter location" />
                  <Form.Control
                  type="text"
                  placeholder="Street 10 (Ghauri Town, Phase 7)"
                  value={selectedLocation ? `${selectedLocation}, ${selectedLocation}` : 'Not selected'}
                  readOnly
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="popupDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter details" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="popupFare">
                  <Form.Label>Offer Your Fare (PKR)</Form.Label>
                  <Form.Control type="number" placeholder="Enter your fare" />
                </Form.Group>
                <Button variant="success" className="w-100">
                  Submit
                </Button>
              </Form>
            </div>
                :undefined
            }
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingLayout;