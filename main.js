/*bg*************************************************8*/

const noise = () => {
    let canvas, ctx;
  
    let wWidth, wHeight;
  
    let noiseData = [];
    let frame = 0;
  
    let loopTimeout;
  
    // Create Noise
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
  
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.8) {
          buffer32[i] = 0x080000ff; /* Set smallest dots of noise red */
        } else if (Math.random() < 0.20) {
          buffer32[i] = 0x0800ff00; /* Set small dots of noise green */
        } else if (Math.random() < 0.11) {
          buffer32[i] = 0x08ff0000; /* Set big dots of noise blue */
        } else if (Math.random() < 0.20) {
          buffer32[i] = 0xccdddddd; /* Set biggest dots of noise gray */
        }
      }
  
      noiseData.push(idata);
    };
  
    // Play Noise
    const paintNoise = () => {
      if (frame === 5) {
        frame = 0;
      } else {
        frame++;
      }
  
      ctx.putImageData(noiseData[frame], 0, 0);
    };
  
    // Loop
    const loop = () => {
      paintNoise(frame);
  
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };
  
    // Setup
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
  
      canvas.width = wWidth;
      canvas.height = wHeight;
  
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
  
      loop();
    };
  
    // Reset
    let resizeThrottle;
    const reset = () => {
      window.addEventListener(
        "resize",
        () => {
          window.clearTimeout(resizeThrottle);
  
          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        false
      );
    };
  
    // Init
    const init = (() => {
      canvas = document.getElementById("noise-canvas");
      ctx = canvas.getContext("2d");
  
      setup();
    })();
  };
  
  noise();


  //Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target1"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
for (var r = document.querySelectorAll(".section-links"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
o(r[a])
}
for (var r = document.querySelectorAll(".down-btn"), a = r.length - 1; a >= 0; a--) {
o(r[a])
}
for (var r = document.querySelectorAll(".email"), a = r.length - 1; a >= 0; a--) {
o(r[a])
}
for (var r = document.querySelectorAll(".social_contact"), a = r.length - 1; a >= 0; a--) {
o(r[a])
}
for (var r = document.querySelectorAll(".nav__list-item"), a = r.length - 1; a >= 0; a--) {
o(r[a])
}


function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}