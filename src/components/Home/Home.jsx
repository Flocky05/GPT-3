
import img from "../../assets/ai.png"
import img2 from "../../assets/people.png"
import Add from "../Add/Add";
import CaseStudies from "../CaseStudies/CaseStudies";
import "./Home.css"
const Home = () => {
    return (
        <div className="m-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="lg:p-8">
                    <div>
                        <h2>Let’s Build Something</h2>
                        <h2>amazing with GPT-3</h2>
                        <h2>OpenAI</h2>
                    </div>
                    <p className="text-lg">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className=" relative py-4">
                        <input className="bg-blue-950  rounded-md  lg:w-3/5 py-3 p-2" type="text" placeholder="Your Email Address" />
                        <button className="bg-orange-500 hover:bg-orange-700 py-3 px-6 lg:px-10 absolut -mr-40 lg:-ml-36 rounded-lg"> Get Start</button>
                    </div>
                    <div className="lg:flex items-center py-5">
                        <img src={img2} alt="" />
                        <p className="p-3 text-sm">1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div>
                    <img className="w-full object-cover" src={img} alt="" />
                </div>
            </div>
            <Add></Add>
            <CaseStudies></CaseStudies>
        </div>
    );
};

export default Home;