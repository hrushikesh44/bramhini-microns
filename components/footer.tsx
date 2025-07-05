import MailButton from "./mailButton";

export default function Footer(){
    return (
         <footer>
            <div className="h-fit md:h-64 w-screen border-t border-black/10 md:flex justify-around text-lg">
                <div className=" md:flex justify-center">
                    <div className="  mt-5 text-center">
                        <p className="font-medium">Plant Address</p>
                        <p>Bramhini Microns</p>
                        <p>Kishtapadu Village</p>
                        <p>Ananthapur District</p>
                        <p>Andhra Pradesh</p>
                    </div>
                    <div className="mt-5 md:ml-8 text-center">
                        <p className="font-medium">Office Address</p>
                        <p>Bramhini Microns</p>
                        <p>Kishtapadu Village</p>
                        <p>Ananthapur District</p>
                        <p>Andhra Pradesh</p>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <MailButton />
                </div>
            </div><br/>
            <p className="pb-10 text-center">©2025 Bramhini Microns. All rights are reserved.</p>
         </footer>
    )
}