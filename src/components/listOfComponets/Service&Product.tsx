import React from "react";
import Image from "next/image";
import dts3 from "@/components/assets/technology.jpg";
import tlc1 from "@/components/assets/neron.jpeg";
import grandstreem from "@/components/assets/telecom grandstreem.webp";
import audiologo from "@/components/assets/Audiocodes-logo.png";
import intaractive from "@/components/assets/About-image/product.png";
import cisco from "@/components/assets/About-image/Cisco-logo.png";
import fortinent from "@/components/assets/About-image/Fortinet-logo.png";
import { DialogDemo } from "../main/root";
import server from "@/components/assets/cloud images.jpg";
import blog from "@/components/assets/About-image/Blog.jpeg";
import automition from "@/components/assets/Automation.jpg";
import about from "@/components/assets/About-Us.jpg";
import service from "@/components/assets/About-image/service.png";
import avacor from "@/components/assets/dsp1.png";
import maxhub from "@/components/assets/dsp2.jpg";
import samsuing from "@/components/assets/samsung.jpg";
import bose from "@/components/assets/bose sounder.jpeg";
import audac from "@/components/assets/audacimage.webp";
import rucks from "@/components/assets/client-Logo/logos/Ruckus-Logo.jpg";
import shure from "@/components/assets/shureimage.webp";
import { Networking,Clouds,Displays,Audio ,Telecom } from "@/components/networkingscroll/newtorkscrl";



// Servive //

// export const ServiceContentOfNetworking = [
//     {
//         id: 1,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5" >

//                 <Image src={dts1} alt="image1" className="rounded-lg w-[750px] h-[370px] " />

//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Cisco
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 2,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dts2} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Fortinent
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 3,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dts3} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Aruba
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 4,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dts4} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Rackus
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },

// ];
// export const ServiceContentOfDisplay = [
//     {
//         id: 1,
//         Component: (

//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dsp1} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Avocor
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 2,
//         Component: (

//             <Card className="w-[550px] h-[55opx] p-5">
//                 <Image src={dsp2} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Maxhub
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 3,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dsp3} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Samsung
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 4,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={dsp4} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Lg
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },

// ];
// export const ServiceContentOAudioandVisual = [
//     {
//         id: 1,
//         Component: (

//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={av1} alt="image1" className="rounded-lg w-[750px] h-[370px] py-0" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl  ">
//                     Shure
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 2,
//         Component: (
//             <Card className="p-5 w-[550px] h-[550px]">
//                 <Image src={av2} alt="image1" className="rounded-lg w-[750px] h-[370px] " />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Sennheiser
//                 </CardTitle>
//                 <CardDescription className="text-xl">
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 3,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={av3} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Audio Technical
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 4,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={av4} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Bose
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },

// ];
// export const ServiceContentOfTelecom = [
//     {
//         id: 1,
//         Component: (
//             <div>
//                 <Card className="w-[550px] h-[550px] p-5">
//                     <Image src={tlc1} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                     <Separator className="my-4" />
//                     <CardTitle className="text-xl">
//                         Grand Streem
//                     </CardTitle>
//                     <CardDescription>
//                         Lorem, ipsum dolor.
//                     </CardDescription>
//                     <div className="mt-5 rounded-lg">
//                         <DialogDemo />
//                     </div>
//                 </Card>
//             </div>
//         )
//     },
//     {
//         id: 2,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={tlc2} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Audio Codes
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 3,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={tlc3} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Neron
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 4,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={tlc4} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     IPPBX
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },

