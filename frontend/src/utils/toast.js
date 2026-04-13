export const showToast = (message, type = "success") => {
  const toast = document.createElement("div");

  toast.innerText = message;

  toast.className = `
    fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white z-50
    ${type === "success" ? "bg-green-600" : "bg-red-500"}
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};