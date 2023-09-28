
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <a className="text-2xl font-semibold" href="/">GPT-3</a>
            </div>
            <div className="flex justify-around lg:grid lg:grid-cols-5 w-full lg:w-2/4 text-md lg:text-lg px-10 lg:px-0">
                <a href="/">Home</a>
                <a className="invisible lg:visible" href="/blog">What is GPT?</a>
                <a className="invisible lg:visible" href="/open-ai">Open AI</a>
                <a href="/case-studies">Case Studies</a>
                <a href="/library">Library</a>
            </div>
            <div className="invisible lg:visible">
                <a className="mx-4 hover:bg-orange-600 px-6 py-2 border rounded-md" href="/signIn">signIn</a>
                <a className="mx-4 hover:bg-orange-600 px-6 py-2 border rounded-md" href="/signUp">signUp</a>
            </div>
        </div>
    );
};

export default Navbar;