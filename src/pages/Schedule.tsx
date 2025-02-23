export default function Schedule() {
    return (
        <main className="bg-white text-black p-4 sm:p-10 w-full">
            <section className="flex flex-col lg:flex-row justify-between">
                <div className="w-full">
                    <h1 className="font-bold text-3xl">Get your vaccine <br />registration today</h1>
                    <div className="w-full lg:hidden justify-center items-center mt-5">
                        <div className="relative flex justify-center items-center w-full sm:w-2/5">
                            <img src="/injection.jpg" alt="Injection vaccine" className="w-full h-80 rounded-md"/>
                            <img src="/coronavirus.png" alt="coronavirus" className="absolute -top-6 -left-9 w-20 h-16"/>
                            <button className="absolute bottom-5 bg-blue-700/50 shadow-lg backdrop-blur-sm py-1 px-4 rounded-lg font-semibold text-white">Verify status</button>
                        </div>
                    </div>
                    <h4 className="font-semibold text-base mt-10">Patient's Full Name</h4>
                    <input type="text" className="w-full bg-gray-200 p-2 rounded-lg h-10 outline-none font-semibold" placeholder="Full name"/>
                   <div className="flex flex-col gap-2 mt-3">
                        <h4 className="font-semibold text-base mt-3">Mobile Number</h4>
                        <p className="text-gray-400 text-xs font-semibold">Notifications for appointment and reminders will be sent to this <br /> provided number</p>
                        <div className="flex gap-6">
                            <input type="text" className="w-full bg-gray-200 p-2 rounded-lg h-10 outline-none font-semibold" placeholder="Phone number"/>
                            <button className="bg-blue-600 py-2 px-8 text-white font-semibold rounded-lg">Verify</button>
                        </div>
                   </div>
                   <button className="w-full mt-3 py-2 bg-blue-600 rounded-md text-white font-semibold">Submit</button>
                    <p className="text-gray-500 font-semibold w-full text-center mt-3">Already registered? <span className="text-blue-400 font-semibold">Check your status</span></p>
                </div> 

                <div className="w-full lg:flex justify-center items-center hidden">
                    <div className="relative flex justify-center items-center w-2/5">
                        <img src="/injection.jpg" alt="Injection vaccine" className="w-full h-80 rounded-md"/>
                        <img src="/coronavirus.png" alt="coronavirus" className="absolute -top-6 -left-9 w-20 h-16"/>
                        <button className="absolute bottom-5 bg-blue-700/50 shadow-lg backdrop-blur-sm py-1 px-4 rounded-lg font-semibold text-white">Verify status</button>
                    </div>
                </div>
            </section>
        </main>
    )
}