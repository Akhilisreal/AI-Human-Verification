rightWrist_x = "";

rightWrist_y = "";

score_right_wrist = "";

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function gotposes(results) {
    if (results.length > 0) {
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        score_right_wrist = results[0].pose.keypoints[10].score;
        console.log("right wrist x", rightWrist_x);
        console.log("right wrist y", rightWrist_y);
    }
}

function modelloaded() {
    console.log("Posenet Initialized");
}

function draw() {
    image(video, 0, 0, 500, 500);
    stroke("red");
    fill("red");
    noFill();
    rect(250, 250, 250, 250);
    stroke("red");
    fill("red");
    circle(rightWrist_x - 15, rightWrist_y - 15, 25);

    if (rightWrist_x > 260 && rightWrist_y > 260) {
        window.open("verified.html");
    }
}