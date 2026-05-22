import Navbar from "../components/common/Navbar";

import FeaturedBanner from "../components/packages/FeaturedBanner";
import PackageRow from "../components/packages/PackageRow";

export default function Packages(){

return(

<div className="

bg-[#fafafa]

min-h-screen

">

<Navbar />

<main>

<FeaturedBanner />

<div className="pb-24">

<PackageRow title="Recommended For You" />

<PackageRow title="Adventure Escapes" />

<PackageRow title="Luxury Packages" />

<PackageRow title="Budget Trips" />

</div>

</main>

</div>

);

}