import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-4'>Thank You!</h1>
            <p className='text-lg mb-6'>Your submission has been received.</p>
            <p className='text-lg'>We will get back to you shortly.</p>
        </div>
    )
}

export default page
