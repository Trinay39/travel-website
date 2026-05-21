import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {

  return (

    <div className="

    min-h-screen

    bg-white

    flex
    items-center
    justify-center

    px-6

    relative
    overflow-hidden

    ">

      {/* BACKGROUND LIGHTS */}

      <div className="absolute top-[-150px] left-[-100px] w-[420px] h-[420px] bg-cyan-100 rounded-full blur-[140px] opacity-50" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-100 rounded-full blur-[130px] opacity-50" />

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

        className="

        relative

        max-w-6xl
        w-full

        grid
        lg:grid-cols-2

        rounded-[40px]

        overflow-hidden

        shadow-[0_30px_80px_rgba(0,0,0,0.08)]

        border
        border-neutral-200

        bg-white

        "

      >

        {/* LEFT PANEL */}

        <div className="p-16 flex flex-col justify-center">

          <span className="

          uppercase
          tracking-[0.25em]

          text-sky-600
          font-semibold

          mb-8

          ">

            Join VoyageAI

          </span>

          <h1 className="

          text-5xl
          lg:text-6xl

          font-black

          leading-tight

          mb-8

          ">

            Create Your

            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

              {" "}Account

            </span>

          </h1>

          <p className="text-neutral-600 text-lg leading-relaxed">

            Start your personalized travel experience.
            Save itineraries,
            explore packages,
            and unlock intelligent travel planning.

          </p>

        </div>

        {/* RIGHT PANEL */}

        <div className="bg-neutral-50 p-16 flex items-center">

          <div className="w-full">

            <div className="space-y-5">

              {/* USER ID */}

              <div>

                <label className="block mb-3 font-semibold">

                  User ID

                </label>

                <input
                  type="text"
                  placeholder="travelmaster001"
                  className="

                  w-full
                  px-6
                  py-4

                  rounded-2xl

                  border
                  border-neutral-200

                  bg-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400

                  "
                />

              </div>

              {/* NAME */}

              <div>

                <label className="block mb-3 font-semibold">

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="

                  w-full
                  px-6
                  py-4

                  rounded-2xl

                  border
                  border-neutral-200

                  bg-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400

                  "
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="block mb-3 font-semibold">

                  Phone Number

                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="

                  w-full
                  px-6
                  py-4

                  rounded-2xl

                  border
                  border-neutral-200

                  bg-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400

                  "
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block mb-3 font-semibold">

                  Email Address

                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="

                  w-full
                  px-6
                  py-4

                  rounded-2xl

                  border
                  border-neutral-200

                  bg-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400

                  "
                />

              </div>

              {/* PASSWORDS */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="block mb-3 font-semibold">

                    Password

                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="

                    w-full
                    px-6
                    py-4

                    rounded-2xl

                    border
                    border-neutral-200

                    bg-white

                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400

                    "
                  />

                </div>

                <div>

                  <label className="block mb-3 font-semibold">

                    Confirm Password

                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="

                    w-full
                    px-6
                    py-4

                    rounded-2xl

                    border
                    border-neutral-200

                    bg-white

                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400

                    "
                  />

                </div>

              </div>

            </div>

            {/* BUTTON */}

            <button className="

            w-full

            mt-10

            py-4

            rounded-2xl

            bg-black
            text-white

            font-semibold

            hover:scale-[1.02]

            transition-all

            ">

              Create Account →

            </button>

            {/* FOOTER */}

            <p className="text-center text-neutral-500 mt-8">

              Already have an account?

              <Link to="/login">

                <span className="text-sky-600 font-semibold cursor-pointer">

                  {" "}Sign In

                </span>

              </Link>

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  );

}