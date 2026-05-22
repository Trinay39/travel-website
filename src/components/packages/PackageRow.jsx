import hero from "../../assets/hero.png";

export default function PackageRow({title}){

const packages=[1,2,3,4,5,6];

return(

<section className="mb-20">

<div className="

flex
justify-between
items-center

px-10

mb-8

">

<h2 className="

text-5xl

font-black

">

{title}

</h2>

<button className="

text-sky-600

font-semibold

text-lg

">

View All →

</button>

</div>

<div className="

flex

gap-8

overflow-x-auto

px-10

pb-6

scroll-smooth

">

{packages.map((item)=>(

<div

key={item}

className="

min-w-[420px]

bg-white

rounded-[32px]

overflow-hidden

shadow-lg

hover:scale-[1.04]

hover:shadow-2xl

transition-all

duration-300

cursor-pointer

"

>

<img

src={hero}

className="

w-full

h-[320px]

object-cover

"

/>

<div className="p-8">

<div className="

flex
justify-between

mb-4

">

<h3 className="

text-4xl

font-black

">

Swiss Alps

</h3>

<span className="

text-yellow-500

font-bold

text-xl

">

★4.9

</span>

</div>

<p className="

text-neutral-500

text-lg

mb-5

">

8 Days • Luxury Adventure

</p>

<p className="

text-sky-600

font-black

text-3xl

">

₹1,80,000

</p>

</div>

</div>

))}

</div>

</section>

);

}