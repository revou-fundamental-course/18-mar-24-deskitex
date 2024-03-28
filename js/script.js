let slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n) {
  showDiv((slideIndex += n));
}

function showDiv(n) {
  let imgList = document.getElementsByClassName("img-list");

  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (let i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}
setInterval(() => {
  plusDiv(1);
}, 3000);

function sendButton(){
    alert("Thank you for your message! We will get back to you soon!");
}
