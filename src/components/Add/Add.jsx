import img1 from "../../assets/atlassian.png";
import img2 from "../../assets/dropbox.png";
import img3 from "../../assets/google.png";
import img4 from "../../assets/shopify.png";
import img5 from "../../assets/slack.png";

const Add = () => {
    return (
        <div className="grid grid-cols-2 lg:flex items-center justify-center gap-4 lg:gap-10 p-4 lg:p-8">
            <img className="w-30" src={img1} alt="" />
            <img className="w-30" src={img2} alt="" />
            <img className="w-30" src={img3} alt="" />
            <img className="w-30" src={img4} alt="" />
            <img className="w-30" src={img5} alt="" />
        </div>
    );
};

export default Add;