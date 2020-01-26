import React from 'react'
import './Modal.scss'
import { createPortal } from 'react-dom'
import CloseSVG from '../../assets/SVG/CloseSVG/CloseSVG'


export default function Modal({ shown, children, header, closeModal }) {

    if (shown) {
        return createPortal(
            <div className='Modal__container'>
                <div className="Modal__centering-container">
                    <div className="Modal__Content">
                        <div className="Modal__header">
                            <h2>{header}</h2> 
                            <div className='Modal__header-close-btn' onClick={closeModal}>
                                <CloseSVG />
                            </div> 
                        </div>
                        <div className="Modal__body">{children}</div>
                    </div>
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    } else {
        return null
    }

}
    
