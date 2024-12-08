
export default function Footer() {
    return (
      <footer className="bg-white py-16 border-t px-32">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <p className="text-gray-500 py-20">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>
  
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font text-gray-500">Links</h4>
              <ul className="mt-2 space-y-6 text-gray-900 font-semibold">
                <li><a href="/">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font text-gray-500">Help</h4>
              <ul className="mt-2 space-y-6 text-gray-900 font-semibold">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h4 className="font text-gray-500">Newsletter</h4>
            <div className="mt-4 flex items-center border-b border-gray-800 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full outline-none text-gray-600 placeholder-gray-400"
              />
              <button className="text-black font-medium ml-4">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex border-b border-gray-300 pb-2"></div>
        {/* Copyright Section */}
        <div className="text-left text-gray-500 text-sm mt-10">
          2022 Meubel House. All rights reserved
        </div>
      </footer>
    );
  }
  