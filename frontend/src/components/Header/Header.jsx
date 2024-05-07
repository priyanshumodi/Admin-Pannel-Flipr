import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="w-full">
        <header className="bg-zinc-800 p-4">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        </header>
    </div>

    <div className="flex bg-zinc-900 text-white min-h-screen">
        
        <aside className="bg-zinc-800 w-1/4">
                <nav className="p-4">
                  <ul>
                    <NavLink
                    to={''}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Dashboard</li>
                    </NavLink>
                    <NavLink
                    to={'customer'}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Customer</li>
                    </NavLink>
                    <NavLink
                    to={'purchase'}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Purchase</li>
                    </NavLink>
                    <NavLink
                    to={'shipping'}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Shipping</li>
                    </NavLink>
                  </ul>
                </nav>
        </aside>
       
        <div className='p-16'>
          <Outlet/>
        </div>
        
    </div>

    
    </>
    
  );
};

export default Header;
