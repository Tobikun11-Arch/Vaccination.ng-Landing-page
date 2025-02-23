
export default function Contact() {
    return (
        <main className="h-screen w-full flex justify-center items-center bg-[#E7F0FF] text-black">
            <section className="flex">
                <div className="text-gray-500 text-sm font-semibold">
                    <h1 className="text-4xl font-bold text-black">Contact us</h1>
                    <p className="mt-7">Email, call, or complete the form to learn how <br /> <span className="text-blue-400 font-semibold">Vaccination.ng</span> can help you.</p>
                    <p className="mt-5">Vaccination@info.com</p>
                    <p>321-221-231</p>
                    <p className="underline text-black mt-5">Customer Support</p>
                </div>

                <form action="" className="p-4 bg-white h-full rounded-lg">
                    <h1 className="text-3xl font-semibold">Get in touch</h1>
                    <p className="mt-1">You can reach us anytime</p>
                    <div className="w-full flex gap-2 mt-8">
                        <input type="text" placeholder="First name" className="w-full border border-gray-500 outline-none p-2 rounded-lg text-xs font-semibold"/>
                        <input type="text" placeholder="Last name" className="w-full border border-gray-500 outline-none p-2 rounded-lg text-xs font-semibold"/>
                    </div>
                    <input type="text" name="" id="" placeholder="Your email" className="w-full border border-gray-500 outline-none p-2 rounded-lg text-xs font-semibold mt-2"/>
                </form>
            </section> 
        </main>
    )
}