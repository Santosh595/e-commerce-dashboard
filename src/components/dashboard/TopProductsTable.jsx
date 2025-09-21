import React from 'react';

const productsData = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];


export default function TopProductsTable() {
  return (

    <div className="flex h-full flex-col">
      <h3 className="flex-shrink-0 text-base font-semibold text-text-light dark:text-text-dark">
        Top Selling Products
      </h3>
      <div className="mt-1">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <th className="py-2.5 text-left font-normal text-neutral-400 dark:text-neutral-500">Name</th>
              <th className="py-2.5 text-right font-normal text-neutral-400 dark:text-neutral-500">Price</th>
              <th className="py-2.5 text-right font-normal text-neutral-400 dark:text-neutral-500">Quantity</th>
              <th className="py-2.5 text-right font-normal text-neutral-400 dark:text-neutral-500">Amount</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.name}>
                <td className="py-2.5 text-left font-medium text-text-light dark:text-text-dark">
                  {product.name}
                </td>
                <td className="py-2.5 text-right text-text-light dark:text-text-dark">
                  {product.price}
                </td>
                <td className="py-2.5 text-right text-text-light dark:text-text-dark">
                  {product.quantity}
                </td>
                <td className="py-2.5 text-right text-text-light dark:text-text-dark">
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}