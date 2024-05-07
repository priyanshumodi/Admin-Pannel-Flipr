import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="w-full">
        <header className="bg-zinc-800 p-4">
          <h1 className="text-2xl">Admin Dashboard</h1>
        </header>
        <main className="">
          
        </main>
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
                    to={'users'}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Users</li>
                    </NavLink>
                    <NavLink
                    to={''}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Orders</li>
                    </NavLink>
                    <NavLink
                    to={''}
                    >
                    <li className="py-2 px-4 hover:bg-zinc-700">Settings</li>
                    </NavLink>
                  </ul>
                </nav>
        </aside>
       
        <div>
          <Outlet/>
        </div>
        
    </div>

    
    </>
    
  );
};

export default Header;
