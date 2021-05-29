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

	if (!urlInput) return;

	//newdiv
	let newDiv = document.createElement("div");

	//add the newdiv to the meme container with a class
	memeContainer.append(newDiv);
	newDiv.classList.add("newDiv");

	//create the top text div
	let topTextDiv = document.createElement("div");
	newDiv.append(topTextDiv);
	topTextDiv.classList.add("top-text", "memeText");
	topTextDiv.innerText = topTextInput;

	//create the img text div
	let imgDiv = document.createElement("div");
	newDiv.append(imgDiv);
	imgDiv.classList.add("imageDiv");
	let memeImg = document.createElement("img");
	memeImg.src = urlInput;
	memeImg.classList.add("image");
	imgDiv.append(memeImg);

	//create the bottom text div
	let bottomTextDiv = document.createElement("div");
	newDiv.append(bottomTextDiv);
	bottomTextDiv.classList.add("bottom-text", "memeText");
	bottomTextDiv.innerText = bottomTextInput;

	//clear out input fields
	url.value = "";
	topText.value = "";
	bottomText.value = "";
});

memeContainer.addEventListener("click", function (e) {
	e.preventDefault();
	let deleteMeme = e.target.offsetParent.offsetParent;
	if (deleteMeme !== null && deleteMeme.classList.contains("newDiv")) {
		deleteMeme.remove();
	}
});