// ];
// export const ServiceContentOfAutomition = [
//     {
//         id: 1,
//         Component: (
//             <div>
//                 <Card className="w-[550px] h-[550px] p-5">
//                     <Image src={at1} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                     <Separator className="my-4" />
//                     <CardTitle className="text-xl">
//                         Molex
//                     </CardTitle>
//                     <CardDescription>
//                         Lorem, ipsum dolor.
//                     </CardDescription>
//                     <div className="mt-5 rounded-lg">
//                         <DialogDemo />
//                     </div>
//                 </Card>
//             </div>
//         )
//     },
//     {
//         id: 2,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={at3} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Commscope
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 3,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={at4} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Legrand
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },
//     {
//         id: 4,
//         Component: (
//             <Card className="w-[550px] h-[550px] p-5">
//                 <Image src={at2} alt="image1" className="rounded-lg w-[750px] h-[370px]" />
//                 <Separator className="my-4" />
//                 <CardTitle className="text-xl">
//                     Belden
//                 </CardTitle>
//                 <CardDescription>
//                     Lorem, ipsum dolor.
//                 </CardDescription>
//                 <div className="mt-5 rounded-lg">
//                     <DialogDemo />
//                 </div>
//             </Card>
//         )
//     },

// ];



// export const ServiceContent = [
//     {
//         id: 1,
//         Component: (
//             <CardHeader>
//                 <CardTitle className="font-jul">
//                     <div className="text-2xl">Networking and wireless
//                     </div>
//                 </CardTitle>
//                 <CardDescription className="font-ubu hidden md:block">
//                     I specialize in comprehending your audio and video requirements and
//                     crafting resilient solutions for your video communication needs.
//                 </CardDescription>
//                 <CardContent className="flex overflow-x-auto gap-5 bg-[#DDDDDD] rounded-lg">

//                     {ServiceContentOfNetworking.map((item) => (
//                         <div key={item.id}>
//                             <div className="flex flex-nowrap my-4 gap-4" >{item.Component}</div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </CardHeader>

//         )
//     },


//     {
//         id: 2,
//         Component: (
//             <CardHeader>
//                 <CardTitle className="font-jul">
//                     <div className="text-2xl">Display

//                     </div>
//                 </CardTitle>
//                 <CardDescription className="font-ubu hidden md:block">
//                     I specialize in comprehending your audio and video requirements and
//                     crafting resilient solutions for your video communication needs.
//                 </CardDescription>
//                 <CardContent className="flex gap-5 overflow-x-auto bg-[#DDDDDD] rounded-lg">
//                     {ServiceContentOfDisplay.map((item) => (
//                         <div key={item.id}>
//                             <div className="flex flex-nowrap my-4 gap-4" >{item.Component}</div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </CardHeader>
//         )
//     },

//     {
//         id: 3,
//         Component: (
//             <CardHeader>
//                 <CardTitle className="font-jul">
//                     <div className="text-2xl">Audio and Visual

//                     </div>
//                 </CardTitle>
//                 <CardDescription className="font-ubu hidden md:block">
//                     I specialize in comprehending your audio and video requirements and
//                     crafting resilient solutions for your video communication needs.
//                 </CardDescription>
//                 <CardContent className="flex gap-5 overflow-x-auto bg-[#DDDDDD] rounded-lg">
//                     {ServiceContentOAudioandVisual.map((item) => (
//                         <div key={item.id}>
//                             <div className="flex flex-nowrap my-4 gap-4" >{item.Component}</div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </CardHeader>
//         )
//     },

//     {
//         id: 4,
//         Component: (
//             <CardHeader>
//                 <CardTitle className="font-jul">
//                     <div className="text-2xl">Telecom

//                     </div>
//                 </CardTitle>
//                 <CardDescription className="font-ubu hidden md:block">
//                     I specialize in comprehending your audio and video requirements and
//                     crafting resilient solutions for your video communication needs.
//                 </CardDescription>
//                 <CardContent className="flex gap-5 overflow-x-auto bg-[#DDDDDD] rounded-lg">
//                     {ServiceContentOfTelecom.map((item) => (
//                         <div key={item.id}>
//                             <div className="flex flex-nowrap my-4 gap-4" >{item.Component}</div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </CardHeader>
//         )
//     },

//     {
//         id: 5,
//         Component: (
//             <CardHeader>
//                 <CardTitle className="font-jul">
//                     <div className="text-2xl">Automition

