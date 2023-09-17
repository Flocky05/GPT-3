

const Blog = () => {
    return (
        <div className="bg-blue-900 m-8 lg:m-20 p-8 lg:p-20 min-h-screen">
            <div className=" lg:flex  justify-center items-center">
                <h3 className="text-2xl font-semibold w-2/4">What is GPT-3</h3>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="lg:flex justify-between items-center py-5 lg:py-10">
                <div>
                    <h2>The possibilities are beyond </h2>
                    <h2>your imagination</h2>
                </div>
                <p className="text-orange-500">Explore The Library</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 lg:p-10">
                <div className="p-5">
                    <h3 className="text-2xl font-bold py-2 lg:py-5">Chatbots</h3>
                    <p className="py-10 text-lg">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                </div>
                <div className="p-5">
                    <h3 className="text-2xl font-bold py-2 lg:py-5">Knowledgebase</h3>
                    <p className="py-10 text-lg">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                </div>
                <div className="p-5">
                    <h3 className="text-2xl font-bold py-2 lg:py-5">Education</h3>
                    <p className="py-10 text-lg">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;