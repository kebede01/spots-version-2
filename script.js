document.addEventListener("DOMContentLoaded", () => {
  const initialCards = [{
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
    {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
    {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    }
  ]
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

    initialCards.forEach((item) => {
      console.log(item.name, item.link);
     })
});
