import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Dashboard = ({ user, role }) => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locationLink, setLocationLink] = useState('');

  const fetchCustomers = async () => {
    const snapshot = await getDocs(collection(db, 'customers'));
    setCustomers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'customers'), { name, phone, locationLink });
    setName('');
    setPhone('');
    setLocationLink('');
    fetchCustomers();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard ({role})</h1>

      {role === 'admin' && (
        <form onSubmit={handleAddCustomer} className="space-y-4 mb-6">
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 rounded" />
          <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border p-2 rounded" />
          <input placeholder="Google Maps Link" value={locationLink} onChange={e => setLocationLink(e.target.value)} className="w-full border p-2 rounded" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Customer</button>
        </form>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-2">Customer List</h2>
        {customers.map((cust) => (
          <div key={cust.id} className="border p-3 rounded mb-2">
            <div><strong>Name:</strong> {cust.name}</div>
            <div><strong>Phone:</strong> {cust.phone}</div>
            <a href={cust.locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Open in Google Maps</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;