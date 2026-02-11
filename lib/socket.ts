import { io, Socket } from "socket.io-client";

let socketInstance: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socketInstance) {
    socketInstance = io({
      path: "/api/socket_io",
      transports: ["polling", "websocket"],
      withCredentials: true,
    });

    socketInstance.on("connect", () => {
      console.log("[Socket] connected", socketInstance?.id);
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

/** Call once early (e.g. in layout) to ensure the Socket.IO server is attached before client connects. */
export const initSocketServer = (): Promise<void> => {
  return fetch("/api/socket").then(() => {});
};

export const disconnectSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};
