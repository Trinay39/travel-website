export default function AIFeature() {

  return (

    <section className="mt-44">

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}

        <div>

          <span className="

          uppercase
          tracking-[0.25em]

          text-sky-600
          font-semibold

          ">

            AI TRIP PLANNER

          </span>

          <h2 className="

          text-5xl
          lg:text-6xl

          font-black

          leading-tight

          mt-8
          mb-10

          ">

            Your Journey.

            <br />

            Planned

            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

              {" "}Intelligently.

            </span>

          </h2>

          <p className="

          text-xl
          text-neutral-600

          leading-relaxed

          mb-12

          ">

            Generate personalized itineraries
            based on destination,
            budget,
            duration,
            and travel style.

          </p>

          <div className="space-y-6">

            {[

              "Budget aware recommendations",
              "Luxury / Family / Adventure modes",
              "Save itinerary history",
              "Smart destination suggestions"

            ].map((item,idx)=>(

              <div
                key={idx}
                className="flex items-center gap-5"
              >

                <div className="

                w-10
                h-10

                rounded-full

                bg-sky-100

                flex
                items-center
                justify-center

                text-sky-600
                font-bold

                ">

                  ✓

                </div>

                <span className="text-neutral-700">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="

        rounded-[40px]

        overflow-hidden

        backdrop-blur-2xl
        bg-white/70

        border
        border-neutral-200

        p-8

        shadow-[0_30px_80px_rgba(0,0,0,0.08)]

        ">

          <div className="space-y-6">

            <div className="rounded-3xl bg-neutral-50 p-6">

              <p className="text-sm text-neutral-400">

                Destination

              </p>

              <h3 className="text-3xl font-bold mt-2">

                Kyoto, Japan

              </h3>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-neutral-50 p-6">

                <p className="text-sm text-neutral-400">

                  Budget

                </p>

                <h3 className="font-bold text-xl mt-2">

                  ₹95,000

                </h3>

              </div>

              <div className="rounded-3xl bg-neutral-50 p-6">

                <p className="text-sm text-neutral-400">

                  Duration

                </p>

                <h3 className="font-bold text-xl mt-2">

                  7 Days

                </h3>

              </div>

            </div>

            <div className="

            rounded-3xl

            bg-gradient-to-r
            from-sky-500
            to-purple-500

            text-white

            p-7

            ">

              <h3 className="text-2xl font-bold mb-5">

                Generated Itinerary

              </h3>

              <p className="leading-relaxed">

                Day 1 • Arrival & Check-In

                <br />

                Day 2 • Temples & Food Tour

                <br />

                Day 3 • Scenic Exploration

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}