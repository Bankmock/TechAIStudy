const SERVER = "http://34.126.111.67";

/* FETCH UI */
const fetchBox = document.getElementById("fetchBox");
const fetchBar = document.getElementById("fetchBar");
const fetchText = document.getElementById("fetchText");

function updateFetch(p){
  fetchBar.style.width = p + "%";
  fetchText.innerText = p + "%";
}

/* FETCH FORMATS */
const videoUrl = new URLSearchParams(location.search).get("url");
(async()=>{
  updateFetch(20);
  const r = await fetch(`${SERVER}/api/formats?url=${encodeURIComponent(videoUrl)}`);
  updateFetch(80);
  const d = await r.json();
  updateFetch(100);
  fetchBox.style.display="none";
  render(d);
})();

function mb(x){ return x ? (x/1048576).toFixed(2)+" MB" : "Unknown"; }

/* RENDER */
function render(d){
  title.innerText = d.title;
  videoThumb.src = d.thumbnail;

  let html = "";

  if(d.best_video){
    html += `
    <h2>🎥 Best Video</h2>
    <table class="data">
      <tr><th>Resolution</th><th>Size</th><th>Download</th></tr>
      <tr>
        <td>${d.best_video.resolution}</td>
        <td>${mb(d.best_video.filesize)}</td>
        <td>
          <button class="btn dl"
            data-url="${encodeURIComponent(d.best_video.url)}"
            data-name="${encodeURIComponent(d.title)}.mp4">
            Download
          </button>
        </td>
      </tr>
    </table>`;
  }

  if(d.other_videos && d.other_videos.length){
    html += `
    <h2>🎬 Video Formats</h2>
    <table class="data">
      <tr><th>Resolution</th><th>Size</th><th>Download</th></tr>`;
    d.other_videos.forEach(v=>{
      html += `
      <tr>
        <td>${v.resolution}</td>
        <td>${mb(v.filesize)}</td>
        <td>
          <button class="btn dl"
            data-url="${encodeURIComponent(v.url)}"
            data-name="${encodeURIComponent(d.title)}.${v.ext}">
            Download
          </button>
        </td>
      </tr>`;
    });
    html += `</table>`;
  }

  html += `
  <h2>🎧 Audio Formats</h2>
  <table class="data">
    <tr><th>Bitrate</th><th>Size</th><th>Download</th></tr>`;
  d.audio_formats.forEach(a=>{
    html += `
    <tr>
      <td>${a.bitrate||"??"} kbps</td>
      <td>${mb(a.filesize)}</td>
      <td>
        <button class="btn audio-btn dl"
          data-url="${encodeURIComponent(a.url)}"
          data-name="${encodeURIComponent(d.title)}.${a.ext}">
          Download
        </button>
      </td>
    </tr>`;
  });
  html += `</table>`;

  content.innerHTML = html;
}

/* SAFE CLICK */
document.addEventListener("click",e=>{
  if(e.target.classList.contains("dl")){
    const url = decodeURIComponent(e.target.dataset.url);
    const name = decodeURIComponent(e.target.dataset.name);
    download(url,name);
  }
});

/* DOWNLOAD WITH ETA */
async function download(url, filename){
  const toast = document.getElementById("toast");
  const pBox = document.getElementById("progressBox");
  const pBar = document.getElementById("progressBar");

  toast.style.display="block";
  pBox.style.display="block";
  toast.innerText="📁 DOWNLOADING…";

  const res = await fetch(
    `${SERVER}/stream?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`
  );

  const total = Number(res.headers.get("Content-Length"));
  const reader = res.body.getReader();

  let received = 0;
  const start = Date.now();
  const chunks = [];

  while(true){
    const {done,value} = await reader.read();
    if(done) break;

    chunks.push(value);
    received += value.length;

    const elapsed = (Date.now()-start)/1000;
    const speed = (received/1024/elapsed).toFixed(2);

    if(total && total > 0){
      const percent = Math.floor(received/total*100);
      pBar.style.width = percent+"%";
      const eta = ((total-received)/1024/speed)|0;
      toast.innerText =
`📁 DOWNLOADING ${percent}%
🚀 Speed: ${speed} KiB/s
⏳ ETA: ${formatTime(eta)}`;
    }else{
      toast.innerText =
`📁 DOWNLOADING
🚀 Speed: ${speed} KiB/s
📦 ${(received/1048576).toFixed(2)} MB`;
    }
  }

  const blob = new Blob(chunks);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();

  toast.innerText="✅ Download complete";
  setTimeout(()=>{
    toast.style.display="none";
    pBox.style.display="none";
    pBar.style.width="0%";
  },2000);
}

function formatTime(sec){
  const m = Math.floor(sec/60);
  const s = sec % 60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
