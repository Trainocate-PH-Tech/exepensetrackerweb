import React from "react";
import { Modal } from 'react-bootstrap';

export default ConfirmationModal = ({ show, setShow, message, handleConfirm }) => {
    return (
        <Modal 
            show={show}
            onHide={() => {
                setShow(false);
            }}
        >
            <Modal.Body>
                {message || "Are you sure?"}
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="btn btn-primary"
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        setShow(false);
                    }}
                >
                    Cancel
                </button>
            </Modal.Footer>
        </Modal>
    )
}