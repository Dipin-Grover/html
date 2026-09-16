import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryStatusRow = ({ order, isLast }) => {
  // calculate total qty
  const totalQty = order.products ? order.products.reduce((sum, item) => sum + (item.qty || 1), 0) : 0;
  
  // calculate order total if not provided as string
  const totalAmount = order.total || '₹0.00';
  
  // mock delivery status based on order status
  let deliveryStatus = 'Pending Dispatch';
  const statusLower = order.status?.toLowerCase() || '';
  if (statusLower === 'delivered') deliveryStatus = 'Delivered';
  else if (statusLower === 'shipped') deliveryStatus = 'In Transit';

  // Format date if needed, though it's already a string in mockOrders
  const dateObj = new Date(order.date || order.createdAt);
  const formattedDate = isNaN(dateObj.getTime()) ? order.date : dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <tr className={!isLast ? 'border-bottom' : ''}>
      <td className="py-3 px-4">
        <Link to={`/my-account?tab=orders`} className="text-primary text-decoration-underline fw-medium tp-ff-body" style={{ fontSize: '14px' }}>
          #{order.orderNumber || order.id || 'N/A'}
        </Link>
      </td>
      <td className="py-3 px-4 text-secondary tp-ff-body" style={{ fontSize: '14px' }}>
        {formattedDate}
      </td>
      <td className="py-3 px-4 text-secondary tp-ff-body" style={{ fontSize: '14px' }}>
        {order.status || 'Processing'}
      </td>
      <td className="py-3 px-4 text-secondary tp-ff-body" style={{ fontSize: '14px' }}>
        <span className="fw-semibold text-dark">{totalAmount}</span> for {totalQty} item(s)
      </td>
      <td className="py-3 px-4 text-secondary tp-ff-body" style={{ fontSize: '14px' }}>
        Paid
      </td>
      <td className="py-3 px-4 text-secondary tp-ff-body" style={{ fontSize: '14px' }}>
        {deliveryStatus}
      </td>
      <td className="py-3 px-4 tp-ff-body">
        <Link to={`/my-account?tab=orders`} className="btn btn-dark btn-sm rounded px-3 py-1 fw-medium shadow-none tp-ff-body">
          View
        </Link>
      </td>
    </tr>
  );
};

export default DeliveryStatusRow;
