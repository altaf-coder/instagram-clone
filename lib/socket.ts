import { io, Socket } from "socket.io-client";

let socketInstance: Socket | null = null;

/** Production: set NEXT_PUBLIC_SOCKET_URL to your Railway/Render socket server URL */
export const getSocketUrl = (): string | undefined => {
  const url = process.env.NEXT_PUBLIC_SOCKET_URL?.trim();
  return url || undefined;
};

export const usesExternalSocket = (): boolean => !!getSocketUrl();

export const getSocketPath = (): string =>
  usesExternalSocket() ? "/socket.io" : "/api/socket_io";

export const getSocket = (): Socket => {
  if (!socketInstance) {
    const url = getSocketUrl();

    socketInstance = io(url, {
      path: getSocketPath(),
      transports: ["polling", "websocket"],
      withCredentials: true,
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketInstance.on("connect", () => {
      console.log("[Socket] connected", socketInstance?.id, url || "same-origin");
    });

    socketInstance.on("disconnect", (reason) => {
      console.log("[Socket] disconnected", reason);
    });

    socketInstance.on("connect_error", (err) => {
      console.warn("[Socket] connect_error", err.message);
    });
  }

  return socketInstance;
};

/**
 * Local dev: hit Next.js API route to attach Socket.IO to the HTTP server.
 * Production (Vercel): skip — use standalone socket-server + NEXT_PUBLIC_SOCKET_URL.
 */
export const initSocketServer = (): Promise<void> => {
  if (usesExternalSocket()) {
    return Promise.resolve();
  }
  return fetch("/api/socket").then(() => {});
};

export const disconnectSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};
