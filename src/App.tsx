import { useState } from 'react';
import {
  Modal,
  Button,
  Text,
  TextStyle,
  TextColor,
  Headline,
  HeadlineLevel,
} from './modules/core';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Join meeting
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex gap-y-10 flex-col">
          <div>
            <Headline as={HeadlineLevel.h2}>
              Open session (JTL Danielius)
            </Headline>
            <Text textStyle={TextStyle.BodyText} color={TextColor.Grey50}>
              Tommorow 19:30-20:15
            </Text>
          </div>
          <div>
            <Text textStyle={TextStyle.Subtitle} color={TextColor.Yellow1}>
              Starts in:14min
            </Text>
            <Button>Join meeting</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
