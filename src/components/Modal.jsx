import './modal.css'

const Modal = () => {
    return (
        <div className="modalContainer">
            <div className="modalContent">
                <h1>Escribe tu Milestone</h1>
                <input type="text" className='modalInput' placeholder='Escribe aquí' />
                <span className='closeModal'>&times;</span>
            </div>
        </div>
    )
}

export default Modal;