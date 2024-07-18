import React from 'react';



function Dashboard() {
    return (
        <div className="p-4 bg-gray-50 w-full mb-7">
            <div className='flex justify-between items-center mt-10'>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className='flex items-center space-x-2'>
                    <h3 className="text-md font-bold">Compare to</h3>
                    <span className=''>
                        <select className="rounded-full border border-gray-300 font-semibold px-4 py-3 text-lg h-12" name="" id="">
                            <option className='mr-3' value="Last Year">Last Year</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {/* First Card */}
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="text-gray-700 mb-7 font-semibold ">Purchases</p>
                    <div className="flex justify-start items-center gap-6">
                        <h3 className="text-2xl font-bold">4,294</h3>
                        <span className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            +32%
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
                {/* Second Card */}
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="text-gray-700 font-semibold mb-7">Revenue</p>
                    <div className="flex justify-start items-center gap-6">
                        <h3 className="text-2xl font-bold">$322,3k</h3>
                        <span className="flex items-center  bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            +49%
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
                {/* Third Card */}
                <div className="bg-white border-black p-6 rounded-3xl shadow-sm">
                    <p className="text-gray-700 font-semibold mb-7">Refunds</p>
                    <div className="flex justify-start items-center gap-6">
                        <h3 className="text-2xl font-bold">$8,2k</h3>
                        <span className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-full">
                            +7%
                            <img className="ml-1 w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/13467/13467857.png" alt="thunderimg" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
