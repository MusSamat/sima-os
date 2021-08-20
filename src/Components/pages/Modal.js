import React from "react";
import Quick from "./quickView";


const Modal = ({active, setActive, id}) => {
        return (
            <div className={active ? "modall_ actives" : "modall_"} onClick={(e) => setActive(false)}>
                <div className="modall--content" onClick={(e) => e.stopPropagation()}>


                    <Quick id={id} active={active} setActive={setActive}/>
                </div>

            </div>
        );
}

export default Modal
