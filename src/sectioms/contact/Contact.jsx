import React from "react";
import { useForm } from "react-hook-form";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4 z-10 relative">
      <div
        className="
          w-full max-w-3xl rounded-xl shadow-2xl backdrop-blur-2xl
          bg-gradient-to-b from-[#f5f5f5]/80 to-[#fff]/90 
          p-10 z-10 relative
          h-auto xs:h-[90vh]
        "
      >
        <h1 className="text-4xl font-light text-center mb-10 text-zinc-800 z-10 relative">
          Get in touch
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5 relative z-10 text-white"
        >
          {/* Name */}
          <div className="flex flex-col z-10 relative">
            <label className="bg-black text-white text-xs rounded-full px-3 py-1 w-fit -mb-2 ml-3 tracking-widest">
              NAME
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="bg-transparent border border-zinc-400 rounded-md p-3 outline-none text-black focus:border-zinc-700"
            />
            {errors.name && (
              <span className="text-xs text-red-600 mt-1">
                Name is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col z-10 relative">
            <label className="bg-black text-white text-xs rounded-full px-3 py-1 w-fit -mb-2 ml-3 tracking-widest">
              EMAIL
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="bg-transparent border border-zinc-400 rounded-md p-3 outline-none text-black focus:border-zinc-700"
            />
            {errors.email && (
              <span className="text-xs text-red-600 mt-1">
                Email is required
              </span>
            )}
          </div>

          {/* Message */}
          <div className="col-span-2 flex flex-col z-10 relative">
            <label className="bg-black text-white text-xs rounded-full px-3 py-1 w-fit -mb-2 ml-3 tracking-widest">
              MESSAGE
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              className="bg-transparent border border-zinc-400 rounded-md p-3 outline-none text-black focus:border-zinc-700"
            ></textarea>
            {errors.message && (
              <span className="text-xs text-red-600 mt-1">
                Message is required
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="absolute -right-1 bottom-0 bg-black text-white p-4 rounded-full hover:bg-zinc-800 transition-all duration-300 z-10"
          >
            <FiArrowUpRight className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
