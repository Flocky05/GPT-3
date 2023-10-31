import img1 from "../../assets/Ml/Ml4.jpg"
import img2 from "../../assets/Ml/Ml2.avif"
import img3 from "../../assets/Ml/Ml3.jpg"

const NewProperty = () => {
    return (
        <div className="grid grid-cols-3 justify-center items-center gap-10 p-8">
            <div className="p-4 bg-yellow-100 border">
                <img className="object-cover h-80" src={img1} alt="" />
                <div>
                    <p className="text-xl">Machine Learning</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aut vero eligendi?</p>
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-md">Learn More</button>
                </div>
            </div>
            <div  className="p-4 bg-blue-100 border">
                <img className="object-cover  h-80" src={img2} alt="" />
                <div>
                    <p className="text-xl">Machine Learning</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aut vero eligendi?</p>
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-md">Learn More</button>
                </div>
            </div>
            <div className="p-4 bg-gradient-to-b from-orange-300 via-purple-500 to-blue-200 border">
                <img className="object-cover h-80" src={img3} alt="" />
                <div>
                    <p className="text-xl">Machine Learning</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aut vero eligendi?</p>
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-md">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default NewProperty;