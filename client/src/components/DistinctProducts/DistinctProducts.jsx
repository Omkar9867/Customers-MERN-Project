import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DistinctProducts.css'

const DistinctProducts = () => {
  const [distinctProduct, setDistinctProduct] = useState([]);

  useEffect(() => {
    const fetchDistinctProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/distinct-count');
        setDistinctProduct(response.data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchDistinctProducts();
  }, [])
  console.log("distinctProduct", distinctProduct);
  return (
    <>
      <div className='distinct-product-container'>
        <h2>Distinct list of Products available</h2>
        <table className='distinct-product-table'>
          <thead>
            <tr>
              <th>Distinct Products</th>
            </tr>
          </thead>
          <tbody>
            {distinctProduct.map((product, index) => (
              <tr key={index}>
                <td>{product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DistinctProducts