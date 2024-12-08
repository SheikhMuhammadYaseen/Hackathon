
import Image from 'next/image'

export default function Hero2() {
  return (
    <div className="bg-[#FAF4F4] py-12 px-4 sm:px-6 md:px-8 lg:px-36 mx-auto max-w-screen-lg">

      {/* Side tables section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* First Side Table */}
        <div className="text-left">
          <Image
            src="/images/Granite square.png" 
            alt="Side Table"
            width={400}
            height={400}
            className="w-auto h-80"
          />
          <h3 className="mt-0 text-2xl font-medium text-gray-800">Side table</h3>
          <a
            href="/Shop"
            className="text-lg text-black inline-block relative"
          >
            Shop Now
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
          </a>
        </div>

        {/* Second Side Table (Couch) */}
        <div className="text-left">
          <Image
            src="/images/Cloud sofa.png"
            alt="Side Table"
            width={400}
            height={400}
            className="mx-auto h-80"
          />
          <h3 className="mt-0x text-2xl font-medium text-gray-800">Side table</h3>
          <a
            href="/Shop"
            className="text-lg text-black inline-block relative"
          >
            Shop Now
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
          </a>
        </div>

      </div>

    </div>
  )
}
