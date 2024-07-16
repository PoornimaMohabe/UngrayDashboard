import React, { useState, useEffect } from 'react';

function Products() {
    const [productData, setProductData] = useState([]);

    const productUrl = "http://localhost:5000/product";

    // useEffect(() => {
    //     fetchData();
    // }, []);

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


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sold amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Unit price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Revenue
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {productData.product && productData.product.map((ele) => (

                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {ele.product}
                            </th>
                            <td className="px-6 py-4">
                                {ele.sold_amount}
                            </td>
                            <td className="px-6 py-4">
                                ${ele.unit_price}
                            </td>
                            <td className="px-6 py-4">
                                ${ele.revenue}
                            </td>
                            <td className="px-6 py-4 flex justify-center items-center gap-2">
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
