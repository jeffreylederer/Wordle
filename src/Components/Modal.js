import './modal.css';



function Modal({ show, message }) {
  const showHideClassName = show==1 ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {message}
       </section>
    </div>
  );
}

export default Modal;