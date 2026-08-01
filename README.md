# QRStream — Optical & Peer-to-Peer File Transfer

QRStream is a Progressive Web App (PWA) for sending files directly between devices — phone to laptop, laptop to laptop, anywhere — without uploading anything to a server. Pair two devices by showing a QR code, scanning one, or typing in a short code, then transfer files directly over WebRTC. A fully offline optical mode is also built in for when there's no network at all.

**Live App:** [soumitdasgupta.github.io/QR-File-Transfer-Service](https://soumitdasgupta.github.io/QR-File-Transfer-Service/)

---

## Features

- **Peer-to-Peer Transfer** — Files move directly device-to-device over WebRTC. Nothing is uploaded to or stored on a server.
- **Three Ways to Pair** — Show a QR code, scan the other device's QR code, or exchange a short 6-character code by typing it in — whichever is easiest depending on your setup.
- **Fully Offline Optical Mode** — For situations with zero network connectivity, files can be sent by encoding them into a stream of QR frames displayed on-screen and read by the other device's camera. No WiFi, no internet, no signaling server required.
- **Installable PWA** — Add QRStream to your home screen for quick, app-like access.
- **Large File Support** — Files are automatically chunked and reassembled for reliable transfer.
- **Cross-Platform** — Works in any modern browser on iOS, Android, Windows, macOS, and Linux.
- **Private by Design** — In Fast Mode, file data flows directly between the two connected devices, never through a third-party server. Optical Mode never touches a network at all.

---

## How Pairing Works

QRStream has two transfer modes, selectable from the Send screen:

| Mode | How it moves data | Network required |
|---|---|---|
| **Fast Mode (WebRTC)** | Direct peer-to-peer connection, paired via QR scan or a 6-character code | Yes — an internet connection is needed briefly to set up the connection (signaling), even though the file itself transfers directly |
| **Optical Mode** | File is encoded into a sequence of QR frames read by the receiver's camera | None — works with the device completely offline |

Within **Fast Mode**, you can pair using any of:
- **Show QR** — generates a QR code for the receiver to scan
- **Scan QR** — scans the receiver's QR code instead
- **Use Code** — generate or enter a short 6-character code manually, useful when camera scanning between two screens is awkward (e.g. phone-to-laptop transfers)

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Custom CSS, Lucide React icons |
| P2P Transport | PeerJS (WebRTC) |
| QR Generation / Scanning | qrcode.react, html5-qrcode |
| Compression | fflate |
| Offline Support | vite-plugin-pwa (Service Workers) |

---

## Using QRStream Offline (PWA)

1. Open the [live app](https://soumitdasgupta.github.io/QR-File-Transfer-Service/) on your phone or desktop.
2. When prompted, select **Install App** or **Add to Home Screen**.
3. Launch it from your home screen going forward.
4. Use **Optical Mode** to transfer files with zero network connectivity of any kind.

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

## Known Limitations

- **Fast Mode** requires both devices to briefly reach PeerJS's public signaling server to establish a connection. If that handshake times out, check that neither device is on a network that blocks WebRTC (some corporate/school networks, or browsers like Brave with Shields enabled).
- **Optical Mode** is best suited to smaller files, since transfer speed is limited by how fast QR frames can be displayed and scanned.

---

## License

This project is open source. Feel free to fork, modify, and use it for your own projects.
