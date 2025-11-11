import React from "react";
import { useForm } from "react-hook-form";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <section className="relative h-[100vh] flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_60%)] z-0"></div>

      {/* Left Section */}
      <div className="md:w-1/2 w-full relative z-10 mb-12 md:mb-0">
        <h2 className="text-[10vw] sm:text-[6vw] md:text-[4vw] font-[HB] leading-none uppercase">
          Let’s Connect
        </h2>
        <p className="text-zinc-400 font-['main'] mt-5 text-base md:text-lg max-w-md leading-relaxed">
          Have a project in mind, a collaboration idea, or just want to say hi?
          I’d love to hear from you. Fill out the form or reach me directly
          below.
        </p>

        <div className="mt-10 space-y-3 text-sm sm:text-base">
          <p className="flex items-center gap-3 text-zinc-300">
            <FaEnvelope className="text-white text-lg" />
            <a
              href="mailto:youremail@gmail.com"
              className="hover:text-white transition"
            >
              saqibkhatai@gmail.com
            </a>
          </p>
          <div className="flex gap-5 pt-4">

            <Link to="https://www.linkedin.com/in/saqib-farhan-214590340" className="hover:text-sky-400 transition">
              <FaLinkedin size={22} />
            </Link>
            <Link to="  https://github.com/SaqibFarhanProgrammer" className="hover:text-gray-300 transition">
              <FaGithub size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 w-full max-w-lg relative z-10">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full bg-transparent border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-zinc-400 transition"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-transparent border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-zinc-400 transition"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">Email is required</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="4"
                className="w-full bg-transparent border border-zinc-700 rounded-lg p-3 text-white outline-none focus:border-zinc-400 transition resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">Message is required</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300"
            >
              Send Message <FiArrowUpRight className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
