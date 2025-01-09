import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import TopNavBar from '../category_navbar/category_navbar';
import Header from '../header/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header/>
        <TopNavBar />
        <Sidebar />
        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;