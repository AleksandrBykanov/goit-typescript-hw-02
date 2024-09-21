import Modal from "react-modal";

import css from '../ImageModal/ImageModal.module.css';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string | undefined;
};

const ImageModal = ({ modalIsOpen, closeModal, src}: Props) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			className={css.modal}
			overlayClassName={css.overlay}
      ariaHideApp={false}
		>
			<button onClick={closeModal} className={css.modalBtn}>
				close
			</button>
			<div>
				<img className={css.modalImg} src={src} alt="foto"/>
			</div>
		</Modal>
	);
};

export default ImageModal;