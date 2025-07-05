import MailButton from "@/components/mailButton";

export default function Contact(){
    return (
        <div className="h-[50vh] flex justify-center items-center mt-32">
            <div className="md:w-[50vw] md:h-[50vh] flex items-center flex-col">
            <p className="text-xl text-center text-neutral-600 font-semibold mx-auto"> We respect our customers' feedback and suggestions. We are eager to hear from our customers .To share any feedback or for doing business with us click the button below.</p>
            <span className="mx-auto mt-10"><MailButton /></span>
            <p className="text-sm mt-10 text-black/50">It typically takes 2-3 business days to respond.</p>
            </div>
        </div>
    )
}