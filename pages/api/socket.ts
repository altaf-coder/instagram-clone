
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

      socket.on("message-delivered", (data) => {
        // Broadcast to all clients in the conversation
        io.emit("message-delivered", data);
      });

      socket.on("message-seen", (data) => {
        // Broadcast to all clients in the conversation
        io.emit("message-seen", data);
      });

      // Real-time post like updates
      socket.on("post-like-update", (data) => {
        // Broadcast to all clients
        io.emit("post-liked", data);
      });

      // Real-time post comment updates
      socket.on("post-comment-update", (data) => {
        // Broadcast to all clients
        io.emit("post-commented", data);
      });

      // Online status tracking
      socket.on("user-online", (userId: string) => {
        socket.broadcast.emit("user-online", userId);
      });

      // Store userId with socket connection
      let currentUserId: string | null = null;
      socket.on("register-user", (userId: string) => {
        currentUserId = userId;
        socket.join(`user-${userId}`);
      });

      // Call events
      socket.on("call-offer", (data: { targetUserId: string; offer: any }) => {
        socket.to(`user-${data.targetUserId}`).emit("call-offer", { 
          fromUserId: currentUserId, 
          from: socket.id, 
          offer: data.offer 
        });
      });

      socket.on("call-answer", (data: { targetUserId: string; answer: any }) => {
        socket.to(`user-${data.targetUserId}`).emit("call-answer", { 
          fromUserId: currentUserId, 
          from: socket.id, 
          answer: data.answer 
        });
      });

      socket.on("call-ice-candidate", (data: { targetUserId: string; candidate: any }) => {
        socket.to(`user-${data.targetUserId}`).emit("call-ice-candidate", { 
          fromUserId: currentUserId, 
          from: socket.id, 
          candidate: data.candidate 
        });
      });

      socket.on("call-end", (data: { targetUserId: string }) => {
        socket.to(`user-${data.targetUserId}`).emit("call-end", { 
          fromUserId: currentUserId, 
          from: socket.id 
        });
      });

      socket.on("disconnect", () => {
        // When user disconnects, emit offline status
        socket.broadcast.emit("user-offline", socket.id);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
