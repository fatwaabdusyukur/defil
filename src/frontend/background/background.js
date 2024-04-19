chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      title: "Filter Tweet",
      contexts: ["selection"],
      id: "defil-menu",
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "defil-menu") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "filterTweet",
          value: info.selectionText,
        });
      });
    }
  });
  