import { FC } from 'react'

interface Props {
	onCancel: () => void;
	onConfirm: () => void;
}

const Modal: FC<Props> = ({onCancel, onConfirm}) => {
	return (
		<div className='modal'>
			<p>Are you sure?</p>
			<button className='btn btn--alt' onClick={ onCancel }>Cancel</button>
			<button className='btn' onClick={ onConfirm }>Confirm</button>
		</div>
	)
}

export default Modal
