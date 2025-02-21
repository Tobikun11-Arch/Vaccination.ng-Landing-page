
export default function Banner() {
    return (
        <div className="lg:w-full xl:w-full h-32 md:h-44 bg-gray-200 flex justify-evenly items-center px-4 mt-24 lg:mt-0">
            <img src="/moderna.png" alt="moderna logo"  className="h-2/5 md:h-3/5 w-full xl:w-3/5"/>
            <img src="/Pfizer.png" alt="Pfizer logo"  className="h-2/5 xl:h-3/5 w-full xl:w-3/5"/>
            <img src="/Astrazeneca.png" alt="Astrazeneca logo"  className="h-2/5 md:h-3/5 w-full"/>
            <img src="/Sinovac.png" alt="Sinovac logo"  className="md:h-2/5 xl:h-3/5 w-full"/>
        </div>
    )
}