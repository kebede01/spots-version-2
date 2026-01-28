document.addEventListener("DOMContentLoaded", () => {
  //Profile elements
  const profileSection = document.querySelector(".profile");
  const editButton = profileSection.querySelector(".profile__edit-btn");
  const titleElement = profileSection.querySelector(".profile__title");
  const descriptionElement = profileSection.querySelector(
    ".profile__description",
  );
  const postButton = profileSection.querySelector(".profile__post-btn");
  //cards grid container
  const cardContainer = document.querySelector(".cards__list");
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
  // 1. Create the elements
const cardElement = document.createElement('li');
cardElement.classList.add('card');

const imageElement = document.createElement('img');
imageElement.classList.add('card__image');

const captionContainer = document.createElement('div');
captionContainer.classList.add('card__caption');

const titleElement = document.createElement('h2');
titleElement.classList.add('card__title');

const likeButton = document.createElement('button');
likeButton.type = 'button';
likeButton.classList.add('card__like-btn');

// 2. Assign the data (The "Safe" Way)
imageElement.src = modalLinkInput.value;
imageElement.alt = modalCaptionInput.value; // No need for "photo-by" prefix
titleElement.textContent = modalCaptionInput.value;

// 3. Assemble the hierarchy
captionContainer.append(titleElement, likeButton);
cardElement.append(imageElement, captionContainer);

// 4. Add it to your list (assuming you have a 'cardContainer' variable)
    cardContainer.prepend(cardElement) ;
    console.log(modalLinkInput.value);
    console.log(modalCaptionInput.value);
    closeModal(postModal);
  }

  editCloseButton.addEventListener("click", () => closeModal(editModal));
  postCloseButton.addEventListener("click", () => closeModal(postModal));

  editButton.addEventListener("click", handleEditButton);
  postButton.addEventListener("click", () => openModal(postModal));

  editModalForm.addEventListener("submit", handleEditModalForm);
  postModalForm.addEventListener("submit", handlePostModalForm);
});
