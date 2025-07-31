"use client";
import ProfilePage from "@/components/ui/profile/ProfilePage";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  type Params = {
    id: string;
  };
  const params = useParams<Params>();
  const id = params?.id;
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [session, status]);
  return <div>{session && <ProfilePage id={id || ""} />}</div>;
};

export default page;
