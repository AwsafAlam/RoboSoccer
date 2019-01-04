var video;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    video = createCapture(VIDEO);
    video.size(window.innerWidth, window.innerHeight);
    video.hide();
}

function draw() {
    // rect(50,50,20,20);
    image(video,0,0,width,height);
}

// function snap() {
//     canvas.width = video.clientWidth;
//     canvas.height = video.clientHeight;
//     context.drawImage(video,0,0);
// }