const header = document.querySelector("header");
const sectionTwo = document.querySelector("section:nth-of-type(2)");

let lastScroll = window.pageYOffset;

const getDimensions = () => {
  const headerTop = header.getBoundingClientRect().top;
  const headerBottom = header.getBoundingClientRect().bottom;
  const headerHeight = headerBottom - headerTop;
  return headerHeight;
};

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

options = {
  threshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      header.style.backgroundColor = "#f36755";
    } else {
      header.style.backgroundColor = "#c93773";
    }
  });
};

const sectionObserver = new IntersectionObserver(callback, options);
sectionObserver.observe(sectionTwo);
