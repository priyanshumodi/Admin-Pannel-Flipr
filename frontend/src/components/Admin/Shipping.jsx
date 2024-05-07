import React from "react";
import {useSelector} from "react-redux"

function Shipping() {
  const shippings = useSelector(state => state.shippingReducer.shippings)
    return (
        <div class="container mx-auto p-6 dark:bg-zinc-800">
        <table class="min-w-full bg-white dark:bg-zinc-900">
          <thead>
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Address
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                City
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Pincode
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Purchase order ID
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Customer ID
              </th>
            </tr>
          </thead>
          <tbody>
            {shippings.map((shipping) => (
              <tr key={shipping.Customer_ID}>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
                {shipping.Address}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {shipping.City}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {shipping.Pincode}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {shipping.Purchase_order_ID}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {shipping.Customer_ID}
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
          </div>
    )
}

export default Shipping