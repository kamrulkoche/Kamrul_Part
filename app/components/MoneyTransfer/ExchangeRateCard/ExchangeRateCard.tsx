import { FaRegDotCircle } from "react-icons/fa";
const ExchangeRateCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="text-center mb-4 bg-[#723EEB] rounded-2xl py-2">
                <p className="text-white text-xl font-medium mb-2">Exchange Rate</p>
                <p className="text-white text-2xl font-medium">1.00 USD = 1609.00 NGN</p>
            </div>
            <div>
                <label className="block text-black font-medium">You send exactly</label>
                <div className="flex items-center">
                    <input type="number" className="border text-black font-medium rounded-lg w-full p-2" value={150} readOnly />
                    <span className="ml-2">USD</span>
                </div>
                <div className="mt-8 grid gap-2 ">
                    <div className="text-gray-700 flex justify-between "><p className="flex items-center gap-3"><span><FaRegDotCircle /></span> Amount will convert</p> <p>150 USD</p></div>
                    <div className="text-gray-700 flex justify-between "><p className="flex items-center gap-3"><span><FaRegDotCircle /></span> Total Payable Amount</p> <p>153.50 USD</p></div>
                    <div className="text-gray-700 flex justify-between "><p className="flex items-center gap-3"><span><FaRegDotCircle /></span> Fees & Charges:</p> <p>+3.50 USD</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-[#723EEB] font-medium">Have a coupon code?</p>
                        <button className="font-medium text-white px-2.5 py-1.5 rounded-2xl bg-[#723EEB] hover:bg-[#4d27a3] duration-500 ">Apply</button>
                    </div>
                </div>
                <div className="mt-4">
                    <label className=" text-black font-medium flex items-center ">Recipient gets</label>
                    <div className="flex items-center gap-5 ">
                        <input type="text" className="text-black font-medium border rounded-lg w-full p-2" value="241350.00" readOnly />
                        <div className="flex">
                            {/* <div className="w-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="rounded-full h-8 w-8" />
                            </div> */}
                            <select className="border rounded-lg w-auto p-2 text-[#4B4B4B] font-semibold ">
                                <option>NGN</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <label className="text-[#4B4B4B] font-semibold flex items-center ">Receive Method</label>
                    </div>
                    <div>
                        <select className="border rounded-lg w-full p-2 text-[#4B4B4B] font-semibold ">
                            <option>Bank Transfer</option>
                        </select>
                    </div>
                </div>
                <div className="mt-14 ">
                    <p className="text-black mb-5">You could save up to 1.5 USD</p>
                    <button className=" bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white py-2 px-4 rounded-2xl w-full">Send Now</button>
                </div>
            </div>
        </div>
    )
}

export default ExchangeRateCard