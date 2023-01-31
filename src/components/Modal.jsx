import '../style/components/modal.css';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

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
                        <FaTimes onClick={props.onClose} className="close" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
