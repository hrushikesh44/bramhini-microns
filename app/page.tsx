import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen w-fit flex justify-center items-center bg-[#fefffe]">
      <div className="w-[40vw] h-full ml-60 -mr-52 -mt-40">
        <p className="text-5xl font-bold">Bramhini Microns</p>
        <p className="text-sm text-wrap font-medium text-neutral-500 mt-4">At Brahmini Microns, we specialize in small-scale mining operations that prioritize sustainability, community growth, and resource efficiency. Our mission is to extract natural resources with integrity—ensuring that each project benefits both the environment and the people around us.</p>
      </div>
        <img src="/hero2.jpeg" alt="" className="w-[25vw] h-[40vh] ml-60" />
      </section>
      <section className="h-[60vh] max-w-[70vw] flex justify-center items-center">
        <img src="/aboutus.jpeg" alt="" className="w-[15w] h-[40vh] ml-56 -mt-60 rounded-xl" />
        <div className="w-[40vw] h-full ml-10 -mr-52 ">
        <p className="text-4xl font-bold">About Us</p>
        <p className="text-sm font-medium text-neutral-500 mt-4">Founded with a vision to create a better, more responsible mining industry,Bramhini Microns brings decades of local expertise and hands-on knowledge to every site we operate. We work closely with local authorities, geologists, and communities to ensure our practices are transparent, lawful, and beneficial to all stakeholders.</p>
        </div>
      </section>
      <section className="h-full w-[70vw] flex flex-col justify-around items-center text-center ml-52">
        <div className="w-[40vw] h-full text-center">
        <p className="text-4xl font-bold">Our Services</p>
        <p className="text-sm font-medium text-neutral-500 mt-4">From mineral exploration and site development to resource extraction and processing, we offer end-to-end mining services designed for efficiency and minimal environmental impact. Our operations focus on gold, bauxite, and other valuable minerals—all handled with the highest safety and quality standards.</p>
        </div>
        <img src="/hero3.jpeg" alt="" className="w-[40vw] h-[40vh] rounded-xl mt-10" />
      </section>
      <section className="h-full max-w-[70vw] flex flex-col justify-center items-center mt-60 mb-20">
        <div className="w-[40vw] h-full ml-60 -mr-52 -mt-40">
        <p className="text-4xl font-bold">Environmental Responsibility</p>
        <p className="text-sm font-medium text-neutral-500 mt4">We believe that small-scale mining doesn't have to come at a high cost to the environment. That’s why we invest in eco-friendly practices like proper land rehabilitation, waste management, and reduced water usage. Our environmental policy reflects a deep respect for the land we operate on—and a commitment to preserving it for future generations.</p>
        </div>
      </section>
      <section className="h-full max-w-[70vw] flex flex-col justify-center items-center mt-60 mb-20">
        <div className="w-[40vw] h-full ml-60 -mr-52 -mt-40">
        <p className="text-4xl font-bold">Empowering Local Communities</p>
        <p className="text-sm font-medium text-neutral-500 mt4">Beyond minerals, our greatest assets are the communities we work with. We actively create local employment, offer training programs, and support development initiatives in nearby regions. By integrating social responsibility into our business model, we ensure our success uplifts others along the way.</p>
        </div>
      </section>
    </div>
  );
}
