const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/PC white.jpg") {
    myImage.setAttribute("src", "images/6800XT.jpg");
  } else {
    myImage.setAttribute("src", "images/PC white.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}'s shopping list`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = ` ${storedName}'s shopping list`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  