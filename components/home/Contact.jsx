const Contact = () => {
    return (
        <div className="px-4 md:px-20 lg:px-36 mt-36">
            <div className="text-5xl font-makondo text-primary text-center">
                CONTACT US NOW
            </div>
            <div className="mt-2 text-xl text-center">
                for Table Reservation
            </div>
            <div className="mt-4   text-center">
                <div className="text-4xl">
                    Call Or Whatsapp @ <a href="tel:" className="font-makondo underline"> 982873737 </a>
                </div>
                <div className="text-4xl mt-4">
                    Drop an email @  <a href="mailto:" className="font-makondo underline"> indiangrill@gmail.com </a>
                </div>
            </div>
            <div className="mt-24 flex items-center flex-col lg:flex-row  justify-between">
                <div className="flex flex-col items-center lg:items-start ">
                    <div className="text-4xl font-bold text-center lg:text-left">
                        Find us at
                    </div>
                    <div className="text-2xl text-center lg:text-left">
                        3rd Floor No 195 & 196 Double Road Opposite Hdfc Bank, Bengaluru 560038 India
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-start text-center">
                    <div className="text-3xl font-bold">
                        OPENING TIMES
                    </div>
                    <div className="text-xl">


                        10-2 PM  in afternoons<br />
                        7-11 PM  in evenings

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;