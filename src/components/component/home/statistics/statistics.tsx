"use client"
import React from "react"
import CountUp from 'react-countup';

export function Statistics() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-top">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-white  p-4 rounded-full">
            <DollarSignIcon className="w-8 h-8 text-main-primary-violet " />
          </div>
          <div className="text-4xl text-white font-bold">
            <CountUp
              start={4000}
              suffix="$"
              separator=","
              enableScrollSpy end={4324}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <p className="text-gray-300">Total Revenue</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-white  p-4 rounded-full">
            <UsersIcon className="w-8 h-8 text-main-primary-violet " />
          </div>
          <div className="text-4xl text-white font-bold">
            <CountUp
              start={1000}
              suffix="+"
              separator=","
              enableScrollSpy end={2412}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <p className="text-gray-300">Subscriptions</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-white  p-4 rounded-full">
            <CreditCardIcon className="w-8 h-8 text-main-primary-violet " />
          </div>
          <div className="text-4xl text-white font-bold">
            <CountUp
              start={1000}
              suffix="+"
              separator=","
              enableScrollSpy end={1524}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <p className="text-gray-300">Sales</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-white  p-4 rounded-full">
            <ActivityIcon className="w-8 h-8 text-main-primary-violet " />
          </div>
          <div className="text-4xl text-white font-bold">
            <CountUp
              start={1000}
              suffix="+"
              separator=","
              enableScrollSpy end={1321}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <p className="text-gray-300">Active Now</p>
        </div>
      </div>
    </section>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
