
let serial;
let pots = [512, 512, 512, 512];

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = createSerial();

  document.getElementById('connectBtn').addEventListener('click', () => {
    if (!serial.opened()) {
      serial.open(9600);
    } else {
      serial.close();
      document.getElementById('connectBtn').textContent = 'Connect Arduino';
    }
  });
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  if (serial.available() > 0) {
    const raw = serial.readUntil('\n');
    if (raw) {
      const trimmed = raw.trim();
      const parts = trimmed.split(',').map(Number);
      if (parts.length === 4 && parts.every(n => !isNaN(n))) {
        pots = parts;
        document.getElementById('connectBtn').textContent = '✅ Connected';
      }
    }
  }

  for (let i=0; i<4; i++) {
    let x = 1 - i%2;
    let y = parseInt(parseInt(i)/2);
    x = 300*x;
    y = 300*y;
    push();
    translate(300+x, 300+y);
    noStroke();
    fill(0, 0, 0);
    ellipse(0, 0, (1024-pots[i])/4, (1024-pots[i])/4);
    pop();
  }
  drawHUD();
}

function drawHUD() {
  const labels = [
    { label: 'POT1',  raw: pots[0] },
    { label: 'POT2',  raw: pots[1] },
    { label: 'POT3',  raw: pots[2] },
    { label: 'POT4',  raw: pots[3] },
  ];

  textSize(11);
  textFont('monospace');

  labels.forEach((item, i) => {
    const y = 20 + i * 28;
    const barWidth = map(item.raw, 0, 1023, 0, 120);
    const h = map(item.raw, 0, 1023, 200, 360);

    noStroke();
    fill(0, 0, 30, 80);
    rect(10, y, 120, 16, 4);
    fill(h, 80, 90, 90);
    rect(10, y, barWidth, 16, 4);
    fill(0, 0, 100);
    text(`${item.label} : ${item.raw}`, 14, y + 12);
  });
}