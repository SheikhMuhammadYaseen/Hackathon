import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function MyAccount() {
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Shop Heading */}
            <h1 className="text-4xl font-bold text-gray-900">My Account</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>My Account</span>
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroShop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>

      












      <main className="min-h-screen w-full bg-[#ffffff] text-black flex flex-col md:flex-row">
  {/* Login Column */}
  <div className="w-full md:w-1/2 max-w-lg mx-auto p-8 md:p-16">
    <h1 className="text-4xl font-bold mb-8">Log In</h1>

    <form className="space-y-6">
      <div>
        <label htmlFor="username" className="block mb-2">
          Username or email address
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          className="w-4 h-4 border border-gray-300 rounded-sm focus:ring-0"
        />
        <label htmlFor="remember" className="ml-2">
          Remember me
        </label>
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="px-8 py-2 border border-black rounded-lg hover:bg-gray-100"
        >
          Log In
        </button>
        <a className="text-black hover:underline">Lost Your Password?</a>
      </div>
    </form>
  </div>

  {/* Register Column */}
  <div className="w-full md:w-1/2 max-w-lg mx-auto p-8 md:p-16 bg-[#ffffff]">
    <h1 className="text-4xl font-bold mb-8">Register</h1>

    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block mb-2">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <p className="text-gray-600">
        A link to set a new password will be sent to your email address.
      </p>

      <p className="text-gray-600">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <a className="underline hover:text-black">privacy policy</a>.
      </p>

      <button
        type="submit"
        className="px-8 py-2 border border-black rounded-lg hover:bg-gray-100"
      >
        Register
      </button>
    </form>
  </div>
</main>


















      <div className="bg-[#FAF4F4] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Free Delivery Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">Free Delivery</div>
            <p className="mt-2 text-gray-600">
            For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">90 Days Return</div>
            <p className="mt-2 text-gray-600">
            If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">Secure Payment</div>
            <p className="mt-2 text-gray-600">
            100% secure payment, consectetur adipim scing elit..
            </p>
          </div>
        </div>
      </div>
    </div>









    </div>








  );
}
