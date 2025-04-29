import React from 'react';
import Image from "next/image";
import riview from"@/components/assets/service-images/Networking-wireless/customer2.jpg";
import { DialogDemo } from '@/components/main/root';

function page() {
  return (
    <><div className="relative">
      <div className="relative">
        <Image src={riview} alt="image1" className="h-[300px] lg:min-h-[550px] w-full object-cover" />
        <div className="absolute inset-0 flex justify-between items-center text-black text-center">
          <div>
            <h1 className="text-2xl lg:text-6xl font-bold"></h1>
          </div>
        </div>

      </div>
    </div><div className="bg-slate-400 py-20 pl-6 mt-2 text-5xl  flex items-center justify-center">
        <p>PLEASE WAIT FOR NEXT UPDATE</p>
      </div></>
  );
}

export default page;


