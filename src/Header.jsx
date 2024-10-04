import Navbar from "./Navbar"
export default function Header(){
    return(
        <>
        <div className="header">
            <div>
            <h1>Ariv Execution</h1>
            </div>
            <div>
            <Navbar/>
            </div>
            <div className="menu">
            <i className="bi bi-list"></i>
            </div>
            
        </div>
        </>
    )
}