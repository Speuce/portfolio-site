const ContactMe = () => {
    return (
        <div id="contact" className="bg-slate-500 w-full rounded-md shadow-md p-16">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-6xl text-slate-100 mb-12">
                Contact Me
            </h1>

            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>


                    <a href="mailto:matt@mkcodes.ca" target="_blank" className="text-slate-100 hover:text-white transition-all duration-200 ease-in-out text-xl sm:text-2xl mt-1">
                        matt@mkcodes.ca
                    </a>
                </div>
                <div className="flex flex-row gap-6">
                    <svg className="w-10 h-10 text-slate-100 " target="_blank" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <a href="https://www.linkedin.com/in/matthew-kwiatkowski/" className="text-slate-100 hover:text-white transition-all duration-200 ease-in-out text-xl sm:text-2xl mt-1">
                        LinkedIn
                    </a>
                </div>
                {/* Youtube */}
                <div className="flex flex-row gap-6">
                    <svg className="w-10 h-10 text-slate-100 " target="_blank" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-1.1-.9-2-2-2.2C17.6 5 12 5 12 5s-5.6 0-7.6-.2c-1.1.2-1.8 1.1-2 2.2C2 9.2 2 12 2 12s0 2.8.2 4.8c.2 1.1.9 2 2 2.2C6.4 19 12 19 12 19s5.6 0 7.6-.2c1.1-.2 1.8-1.1 2-2.2.2-2 .2-4.8.2-4.8s0-2.8-.2-4.8zM9.6 15.2V8.8l5.6 3.2-5.6 3.2z"/></svg>
                    <a href="https://www.youtube.com/channel/UCDsgh3EyGvO6iuKwKm_qXUA" className="text-slate-100 hover:text-white transition-all duration-200 ease-in-out text-xl sm:text-2xl mt-1">
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;