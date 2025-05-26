import BookingCalendar from '@/components/booking-calendar'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='flex flex-col justify-center h-screen w-full overflow-scroll'>
           <section className="max-sm:py-12 h-screen bg-slate-900 text-white w-full overflow-scroll" id="offer">
                <div
                className="w-full flex items-center justify-center h-screen container px-4 md:px-6"
                >
                <div className="w-full flex max-sm:flex-col  gap-6 items-center">
                    <div className="w-full space-y-4 sm:flex-[2]">
                        <iframe className='h-[350px] sm:h-[480px]' src="https://drive.google.com/file/d/16sR1BoC2SMUqJqRX3JbckU9VoFUq7xoL/preview" width="100%"  allow="autoplay" allowFullScreen></iframe>
                    </div>
                    <div className="w-full relative rounded-xl overflow-hidden sm:flex-[1]">
                        <div id="calendar" className="bg-slate-800  p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-6">Schedule Your Call</h3>
                            <BookingCalendar />
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default page
