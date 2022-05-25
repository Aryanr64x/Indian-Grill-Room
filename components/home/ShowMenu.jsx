import Link from 'next/link';
import Rotate from 'react-reveal/Rotate'


const ShowMenu = () => {
  
    return (
        <div className="min-h-screen mx-4 md:mx-24 xl:mx-36 flex flex-col lg:flex-row items-center mt-32 lg:mt-0">
            <div className="basis-1/2">
                <Rotate left>
                    <div className=" text-center lg:text-left text-4xl md:text-6xl font-makondo text-primary">
                        EXOTIC NORTH INDIAN MENU
                    </div>
                    <div className="text-lg  md:text-xl text-center lg:text-left mt-4 ">
                        Quality North Indian Cuisine , cooked and served with love , a menu that will water your mouth !
                    </div>
                    <div className="mt-8 text-center lg:text-left ">

                        <Link href="/menu" className="">
                            <button className="bg-secondary rounded-full  px-4 py-2 text-white hover:bg-primary border-2 border-primary hover:text-secondary transition-all duration-200">

                                EXPLORE THE MENU 😋😋

                            </button>
                        </Link>
                    </div>
                </Rotate>


            </div>
            <div className="basis-1/2 mt-8 lg:mt-0">

                <Rotate right>
                    <img className="lg:ml-16" src="https://i.ibb.co/DMqKw1N/mocktail.png" alt="mocktail" border="0" />
                </Rotate>



            </div>
        </div>
    );
}

export default ShowMenu;