let category=["electronics","jewelery","men's clothing","women's clothing"]
function Header() {
    return (
        <>
        <header className="bg-blue-600 py-4 text-center text-white">
            <h1 className="text-4xl font-bold">this is header</h1>
        </header>
        <nav className="bg-yellow-600 P-4 text-center space-x-7">
            <a href="">Home</a>
            <a href="">About</a>
            {category.map(a=><a href="">{a}</a>)}
            <a href="">Contact</a>
        </nav>
        </>
    )
}
export default Header;