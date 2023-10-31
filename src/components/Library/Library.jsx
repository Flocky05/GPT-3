import img1 from "../../assets/blog01.png"
import img2 from "../../assets/blog02.png"
import img3 from "../../assets/blog03.png"
import img4 from "../../assets/blog04.png"
import img5 from "../../assets/blog05.png"
import NewProperty from "../NewProperty/NewProperty"

const Library = () => {
    return (
        <div className="p-8 lg:p-20">
           <div className="text-2xl font-bold">
                <h2 className="p-5">A lot is happening, </h2>
                <h2 className="p-5">We are blogging about it.</h2>
           </div>
           <div className="lg:flex justify-between">
                <div className="p-8 w-full">
                    <img className="w-full" src={img1} alt="" />
                    <div className="bg-[#042C54] p-4">
                        <p className="text-sm">Sep 26, 2021</p>
                        <p className="py-8 lg:py-28 text-sm lg:text-lg ">GPT-3 and Open  AI is the future. Let us exlore how it is?ChatGPT, which stands for Chat Generative Pre-trained Transformer, is a large language model–based chatbot developed by OpenAI and launched on November 30, 2022, which enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language used.</p>
                        <p className="py-4">lorem</p>
                    </div>
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                    <img className="w-full" src={img2} alt="" />
                    <div className="bg-[#042C54] p-4">
                        <p className="text-sm">Sep 26, 2021</p>
                        <p className="py-6 text-lg">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                        <p className="py-8">lorem</p>
                    </div>
                </div>
                <div className="p-8">
                    <img className="w-full" src={img3} alt="" />
                    <div className="bg-[#042C54] p-4">
                        <p className="text-sm">Sep 26, 2021</p>
                        <p className="py-6 text-lg">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                        <p className="py-8">lorem</p>
                    </div>
                </div>
                <div className="p-8">
                    <img className="w-full" src={img4} alt="" />
                    <div className="bg-[#042C54] p-4">
                        <p className="text-sm">Sep 26, 2021</p>
                        <p className="py-6 text-lg">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                        <p className="py-8">lorem</p>
                    </div>
                </div>
                <div className="p-8">
                    <img className="w-full" src={img5} alt="" />
                    <div className="bg-[#042C54] p-4">
                        <p className="text-sm">Sep 26, 2021</p>
                        <p className="py-6 text-lg">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                        <p className="py-8">lorem</p>
                    </div>
                </div>
            </div>
           </div>
           <div>
                <h2 className="text-center p-5">Machine Learing Section</h2>
                <NewProperty></NewProperty>
           </div>
        </div>
    );
};

export default Library;