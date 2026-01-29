import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import { category } from "./Data";
import Details from "./Details";

function Header() {
    return (
        <>
        <header className="bg-blue-600 py-4 text-center text-white">
            <h1 className="text-4xl font-bold">this is header</h1>
        </header>
        <nav className="bg-yellow-600 p-4 text-center space-x-7">
            <Link to="">Home</Link>
            <Link to="/about">About</Link>
            {category.map(a=><Link to={`/category/${a}`}>{a}</Link>)}
            <Link to="">Contact</Link>
        </nav>
        {/* routes route haru chai imp to make clickable site like about thichda about ma janxa */}
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/about" element={<About />} />  
            <Route path="/category/:cname" element={<Category />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
        </>
    )
}
export default Header;