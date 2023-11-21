window.addEventListener("scroll", function(){

  function handleImageZoom (pageNo) {
    const window_offset_bottom = window.innerHeight + window.scrollY;
    const page = document.getElementById(`company-${pageNo}`);
    const [image] = document.getElementsByClassName(`company-${pageNo}-img`);
    const scale = window_offset_bottom / (page.offsetTop + (page.offsetHeight / 2));
    if (window_offset_bottom > page.offsetTop) {
      image.style.transform = `scale(${scale < 1? 1: scale})`;
    } else {
      image.style.transform = `scale(${1})`;
    }
  }
  handleImageZoom(1);
  handleImageZoom(2);
  handleImageZoom(3);
});

/*window.addEventListener("wheel", function(e) {
  if (e.deltaY > 1) {
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById("company-1").offsetTop,
    })
  }
});*/
