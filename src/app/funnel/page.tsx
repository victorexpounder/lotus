'use client'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from "motion/react"
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"

interface Props {
    
}

const page = (props: Props) => {
    const controls = useAnimation()
    const heroControls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [step, setStep] = useState(1);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    useEffect(() => {
        heroControls.start("visible")
        if(inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
        },
    }

    const handleNext = (e: any) =>{
        e.preventDefault()
        const form = e.target.form 
        const firstname = form.firstname.value.trim()
        const lastname = form.lastname.value.trim()
        const phone = form.phone.value.trim()
        const email = form.email.value.trim()
        const company = form.company.value.trim()

        if (firstname && lastname && phone && email && company) {
            setFirstname(firstname);
            setLastname(lastname);
            setPhone(phone);
            setEmail(email);
            setCompany(company);
            // Proceed to the next step
            setStep(2);
        } else {
            alert("Please fill in name and email.");
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = e.target;

        const score =
        parseInt(form.Budget.value) +
        parseInt(form.Authority.value) +
        parseInt(form.Need.value) +
        parseInt(form.Experience.value) +
        parseInt(form.Timing.value);

        const category =
        score >= 8 ? 'HOT lead' : score >= 5 ? 'WARM lead' : 'COLD lead';

        const hiddenScore = document.createElement('input');
        hiddenScore.type = 'hidden';
        hiddenScore.name = 'Total Score';
        hiddenScore.value = String(score);

        const hiddenCategory = document.createElement('input');
        const hiddenfirstname = document.createElement('input');
        const hiddenlastname = document.createElement('input');
        const hiddencompany = document.createElement('input');
        const hiddenphone = document.createElement('input');
        const hiddenemail = document.createElement('input');
        hiddenfirstname.type = 'hidden';
        hiddenfirstname.name = 'First Name';
        hiddenfirstname.value = firstname;
        hiddenlastname.type = 'hidden';
        hiddenlastname.name = 'Last Name';
        hiddenlastname.value = lastname;
        hiddencompany.type = 'hidden';
        hiddencompany.name = 'Company';
        hiddencompany.value = company;
        hiddenphone.type = 'hidden';
        hiddenphone.name = 'Phone';
        hiddenphone.value = phone;
        hiddenemail.type = 'hidden';
        hiddenemail.name = 'Email';
        hiddenemail.value = email;
        hiddenCategory.type = 'hidden';
        hiddenCategory.name = 'Lead Category';
        hiddenCategory.value = category;

        form.appendChild(hiddenfirstname);
        form.appendChild(hiddenlastname);
        form.appendChild(hiddencompany);
        form.appendChild(hiddenphone);
        form.appendChild(hiddenemail);
        form.appendChild(hiddenScore);
        form.appendChild(hiddenCategory);
        form.submit();
  };

    return (
        <div className="flex overflow-hidden min-h-screen flex-col"> 
            <Navbar showNav={false}/>
            {/* Contact Section */}
            <section className="min-h-screen max-sm:mt-4 py-20 bg-white flex items-center justify-center" id="contact">
                <div className="container px-4 md:px-6 ">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div 
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    >
                    <div className="inline-block max-sm:hidden rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900 mb-4">
                        Get Started
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want More Leads?</h2>
                    <p className="text-gray-500 md:text-xl/relaxed">
                        Get the 4-part framework smart founders use to turn ads into paying customers.
                    </p>
                    <p className="text-gray-500 font-semibold md:text-lg/relaxed">
                        Fill out the form to get instant access.
                    </p>
                    
                    </motion.div>
                    <motion.div 
                    className="bg-slate-50 p-8 rounded-xl h-[450px] overflow-scroll"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    >
                    <form
                     className="space-y-4" 
                     action="https://formsubmit.co/lotusmedia101@gmail.com" 
                     method="POST"
                     onSubmit={handleSubmit}
                     >
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4 }}
                                    className='flex flex-col gap-4'
                                >
                                    <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                        htmlFor="firstname"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                        First name
                                        </label>
                                        <input
                                        id="firstname"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John"
                                        name="firstname"
                                        required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                        htmlFor="lastname"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                        Last name
                                        </label>
                                        <input
                                        id="lastname"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Doe"
                                        name="lastname"
                                        required
                                        />
                                    </div>
                                    </div>

                                    <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="+2349134052630"
                                        pattern="[0-9+]+"
                                        title="Please enter a valid phone number"
                                        required
                                        autoComplete="tel"
                                        autoCorrect="off"
                                        name="phone"
                                    />
                                    </div>

                                    <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="john.doe@example.com"
                                        name="email"
                                        required
                                    />
                                    </div>
                                    <div className="space-y-2">
                                    <label
                                        htmlFor="company"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Acme Inc."
                                        name="company"
                                        required
                                    />
                                    </div>
                                    <Button onClick={handleNext} className="w-full bg-purple-600 hover:bg-purple-700">
                                    Next
                                    </Button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4 }}
                                    className='flex flex-col gap-4 h-'
                                >
                                    <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">What's your monthly budget for lead generation?</label>
                                    <select name="Budget" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="3">Select An Option</option>
                                        <option value="3">₦250k or more</option>
                                        <option value="2">₦150k–₦249k</option>
                                        <option value="1">₦100k–₦149k</option>
                                        <option value="0">Less than ₦100k</option>
                                    </select>
                                    </div>

                                    <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Are you the final decision-maker?</label>
                                    <select name="Authority" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="2">Select An Option</option>
                                        <option value="2">Yes</option>
                                        <option value="1">Need to consult team</option>
                                        <option value="0">Just researching</option>
                                    </select>
                                    </div>

                                    <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">What's your biggest challenge with getting leads?</label>
                                    <select name="Need" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="2">Select An Option</option>
                                        <option value="2">Urgent pain (e.g., struggling to get leads)</option>
                                        <option value="1">Moderate pain / looking to grow</option>
                                        <option value="0">No problem expressed</option>
                                    </select>
                                    </div>

                                    <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Have you used paid ads before?</label>
                                    <select name="Experience" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="1">Select An Option</option>
                                        <option value="1">Yes and got results</option>
                                        <option value="0">No or bad experience</option>
                                    </select>
                                    </div>

                                    <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">When do you want to start?</label>
                                    <select name="Timing" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="2">Select An Option</option>
                                        <option value="2">Immediately / 1–2 weeks</option>
                                        <option value="1">2–4 weeks</option>
                                        <option value="0">Later / Not sure</option>
                                    </select>
                                    </div>

                                    <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Additional Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us about your project..."
                                        name="message"
                                    ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                    Submit
                                    </Button>

                                </motion.div>
                            )}
                        </AnimatePresence>

                    </form>
                    </motion.div>
                </div>
                </div>
            </section>
        </div>
        
    )
}

export default page
