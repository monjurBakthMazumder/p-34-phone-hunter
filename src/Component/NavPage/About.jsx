import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const About = () => {
    return (
        <>
            <Header/>
            <div className="flex justify-center items-center w-full text-2xl md:text-4xl lg:text-6xl font-bold" style={{minHeight:'60vh'}}>
                <h1>About Us</h1>
            </div>
            <Footer/>
        </>
    );
};

export default About;