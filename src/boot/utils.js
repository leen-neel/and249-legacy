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

export { scrollToHire, scrollToTop };
