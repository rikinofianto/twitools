chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const tabId = tabs[0].id;
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      files: ["js/unlike.js", "js/unretweet.js"],
    })
    .then(() => console.log("script injection!"));
  // unlike
  $("#ext-tt-unlike").on("click", function () {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["js/press-unlike.js"],
      })
      .then(() => console.log("unlike process..."));
  });
  // unretweet
  $("#ext-tt-unretweet").on("click", function () {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["js/press-unretweet.js"],
      })
      .then(() => console.log("unretweet process..."));
  });
});
