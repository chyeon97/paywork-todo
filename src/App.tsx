import { useSelector } from 'react-redux';
import Main from 'components/Main';
import { Modal, ReviseModal } from 'components/modal';

function App() {
  const modal = useSelector((state: any) => state.modal);
  const reviseModal = useSelector((state: any) => state.reviseModal)
  // console.log(modal)
  // console.log(reviseModal)
  return (
    <>
      <Main />
      {modal.show && <Modal id={modal.id} />}
      {reviseModal.show && <ReviseModal id={reviseModal.id} content={reviseModal.content} dueDate={reviseModal.dueDate} status={reviseModal.status} />}
    </>
  )
}

export default App;
