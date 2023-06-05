import React from 'react'

function dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={() => navigate("/admin/register")} className="bg-gray-700 text-white">Register</button>
    </div>
  )
}

export default dashboard
