import React from "react";

function Admin() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-zinc-400">Total: 1000</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Orders</h2>
              <p className="text-zinc-400">Total: 500</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Revenue</h2>
              <p className="text-zinc-400">$10,000</p>
            </div>
          </div>
    )
}

export default Admin