"use client";

import { useEffect } from "react";
import { getSocket, initSocketServer } from "@/lib/socket";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function SocketUserRegistration() {
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    initSocketServer().then(() => {
      const socket = getSocket();

      const register = () => {
        if (currentUser?.id) {
          socket.emit("register-user", currentUser.id);
        }
      };

      if (socket.connected) register();
      socket.on("connect", register);
      cleanup = () => socket.off("connect", register);
    });

    return () => {
      cleanup?.();
    };
  }, [currentUser?.id]);

  return null;
}