//                     </div>
//                 </CardTitle>
//                 <CardDescription className="font-ubu hidden md:block">
//                     I specialize in comprehending your audio and video requirements and
//                     crafting resilient solutions for your video communication needs.
//                 </CardDescription>
//                 <CardContent className="flex gap-5 overflow-x-auto bg-[#DDDDDD] rounded-lg">
//                     {ServiceContentOfAutomition.map((item) => (
//                         <div key={item.id}>
//                             <div className="flex flex-nowrap my-4 gap-4" >{item.Component}</div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </CardHeader>
//         )
//     },
// ];

export const ServiceContentOfNetworkings = [
    {
        id: 1,
        Component: (
            <>
                <div className="bg-[#F5F5F7] md:p-14 rounded-3xl mb-4 gap-7 md:flex">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">

                        </span>
                        We provide expert guidance on leveraging advanced technologies to optimize your business operations. Our services include strategic planning, system integration, and digital transformation tailored to your industry needs. We specialize in cloud computing, data analytics, and cybersecurity to enhance efficiency and innovation. By aligning technology solutions with your strategic goals, we drive growth and competitive advantage. Partner with us for actionable insights and practical solutions that ensure long-term success.
                    </p>
                </div>
                <DialogDemo />
            </>
        )
    },
    {
        id: 2,
        Component: (
            <>
                <div className="bg-[#F5F5F7] md:p-14 rounded-3xl mb-4 gap-7 md:flex">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        </span>
                        We deliver expert guidance to enhance your technology strategy and operations. Our focus includes strategic planning, system integration, and digital transformation. We leverage cloud computing, data analytics, and cybersecurity to drive efficiency and innovation. Our tailored solutions align with your specific business needs and objectives. We ensure seamless implementation and ongoing support for sustained success. Partner with us to unlock your technology’s full potential and achieve your business goals.
                    </p>
                </div>
                <DialogDemo />
            </>
        )
    },

    {
        id: 3,
        Component: (
            <>
                <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        </span>
                        We specialize in creating innovative and functional meeting rooms that enhance collaboration and productivity. Our designs focus on integrating advanced technology, ergonomic furniture, and adaptable layouts. We prioritize acoustics and lighting to ensure a conducive environment for effective communication. Our solutions are tailored to your specific needs and space constraints. We manage the entire design process from concept to implementation, ensuring a seamless and efficient experience. Transform your meeting spaces into dynamic hubs for success and innovation.
                    </p>

                </div>
                <DialogDemo />
            </>
        )
    },
    {
        id: 4,
        Component: (
            <>
                <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        </span>


                        We offer expert solutions for optimizing your audio and video systems to enhance communication and media experiences. Our services include system design, installation, and integration tailored to your specific needs. We focus on achieving superior sound quality, clear visuals, and seamless connectivity. Our team provides ongoing support and maintenance to ensure peak performance. We help you select and implement cutting-edge technologies for effective and engaging presentations. Trust us to elevate your audio and video capabilities for any setting.
                    </p>
                </div>
                <DialogDemo />
            </>
        )
    },

];

