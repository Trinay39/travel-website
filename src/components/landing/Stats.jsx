export default function Stats() {

  return (

    <section className="mt-36">

      <div className="grid md:grid-cols-4 gap-8 text-center">

        {[

          ["50K+","Happy Travelers"],
          ["120+","Destinations"],
          ["4.9★","Average Rating"],
          ["24/7","Support"]

        ].map((item,idx)=>(

          <div

            key={idx}

            className="

            rounded-3xl

            backdrop-blur-xl
            bg-white/70

            border
            border-neutral-200

            p-8

            shadow-sm

            "

          >

            <h2 className="

            text-5xl
            font-black

            bg-gradient-to-r
            from-sky-500
            to-purple-500

            bg-clip-text
            text-transparent

            ">

              {item[0]}

            </h2>

            <p className="mt-4 text-neutral-500">

              {item[1]}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}