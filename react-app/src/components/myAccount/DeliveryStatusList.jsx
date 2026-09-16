import React, { useState, useEffect } from 'react';
import DeliveryStatusRow from './DeliveryStatusRow';

const mockOrders = [
  {
    orderNumber: '7',
    date: 'Sep 7, 2026',
    status: 'Processing',
    total: '₹522,296.32',
    products: [
      { qty: 1 },
      { qty: 2 }
    ]
  },
  {
    orderNumber: '6',
    date: 'Sep 4, 2026',
    status: 'Delivered',
    total: '₹109,824.00',
    products: [
      { qty: 1 }
    ]
  }
];

const DeliveryStatusList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrdersStr = localStorage.getItem('deltaOrdersData');
    if (savedOrdersStr) {
      try {
        const savedOrders = JSON.parse(savedOrdersStr);
        setOrders([...savedOrders, ...mockOrders]);
      } catch (e) {
        console.error('Failed to parse orders');
        setOrders(mockOrders);
      }
    } else {
      setOrders(mockOrders);
    }
  }, []);

  return (
    <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm overflow-hidden border tp-ff-body">
      <h2 className="fs-4 fw-bold mb-4 text-dark text-center text-md-start tp-ff-heading">Delivery Status</h2>
      
      <div className="table-responsive mb-0 border rounded">
        <table className="table table-borderless align-middle mb-0 text-nowrap">
          <thead className="bg-light border-bottom">
            <tr>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Order</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Date</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Order Status</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Total</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Payment Status</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Delivery Status</th>
              <th className="py-3 px-4 text-dark fw-semibold tp-ff-heading" style={{ fontSize: '14px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, idx) => (
                <DeliveryStatusRow 
                  key={idx} 
                  order={order} 
                  isLast={idx === orders.length - 1} 
                />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 text-center text-muted tp-ff-body" style={{ fontSize: '14px' }}>
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryStatusList;
