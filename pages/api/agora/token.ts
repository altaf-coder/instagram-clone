import { NextApiRequest, NextApiResponse } from "next";
import { RtcRole, RtcTokenBuilder } from "agora-access-token";

function getAgoraCredentials() {
  const appId =
    process.env.PUBLIC_AGORA_APP_ID ||
    process.env.NEXT_PUBLIC_AGORA_APP_ID ||
    "";

  const appCertificate =
    process.env.AGORA_APP_CERTIFICATE ||
    process.env.AGORA_PRIMARY_CERTIFICATE ||
    process.env.PUBLIC_AGORA_APP_CERTIFICATE ||
    process.env.AGORA_SECONDARY_CERTIFICATE ||
    "";

  return { appId, appCertificate };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const channel = req.query.channel as string;
  const uid = parseInt(req.query.uid as string, 10);

  if (!channel || !uid || Number.isNaN(uid)) {
    return res.status(400).json({ error: "channel and uid are required" });
  }

  const { appId, appCertificate } = getAgoraCredentials();

  if (!appId) {
    return res.status(500).json({
      error: "Agora App ID is not configured. Add PUBLIC_AGORA_APP_ID to .env",
    });
  }

  // App ID only mode (disable certificate in Agora Console → Project → Security)
  const appIdOnlyMode = process.env.AGORA_APP_ID_ONLY === "true";

  if (!appCertificate) {
    if (appIdOnlyMode) {
      return res.status(200).json({ token: null, tokenRequired: false });
    }
    return res.status(400).json({
      error:
        "Agora App Certificate is required. Add AGORA_APP_CERTIFICATE to your .env file (Agora Console → Project → Config → Primary Certificate).",
      tokenRequired: true,
    });
  }

  const expireTime = Math.floor(Date.now() / 1000) + 3600;
  const token = RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channel,
    uid,
    RtcRole.PUBLISHER,
    expireTime
  );

  return res.status(200).json({ token, tokenRequired: true });
}
