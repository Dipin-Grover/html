import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';

const mockOrders = [
  {
    orderNumber: '7',
    date: 'Sep 7, 2026, 9:27 am',
    customerName: 'Dipin Grover',
    status: 'Processing',
    deliveryDate: 'Est. 3-5 business days',
    address: 'gunda nagar, Sehore, Madhya Pradesh, India, PO: 122001',
    total: '₹522,296.32',
    products: [
      {
        name: 'DeltaView® Spark (75 inch)',
        qty: 1,
        image: 'assets/img/spark/ban1.webp', // Placeholder matching layout
        bgColor: '#0f172a'
      },
      {
        name: 'DeltaView® Blaze (86 inch)',
        qty: 2,
        image: 'assets/img/enterprises.jpg', // Placeholder matching layout
        bgColor: '#e2e8f0'
      }
    ]
  },
  {
    orderNumber: '6',
    date: 'Sep 4, 2026, 2:22 pm',
    customerName: 'Dipin Grover',
    status: 'Delivered', // Assumed for previous order
    deliveryDate: 'Sep 8, 2026',
    address: 'gunda nagar, Sehore, Madhya Pradesh, India, PO: 122001',
    total: '₹109,824.00',
    products: [
      {
        name: 'DeltaView® Spark (65 inch)',
        qty: 1,
        image: 'assets/img/spark/ban1.webp',
        bgColor: '#0f172a'
      }
    ]
  }
];

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrdersStr = localStorage.getItem('deltaOrdersData');
    if (savedOrdersStr) {
      try {
        const savedOrders = JSON.parse(savedOrdersStr);
        // Combine real orders with mock orders at the bottom, or just show real ones?
        // Let's show both so the page doesn't look empty if they only placed 1 order,
        // but real orders come first.
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
    <div className="order-list w-100">
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))
      ) : (
        <div className="bg-white border rounded p-5 text-center shadow-sm">
          <h4 className="text-dark fw-bold mb-3 tp-ff-heading">No Orders Yet</h4>
          <p className="text-secondary mb-0">When you place an order, it will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default OrderList;
