import React from "react";
import Quick from "./quickView";
import {GrClose} from "react-icons/gr";

const Modal = ({active, setActive, id}) => {
        return (
            <div className={active ? "modal_ active" : "modal_"} onClick={(e) => setActive(false)}>
                <div className="modal--content" onClick={(e) => e.stopPropagation()}>
                    <div className={active ? "x-b active" : "x-b"} onClick={(e) => setActive(false)}> <GrClose/>< /div>
                    {console.log(id)}
                    <Quick id={id}/>
                </div>

            </div>
        );
}

export default Modal
