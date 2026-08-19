import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:3000";

const io = new Server(server, {
    cors: {
        origin: allowedOrigin,
        credentials: true,
    },
});

const userSocketMap = {};

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        if (userId) {
            delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];
export { app, server, io };

