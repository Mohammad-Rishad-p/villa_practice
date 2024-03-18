import React from 'react'

const Navbar = () => {
    return (

        <div className='bg-white flex items-center justify-between'>
            {/* left */}
            <div className='pl-32 my-4'>
                <h1 className='text-4xl'>Villa</h1>
            </div>

            {/* right */}
            <div className='flex gap-6 pr-16'>
                <button className='hover:text-red-500'>Home</button>
                <button className='hover:text-red-500'>Properties</button>
                <button className='hover:text-red-500'>Property Details</button>
                <button className='hover:text-red-500'>Contact Us</button>

                {/* mail icon */}
                <button className='flex gap-1 items-center bg-black rounded-full'>
                    <svg className='text-white bg-red-500 w-8 p-2 rounded-full' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    <h1 className='text-white p-2 hover:text-red-500'>Schedule A Visit</h1>

                </button>
            </div>
        </div>

    )
}

export default Navbar