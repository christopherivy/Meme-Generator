let url = document.getElementById("url-text");
let topText = document.getElementById("top-text");
let bottomText = document.getElementById("bottom-text");
let btn = document.getElementById("btn");
let memeContainer = document.getElementById("meme-container");

btn.addEventListener("click", function (e) {
	e.preventDefault();
	//when btn clicked makes a div and accepts the image and top/bottom text

	//get input values
	let urlInput = url.value;
	let topTextInput = topText.value;
	let bottomTextInput = bottomText.value;

	let newDiv = document.createElement("div");
	memeContainer.append(newDiv);
	newDiv.classList.add("newdiv");
	let memeImg = document.createElement("img");
	memeImg.classList.add("image");
	newDiv.append(memeImg);
	memeImg.src = urlInput;

	console.log(newDiv);
});
