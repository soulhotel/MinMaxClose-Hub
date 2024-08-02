
document.getElementById("minbtn").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    browser.windows.update(windowInfo.id, { state: "minimized" });
  });
});

document.getElementById("closebtn").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    browser.windows.remove(windowInfo.id);
  });
});

document.getElementById("resizebtn").addEventListener("click", function () {
  browser.windows.getCurrent().then((windowInfo) => {
    const newState = windowInfo.state === "normal" ? "maximized" : "normal";
    browser.windows.update(windowInfo.id, { state: newState });
  });
});
