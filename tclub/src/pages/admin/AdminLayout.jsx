import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';;
import AdminModal from '../../components/AdminModal';


function AdminLayout({ buttonClass = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex">
        {/* Sidebar Section */}
        <div className='pt-[93px]'>
          <AdminSidebar buttonClass={buttonClass} />
        </div>

        {/* Main Content Section */}
        <main className="flex-1 p-6 pt-[93px]">
          <Outlet />
        </main>
      </div>

      {/* Modal shown after delay */}
      <AdminModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default AdminLayout;