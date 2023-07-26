//an array storing path to background images 
var backgroundImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    
];
// sets the starting index(a nemerical value that represnts a position in an array)
var currentImage= 0;


//this functions sets the style for the body to the images stored in the array
// adds 1 to the currentImage index number then uses modulo restart once it reaches the end of the array 
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentImage]}')`;
    currentImage = (currentImage + 1) % backgroundImages.length;
}


changeBackgroundImage();

// function useed to change backgroung image every 5 seconds 
setInterval(changeBackgroundImage, 5000);




