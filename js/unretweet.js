if (typeof unretweetBtn != "function") {
  function unretweetBtn() {
    const elements = document.querySelectorAll(
      '[style="color: rgb(0, 186, 124);"]'
    );

    if (elements) {
      // Melakukan klik pada setiap elemen yang ditemukan
      elements.forEach((element) => {
        element.click();
        const unretweetConfirmElements = document.querySelectorAll(
          '[data-testid="unretweetConfirm"]'
        );
        if (unretweetConfirmElements) {
          // Melakukan klik pada setiap elemen yang ditemukan
          unretweetConfirmElements.forEach((element) => {
            element.click();
          });
        }
      });
    }
  }
}
