function preload() {  
  }
  
  function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";
  }
  
  function draw() {
    image(video, 160, 120, 320, 240);

    fill(255, 0, 0)
    stroke(255, 0, 0);
    circle(590, 460, 50);
    circle(590, 30, 50);
    circle(50, 460, 50);
    circle(50, 30, 50);
    stroke(0, 128, 0);
    fill(0, 128, 0)
    rect(60, 25, 530, 20);
    rect(60, 445, 530, 20);
    rect(60, 25, 20, 420);
    rect(570, 40, 20, 420);

  }

  function take_snapshot(){
    save('You.png');
  }
