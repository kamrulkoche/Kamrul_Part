import { FiPlay } from "react-icons/fi";
const Content = () => {
    return (
        <div className="flex flex-col container mx-auto px-4 lg:px-20 ">
            <h1 className="text-4xl font-medium leading-normal text-black ">Seamless Money Transfer,Worldwide Connection</h1>
            <p className="text-[#393939] text-2xl font-medium mt-5 lg:mt-9  leading-normal mb-10 lg:mb-20">
                We believe in connecting hearts and empowering dreams through secure, fast, and reliable money transfers.
                Whether you're sending support to family abroad or facilitating international business transactions, our
                cutting-edge remittance solution is your trusted partner.
            </p>
            <div className="bg-[#723EEB]  relative  rounded-e-2xl">
                <img src="/images/3d render money transfer mobile banking online.png" alt="" className="absolute -top-12  h-48" />

                <div className="flex justify-end items-center p-10 gap-6">
                    <div className="bg-white rounded-3xl w-48">
                        <p className="px-4 py-2 text-center text-lg text-[#723EEB] font-medium  items-center ">How to get started </p>
                    </div>
                    <div className="bg-white rounded-full p-3 text-lg text-[#723EEB] font-medium">
                        <FiPlay />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
