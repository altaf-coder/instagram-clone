
import { NextApiRequest, NextApiResponse } from "next";
import { Server as IOServer } from "socket.io";
import { Socket as NetSocket } from "net";
import { Server as HTTPServer } from "http";

type SocketServer = HTTPServer & {
  io?: IOServer;
};

type SocketWithIO = NetSocket & {
  server: SocketServer;
};

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (!res.socket.server.io) {
  const io = new IOServer(res.socket.server, {
      path: "/api/socket_io",
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      socket.on("send-message", (msg) => {
        io.emit("receive-message", msg);
      });

      socket.on("disconnect", () => {
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
