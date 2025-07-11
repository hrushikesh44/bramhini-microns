import Image from "next/image";

export default function Home() {
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <div className="h-screen flex items-center justify-center max-w-[80vw] lg:max-w-[68vw]">
        <div>
          <p className="md:text-5xl font-bold text-nowrap text-2xl">Brahmani Microns</p>
          <p className="text-sm text-wrap font-medium text-neutral-600 mt-4">At Brahmani Microns, We specialize in small-scale mining operations that prioritize sustainability, community growth, and resource efficiency. Our mission is to extract natural resources with integrity—ensuring that each project benefits both the environment and the people around us.</p>
        </div>
        <Image src={'/hero2.jpeg'} width={500} height={400} alt="hero" className="hidden md:block" />
      </div>
      <div className="flex items-center justify-center max-w-[80vw] lg:max-w-[68vw] my-40">
        <Image src={'/aboutus.jpeg'} width={500} height={500} alt="aboutus" className="rounded-xl shadow-xl hidden md:block" />
        <div className="ml-10 ">
          <p className="md:text-4xl text-2xl font-bold">About Us</p>
          <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">Founded with a vision to create a better, more responsible mining industry,Brahmani Microns brings decades of local expertise and hands-on knowledge to every site we operate. We work closely with local authorities, geologists, and communities to ensure our practices are transparent, lawful, and beneficial to all stakeholders.</p>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[80vw] lg:max-w-[68vw] my-40 ">
        <div>
          <p className="md:text-4xl text-2xl font-bold ">Our Services</p>
          <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">From mineral exploration and site development to resource extraction and processing, we offer end-to-end mining services designed for efficiency and minimal environmental impact. Our operations focus on gold, bauxite, and other valuable minerals—all handled with the highest safety and quality standards.</p>
        </div>
        <Image src={'/hero3.jpeg'} width={500} height={500} alt="services" className="rounded-xl shadow-xl hidden md:block"/>
      </div>
      <div className="flex items-center justify-center max-w-[80vw] lg:max-w-[68vw] my-40">
        <Image src={'/envpolicy.jpeg'} width={500} height={500} alt="env" className="hidden md:block"/>
        <div>
          <p className="md:text-4xl text-2xl font-bold ">Environmental Responsibility</p>
          <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">We believe that small-scale mining doesn't have to come at a high cost to the environment. That’s why we invest in eco-friendly practices like proper land rehabilitation, waste management, and reduced water usage. Our environmental policy reflects a deep respect for the land we operate on—and a commitment to preserving it for future generations.</p>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[80vw] lg:max-w-[68vw] my-40">
        <div>
          <p className="md:text-4xl text-2xl font-bold">Empowering Local Communities</p>
          <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">Beyond minerals, our greatest assets are the communities we work with. We actively create local employment, offer training programs, and support development initiatives in nearby regions. By integrating social responsibility into our business model, we ensure our success uplifts others along the way.</p>
        </div>
        <Image src={'/comm.jpeg'} width={500} height={500} alt="community" className="rounded-xl shadow-xl hidden md:block"/>
      </div>
    </div>
  );
}
