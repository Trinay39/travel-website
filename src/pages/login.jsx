import { useState } from "react";
import { motion } from "framer-motion";
import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Login() {

  const [activeTab,setActiveTab]=useState("email");

  const navigate = useNavigate();

  const location = useLocation();

  const redirectTo =
    location.state?.redirectTo || "/";

  function handleSignIn() {
    localStorage.setItem("voyageaiSignedIn", "true");
    navigate(redirectTo);
  }

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

        initial={{opacity:0,y:40}}

        animate={{opacity:1,y:0}}

        transition={{duration:0.8}}

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

        {/* LEFT */}

        <div className="p-16 flex flex-col justify-center">

          <span className="

          uppercase
          tracking-[0.25em]

          text-sky-600
          font-semibold

          mb-8

          ">

            Welcome Back

          </span>

          <h1 className="

          text-5xl
          lg:text-6xl

          font-black

          leading-tight

          mb-8

          ">

            Sign In To

            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

              {" "}VoyageAI

            </span>

          </h1>

          <p className="text-neutral-600 text-lg leading-relaxed">

            Continue your journey.
            Access saved itineraries,
            personalized travel plans,
            and premium travel experiences.

          </p>

        </div>

        {/* RIGHT */}

        <div className="bg-neutral-50 p-16 flex items-center">

          <div className="w-full">

            {/* LOGIN TOGGLE */}

            <div className="

            flex
            bg-white

            rounded-2xl

            p-2

            border
            border-neutral-200

            mb-10

            ">

              <button

                onClick={()=>setActiveTab("email")}

                className={`

                flex-1
                py-3

                rounded-xl

                font-semibold

                transition-all

                ${activeTab==="email"

                  ? "bg-black text-white"

                  : "text-neutral-500"

                }

                `}

              >

                Email Login

              </button>

              <button

                onClick={()=>setActiveTab("otp")}

                className={`

                flex-1
                py-3

                rounded-xl

                font-semibold

                transition-all

                ${activeTab==="otp"

                  ? "bg-black text-white"

                  : "text-neutral-500"

                }

                `}

              >

                OTP Login

              </button>

            </div>

            {/* EMAIL FORM */}

            {activeTab==="email" && (

              <div className="space-y-6">

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

              </div>

            )}

            {/* OTP FORM */}

            {activeTab==="otp" && (

              <div className="space-y-6">

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

                <div>

                  <label className="block mb-3 font-semibold">

                    Enter OTP

                  </label>

                  <input

                    type="text"

                    placeholder="123456"

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

            )}

            {/* SIGN IN BUTTON */}

            <button

              onClick={handleSignIn}

              className="

              w-full

              mt-10

              py-4

              rounded-2xl

              bg-black
              text-white

              font-semibold

              hover:scale-[1.02]

              transition-all

              "

            >

              Sign In →

            </button>

            {/* FOOTER */}

            <p className="text-center text-neutral-500 mt-8">

              Don't have an account?

              <Link to="/signup">

                <span className="text-sky-600 font-semibold cursor-pointer">

                  {" "}Create One

                </span>

              </Link>

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  );

}
