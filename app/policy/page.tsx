export default function Policy(){
    return (
        <div className="h-screen w-screen p-8 lg:p-30 xl:ml-14 flex justify-around ">
            <div className="w-[100vw] md:w-[60vw] lg:w-[40vw] ">
                <p className="text-2xl font-bold text-neutral-800">
                    Safety and Environmental Policy
                </p>
                <p className="text-sm font-medium text-neutral-600 mt-4">Our safety systems have been designed to minimise hazards caused due to physical barriers such as machine guarding, warning signs, etc. These safety controls have been created with the aim to control hazards due to procedural lapses such as standard operating and isolation procedures.
                </p><br/>
                <p className="text-sm font-medium text-neutral-600">
                The safety systems help control hazards caused due to failure of personal protective equipment including gloves, safety glasses, welding gear, hard hats and boots with toe caps.
                </p><br/>
                <p className="text-sm font-medium text-neutral-600">
                    Our safety systems help control dangers or hazards with warnings and awareness (in the form of posters, stickers and labels).
                </p><br/>
                <li className="text-sm font-medium text-neutral-600">Risk Register Development</li>
                <li className="text-sm font-medium text-neutral-600">Risk Acceptability management</li>
                <li className="text-sm font-medium text-neutral-600">Information for operation guidelines</li>
                <li className="text-sm font-medium text-neutral-600">Information for maintainance plans or guidelines</li>
                <li className="text-sm font-medium text-neutral-600">Option selection</li>
                <li className="text-sm font-medium text-neutral-600">Review of change management plan</li>
                <li className="text-sm font-medium text-neutral-600">Informal risk awareness on day-to-day basis</li>
            </div>
            <div className="w-[30vw] hidden lg:block ">
                <img src="/enpolicy.jpeg" alt="" className=""/>
            </div>
        </div>
    )
}