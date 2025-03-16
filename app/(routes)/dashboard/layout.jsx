import React from 'react'
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';

function DashboardLayout({ children }) {
  return (
    <div>
      <div className='fixed w-80 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-80 bg-grey'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
