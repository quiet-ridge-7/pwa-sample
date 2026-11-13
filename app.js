const countText = document.getElementById("count");
const plusButton = document.getElementById("plus");
const info = document.getElementById("info");
const cameraButton = document.getElementById("camera");
const cameraResult = document.getElementById("camera-result");

let count = 0;

plusButton.addEventListener("click", () => {
  count = count +1;                          // count を 1 増やす
  countText.textContent = count;  // 画面の数を、count にする
  console.log(count);
});

cameraButton.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraResult.textContent = "カメラが使えました";
    stream.getTracks().forEach((t) => t.stop());          // すぐ止める(映像は、画面に出さない)
  } catch (err) {
    cameraResult.textContent = "使えませんでした: " + err.name + ": " + err.message;   // エラーの名前と、メッセージ
  }
});

info.textContent = "URL: " + location.href + " / 安全な接続: " + isSecureContext;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}