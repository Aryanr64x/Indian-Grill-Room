import Fade from 'react-reveal/Fade';
const Welcome = () => {
    return (
        <div className="text-center mt-48">
            <Fade top>
                <div className="text-2xl ">
                    Welcome To
                </div>

                <div className="text-6xl font-makondo text-primary">
                    INDIAN GRILL ROOM
                </div>
            </Fade>
            <Fade bottom>
                <div className="mt-4 text-2xl">
                    Serving quality North Indian Food at the
                    heart of Gurugram .  A restaurant experience
                    like no where else
                </div>
            </Fade>
            <div className="mt-8">
                <button className="mr-4 bg-primary rounded-full  px-4 py-2 text-secondary"> Book Table </button>
                <button className="mr-4 bg-secondary rounded-full  px-4 py-2 text-white hover:bg-primary border-2 border-primary hover:text-secondary transition-all duration-200"> Order Online </button>

            </div>

        </div>
    );
}

export default Welcome; 