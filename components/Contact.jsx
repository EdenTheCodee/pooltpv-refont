import React from 'react'

function Contact() {
    //Dummy function for form submission
    const onSubmit = (e) => {
        e.preventDefault();
        
    };
    const result = "";

    return (
        <div id='contact' className='mt-24'>
            <h1 className=' text-center text-3xl md:text-4xl font-bold  mb-4 tracking-tight drop-shadow-sm'>Contact Us</h1>
            <div className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Reach Us */}
                    <div className="flex flex-col gap-2 justify-center md:items-start items-center">
                        <h2 className="text-2xl font-bold mb-4">Reach us</h2>
                        <p className="mb-2 font-semibold">Sahil Khan (CEO) </p>
                        <div className="mb-2 flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-green text-white mr-2">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <span>Address: Khasra No 53/22, 58/3, Mauja Gaunchi,<br/> Faridabad-121004, Haryana, India</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-green text-white mr-2">
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            <span>Phone: +91-8044951216</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-green text-white mr-2">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span>Email: info@sahilenterprises.com</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className='text-center text-3xl mb-2'>Get in touch</h2>
                        <p className='text-center max-w-2xl mx-auto  mb-4 '>
                            If you have any questions, comments, or feedback please use the form below:
                        </p>
                        <form
                            onSubmit={onSubmit}
                            className='max-w-2xl mx-auto'
                        >
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 mb-4'>
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    required
                                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                                    name='name'
                                />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    required
                                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                                    name='email'
                                />
                            </div>
                            <textarea
                                rows='6'
                                placeholder='Enter Your Message'
                                required
                                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-4'
                                name='message'
                            ></textarea>
                           <button className='bg-forest-green text-white mt-8 px-8 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-forest-green/90 transition block mx-auto'>Submit now</button>
                            <p className='mt-4'>{result}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact