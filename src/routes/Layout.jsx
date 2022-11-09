import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'
import './../dist/output.css'

export default function Layout(){
    return(
        <div className="w-3/5 m-auto mt-20">
            <header className="justify-end" style={{display: 'flex', gap: '20px', fontSize: '24px', marginBottom: '30px'}}>
                <NavLink 
                    to="/"
                    end={true}
                    className={({ isActive }) => 
                    isActive ? 'active-link' : ''
                    }
                >
                Albums
                </NavLink>
                <NavLink to="/users"
                    className={({ isActive }) => 
                    isActive ? 'active-link'    : ''
                    }
                >
                Users
                </NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="mt-20">
                <hr className="border-black"></hr>
                <div className="flex justify-between mt-10 mb-10">
                    <p>Created by: SweetCherry</p>
                    <p>BSU: 2022</p>
                </div>
            </footer>
        </div>
    )
}