import Link from "next/link"
import AppHeaderUser from "./AppHeaderUser"

const MENU_ITEMS= [
    {title:'Home', path:'/'},
    {title:'Posts', path:'/posts'},
    {title:'About', path:'/about'},
]
const AppHeader=(()=>{

    return(
        <>
        <header>
            <nav>
                <div className="container">
                    <ul>
                        {MENU_ITEMS.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link href={item.path} className="link">{item.title}</Link>
                        </li>
                        ))}
                    </ul>
                    <AppHeaderUser />
                </div>
            </nav>
        </header>
        </>
    )
})

export default AppHeader