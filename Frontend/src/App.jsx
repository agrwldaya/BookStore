import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Nevbar from './Components/nevbar';
import Footer from './Components/Footer';

 

export default function App() {
  return (
     
      <div className="dark:bg-white dark:text-black -mt-12 pt-12">
        <Nevbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Toaster />
        <Footer />
      </div>
     
  );
}
