import Image from "next/image";
import React from "react";

export default function Order({ order }) {
  console.log(order);
  return (
    <div className="p-4 mt-2">
      <div className="flex justify-between">
        <div>
          <Image width={100} height={100} alt="product image" src={order.img} />
        </div>
        <div>
          <p className="font-bold">{order.title}</p>
          <p>
            <span>Quantity-</span>
            {order.quantity}
          </p>
          <p>
            <span>Price-</span>
            {order.price}
          </p>
        </div>
      </div>
      <div className="shadow-lg mt-2 p-2 gap-y-2">
        <p className="text-lg font-bold">Delivery Address:</p>
        <p className="font-bold">{order.address.name}</p>
        <div>
          <span>{order.address.locality}</span>,
          <span>{order.address.fullAddress}</span>,
          <span>{order.address.pincode}</span>
        </div>
        <div className="font-bold flex">
          <p>Phone</p>-<p>{order.address.phone}</p>
        </div>
      </div>
    </div>
  );
}
