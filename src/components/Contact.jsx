import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSendMessage, setShowSendMessage] = useState(false);
  const [buttonSize, setButtonSize] = useState("px-4 py-4");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleMouseEnter = () => {
    setShowSendMessage(true);
    setButtonSize("px-6 py-6 scale-110");
  };

  const handleMouseLeave = () => {
    setShowSendMessage(false);
    setButtonSize("px-4 py-4 scale-100");
  };

  useEffect(() => {
    // You can add any necessary code here, such as loading the Google Maps API
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 text-white">
      <div
        id="map"
        className="relative w-full overflow-hidden border border-[0.5] border-opacity-50 rounded-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.477390103438!2d-51.5066673781034!3d-27.17410077219427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3faab3e246e29%3A0x76930ccaad948e2a!2sJoa%C3%A7aba%2C%20State%20of%20Santa%20Catarina!5e1!3m2!1sen!2sbr!4v1724189053011!5m2!1sen!2sbr"
          className="w-full h-[350px] rounded-lg bg-black"
          loading="lazy"
        ></iframe>
      </div>
      <form
        className="w-full max-w-3xl p-5 bg-zinc-900 rounded-lg shadow-lg mt-5"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6 mb-4">
          <div className="w-2/3">
            <label htmlFor="name" className="block mb-1 text-lg font-medium">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-3 text-white bg-zinc-600 border border-zinc-500 rounded-lg placeholder-zinc-400"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-2/3 mb-4">
            <label htmlFor="email" className="block mb-1 text-lg font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 text-white bg-zinc-600 border border-zinc-500 rounded-lg placeholder-zinc-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-lg font-medium">
            Message:
          </label>
          <input
            type="text"
            name="message"
            id="message"
            required
            className="w-full p-3 text-white bg-zinc-600 border border-zinc-500 rounded-lg placeholder-zinc-400"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`selected flex items-center justify-center rounded-lg bg-zinc-500 hover:bg-black mt-10 transition-all duration-300 ${buttonSize}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Plane className="mr-2" />
            {showSendMessage && (
              <span className="animate-bounce">Send</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;