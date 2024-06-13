const Instructional = () => {
    return (
        <>
            <div className=" text-white text-center text-5xl lg:text-6xl font-medium rounded-md bg-[#723EEB] py-20 container mx-auto  mt-8">
                Instructional Video
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ">
                    <div className="mt-8 text-center lg:col-span-3 ">
                        <p className="text-4xl lg:text-6xl font-medium text-start text-black leading-snug">You can also become an Agents on the platform</p>
                        <div className="lg:flex  gap-10 mt-10">
                            <p className="text-3xl text-start lg:text-4xl font-medium ">To learn more and register</p>
                            <button className=" bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-lg font-medium text-white  py-2 px-8 rounded-full w-96 lg:w-72 mt-10 md:mt-0">
                                Click here
                            </button>
                        </div>
                    </div>
                    <div className="mt-8  flex justify-center">
                        <img src="/images/Cheerful, happy carefree attractive african-american man with beard.png" alt="Person" className="w-48 rounded-full grid items-center" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructional
