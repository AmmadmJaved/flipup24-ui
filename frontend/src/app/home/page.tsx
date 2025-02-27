'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';

function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState('HOUSEHOLD');
  const [searchKeyword, setSearchKeyword] = useState('');

  const partners = {
    HOUSEHOLD: [
      { name: 'Home Clean Pro', rating: 4.8, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&q=80' },
      { name: 'Fix It Fast', rating: 4.5, image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=80' },
      { name: 'Garden Masters', rating: 4.7, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80' }
    ],
    AUTOMOBILE: [
      { name: 'Quick Mechanic', rating: 4.9, image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=300&q=80' },
      { name: 'Auto Care Plus', rating: 4.6, image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?w=300&q=80' },
      { name: 'Tire Masters', rating: 4.4, image: 'https://images.unsplash.com/photo-1635770716510-fa20691f63b1?w=300&q=80' }
    ],
    'DELIVERY SERVICE': [
      { name: 'Swift Delivery', rating: 4.7, image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&q=80' },
      { name: 'Express Courier', rating: 4.8, image: 'https://images.unsplash.com/photo-1613552465135-e5bdaada10bc?w=300&q=80' },
      { name: 'City Logistics', rating: 4.5, image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=300&q=80' }
    ]
  };

  return (
    // <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid  md:grid-cols-12 gap-8">
         
          {/* Main Content */}
          <div className="md:col-span-9">
            {/* Search */}
            <div className="flex flex-col sm:flex-row mb-8 gap-4">
              <input
                type="text"
                placeholder="KEYWORD"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-bold whitespace-nowrap">
                BOOK SERVICE
              </button>
            </div>

            {/* Top Rated Partners */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-6">TOP RATED PARTNER</h2>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {['HOUSEHOLD', 'AUTOMOBILE', 'DELIVERY SERVICE'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded ${
                      selectedCategory === category
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners[selectedCategory as keyof typeof partners].map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                      <div className="flex items-center space-x-1">
                        <span>STARS</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < Math.floor(partner.rating) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">({partner.rating})</span>
                      </div>
                      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    // </PageLayout>
  );
}

export default LandingPage;