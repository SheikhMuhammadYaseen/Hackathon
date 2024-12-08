export default function InstagramSection() {
    return (
      <section className="bg-white py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Title */}
          <h2 className="text-6xl font-bold text-gray-800 mb-4">Our Instagram</h2>
          <p className="text-gray-600 mb-8">Follow our store on Instagram</p>
  
          {/* Follow Button */}
          <button className="bg-[#F4F4F4] text-gray-800 font-medium py-2 px-9 rounded-full shadow-xl  hover:shadow-lg transition-shadow">
            Follow Us
          </button>
        </div>
  
        {/* Background Image*/}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center "
            style={{ backgroundImage: "url('/images/rec.png')" }}  
          ></div>
         
        </div>
      </section>
    );
  }