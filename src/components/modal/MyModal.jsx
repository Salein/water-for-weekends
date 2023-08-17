import React from 'react'
import c from './Modal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

	const rootClass = [c.modal]

	if (visible) {
		rootClass.push(c.active)
	}

	return (
		<div className={rootClass.join(' ')} onClick={() => {setVisible(false)}} >
			<div className={c.modalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal