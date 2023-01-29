// import React, { useState } from 'react';
import '../style/components/modal.css';
// import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';

// function Modale() {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setShowModal(true)}>Open Modal</button>
//             {showModal && (
//                 <div>
//                     <h1>Employee created !</h1>
//                     <FaRegTimesCircle onClick={() => setShowModal(false)} className="faRegTimesCircle" />
//                     <FaRegCheckCircle className="faRegCheckCircle" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Modale;

import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-body">
                    {props.children}
                    <div className="modal-close">
                        <FaRegTimesCircle onClick={props.onClose} className="button" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
