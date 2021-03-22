import React, {useState, useEffect} from "react";
import Button from "../button/button";
import Form from "../form/form";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = (isOpen: boolean):void => {
    setIsOpen(isOpen)
  }

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent): void => {
         if (evt.key === `Escape`) {
             evt.preventDefault();
             setIsOpen(false);
         }
     }

    document.addEventListener(`keydown`, onKeyDownEsc);
    return () => {
        document.removeEventListener(`keydown`, onKeyDownEsc)}
  }, [isOpen]);

  return (
    <>
      {
        isOpen ? <Form onButtonClick={handleButton}/> : <Button onButtonClick={handleButton}/>
      }
    </>
  );
}

export default App;
