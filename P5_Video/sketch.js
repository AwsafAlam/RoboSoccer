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

function t1inc(){ 

    var e = document.getElementById("t1_score");
    var val = e.innerHTML;
    val++;
    e.innerHTML = val;
}
function t1dec(){ 
    var e = document.getElementById("t1_score");
    var val = e.innerHTML;
    val--;
    e.innerHTML = val;
}
function t2inc(){ 
    var e = document.getElementById("t2_score");
    var val = e.innerHTML;
    val++;
    e.innerHTML = val;
}
function t2dec(){ 
    var e = document.getElementById("t2_score");
    var val = e.innerHTML;
    val--;
    e.innerHTML = val;
}