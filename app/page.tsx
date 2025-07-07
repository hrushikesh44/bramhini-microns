import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen w-fit flex justify-center items-center bg-[#fefffe]">
      <div className="md:w-[60vw] lg:w-[40vw] h-full lg:ml-60 2xl:ml-60 ml-16 mr-10 md:ml-20 md:-mr-32 md:-mt-40 -mt-44 ">
        <p className="md:text-5xl font-bold text-2xl text-nowrap md:text-wrap">Brahmani Microns</p>
        <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">At Brahmani Microns, we specialize in small-scale mining operations that prioritize sustainability, community growth, and resource efficiency. Our mission is to extract natural resources with integrity—ensuring that each project benefits both the environment and the people around us.</p>
      </div>
        <img src="/hero2.jpeg" alt="" className="hidden md:block w-[25vw] h-[40vh] md:ml-60 -mt-40" />
      </section>
      <section className="h-[60vh] max-w-[70vw] flex justify-center items-center -mt-60 sm:-mt-0">
        <img src="/aboutus.jpeg" alt="" className=" hidden md:block md:w-[30vw] md:h-[40vh] lg:w-[35vw] lg:h-[40vh] md:ml-24 lg:ml-40 xl:w-[40vw] xl:h-[40vh] xl:ml-52 -mt-80 rounded-xl" />
        <div className="md:w-[60vw] lg:w-[40vw] h-fit md:-mr-52 md:-mt-60 ml-16 -mr-16 mb-40">
        <p className="md:text-4xl font-bold text-2xl">About Us</p>
        <p className="text-sm font-medium text-neutral-500 mt-4">Founded with a vision to create a better, more responsible mining industry,Brahmani Microns brings decades of local expertise and hands-on knowledge to every site we operate. We work closely with local authorities, geologists, and communities to ensure our practices are transparent, lawful, and beneficial to all stakeholders.</p>
        </div>
      </section>
      <section className="h-full w-[70vw] flex flex-col justify-around items-center md:mt-24 lg:ml-16">
        <div className="md:w-[60vw] lg:w-[40vw] h-full lg:ml-10 md:-mr-52 -mt-24 ml-16 -mr-10">
        <p className="md:text-4xl font-bold text-2xl md:text-center">Our Services</p>
        <p className="text-sm font-medium text-neutral-500 mt-4">From mineral exploration and site development to resource extraction and processing, we offer end-to-end mining services designed for efficiency and minimal environmental impact. Our operations focus on gold, bauxite, and other valuable minerals—all handled with the highest safety and quality standards.</p>
        </div>
        <img src="/hero3.jpeg" alt="" className="hidden md:block md:ml-72 w-[40vw] h-[40vh] lg:mr-10 rounded-xl mt-10" />
      </section>
      <section className="h-full max-w-[70vw] flex flex-col justify-center items-center mt-60 mb-20 lg:ml-20">
        <div className="md:w-[60vw] lg:w-[40vw] h-full lg:ml-10 md:-mr-52 -mt-48 ml-16 -mr-10">
        <p className="md:text-4xl text-2xl font-bold md:text-center ">Environmental Responsibility</p>
        <p className="text-sm font-medium text-neutral-500 mt-4">We believe that small-scale mining doesn't have to come at a high cost to the environment. That’s why we invest in eco-friendly practices like proper land rehabilitation, waste management, and reduced water usage. Our environmental policy reflects a deep respect for the land we operate on—and a commitment to preserving it for future generations.</p>
        </div>
      </section>
      <section className="h-full max-w-[70vw] flex flex-col justify-center items-center mt-60 mb-20 lg:ml-20">
        <div className="md:w-[60vw] lg:w-[40vw] h-full lg:ml-10 md:-mr-52 -mt-48 ml-16 -mr-10">
        <p className="md:text-4xl text-2xl font-bold md:text-center">Empowering Local Communities</p>
        <p className="text-sm font-medium text-neutral-500 mt4">Beyond minerals, our greatest assets are the communities we work with. We actively create local employment, offer training programs, and support development initiatives in nearby regions. By integrating social responsibility into our business model, we ensure our success uplifts others along the way.</p>
        </div>
      </section>
    </div>
  );
}
