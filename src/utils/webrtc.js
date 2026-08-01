import Peer from 'peerjs';

// Generates a short, human-typeable 6-digit code to use as the PeerJS ID
const generateShortCode = () => Math.floor(100000 + Math.random() * 900000).toString();

const ICE_CONFIG = {
  'iceServers': [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
    { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' }
  ]
};

// initPeer creates a Peer with a random 6-digit ID. If that ID happens to already
// be taken on the signaling server, it transparently retries with a new one.
// onOpen is called with (id, peerInstance) once a connection is live.
// Returns a handle with getPeer()/destroy() since the underlying Peer instance
// can change across retries.
export const initPeer = (onOpen, onError) => {
  let currentPeer = null;
  let destroyed = false;

  const attempt = () => {
    if (destroyed) return;
    const id = generateShortCode();
    const peer = new Peer(id, {
      config: ICE_CONFIG,
      debug: 2
    });
    currentPeer = peer;

    peer.on('open', (assignedId) => {
      if (destroyed) return;
      onOpen(assignedId, peer);
    });

    peer.on('error', (err) => {
      const type = err.type || err.message || String(err);
      console.error('PeerJS Error:', err);
      if (type === 'unavailable-id') {
        // Someone else already holds this code — silently generate a new one
        peer.destroy();
        attempt();
        return;
      }
      if (onError) onError(type);
    });
  };

  attempt();

  return {
    getPeer: () => currentPeer,
    destroy: () => {
      destroyed = true;
      if (currentPeer) currentPeer.destroy();
    }
  };
};

export const connectToPeer = (peer, remoteId, onConnection) => {
  const conn = peer.connect(remoteId, {
    reliable: true
  });
  
  conn.on('open', () => {
    onConnection(conn);
  });
  
  return conn;
};
