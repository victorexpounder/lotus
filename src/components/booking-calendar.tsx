"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarIcon, Clock } from "lucide-react"

export default function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  function getTimezoneOffsetString(date: Date) {
    const offset = -date.getTimezoneOffset() // in minutes
    const sign = offset >= 0 ? "+" : "-"
    const absOffset = Math.abs(offset)
    const hours = String(Math.floor(absOffset / 60)).padStart(2, "0")
    const minutes = String(absOffset % 60).padStart(2, "0")
    return `${sign}${hours}:${minutes}`
  }
  
  function formatToCalendlyLocalISO(date: Date) {
    const pad = (n: number) => n.toString().padStart(2, "0")
  
    const year = date.getFullYear()
    const month = pad(date.getMonth() + 1)
    const day = pad(date.getDate())
    const hours = pad(date.getHours())
    const minutes = pad(date.getMinutes())
    const seconds = pad(date.getSeconds())
    const timezoneOffset = getTimezoneOffsetString(date)
  
    // Assuming your timezone is always +01:00
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneOffset}`
  }
  

  const Submit = () =>{
    const timeParts = time?.match(/(\d+):(\d+)\s?(AM|PM)/)
    if (!timeParts) return null

    let hours = parseInt(timeParts[1], 10)
    const minutes = parseInt(timeParts[2], 10)
    const period = timeParts[3]

    if (period === "PM" && hours < 12) hours += 12
    if (period === "AM" && hours === 12) hours = 0

    const combinedDate = new Date(date || new Date())
    combinedDate.setHours(hours, minutes)

    // Format as Calendly expects (e.g., 2025-04-24T14:30:00+01:00)
    const formattedDate = formatToCalendlyLocalISO(combinedDate)

    const calendlyLink = `https://calendly.com/mayokunjohnson1/30min/${formattedDate}`

    return (
      <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
        <Button className="w-full mt-4 bg-green-500 hover:bg-green-600" onClick={() => console.log(combinedDate)}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    )
  }

  if (step === 3) {
    return (
      <div className="text-center space-y-4">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Booking Confirmed!</h3>
        <p className="text-slate-300">
          We've sent a confirmation email to {email}. Looking forward to speaking with you!
        </p>
        <div className="bg-slate-700 p-4 rounded-lg mt-4">
          <div className="flex items-center gap-2 mb-2">
            <CalendarIcon className="h-4 w-4 text-blue-400" />
            <span>{date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {step === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-blue-400" />
              <h3 className="text-sm font-medium">Select a Date</h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              style={{ width: "100%" }}
              className="rounded-md border"
              disabled={(date) => {
                const day = date.getDay()
                // Disable weekends
                return day === 0 || day === 6
              }}
            />
          </div>

          {date && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <h3 className="text-sm font-medium">Select a Time</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {availableTimes.map((t) => (
                  <Button
                    key={t}
                    variant={time === t ? "default" : "outline"}
                    className={time === t ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-black"}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {date && time && (
            <Submit />
          )}
        </div>
      )
      } 
    </div>
  )
}
