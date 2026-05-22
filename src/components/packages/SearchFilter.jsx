export default function SearchFilter(){

return(

<section className="mb-10">

<div className="

bg-white

border
border-neutral-200

shadow-sm

rounded-[22px]

p-3

flex
flex-col
md:flex-row
gap-3

">

<input
placeholder="Search destinations, experiences, packages..."
className="

flex-1

px-5
py-4

outline-none

text-base

rounded-2xl

"
/>

<button className="

px-8
py-4

rounded-2xl

bg-black
text-white

font-semibold

hover:scale-[1.02]

transition-all

">

Search

</button>

</div>

</section>

);

}
