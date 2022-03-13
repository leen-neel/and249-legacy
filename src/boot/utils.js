import { Notify } from "quasar";

const scrollToHire = () => {
  document.querySelector("#hire").scrollIntoView({
    behavior: "smooth",
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const copyDiscord = () => {
  navigator.clipboard.writeText("and249#0249");

  Notify.create({
    message: "Username copied to clipboard!",
    color: "primary",
    timeout: 2000,
    progress: true,
    position: "top-right",
  });
};

export { scrollToHire, scrollToTop, copyDiscord };
