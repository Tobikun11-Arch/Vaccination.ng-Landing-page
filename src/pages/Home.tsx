import { motion } from "framer-motion";

export default function Home() {
    
    return (
        <main className="min-h-screen flex items-center justify-center px-4 sm:px-0" id="home">
             <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }} >

            <section className="flex flex-col lg:flex-row gap-10 lg:gap-44 mt-0 sm:mt-24 lg:mt-0">
                <div className="">
                    <h5 className="text-[#17C2EC] text-sm sm:text-xl font-semibold">Get Vaccinated. Boost your Immune System</h5>
                    <h1 className="mt-5 text-2xl sm:text-4xl font-bold"><span className="font-extrabold">COVID-19</span> Vaccination <br />Got easier With, <br /> <span className="text-[#17C2EC]">Vaccination.ng</span></h1>
                    <h5 className="mt-10 font-semibold text-gray-400 text-xs sm:text-base">Vaccination.ng will help help you find the nearest <br /> centre for vaccination, in all 36 states in Nigeria.</h5>

                    <div className="flex gap-2 font-semibold mt-5">
                        <button className="bg-[#17C2EC] hover:border-2 border-gray-600 w-32 py-2 rounded-md">Get Vaccine</button>
                        <button className="bg-[#0B153C] hover:bg-[#17C2EC] w-32 py-2 rounded-md border-2 border-gray-600">Help centre</button>
                    </div>
                </div>
                <div className="relative w-full sm:w-auto flex justify-center">
                    <img src="/corona_virus.jpg" alt="corona_virus" className="w-60 h-60 sm:w-96 sm:h-[420px] rounded-4xl"/>
                    <img src="doctor.png" alt="doctor" className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl absolute sm:-left-12 -left-0 sm:top-32 top-24 shadow-xl"/>
                    <img src="corona.png" alt="corona" className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl absolute sm:-right-12 -right-0 sm:top-32 top-24 shadow-xl"/>
                    <div className="absolute -bottom-12 -left-2 sm:-left-12 flex gap-4 bg-white/25 shadow-lg backdrop-blur-sm rounded-lg border border-white/20 px-4 py-2 items-center">
                        <div className="specialist flex items-center">
                            <img src="specialist_1.png" alt="specialist_1" className="w-10 h-12 sm:w-14 sm:h-16 rounded-2xl"/>
                            <img src="specialist_2.png" alt="specialist_2" className="w-10 h-12 sm:w-14 sm:h-16 rounded-2xl -ml-3"/>
                            <img src="specialist_3.png" alt="specialist_3" className="w-10 h-12 sm:w-14 sm:h-16 rounded-2xl -ml-3"/>
                        </div>
                        <h1 className="font-bold">20+ <br /><span className="text-[#17C2EC]">Specialist</span></h1>
                    </div>
                </div>
            </section>
            </motion.section>
        </main>
    )
}