document.addEventListener("DOMContentLoaded", () => {
  //Profile elements
  const profileSection = document.querySelector(".profile");
  const editButton = profileSection.querySelector(".profile__edit-btn");
  const titleElement = profileSection.querySelector(".profile__title");
  const descriptionElement = profileSection.querySelector(
    ".profile__description",
  );
  const postButton = profileSection.querySelector(".profile__post-btn");
  //Modal elements
  const modalOpen = document.querySelector(".modal");
  // const closeButton = document.querySelector(".modal__close-btn");
  const editModal = document.querySelector("#edit-modal");
  const editCloseButton = editModal.querySelector(".modal__close-btn");
  const postModal = document.querySelector("#post-modal");
  const postCloseButton = postModal.querySelector(".modal__close-btn");
  const editModalForm = editModal.querySelector(".modal__form");
  const postModalForm = postModal.querySelector(".modal__form");
  const modalNameInput = editModalForm.querySelector("#name");
  const modalDescriptionInput = editModalForm.querySelector("#description");
  const modalLinkInput = postModalForm.querySelector("#image-link");
  const modalCaptionInput = postModalForm.querySelector("#caption");
  const submitEditButton = editModalForm.querySelector(".modal__submit-btn");
  const submitPostButton = postModalForm.querySelector(".modal__submit-btn");

  //Helper functions
  function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
  }

  function openModal(modal) {
    modal.classList.add("modal_is-opened");
  }

  function handleEditButton() {
    modalNameInput.value = titleElement.textContent;
    modalDescriptionInput.value = descriptionElement.textContent;
    openModal(editModal);
  }

  function handleEditModalForm(e) {
    e.preventDefault();
    titleElement.textContent = modalNameInput.value;
    descriptionElement.textContent = modalDescriptionInput.value;
    closeModal(editModal);
  }

  function handlePostModalForm(e) {
    e.preventDefault();
    closeModal(postModal);
  }

  editCloseButton.addEventListener("click", () => closeModal(editModal));
  postCloseButton.addEventListener("click", () => closeModal(postModal));

  editButton.addEventListener("click", handleEditButton);
  postButton.addEventListener("click", () => openModal(postModal));

  editModalForm.addEventListener("submit", handleEditModalForm);
  postModalForm.addEventListener("submit", handlePostModalForm);
});
