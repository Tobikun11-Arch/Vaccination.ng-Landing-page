
export default function Services() { 
  return (
    <main className="h-screen p-5 lg:p-10 flex flex-col items-center">
      <section className="bg-violet-700/10 shadow-lg backdrop-blur-xs w-full sm:w-3/5">
        <div className="w-full bg-white/25 shadow-lg backdrop-blur-sm rounded-t-lg px-4 sm:px-10 py-4">
         <h1 className="text-xs sm:text-sm lg:text-base">Check your COVID-19 result on your Database</h1>
        </div>
        <div className="py-4 px-4 sm:px-10 flex flex-col lg:flex-row gap-3">
          <input type="text" placeholder="Okewo" className="bg-transparent border outline-none p-2 rounded-lg border-gray-500 w-full"/>
          <input type="text" placeholder="Okewo" className="bg-transparent border outline-none p-2 rounded-lg border-gray-500 w-full"/>
          <button className="bg-transparent border-2 border-gray-500 px-10 py-2 rounded-lg">Check</button>
        </div>
        <div className="pb-4 mt-3 px-4 sm:px-10 flex gap-3">
          <div className="bg-white/10 shadow-lg backdrop-blur-sm w-full rounded-md flex px-2 sm:justify-center py-2">
            <h1 className="text-xs sm:text-md lg:text-base text-blue-400 font-semibold">Need a certificate for your COVID-19 result? Please click <span className="underline">here</span></h1>
          </div>
        </div>
      </section>

      <section className="mt-10 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between">
          <h1 className="w-full text-2xl lg:text-4xl font-bold">Why get vaccinated <br /> today?</h1>
          <p className="w-full text-xs text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ex minus eum omnis amet impedit eaque asperiores <br /> distinctio eveniet dolorum assumenda doloremque dicta ut tempora atque? Doloribus facilis sequi numquam.</p>
        </div>
        <div className="mt-6 w-full flex gap-2">
          <div className="border w-full">
            <h1>Icon</h1>
            <p>Protects your immune <br /> system against viruses</p>
          </div>
          <div className="flex gap-4 w-full">
            <div className="border w-full">
              <h1>Icon</h1>
              <p>Protects your immune <br /> system against viruses</p>
            </div>
            <div className="border w-full">
              <h1>Icon</h1>
              <p>Protects your immune <br /> system against viruses</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}