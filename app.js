if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("Service Worker Registered", reg))
    .catch((err) => console.error("Service Worker registration failed", err));
} else {
  console.log("Service Worker not supported");
}
