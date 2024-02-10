import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/DashHeader';


import Schedular from '../partials/Schedular';

function SchedularPage() {
  const [listOpen, setListOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
           

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars    <DashboardAvatars />*/}
           

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
             
                {/* Datepicker built with flatpickr <Datepicker /> */}
               
                {/* Add view button */}
              

            {/* Cards */}
         
              </div>

            </div>
            <Schedular/>
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus)<DashboardCard01 /> */}
              
              {/* Line chart (Acme Advanced) <DashboardCard02 /> */}
             
              {/* Line chart (Acme Professional)<DashboardCard03 /> */}
              
              {/* Bar chart (Direct vs Indirect) <DashboardCard04 />*/}
              
              {/* Line chart (Real Time Value)  <DashboardCard05 />*/}
              {/* Table (Top Channels) */}
              
              {/* Doughnut chart (Top Countries) */}
            
             
            
              
            </div>

          </div>
        </main>

       

      </div>
    </div>
  );
}

export default SchedularPage;