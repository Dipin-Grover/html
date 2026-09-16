import React, { useState } from 'react';
import AccountLayout from '../components/myAccount/AccountLayout';
import AddressCard from '../components/myAccount/AddressCard';
import AddNewAddressCard from '../components/myAccount/AddNewAddressCard';
import AddressModal from '../components/myAccount/AddressModal';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const initialAddresses = [
  {
    isDefault: true,
    name: 'Dipin Grover',
    addressLine: 'gunda nagar',
    city: 'Sehore',
    pincode: '122001',
    state: 'Madhya Pradesh',
    country: 'India',
    phone: '8700805950',
    email: 'grover.dipin007@gmail.com'
  },
  {
    isDefault: false,
    name: 'Dipin Grover',
    addressLine: 'Room no 511, Boys hostel block 4, Vit Bhopal',
    city: 'Sehore',
    pincode: '466114',
    state: 'Madhya Pradesh',
    country: 'India',
    phone: '+91 8700805950',
    email: 'grover.dipin007@gmail.com'
  },
  {
    isDefault: false,
    name: 'Dipin Grover',
    addressLine: 'Old judicial complex civil lines',
    city: 'Gurgaon',
    pincode: '122001',
    state: 'Haryana',
    country: 'India',
    phone: '+91 8700805950',
    email: ''
  }
];

const YourAddress = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleMakeDefault = (index) => {
    const newAddresses = addresses.map((addr, i) => ({
      ...addr,
      isDefault: i === index
    }));
    setAddresses(newAddresses);
  };

  const handleAddClick = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleSaveAddress = (addressData) => {
    if (editingIndex !== null) {
      // Edit existing
      const newAddresses = [...addresses];
      newAddresses[editingIndex] = addressData;
      setAddresses(newAddresses);
    } else {
      // Add new
      // If it's the first address, make it default automatically
      const isFirst = addresses.length === 0;
      setAddresses([...addresses, { ...addressData, isDefault: isFirst }]);
    }
    setIsModalOpen(false);
  };

  return (
    <AccountLayout>
      <div className="row g-4">
        {addresses.map((addr, idx) => (
          <div className="col-lg-6" key={idx}>
            <AddressCard 
              address={addr} 
              index={idx} 
              onEdit={handleEditClick}
              onMakeDefault={handleMakeDefault}
            />
          </div>
        ))}
        <div className="col-lg-6">
          <AddNewAddressCard onAdd={handleAddClick} />
        </div>
      </div>
      
      <AddressModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAddress}
        initialData={editingIndex !== null ? addresses[editingIndex] : null}
      />
      <AboutFAQ />
    </AccountLayout>
  );
};

export default YourAddress;
