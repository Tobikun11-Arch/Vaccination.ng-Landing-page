import { Mail } from 'lucide-react';

export default function Contact() {
    return (
        <main className="h-screen w-full flex justify-center items-center bg-[#E7F0FF] text-black px-4" id='contact'>
            <section className="flex flex-col md:flex-row gap-12">
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
                        <input type="text" placeholder="First name" className="w-full border border-gray-300 outline-none p-2 rounded-lg text-xs font-semibold"/>
                        <input type="text" placeholder="Last name" className="w-full border border-gray-300 outline-none p-2 rounded-lg text-xs font-semibold"/>
                    </div>
                    <div className='relative w-full mt-2'>
                        <input type="email" name="email" id="" placeholder="Your email" className="w-full border border-gray-300 outline-none pl-8 py-2 pr-2  rounded-lg text-xs font-semibold"/>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Mail size={15} color='gray'/>
                        </div>
                    </div>
                    <input type="text" placeholder="Phone number" className="mt-2 w-full border border-gray-300 outline-none p-2 rounded-lg text-xs font-semibold"/>
                    <textarea name="" id="" className='text-xs font-semibold border w-full outline-none mt-4 border-gray-300 resize-none p-2 rounded-md h-24' placeholder='How can we help?'></textarea>
                    <button className='bg-blue-600 text-white font-semibold text-xs w-full py-2 mt-3 rounded-lg'>Submit</button>
                </form>
            </section> 
        </main>
    )
}