function sendResize() {
    const width = document.body.scrollWidth;
    const height = document.body.scrollHeight;
    window.parent.postMessage({
      type: 'resize-iframe',
      width: width,
      height: height
    }, '*');
}
// Call once on load
window.onload = sendResize;
// Call again if window resizes (optional, for responsive slides)
window.onresize = sendResize;