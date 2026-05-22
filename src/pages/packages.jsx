import Navbar from "../components/common/Navbar";
import FeaturedBanner from "../components/packages/FeaturedBanner";
import PackageRow from "../components/packages/PackageRow";
import SearchFilter from "../components/packages/SearchFilter";

export default function Packages(){

return(

<div className="

bg-[#fafafa]

min-h-screen

">

<Navbar />

<main className="

max-w-7xl
mx-auto

px-6
py-10
pb-24

">

<FeaturedBanner />

<SearchFilter />

<PackageRow title="Recommended For You" />

<PackageRow title="Adventure Escapes" />

<PackageRow title="Luxury Packages" />

</main>

</div>

);

}
