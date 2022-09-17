const header = document.querySelector("header");

let lastScroll = window.pageYOffset;

const getDimensions = () => {
  const headerTop = header.getBoundingClientRect().top;
  const headerBottom = header.getBoundingClientRect().bottom;
  const headerHeight = headerBottom - headerTop;
  return headerHeight;
};

const adjustHeader = () => {};

window.addEventListener("scroll", e => {
  let currentScroll = e.currentTarget.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.top = `-${getDimensions()}px`;
    //update the value
    lastScroll = currentScroll;
  } else {
    header.style.top = "0px";
    lastScroll = currentScroll;
  }
});
