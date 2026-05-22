export default function PackageCard({

title,
image,
days,
price,
rating

}) {

return(

<div className="

bg-white

rounded-[32px]

overflow-hidden

shadow-lg

hover:shadow-2xl
hover:-translate-y-2

transition-all
duration-300

">

<img

src={image}

className="

w-full
h-72

object-cover

"

/>

<div className="p-8">

<div className="

flex
justify-between
items-center

mb-5

">

<h3 className="text-3xl font-black">

{title}

</h3>

<span className="text-yellow-500 font-bold">

★ {rating}

</span>

</div>

<p className="

text-neutral-500

mb-6

">

{days} Days

</p>

<p className="

text-sky-600

font-black
text-3xl

">

₹{price}

</p>

</div>

</div>

);

}