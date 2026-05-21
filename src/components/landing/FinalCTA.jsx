import { Link } from "react-router-dom";

export default function FinalCTA() {

  return (

    <section className="mt-44 mb-36">

      <div className="

      rounded-[48px]

      bg-gradient-to-r
      from-sky-500
      via-blue-500
      to-purple-500

      text-white

      p-16
      lg:p-24

      text-center

      overflow-hidden

      ">

        <h2 className="

        text-5xl
        lg:text-7xl

        font-black

        leading-tight

        mb-10

        ">

          Ready For Your

          <br />

          Next Adventure?

        </h2>

        <p className="

        text-xl

        max-w-3xl

        mx-auto

        text-white/90

        mb-14

        ">

          Generate your personalized itinerary
          or discover curated travel packages
          designed for every traveler.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          {/* GENERATE */}

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

            transition-all

            ">

              Generate My Trip →

            </button>

          </Link>

          {/* EXPLORE */}

          <Link
            to="/login"
            state={{ redirectTo:"/packages" }}
          >

            <button className="

            px-10
            py-4

            rounded-full

            border
            border-white/30

            bg-white
            text-black

            hover:shadow-lg
            hover:-translate-y-[2px]

            transition-all

            ">

              Explore Packages

            </button>

          </Link>

        </div>

      </div>

    </section>

  );

}