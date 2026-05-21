import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <motion.nav

      initial={{
        opacity:0,
        y:-25
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.8
      }}

      className="

      sticky
      top-0

      z-50

      backdrop-blur-xl
      bg-white/70

      border-b
      border-neutral-200/50

      "

    >

      <div className="

      max-w-7xl
      mx-auto

      px-6
      py-5

      flex
      justify-between
      items-center

      ">

        {/* LEFT */}

        <Link to="/">

          <div className="flex items-center gap-4 cursor-pointer">

            <div className="

            w-10
            h-10

            rounded-full

            bg-gradient-to-r
            from-sky-500
            to-purple-500

            " />

            <h1 className="

            text-3xl
            font-black

            bg-gradient-to-r
            from-sky-600
            to-purple-500

            bg-clip-text
            text-transparent

            ">

              VoyageAI

            </h1>

          </div>

        </Link>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          {/* SIGN IN */}

          <Link to="/login">

            <button className="

            px-6
            py-3

            rounded-full

            border
            border-neutral-300

            bg-white/70

            hover:shadow-lg
            hover:-translate-y-[2px]

            transition-all

            ">

              Sign In

            </button>

          </Link>

          {/* SIGN UP */}

          <Link to="/signup">

            <button className="

            px-7
            py-3

            rounded-full

            bg-black
            text-white

            shadow-lg

            hover:scale-105

            transition-all

            ">

              Sign Up

            </button>

          </Link>

        </div>

      </div>

    </motion.nav>

  );

}