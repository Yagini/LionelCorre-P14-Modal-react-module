import { useState } from "react";

const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isShowingSpinner, setIsShowingSpinner] = useState(false)

  function setShowModal() {
    setIsShowingModal(!isShowingModal);
  }

  function setShowSpinner() {
    setIsShowingSpinner(!isShowingSpinner);
  }

  return [isShowingModal, setShowModal, isShowingSpinner, setShowSpinner];
};

export default useModal;
