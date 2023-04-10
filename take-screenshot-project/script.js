const screenshotBtn = document.querySelector("#src-btn");

const captureScreen = async () => {
  // asking permission to usa a media input to record current tab
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });
    const video = document.createElement("video");

    video.addEventListener("loadmetadata", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // passing video width asnf height as canvas width and height
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // drawing an image from the captured video stream
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      document.body.appendChild(canvas);
    });
    video.srcObject = stream; // passing capture stream data as video source object
  } catch (error) {
    console.log(error);
  }
};

screenshotBtn.addEventListener("click", captureScreen);
