// let paragraph = document.getElementById("paragraph");
// console.log(paragraph);

// let links = document.getElementsByClassName("link");
// console.log(links);

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// index.js

// let paragraphId = paragraph.getAttribute("id");
// console.log(paragraphId); // <== paragraph

// paragraph.setAttribute("id", "info-paragraph");
// console.log(paragraph);

// http://www.google.com
// const anchor = document.getElementById("google-link");
// console.log(anchor);
// anchor.setAttribute("href", "https://www.google.com");
// anchor.setAttribute("target", "_blank");

// let paragraph = document.getElementById('paragraph');
// let paragraph = document.getElementById("paragraph");
// paragraph.removeAttribute("id");
// paragraph.setAttribute("class", "paragraph");
// paragraph.removeAttribute("class");

// // create an element
// let h2Tag = document.createElement("h2");
// h2Tag.innerHTML = "Hello World!";
// console.log(h2Tag);

// // add the element to the body
// let body = document.getElementsByTagName("body")[0];
// body.appendChild(h2Tag);

// // create a text node
// let text = document.createTextNode("This text is created dynamically");
// body.appendChild(text);

// const body = document.getElementsByTagName("body")[0];
// const p = document.createElement("p");
// const text = document.createTextNode("Hello There, I am learning JavaScript");
// console.log(text);
// p.appendChild(text);
// body.appendChild(p);

// const title = document.getElementById("title");
// title.innerHTML = "";
// console.log(title);

const button = document.getElementById("add-item-button");
// console.log(button);
// button.onclick = function () {
//   console.log("button was clicked");
// };

//
// button.addEventListener("click", function () {
//   console.log("clicked using event listener");
// });

//
const input = document.getElementById("myInput");
console.log(input.value);

//
// input.onchange = function () {
//   console.log("input was changed");
// };

let liTags = document.getElementsByTagName("li");
// console.log(liTags);
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = function (e) {
    console.log(e.currentTarget.innerHTML);
  };
}
