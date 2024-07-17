import React, { useState, useEffect } from 'react';

function Products() {
    const [productData, setProductData] = useState([]);

    const productUrl = "https://july-assignment2-4.onrender.com/product";



    function fetchData() {
        fetch(productUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductData(data);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (


        <div className="bg-gray-50 p-10 relative overflow-x-auto shadow-md sm:rounded-lg">

            <div className='flex justify-between items-center  mb-5'>
                <h3 className="text-3xl font-bold mb-6">Top Products</h3>
                <div className='flex items-center space-x-2'>
                 
                    <span className=''>
                        <button className="rounded-full w-44 border border-gray-300 font-semibold px-4 py-3 text-lg h-12">
                          Full result
                        </button>
                    </span>
                </div>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-500">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-500">
                            Sold amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-500">
                            Unit price
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-500">
                            Revenue
                        </th>
                        <th scope="col" className="px-6 py-3 text-sm font-semibold text-gray-500">
                            Rating
                        </th>
                    </tr>
                  
                </thead>
                <hr />
                <hr />
                
               
                <tbody>
                    {productData.product && productData.product.map((ele) => (

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 text-lg font-bold text-gray-500 whitespace-nowrap dark:text-white">
                                {ele.product}
                            </th>
                            <td className="px-6 py-4 text-base font-bold">
                                {ele.sold_amount}
                            </td>
                            <td className="px-6 py-4 text-base font-bold">
                                ${ele.unit_price}
                            </td>
                            <td className="px-6 py-4 text-base font-bold">
                                ${ele.revenue}
                            </td>
                            <td className="px-6 py-4 flex justify-center items-center gap-2 text-gray-700 text-base font-bold">
                                <img className="w-3 h-3" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="ratingstar" />
                                {ele.rating}
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>
        </div>

    );
}

export default Products;
