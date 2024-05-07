import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Customer = () => {
  const customers = useSelector(state => state.customerReducer.customer);
  console.log(customers)

  

  useEffect(() => {
    // Fetch customers from API or initial data (optional)
  }, []);

  

  return (
    <div class="container mx-auto p-6 dark:bg-zinc-800">
  <table class="min-w-full bg-white dark:bg-zinc-900">
    <thead>
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
          Customer Name
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
          Email
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
          Mobile Number
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
          City
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
          Customer ID
        </th>
      </tr>
    </thead>
    <tbody>
      {customers.map((customer) => (
          <tr key={customer.id}>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
            {customer.customerName}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
            {customer.email}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
            {customer.mobile}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
            {customer.city}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
            {customer.id}
          </td>
        </tr>
      ))}
      
      
    </tbody>
  </table>
    </div>

  );
};

export default Customer;
