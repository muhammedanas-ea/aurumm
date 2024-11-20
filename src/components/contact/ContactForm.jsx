const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10  min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-semibold mb-2">Start Today!</h2>
        <p className="text-lg mb-8">
          Ready to take the leap? Come say hi, and we will set things up!
        </p>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold">Email</h3>
          <p className="text-base">support@atts.in</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">Socials</h3>
          <p className="text-base my-2">Instagram</p>
          <p className="text-base">Facebook</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-[#07074D]"
            >
              Preferred Product
            </label>
            <select
              id="product"
              className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>--Select project type--</option>
              <option>Product A</option>
              <option>Product B</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-[#07074D]"
            >
              Budget
            </label>
            <input
              type="text"
              id="budget"
              placeholder="Enter your budget"
              className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
