
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <a className="text-2xl font-semibold" href="/">GPT-3</a>
            </div>
            <div className="grid grid-cols-5 w-2/4 text-lg">
                <a href="/">Home</a>
                <a href="/blog">What is GPT?</a>
                <a href="/open-ai">Open AI</a>
                <a href="/case-studies">Case Studies</a>
                <a href="/library">Library</a>
            </div>
            <div>
                <a className="mx-4 hover:bg-orange-600 px-6 py-2 border rounded-md" href="/signIn">signIn</a>
                <a className="mx-4 hover:bg-orange-600 px-6 py-2 border rounded-md" href="/signUp">signUp</a>
            </div>
        </div>
    );
};

export default Navbar;