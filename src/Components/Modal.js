import './modal.css';
import ReactDom from "react-dom";


export const Modal = ({ message }) => {
   return ReactDom.createPortal (
    <div className="container" >
        {message}
    </div>,
	document.getElementById("portal1")
  );
}