export const ProductContentOfDisplay = [
    {
        id: 1,
        Component: (
            <>

                <div className="pt-32"> {/* Add padding-top to avoid content being hidden behind the fixed component */}
                    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-5 mb-4 md:flex">
                        <Image
                            src={cisco}
                            alt="Networking"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200 gap-8">
                            REGISTERED PARTNERS CISCO     <br />
                            </span>
                            • Industrial Switching. <br /> • Cisco Meraki and dashboards. <br />• Cisco Spaces. <br />• Cisco Zero Trust Security <br />
                            • Security Fabric Design
                        </p>
                    </div>

                    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 md:flex">
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            REGISTERED PARTNERS FORTINENT   <br />
                            </span>
                            • SD WAN solutions. <br /> • Network and endpoint security. <br /> • Cloud Security Solutions. <br /> • Secured Network Management <br />• Security Fabric Design
                        </p>
                        <Image
                            src={fortinent}
                            alt="Networking"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                    <div className="bg-[#F5F5F7] md:p-14 rounded-3xl mb-4 gap-7 md:flex">
                        <Image
                            src={rucks }
                            alt="Networking"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            REGISTERED PARTNERS RUCKUS <br />
                            </span>
                            RUCKUS delivers superior networking solutions tailored for a variety of environments, including enterprise, hospitality, education, and public venues. Known for their innovative wireless and wired network technology, RUCKUS ensures robust connectivity, seamless performance, and enhanced security. Whether it's high-density Wi-Fi, smart switches
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <Networking />
                    </div>
                </div>
            </>
        )
    },

    {

        id: 2,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7]  md:p-14 rounded-3xl mb-4  gap-8 md:flex"
                >
                    <Image
                        src={avacor}
                        alt="avacor"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"

                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        REGISTERED PARTNERS AVACOR <br />
                        </span>
                        Experience cutting-edge technology with the Avacor Interactive Display. Designed for seamless collaboration, it offers stunning visuals and intuitive touch capabilities, enhancing every presentation and meeting. Elevate your workspace with Avacor’s innovation.
                    </p>
                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-8 mb-4 md:flex"
                >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        REGISTERED PARTNERS MAXHUB <br />
                        </span>
                        . It features ultra-responsive touch technology and built-in connectivity options for easy integration with various devices. Its intuitive interface supports real-time annotations, screen sharing, and multimedia presentations. With a sleek design and adjustable stand.
                    </p>

                    <Image
                        src={maxhub}
                        alt="maxhub"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-8 mb-4 md:flex"
                >
                    <Image
                        src={samsuing}
                        alt="smasuing"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        REGISTERED PARTNERS SAMSUING <br />
                        </span>
                        Discover the future of collaboration with the Samsung Interactive Display. With vibrant display quality and responsive touch technology, it delivers exceptional performance for meetings, presentations, and team collaboration.
                    </p>
                </div>
                <div className=" overflow-hidden">
                    <Displays />
                </div>
            </>
        )
    },


    {
        id: 3,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex"
                >
                    <Image
                        src={shure}
                        alt="shure"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            REGISTERED PARTNERS SHURE <br />
                        </span>
                        Shure is a trusted name in professional audio, offering superior microphones and sound systems. With a legacy of excellence, Shure's products are engineered for clarity and durability.
                    </p>
                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex"
                >

                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            REGISTERED PARTNERS BOSE <br />
                        </span>
                        Bose delivers unparalleled audio quality with innovative technology and sleek design. Renowned for their premium sound systems, Bose products offer immersive listening experiences
                    </p>
                    <Image
                        src={bose}
                        alt="bose"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />

                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex"
                >
                    <Image
                        src={audac}
                        alt="audac"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200 ">
                            REGISTERED PARTNERS AUDAC <br />
                        </span>
                        Audac combines robust performance with sophisticated audio solutions, perfect for professional and commercial applications. Known for their reliable and versatile products, Audac excels in delivering clear
                    </p>

                </div>
                <div className=" overflow-hidden">
                    <Audio />
                </div>
            </>
        )
    },


    {
        id: 4,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-7 mb-4 md:flex"

                >
                    <Image
                        src={grandstreem}
                        alt="Telecom"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        REGISTERED PARTNERS GRAND STREEM <br />
                        </span>
                        Grandstream offers a comprehensive range of unified communication solutions, including IP phones, video conferencing, and networking equipment. Their products are designed for high performance and ease of use, providing clear and reliable voice and video communication.
                    </p>
                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-7 mb-4 md:flex"

                >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        AUDIOCODES <br />
                        </span>
                        AudioCodes provides industry-leading voice and video solutions designed for seamless communication across various platforms. Their advanced IP telephony systems and session border controllers ensure high-quality voice and video services.
                    </p>

                    <Image
                        src={audiologo}
                        alt="Telecom"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                </div>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-7 mb-4 md:flex"

                >
                    <Image
                        src={tlc1}
                        alt="Telecom"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        NERON <br />
                        </span>
                        Neron offers advanced telecom solutions with a focus on high-performance networking and communication technologies. Their products include innovative voice over IP systems and efficient network infrastructure solutions
                    </p>
                </div>
                <div className="overflow-hidden">
                    <Telecom />
                </div>
            </>

        )
    },

    {
        id: 5,
        Component: (
            <>
                <div

                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex"
                >
                    <Image
                        src={automition}
                        alt="automition"
                        height="900"
                        width="800"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain bg-purple-400"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        </span>
                        This comprehensive solution integrates seamlessly with your existing infrastructure, enabling centralized control of all automated systems. From lighting and climate control to security and energy management, this hub ensures efficiency, productivity, and enhanced security across your enterprise.
                    </p>

                </div>

            </>

        )
    },
    {
        id: 6,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-7 mb-4 md:flex"

                >
                    <Image
                        src={server}
                        alt="cloud"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain bg-purple-400"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        </span>
                        Our Cloud Storage Solutions provide a secure and scalable platform for managing your data with ease. Designed for flexibility and accessibility, our services ensure that your data is always available whenever you need it
                    </p>
                </div>
                <div className="overflow-hidden">
                <Clouds/>
                </div>             
            </>
        )
    },

];

