document.body.style.border = "5px solid orange";

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "IMG") {
    return;
  }
  //browser.runtime.sendMessage({"src": e.target.src});
  //alert("OOPS!");
  console.log("event:");
  console.log(e);
  console.log("e.target");
  console.log(e.target);
  console.log(e.target.src);
}
