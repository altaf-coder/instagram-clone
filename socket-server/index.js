/**
 * Standalone Socket.IO server for production (Vercel, etc.).
 * Vercel serverless cannot host persistent WebSocket connections.
 *
 * Deploy to Railway / Render / Fly.io and set NEXT_PUBLIC_SOCKET_URL on Vercel.
 */
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "*";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Instagram clone socket server running");
});

const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_ORIGIN === "*" ? true : CLIENT_ORIGIN.split(",").map((s) => s.trim()),
    credentials: true,
  },
  path: "/socket.io",
  addTrailingSlash: false,
});

io.on("connection", (socket) => {
  let currentUserId = null;

  socket.on("send-message", (msg) => {
    io.emit("receive-message", msg);
  });

  socket.on("message-delivered", (data) => {
    io.emit("message-delivered", data);
  });

  socket.on("message-seen", (data) => {
    io.emit("message-seen", data);
  });

  socket.on("post-like-update", (data) => {
    io.emit("post-liked", data);
  });

  socket.on("post-comment-update", (data) => {
    io.emit("post-commented", data);
  });

  socket.on("user-online", (userId) => {
    socket.broadcast.emit("user-online", userId);
  });

  socket.on("register-user", (userId) => {
    currentUserId = userId;
    socket.join(`user-${userId}`);
  });

  socket.on("call-invite", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-invite", {
      channelName: data.channelName,
      callType: data.callType || "audio",
      fromUserId: currentUserId,
      fromName: data.fromName,
      fromImage: data.fromImage,
      targetUserId: data.targetUserId,
    });
  });

  socket.on("call-accept", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-accept", {
      fromUserId: currentUserId,
      channelName: data.channelName,
      callType: data.callType,
    });
  });

  socket.on("call-offer", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-offer", {
      fromUserId: currentUserId,
      from: socket.id,
      offer: data.offer,
      callType: data.callType || "audio",
    });
  });

  socket.on("call-answer", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-answer", {
      fromUserId: currentUserId,
      from: socket.id,
      answer: data.answer,
      callType: data.callType || "audio",
    });
  });

  socket.on("call-ice-candidate", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-ice-candidate", {
      fromUserId: currentUserId,
      from: socket.id,
      candidate: data.candidate,
    });
  });

  socket.on("call-end", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-end", {
      fromUserId: currentUserId,
      from: socket.id,
    });
  });

  socket.on("call-reject", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("call-reject", {
      fromUserId: currentUserId,
      from: socket.id,
    });
  });

  socket.on("notify-user", (data) => {
    socket.to(`user-${data.targetUserId}`).emit("new-notification", data.payload ?? {});
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-offline", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Socket server listening on port ${PORT}`);
  console.log(`CORS origin: ${CLIENT_ORIGIN}`);
});
