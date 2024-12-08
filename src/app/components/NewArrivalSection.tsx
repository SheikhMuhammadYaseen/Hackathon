import Link from "next/link"; 

export default function NewArrivalSection() {
    return (
      <div className="bg-gray-100 py-12 px-6 max-w-full overflow-hidden">
    
        {/* Section Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-screen-xl mx-auto">
    
          {/* Left Side - Image */}
          <div className="w-full lg:w-10/12 max-w-4xl">
            <img
              src="/images/Asgaard sofa 1.png"
              alt="Asgard Sofa"
              className="w-full h-auto object-cover"
            />
          </div>
    
          {/* Right Side - Text */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            {/* Centering Container */}
            <div className="flex flex-col items-center lg:items-center text-center"> {/* Added text-center */}
              <p className="text-xl text-gray-500">New Arrival</p>
              <h2 className="text-5xl font-semibold text-gray-800 mt-2">Asgaard Sofa</h2>
              <Link href="/SingleProductPage">
                <button className="mt-6 py-2 px-10 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
    
        </div>
        
      </div>
    );
}