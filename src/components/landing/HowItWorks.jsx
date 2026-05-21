export default function HowItWorks() {

  const steps=[

    {
      num:"01",
      title:"Tell Us Your Preferences",
      desc:"Choose destination, budget, duration, and preferred travel style."
    },

    {
      num:"02",
      title:"Generate Smart Itinerary",
      desc:"AI creates a personalized travel plan designed for your journey."
    },

    {
      num:"03",
      title:"Explore & Book",
      desc:"Save itineraries, browse packages, and start traveling."
    }

  ];

  return (

    <section className="mt-44">

      <div className="text-center mb-24">

        <span className="

        uppercase
        tracking-[0.25em]

        text-sky-600
        font-semibold

        ">

          HOW IT WORKS

        </span>

        <h2 className="

        text-5xl
        lg:text-6xl

        font-black

        mt-8
        mb-8

        ">

          Plan Your Dream Trip

          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

            {" "}In Minutes.

          </span>

        </h2>

        <p className="

        text-xl
        text-neutral-600

        max-w-3xl
        mx-auto

        ">

          Simple workflow.
          Powerful personalization.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {steps.map((step,idx)=>(

          <div

            key={idx}

            className="

            rounded-[36px]

            backdrop-blur-xl
            bg-white/70

            border
            border-neutral-200

            p-10

            shadow-[0_20px_60px_rgba(0,0,0,0.05)]

            hover:-translate-y-3

            transition-all
            duration-300

            "

          >

            <div className="

            w-16
            h-16

            rounded-2xl

            bg-gradient-to-r
            from-sky-500
            to-purple-500

            text-white

            flex
            items-center
            justify-center

            font-black
            text-xl

            mb-8

            ">

              {step.num}

            </div>

            <h3 className="text-3xl font-bold mb-6">

              {step.title}

            </h3>

            <p className="text-neutral-600 leading-relaxed">

              {step.desc}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}