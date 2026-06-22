/** Agora App ID (client-safe, from next.config env) */
export const getAgoraAppId = (): string => {
  return process.env.NEXT_PUBLIC_AGORA_APP_ID || "";
};

/** Stable numeric UID for Agora from a string user id */
export const userIdToAgoraUid = (userId: string): number => {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = (hash << 5) - hash + userId.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 2147483647 || 1;
};

/** Unique channel name for a 1:1 call session */
export const createCallChannelName = (
  callerId: string,
  calleeId: string
): string => {
  const ts = Date.now();
  const a = callerId.replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "a";
  const b = calleeId.replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "b";
  return `call_${a}_${b}_${ts}`;
};

export type CallType = "audio" | "video";

export interface CallInvitePayload {
  channelName: string;
  callType: CallType;
  fromUserId: string;
  fromName: string;
  fromImage?: string;
  targetUserId: string;
}

export const fetchAgoraToken = async (
  channelName: string,
  uid: number
): Promise<string | null> => {
  const res = await fetch(
    `/api/agora/token?channel=${encodeURIComponent(channelName)}&uid=${uid}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Failed to fetch Agora token");
  }
  return data.token ?? null;
};