export const main_page_secoundaryContent = [
    {
        id: 1,
        Component: (
            <>
                <div

                    className="bg-[#F5F5F7]  md:p-14 rounded-3xl mb-4  gap-9 md:flex"
                >
                    <Image
                        src={about}
                        alt="about"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"

                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Who We Are :
                        </span>
                        Discover our commitment to excellence and innovation. Our dedicated team works passionately to deliver top-notch solutions tailored to your needs. Join us on our journey to make a meaningful impact in the industry.
                        <br />
                        <div className="pt-8">
                            <a href="/product"
                                className="flex h-9 w-fit items-center justify-center  transition-colors ">
                                <button className="bg-slate-400 rounded-lg  w-[180px] h-[40px] hover:bg-blue-400 ">know more...</button>
                            </a>
                        </div>
                    </p>

                </div>
                <DialogDemo />

            </>
        )

    },
    {

        id: 2,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7]  md:p-14 rounded-3xl mb-4  gap-10 md:flex"
                >
                    <Image
                        src={intaractive}
                        alt="product"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"

                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Innovative Solutions : <br />
                        </span>
                        Discover our cutting-edge products designed to meet your every need. Experience the perfect blend of quality, innovation, and reliability that sets our offerings apart. <br />
                        <div className="pt-8">
                            <a href="/product"
                                className="flex h-9 w-fit items-center justify-center  transition-colors ">
                                <button className="bg-slate-400 rounded-lg  w-[180px] h-[40px] hover:bg-blue-400 ">know more...</button>
                            </a>
                        </div>
                    </p>
                </div>
                <DialogDemo />

            </>
        )
    },


    {
        id: 3,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 gap-7 md:flex"
                >
                    <Image
                        src={blog}
                        alt="blog"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Insights and Trends :
                        </span>
                        Stay informed with our latest articles and expert insights. Our blog covers industry trends, tips, and stories to keep you inspired and ahead of the curve. <br />
                        <div className="pt-8">
                            <a href="/product"
                                className="flex h-9 w-fit items-center justify-center  transition-colors ">
                                <button className="bg-slate-400 rounded-lg   w-[180px] h-[40px] hover:bg-blue-400 ">know more...</button>
                            </a>
                        </div>
                    </p>

                </div>
                <DialogDemo />
            </>
        )
    },


    {
        id: 4,
        Component: (
            <>
                <div
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl gap-7 mb-4 md:flex"

                >
                    <Image
                        src={service}
                        alt="Telecom"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Comprehensive Support :
                        </span>
                        Explore our suite of tailored services designed to support your goals. From consulting to implementation, we offer expertise that ensures your success at every step. <br />
                        <div className="pt-8">
                            <a href="/product"
                                className="flex h-9 w-fit items-center justify-center  transition-colors ">
                                <button className="bg-slate-400 rounded-lg  w-[180px] h-[40px] hover:bg-blue-400 ">know more...</button>
                            </a>
                        </div>
                    </p>
                </div>
                <DialogDemo />
            </>

        )
    },


]

