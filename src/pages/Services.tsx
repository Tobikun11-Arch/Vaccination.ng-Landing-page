import { motion } from "framer-motion";
import { Shield, MoveRight, Users, Thermometer } from "lucide-react";

export default function Services() { 
  return (
    <main className="min-h-screen p-5 flex flex-col justify-center items-center w-full" id="services">
      {/* Search Section */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }} 
        className="bg-violet-700/10 shadow-lg backdrop-blur-xs w-full sm:w-3/5"
      >
        <div className="w-full bg-white/25 shadow-lg backdrop-blur-sm rounded-t-lg px-4 sm:px-10 py-4">
          <h1 className="text-xs sm:text-sm lg:text-base">
            Check your COVID-19 result on your Database
          </h1>
        </div>
        <div className="py-4 px-4 sm:px-10 flex flex-col lg:flex-row gap-3">
          <input type="text" placeholder="Okewo" className="bg-transparent border outline-none p-2 rounded-lg border-gray-500 w-full"/>
          <input type="text" placeholder="Okewo" className="bg-transparent border outline-none p-2 rounded-lg border-gray-500 w-full"/>
          <button className="bg-transparent border-2 border-gray-500 px-10 py-2 rounded-lg">Check</button>
        </div>
      </motion.section>

      {/* Why Get Vaccinated Section */}
      <motion.section 
        className="mt-10 w-full lg:px-16"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <h1 className="w-full text-2xl lg:text-4xl font-bold">
            Why get vaccinated <br /> today?
          </h1>
          <p className="w-full text-xs text-gray-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ex minus eum omnis amet impedit eaque asperiores 
            <br /> distinctio eveniet dolorum assumenda doloremque dicta ut tempora atque? Doloribus facilis sequi numquam.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-6 w-full lg:flex gap-6 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-full lg:w-full bg-white/25 shadow-lg backdrop-blur-sm px-6 pt-6 pb-14 rounded-b-4xl rounded-tl-4xl rounded-tr-[100px]"
          >
            <Shield size={45} className='bg-white/25 shadow-lg backdrop-blur-sm w-16 h-16 rounded-3xl p-2'/>
            <p className='text-blue-400 font-semibold mt-4'>Protects your immune <br /> system against viruses</p>
            <p className='mt-4 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia vel <br /> dignissimos soluta, laborum quidem impedit cupidita1e ut, illo velit <br /> doloremque dolorem sed hic recusandae esse dolores sit neque. Odit.</p>
            <button className='flex py-1 gap-2 text-blue-400 font-semibold mt-4 items-center'>Read more <MoveRight size={20}/></button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="mt-5 lg:mt-0 flex flex-col sm:flex-row gap-4 w-full h-full"
          >
            <div className="border-2 border-gray-500 rounded-2xl w-full p-4 flex flex-col justify-between">
              <div>
                <Users size={30} className='bg-white/25 shadow-lg backdrop-blur-sm p-1 rounded-lg'/>
                <p className='mt-4 font-semibold'>Minimize the spread<br />of the virus</p>
              </div>
              <button className='flex py-1 gap-2 text-blue-400 font-semibold mt-4 items-center'>Read more <MoveRight size={20}/></button>
            </div>

            <div className="border-2 border-gray-500 rounded-2xl w-full p-4 flex flex-col justify-between">
              <div>
                <Thermometer size={30} className='bg-white/25 shadow-lg backdrop-blur-sm p-1 rounded-lg'/>
                <p className='mt-4 font-semibold'>Protect yourself</p>
              </div>
              <button className='flex py-1 gap-2 text-blue-400 font-semibold mt-4 items-center'>Read more <MoveRight size={20}/></button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
