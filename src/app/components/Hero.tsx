"use client";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FBEBB5] py-12 px-6 lg:px-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:px-20">
        {/* Left Side Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl text-gray-800 leading-tight">
            Rocket Single
          </h1>
          <h1 className="text-4xl lg:text-6xl text-gray-800 leading-tight">
            Seater
          </h1>
          <a
            href="/Shop"
            className="text-lg text-black font-semibold inline-block relative hover:text-white"
          >
            Shop Now
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black hover:bg-white transform translate-y-2"></span>
          </a>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="/images/seater.png"
            alt="Rocket Single Seater"
            className="w-3/4 sm:w-2/3 lg:w-full max-w-xs sm:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
