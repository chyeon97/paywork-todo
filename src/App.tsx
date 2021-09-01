import { useSelector } from 'react-redux';
import Main from 'components/Main';
import { Modal } from 'components/modal';

function App() {
  const modal = useSelector((state: any) => state.modals);
  return (
    <>
      <Main />
      {modal.showModal && <Modal title={modal.title} contents={modal.contents} />}
    </>
  )
}

export default App;
