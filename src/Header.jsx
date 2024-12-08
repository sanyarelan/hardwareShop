export default function Header() {
    return (
        <header className="header">
            <img src = "/src/images/wooden-plywood.jpg" className ="nav-logo" alt="Saathi Plywood Company"/>
            <h1>Saathi Plywood Company</h1>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
