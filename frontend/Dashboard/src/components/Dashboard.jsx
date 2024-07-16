import React from 'react';

function Dashboard() {
    return (
        <div className="p-4 bg-gray-100 w-4/4">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 font-semibold mb-2">Purchases</p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">4,294</h3>
                        <span className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-md">
                            +32% 
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
                {/* Second Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 font-semibold mb-2">Revenue</p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">4,294</h3>
                        <span className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-md">
                            +32% 
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
                {/* Third Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 font-semibold mb-2">Refunds</p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">4,294</h3>
                        <span className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-md">
                            +32% 
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
