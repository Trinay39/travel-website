import hero from "../../assets/hero.png";

export default function FeaturedBanner(){

return(

<section className="

relative

mx-12
lg:mx-20

h-[88vh]

overflow-hidden

rounded-[44px]

mb-20

">

<img

src={hero}

className="

absolute

w-full
h-full

object-cover

"

/>

<div className="

absolute
inset-0

bg-gradient-to-r

from-black/95
via-black/60
to-transparent

"/>

<div className="

absolute

left-16
lg:left-20

bottom-28

text-white

max-w-4xl

">

<p className="

uppercase

tracking-[0.35em]

text-sky-400

mb-6

">

FEATURED DESTINATION

</p>

<h1 className="

text-[8rem]

font-black

leading-none

mb-8

">

Bali Escape

</h1>

<p className="

text-3xl

leading-relaxed

text-white/90

mb-12

">

Luxury beach retreat.

Private villas.

Cultural immersion.

Unforgettable sunsets.

Tailored experiences.

</p>

<div className="flex gap-6">

<button className="

px-12
py-5

rounded-full

bg-white
text-black

font-bold

text-lg

hover:scale-105

transition-all

">

Explore Package

</button>

<button className="

px-12
py-5

rounded-full

bg-white/10

backdrop-blur-lg

border
border-white/20

text-lg

hover:bg-white/20

transition-all

">

＋ Wishlist

</button>

</div>

</div>

</section>

);

}