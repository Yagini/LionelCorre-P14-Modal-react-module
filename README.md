# Modal-react-module for React

Modal-react-module is a complete modal for the react project for the web.

## Installation

```

    npm i modal-react-modal

```

## Usage

Import Modal component and the hook useModal from "modal-react-module" where you want to use this.

```jsx
import React from "react";
import Modal, { useModal } from "modal-react-module";

function App() {
  const [showModal, setShowModal, showSpinner, setShowSpinner] = useModal();
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <p>I am a modal</p>
    </Modal>
  );
}
```
![Default modal](./src/lib/assets/default-modal.png)

In your modal Modal component you can personalize your content

```jsx
import React from "react";
import Modal, { useModal } from "modal-react-module";

function App() {
  const [showModal, setShowModal, showSpinner, setShowSpinner] = useModal();
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <form className="form">
        <label htmlFor="username" />
        <input type="text" id="username" className="form__input" />
        <label htmlFor="lastName" />
        <input type="text" id="lastname" className="form__input" />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    </Modal>
  );
}
```
![Custom Modal contain](./src/lib/assets/modal-custom-contain.png)

Modal is basically responsive, scroll bar is appear if the text is very long

![modal responsive](./src/lib/assets/modal-responsive.png)

## Modal Css

Modal have a basic css page if you want to use 

```jsx 
import "modal-react-module/dist/components/Modal.css" 
```
or if you want personalize it you can make your own css page

```jsx 
import "modal-react-module/dist/components/Modal.css"
import "../example/custom.css 
```

You can find all class using on the default css here 

- [Modal.css](https://github.com/Yagini/LionelCorre-P14-Modal-react-module/blob/main/src/lib/components/Modal.css)

## Props

All of native modal-react-module props can be passed to the component.

### *`Defaults Props`*

showModal and setShowModal is using for make a modal appear

```jsx
function App() {
  const [showModal, setShowModal, showSpinner, setShowSpinner] = useModal();
  return (
    <div>
      <button onClick={setShowModal}>Open Modal</button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showSpinner={showSpinner}
        setShowSpinner={setShowSpinner}
      >
        <p>I am a modal</p>
      </Modal>
    </div>
}
```

showSpinner and SetShowSpinner is using for make a spinner appear when they have an async function

```jsx
function App() {
  const [showModal, setShowModal, showSpinner, setShowSpinner] = useModal();

  const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));
  const handleClick = async (event) => {
    setShowSpinner();
    await waitFor(2000);
    setShowModal();
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showSpinner={showSpinner}
        setShowSpinner={setShowSpinner}
      >
        <p>I am a modal</p>
      </Modal>
    </div>
  );
}
```

## `Optionnal props`

### *`blockClose?: boolean`*

If blockClose is true you can't close the modal with click and escape button

```jsx
<Modal
  showModal={showModal}
  setShowModal={setShowModal}
  showSpinner={showSpinner}
  setShowSpinner={setShowSpinner}
  blockClose={true}
>
  <p className="text__color">Content</p>
</Modal>
```

### *`showClose?: boolean`*

For hiding the close button.

```jsx
<Modal showModal={showModal} setShowModal={setShowModal} showClose={false}>
  <p className="text__color">Content</p>
</Modal>
```
![show close](./src/lib/assets/showclose.png)

### *`showFade?: Boolean`*

You can add a fade effect, the fade effect prevent the showing of the spinner

```jsx
<Modal showModal={showModal} setShowModal={setShowModal} showFade={true}>
  <p>Content</p>
</Modal>
```

## Contribute

### You want to contribute ?

- fork the repository here: 
    - [Modal-react-module](https://github.com/Yagini/LionelCorre-P14-Modal-react-module)
- npm install
- npm run build before using 

## License

MIT