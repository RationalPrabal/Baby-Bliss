import React from "react";
import { EditAddressModal } from "./EditAddressModal";
import { DeleteAddress } from "./DeleteAddressModal";

export default function Addresses({ address }) {
  return (
    <div className="shadow-lg mt-2 p-2 gap-y-2">
      <p className="font-bold">{address.name}</p>
      <div>
        <span>{address.locality}</span>,<span>{address.fullAddress}</span>,
        <span>{address.pincode}</span>
      </div>
      <div className="font-bold flex">
        <p>Phone</p>-<p>{address.phone}</p>
      </div>
      <div className="flex gap-6 text-white font-bold mt-4">
        <EditAddressModal data={address} />
        <DeleteAddress id={address.id} />
      </div>
    </div>
  );
}
