import ProductCard from "@/components/productCard";

export default function Product(){
    return(
        <div className="p-4 md:p-20 w-[70vw] mx-auto ">
            <div className=" flex flex-col items-center justify-center">
                <div className="">
                <p className="text-xl font-semibold text-center ">We deal with wide variety of minerals from  Ananthapur District, Andhra Pradesh.</p><br/>
                <p className="text-sm font-medium text-neutral-700 text-center hidden md:block">Our smallest products of size 2 micron are manufactured as per international standards, with quality checks in place to ensure uniformity of particle size and fineness of powders.
                By strictly adhering to our delivery promise, we have a better finish of the final product, consistent production with ability to scale as per requirements and minimal investment in new machinery due to the 'application ready' nature of the products.</p>
                </div>
                <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                </div>
            </div>
        </div>
    )
}