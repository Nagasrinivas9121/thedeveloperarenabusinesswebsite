import React from 'react';

const Contact = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-2xl text-dark/80">
            Have a question? Our team is here to help you
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-start md:flex-row gap-4">
          <div className="w-full md:w-1/2 shadow-lg p-8 rounded-2xl">
            <form className="space-y-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark/80 mb-2 font-semibold">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded border border-dark/20 outline-none placeholder:text-sm"
                    placeholder="Enter first name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-dark/80 mb-2 font-semibold">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded border border-dark/20 outline-none placeholder:text-sm"
                    placeholder="Enter last name"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-dark/80 mb-2 font-semibold">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded border border-dark/20 outline-none placeholder:text-sm"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-dark/80 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded border border-dark/20 outline-none placeholder:text-sm"
                  placeholder="Write your message..."
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
