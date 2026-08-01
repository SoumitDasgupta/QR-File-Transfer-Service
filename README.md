# QRStream — Optical File Transfer

QRStream is a fast, offline-capable Progressive Web App (PWA) for transferring files directly between devices — no internet connection, no shared Wi-Fi, and no server storing your data. It uses WebRTC for direct peer-to-peer transfer, initiated by scanning a QR code or entering a connection ID.

**Live App:** [soumitdasgupta.github.io/QR-File-Transfer-Service](https://soumitdasgupta.github.io/QR-File-Transfer-Service/)

---

## Features

- **Peer-to-Peer Transfer** — Files move directly device-to-device over WebRTC. Nothing is uploaded to or stored on a server.
- **Offline-First** — Installs as a PWA ("Add to Home Screen") and works fully offline once loaded.
- **Optical Pairing** — Start a transfer instantly by scanning a QR code with the receiver's camera.
- **Large File Support** — Files are automatically chunked for reliable, high-speed transfer.
- **Cross-Platform** — Works in any modern browser on iOS, Android, Windows, macOS, and Linux.
- **Private by Design** — Data stays on your local network or moves directly between the two connected devices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS, Lucide React |
| P2P Transport | PeerJS (WebRTC) |
| QR Scanning | html5-qrcode |
| Offline Support | vite-plugin-pwa (Service Workers) |

---

## Using QRStream Offline (PWA)

1. Open the [live app](https://soumitdasgupta.github.io/QR-File-Transfer-Service/) on your phone or desktop.
2. When prompted, select **Install App** or **Add to Home Screen**.
3. Launch it from your home screen going forward.
4. The app now works even without an internet connection for the transfer itself.

---

## Local Development

### Prerequisites
- Node.js v16 or higher

### Setup

```bash
git clone https://github.com/SoumitDasgupta/QR-File-Transfer-Service.git
cd QR-File-Transfer-Service
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## License

This project is open source. Feel free to fork, modify, and use it for your own projects.
