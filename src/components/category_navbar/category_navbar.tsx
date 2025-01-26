import React from 'react';
import { Container } from 'react-bootstrap';
import { Wrench, Home, Car, User, Book,  } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: <Wrench size={20} /> },
  { name: 'Home Services', icon: <Home size={20} /> },
  { name: 'Auto Repair', icon: <Car size={20} /> },
  { name: 'Personal Care', icon: <User size={20} /> },
  { name: 'Education', icon: <Book size={20} /> },
  { name: 'Pet Services', icon: <User  size={20} /> },
];

export default function CategoryNavbar() {
  return (
    <div className="category-navbar border-b py-4 bg-white shadow-sm">
      <Container>
        <nav className="flex justify-center hidden md:flex  space-x-12">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/${category.name.toLowerCase().replace(/ /g, '-')}`}
              className="text-gray-700 hover:text-green-500 flex items-center space-x-1"
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}