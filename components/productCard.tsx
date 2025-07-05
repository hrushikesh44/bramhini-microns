export default function ProductCard(){
    return (
        <div className="border border-black/10 rounded-xl shadow-xl w-[60vw] h-[40vh] md:w-[60vw] md:h-[35vh] lg:h-[35vh] xl:h-[55vh] p-4 text-center mt-10">
            <div className="block md:flex md:justify-around ">
                <img src="/micron.jpeg" alt="" className="h-[30vh] w-[45vw] m-2 md:m-0 md:w-[30vw] md:h-[30vh] lg:h-[30vh] md:mt-4"/>
                <div className="p-3 overflow-y-scroll">
                    <p className="block md:hidden">Barium Sulphate</p>
                    <p className="hidden md:block">Barium sulphate found naturally, also known as barites occurs as concretions or void- filled crystals in sedimentary rocks. Hard and compact, barytes look like fine grained rocks of sediment, pinkish, greyish or yellow in colour and insoluble in oil and water.</p><br/>
                    <p className="hidden lg:block">Micron Baryte has excellent pigmentation and compatibility, which makes for great use in exterior paints. Its high gloss index makes it useful in enamel application and high refractive index enhances the composition of glass and ceramics.</p><br/>
                    <p className="hidden xl:block">The mineral’s hard grittiness makes it an excellent material for break lining and friction material and imparting impermeability and durability to marine paints and industrial coatings. It also has a heightened resistance to weathering and chemicals, giving it great adhesive and sealant properties.</p>
                </div>
            </div>
        </div>
    )
}