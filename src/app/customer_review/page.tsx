import React from 'react';
import Image from "next/image";
import riview from"@/components/assets/service-images/Networking-wireless/customer2.jpg";

function page() {
  return (
    <div className="relative">
    <div className="relative">
        <Image src={riview} alt="image1" className="h-[300px] lg:min-h-[550px] w-full object-cover" />
        <div className="absolute inset-0 flex justify-between items-center text-black text-center">
            <div>
                <h1 className="text-2xl lg:text-6xl font-bold">TRUST</h1>
            </div>
        </div>
    </div>
    </div>
  );
}

export default page;
