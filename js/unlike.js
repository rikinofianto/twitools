if (typeof unlikeBtn != "function") {
  function unlikeBtn() {
    const elemenPath = findLikeBtn();

    if (elemenPath) {
      // Loop melalui setiap elemen dan mengkliknya
      elemenPath.forEach((elem) => {
        elem.click();
      });
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
}

if (typeof findLikeBtn != "function") {
  function findLikeBtn() {
    return document.querySelectorAll('[style="color: rgb(249, 24, 128);"]');
  }
}
