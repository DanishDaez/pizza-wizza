import { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(null);

    // Create container element if it doesn't exist
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        // Get or create modal root element
        let modalRoot = document.getElementById("modal");
        if (!modalRoot) {
            modalRoot = document.createElement("div");
            modalRoot.id = "modal";
            document.body.appendChild(modalRoot);
        }

        modalRoot.appendChild(elRef.current);
        return () => {
            modalRoot.removeChild(elRef.current);
            // Clean up modal root if it's empty
            if (modalRoot.childNodes.length === 0) {
                document.body.removeChild(modalRoot);
            }
        };
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;