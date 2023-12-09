
import {Users} from "./Users"
import { Modal } from "./Modal"
import { useState } from "react"
export const App = () =>{
    const [open, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!open)
    }
    return(
        <>
        <Users name={"Binali"} lastname={"Binaliyev"}/>
        {open && ( 
        <Modal open={open} value={"Ro'yhatdan o'ting"}>
            <form>
                <input type="email" />
                <input type="password" />
                <button typeof="submit">Submit</button>
            </form>
        </Modal>
        )}
        <button onClick={handleClick}>bos</button>
        </>
    )
}