
import img from "../../assets/ai.png"
import img2 from "../../assets/people.png"
const Home = () => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="p-8">
                <div className="text-3xl font-bold py-4">
                    <h2>Let’s Build Something</h2>
                    <h2>amazing with GPT-3</h2>
                    <h2>OpenAI</h2>
                </div>
                <p className="text-lg">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className=" relative py-4">
                    <input className="bg-blue-950  rounded-md w-3/5 py-3 p-2" type="text" placeholder="Your Email Address" />
                    <button className="bg-orange-600 py-3 px-10 absolut -ml-36 rounded-lg"> Get Start</button>
                </div>
                <div className="flex items-center ">
                    <img src={img2} alt="" />
                    <p className="p-3">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div>
                <img className="w-full object-cover" src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;