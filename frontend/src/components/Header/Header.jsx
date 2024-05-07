import React from 'react';
import Admin from '../Admin/Admin';
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
                    <li className="py-2 px-4 hover:bg-zinc-700">Dashboard</li>
                    <li className="py-2 px-4 hover:bg-zinc-700">Users</li>
                    <li className="py-2 px-4 hover:bg-zinc-700">Orders</li>
                    <li className="py-2 px-4 hover:bg-zinc-700">Settings</li>
                  </ul>
                </nav>
        </aside>
       
        <div>
          <Admin/>
        </div>
        
    </div>

    
    </>
    
  );
};

export default Header;
