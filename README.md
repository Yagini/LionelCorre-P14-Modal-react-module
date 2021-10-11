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

## Props

All of native modal-react-module props can be passed to the component.

### `Defaults Props`

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

### `Optionnal props`

#### `blockClose?: boolean`

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

#### `showClose?: boolean`

For hiding the close button.

```jsx
<Modal showModal={showModal} setShowModal={setShowModal} showClose={false}>
  <p className="text__color">Content</p>
</Modal>
```

#### `showFade?: Boolean`

You can add a fade effect, the fade effect prevent the showing of the spinner

```jsx
<Modal showModal={showModal} setShowModal={setShowModal} showFade={true}>
  <p>Content</p>
</Modal>
```

## Contribute

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
