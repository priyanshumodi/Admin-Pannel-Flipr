import React from "react";
import {useSelector} from "react-redux"
function Purchase() {
  const purchase = useSelector(state => state.purchaseReducer.purchase)
    return (
         <div className="flex flex-col text-center">
         <div>
         <button className="bg-blue-500 hover:bg-blue-700 text-wite font-bold py-2 px-4 rounded mb-4">Add Purchase</button>
         </div>
        <div>
          <div class="container mx-auto p-6 dark:bg-zinc-800 flex shrink">
        <table class="min-w-full bg-white dark:bg-zinc-900 ">
          <thead>
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Product Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Quantity
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                Pricing
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                MRP
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
            {purchase.map((purchase) => (
              <tr key={purchase.id}>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
                {purchase.productName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
                {purchase.quantity}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {purchase.pricing}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {purchase.mrp}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {purchase.id}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-200">
              {purchase.Customer_ID}
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
          </div>
        </div>
        </div>
    )
}

export default Purchase