"use client";

import { useEffect } from "react";
import { getSocket } from "@/lib/socket";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function SocketUserRegistration() {
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    if (!currentUser?.id) return;
    const socket = getSocket();
    socket.emit("register-user", currentUser.id);
  }, [currentUser?.id]);

  return null;
}
