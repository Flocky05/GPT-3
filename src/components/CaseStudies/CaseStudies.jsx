
import img from "../../assets/possibility.png"
import Offer from "../Offer/Offer";
const CaseStudies = () => {
    return (
        <div>
            <div className="flex justify-between items-center m-20 min-h-screen">
            <img className="w-2/4" src={img} alt="" />
            <div className="p-4">
                    <p className="text-blue-500 py-8">Request Early Access to Get Started</p>
                    <div className="py-8">
                        <h2>The possibilities are </h2>
                        <h2>beyond your imagination </h2>
                    </div>
                    <p className="py-8">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p className="text-orange-600 py-8">Request Early Access to Get Started</p>
            </div>
            </div>
            <Offer></Offer>
        </div>
    );
};

export default CaseStudies;