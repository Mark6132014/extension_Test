// List of important files
const importantFiles = [
    { name: 'index.html', url: location.href }
];
var script = document.querySelectorAll("script"); /* As a */
var link = document.querySelectorAll("link"); /* As b */
var audio = document.querySelectorAll("audio"); /* As c */
var video = document.querySelectorAll("video"); /* As d */
var a = document.querySelectorAll("a"); /* As e */
var iframe = document.querySelectorAll("iframe"); /* As f */
var img = document.querySelectorAll("img"); /* As g */
var base = document.querySelectorAll("base"); /* As h */
document.getElementById('downloadExtension_btn').addEventListener('click', async function() {
    const zip = new JSZip();
    const folder = zip.folder("content");
  for (var aDL = 0; script.length > aDL; aDL++) {
    importantFiles.push({ name: script[aDL].src, url: script[aDL].src });
  }
  for (var bDL = 0; link.length > bDL; bDL++) {
    importantFiles.push({ name: link[bDL].href, url: link[bDL].href });
  }
  for (var cDL = 0; audio.length > cDL; cDL++) {
    importantFiles.push({ name: audio[cDL].querySelector("source").src, url: audio[cDL].querySelector("source").src });
  }
  for (var dDL = 0; video.length > dDL; dDL++) {
    importantFiles.push({ name: video[dDL].querySelector("source").src, url: video[dDL].querySelector("source").src });
  }
  for (var eDL = 0; a.length > eDL; eDL++) {
    importantFiles.push({ name: a[eDL].src, url: a[eDL].src });
  }
  for (var fDL = 0; iframe.length > fDL; fDL++) {
    importantFiles.push({ name: iframe[fDL].src, url: iframe[fDL].src });
  }
  for (var gDL = 0; img.length > gDL; gDL++) {
    importantFiles.push({ name: img[gDL].src, url: img[gDL].src });
  }
  for (var hDL = 0; base.length > hDL; hDL++) {
    importantFiles.push({ name: base[hDL].src, url: base[hDL].src });
  }
    for (const file of importantFiles) {
        try {
            const fileResponse = await fetch(file.url);
            if (!fileResponse.ok) throw new Error('Network response was not ok');
            const blob = await fileResponse.blob();
            folder.file(file.name, blob);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }

    zip.generateAsync({ type: "blob" })
        .then(content => {
            saveAs(content, `${document.title}.zip`);
        })
        .catch(error => {
            console.error('Error generating ZIP file:', error);
        });
});
