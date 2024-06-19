import { useState } from 'react';
import { Modal } from './modules/core';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Modal {String(isModalOpen)}
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Test
      </Modal>
    </>
  );
}

export default App;
