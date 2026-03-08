const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

form.addEventListener("input", () => {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Both fields must be filled");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});