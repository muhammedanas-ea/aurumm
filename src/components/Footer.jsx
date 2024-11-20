import logo from "../../public/Aurum_Logo.38df8d15.png";

const Footer = () => {
  return (
    <footer className="text-[#1A3866] py-8 mt-8" style={{
        backgroundImage: `url('/product/Section.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="max-w-[1120px] lg:mx-auto mx-6">
        <div className="flex  justify-between items-center border-b border-[#1A3866] pb-6 mb-6">
          <ul className="flex items-center gap-5 text-base font-semibold">
            <li>Home</li>
            <li>Contact</li>
          </ul>
          <div className="bg-white p-2 rounded-md flex items-center gap-16">
            <h1>Ready To Begin?</h1>
            <button className="bg-[#41945A] p-2  rounded-[8px] text-white">Get a Demo</button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm border-b border-[#1A3866] pb-6">
          <div>
            <img src={logo} alt="Aurum Logo" className="h-12" />
            <p className="mt-4 text-sm font-normal">
              World-class technical solutions for elevated <br /> jewellery
              store operations.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">QUICKLINKS</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:underline">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-3">SOLUTIONS</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:underline">
                  AU Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AU Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AU Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>0422 4957575</p>
            <h3 className="font-semibold mb-2 mt-3">Email</h3>
            <p>
              <a href="mailto:support@atts.in" className="hover:underline">
                support@atts.in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-xs text-gray-600">
          <p>
            Aurumm made by{" "}
            <span className="font-semibold">ATTS Technologies</span>. All Rights
            Reserved© 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
