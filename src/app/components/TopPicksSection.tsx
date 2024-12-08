import Image from 'next/image'

export default function TopPicksSection() {
  return (
    <div className="bg-white py-12 px-6">

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Top Picks for You</h2>
        <p className="mt-4 text-lg text-gray-600">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>

      {/* Product Section */}
      <div className="flex justify-center gap-8 flex-wrap">

        {/* First Product */}
        <div className="text-center  p-6 rounded-lg w-64 mb-6">
          <Image
            src="/images/tp1.png" 
            alt="Product 1"
            width={300}
            height={300}
            className="mx-auto h-56"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Product 1</h3>
          <p className="mt-2 text-gray-600">Trenton modular sofa_3</p>
          <p className="mt-2 text-lg text-gray-500">Rs. 25000.00</p>
        </div>

        {/* Second Product */}
        <div className="text-center  p-6 rounded-lg w-64 mb-6">
          <Image
            src="/images/tp2.png"
            alt="Product 2"
            width={300}
            height={300}
            className="mx-auto h-56"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Product 2</h3>
          <p className="mt-2 text-gray-600">Granite dining table with </p>
          <p className="mt-2 text-lg text-gray-500">Rs. 25000.00</p>
        </div>

        {/* Third Product */}
        <div className="text-center  p-6 rounded-lg w-64 mb-6">
          <Image
            src="/images/tp3.png" 
            alt="Product 3"
            width={300}
            height={300}
            className="mx-auto h-56"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Product 3</h3>
          <p className="mt-2 text-gray-600">Outdoor bar table and stool</p>
          <p className="mt-2 text-lg text-gray-500">Rs. 25000.00</p>
        </div>

        {/* Fourth Product */}
        <div className="text-center  p-6 rounded-lg w-64 mb-6">
          <Image
            src="/images/tp4.png" 
            alt="Product 4"
            width={300}
            height={300}
            className="mx-auto h-56"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Product 4</h3>
          <p className="mt-2 text-gray-600">Plain console with teak</p>
          <p className="mt-2 text-lg text-gray-500">Rs. 25000.00</p>
        </div>

      </div>
      
    </div>
  )
}