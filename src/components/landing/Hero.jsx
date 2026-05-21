import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {

  return (

    <section className="pt-24 pb-28 text-center">

      <motion.div

        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}

      >

        <div className="

        inline-flex
        items-center
        gap-3

        px-6
        py-3

        rounded-full

        backdrop-blur-xl
        bg-white/70

        border
        border-neutral-200

        shadow-sm

        mb-12

        ">

          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />

          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-600">

            Next Gen Travel Platform

          </span>

        </div>

        <h1 className="

        text-6xl
        md:text-8xl
        lg:text-[8rem]

        font-black

        leading-[0.90]

        tracking-[-0.08em]

        mb-10

        ">

          <span className="block bg-gradient-to-r from-slate-950 via-sky-600 to-cyan-400 bg-clip-text text-transparent">

            Explore Smarter

          </span>

          <span className="block bg-gradient-to-r from-slate-800 via-blue-500 to-purple-400 bg-clip-text text-transparent">

            Travel Better.

          </span>

        </h1>

        <p className="

        text-xl
        md:text-2xl

        text-neutral-600

        max-w-3xl
        mx-auto

        leading-relaxed

        mb-14

        ">

          Generate intelligent itineraries,
          discover curated experiences,
          and travel with confidence.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <Link
          to="/login"
          state={{ redirectTo:"/planner" }}
        >

          <button className="

          px-10
          py-4

          rounded-full

          bg-black
          text-white

          shadow-xl

          hover:scale-105

          transition

          ">

            Generate My Trip →

          </button>

        </Link>

        <Link
          to="/login"
          state={{ redirectTo:"/packages" }}
        >

          <button className="

          px-10
          py-4

          rounded-full

          border
          border-neutral-200

          backdrop-blur-xl
          bg-white/70

          hover:bg-neutral-50

          transition

          ">

            Explore Packages

          </button>

        </Link>

        </div>

      </motion.div>

    </section>

  );

}