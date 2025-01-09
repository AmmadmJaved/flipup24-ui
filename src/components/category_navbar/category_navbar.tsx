'use client'
import React from "react";
import { Nav, Container } from "react-bootstrap";

const CategoryNavBar: React.FC = () => {
  return (
    <div className="category-navbar border-bottom py-2 bg-white">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/graphics-design">Graphics & Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/programming-tech">Programming & Tech</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/digital-marketing">Digital Marketing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/video-animation">Video & Animation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/writing-translation">Writing & Translation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/music-audio">Music & Audio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/business">Business</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/finance">Finance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ai-services">AI Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/personal-growth">Personal Growth</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default CategoryNavBar;