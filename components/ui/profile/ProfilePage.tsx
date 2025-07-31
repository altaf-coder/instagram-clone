interface ProfilePageProps {
  id: string;
}
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/post/PostCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import toast from "react-hot-toast";
import ProfileUpload from "./ProfileUpload";
import FollowersModal from "./FollowersModal";
import FollowingsModal from "./FollowingModal";
const ProfilePage: React.FC<ProfilePageProps> = ({ id }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    id: "",
    userName: "",
    image: "",
    name: "",
    bio: "",
  });
  const { data: currentUser } = useCurrentUser();
  const [name, setName] = useState(currentUser?.name || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [image, setImage] = useState(currentUser?.image || "");
  const [userName, setUserName] = useState(currentUser?.userName || "");
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [followingIds, setFollowingIds] = useState([]);
  const [followersIds, setFollowersIds] = useState([]);
  const [isFollowOpen, setIsFollowOpen] = useState(false);
  const [isFollowingOpen, setIsFollowingOpen] = useState(false);
  const Following = currentUser?.followingIds?.includes(id);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/post/getuserposts", {
          params: { userId: id },
        });

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  useEffect(() => {
    const fetchedUser = async () => {
      try {
        const res = await axios.get("/api/user/userbyid", {
          params: { id },
        });
        console.log(res.data, "ldkjdflljjdlj");
        setIsFollowing(currentUser?.followingIds?.includes(res.data.id));
        setUser(res.data);
        setFollowersCount(res.data.followersCount);
        setFollowingCount(res.data.followingCount);
        setFollowingIds(res.data.following);
        setFollowersIds(res.data.followers);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetchedUser();
  }, [id]);
  const showEdit = currentUser?.id === user?.id;
  const handleEdit = async () => {
    try {
      const res = await axios.post("/api/user/edit", {
        userName,
        name,
        image,
        bio,
      });
      setUser(res.data);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in updating profile");
    }
  };
  // Function to follow a user
  const followUser = async () => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId: id,
      });
      setIsFollowing(true);
      toast.success("Followed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to follow user");
    }
  };

  const unfollowUser = async () => {
    try {
      const response = await axios.delete("/api/user/follow", {
        data: { userId: id }, // axios allows sending body with DELETE like this
      });
      setIsFollowing(false);
      toast.success("Unfollowed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to unfollow user");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-md">
        {/* Top Row for sm: Avatar + Username + Button */}
        <div className="flex sm:hidden items-center gap-4 mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user?.image || "/images/profile.webp"} />
          </Avatar>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-white">
              {user?.userName || user?.name}
            </p>
            {showEdit ? (
              <Button
                size="sm"
                variant="secondary"
                className="h-[30px] bg-gray-600 text-white hover:bg-gray-700 text-sm px-4"
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={isFollowing ? unfollowUser : followUser}
                size="sm"
                variant={isFollowing ? "outline" : "default"}
                className={`h-[30px] sm:h-[38px] ${
                  isFollowing
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white text-sm sm:text-base px-4`}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            )}
          </div>
        </div>

        {/* lg: Original Layout */}
        <div className="hidden sm:flex flex-row items-start gap-10">
          <Avatar className="h-32 w-32">
            <AvatarImage src={user?.image || "/images/profile.webp"} />
          </Avatar>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
              <p className="text-xl font-semibold text-white">
                {user?.userName || user?.name}
              </p>
              {!showEdit && (
                <Button
                  onClick={Following ? unfollowUser : followUser}
                  size="sm"
                  variant={isFollowing ? "outline" : "default"}
                  className={`h-[30px] sm:h-[38px] ${
                    Following
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white text-sm sm:text-base px-4`}
                >
                  {Following ? "Follwing" : "Follow"}
                </Button>
              )}
              {showEdit && (
                <div>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-[38px] bg-gray-600 text-white hover:bg-gray-700 text-base px-4"
                      >
                        Edit Profile
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle className="text-white">
                          Edit profile
                        </SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </SheetDescription>
                        <ProfileUpload onChange={setImage} value={image} />
                      </SheetHeader>
                      <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                          <Label htmlFor="sheet-demo-name">Name</Label>
                          <Input
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            name="name"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="sheet-demo-username">Username</Label>
                          <Input
                            value={userName}
                            onChange={(e: any) => setUserName(e.target.value)}
                            name="username"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="sheet-demo-username">Bio</Label>
                          <Input
                            value={bio}
                            onChange={(e: any) => setBio(e.target.value)}
                            name="bio"
                          />
                        </div>
                      </div>
                      <SheetFooter>
                        <Button
                          type="submit"
                          onClick={handleEdit}
                          disabled={!name && !userName && !bio && !image}
                        >
                          Save changes
                        </Button>
                        <SheetClose asChild>
                          <Button variant="outline" className="bg-red-500">
                            Close
                          </Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              )}
            </div>

            <div className="flex text-white gap-6 text-sm">
              <p>{posts?.length} Posts</p>
              <p
                className="cursor-pointer"
                onClick={() => setIsFollowOpen(true)}
              >
                {followersCount} Followers
              </p>
              <p
                className="cursor-pointer"
                onClick={() => setIsFollowingOpen(true)}
              >
                {followingCount} Following
              </p>
            </div>
            <FollowersModal
              isOpen={isFollowOpen}
              onClose={() => setIsFollowOpen(false)}
              label="Followers"
              users={followersIds}
            />

            <FollowersModal
              isOpen={isFollowingOpen}
              onClose={() => setIsFollowingOpen(false)}
              label="Following"
              users={followingIds}
            />

            <p className="text-white font-semibold text-base">{user?.name}</p>

            <p className="text-white text-sm">
              {user?.bio || "Edit Profile to Add bio."}
            </p>
          </div>
        </div>

        {/* Bottom Section on sm only */}
        <div className="sm:hidden flex flex-col items-center text-center gap-2 text-white text-sm">
          <div className="flex justify-center gap-4 text-xs">
            <p>{posts?.length} Posts</p>
            <p className="cursor-pointer" onClick={() => setIsFollowOpen(true)}>
              {followersCount} Followers
            </p>
            <p
              className="cursor-pointer"
              onClick={() => setIsFollowingOpen(true)}
            >
              {followingCount} Following
            </p>
          </div>
          <FollowersModal
            isOpen={isFollowOpen}
            onClose={() => setIsFollowOpen(false)}
            label="Followers"
            users={followersIds}
          />

          <FollowersModal
            isOpen={isFollowingOpen}
            onClose={() => setIsFollowingOpen(false)}
            label="Following"
            users={followingIds}
          />
        </div>

        <p className="font-semibold lg:hidden">{user?.name}</p>
        <p className="text-xs lg:hidden">
          {user?.bio || "Edit Profile to Add bio."}
        </p>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-700 my-6" />

      {/* Placeholder for PostCard, centered with space */}
      <div className="flex flex-col gap-6 w-full text-gray-400">
        {posts.map((post: any) => (
          <PostCard
            key={post?.id}
            id={post?.id}
            userId={post?.user?.id}
            image={post?.user?.image}
            userName={post?.user?.userName || post?.user?.name}
            postImage={post?.postImage}
            caption={post?.caption}
            createdAt={post?.createdAt}
            likesLength={post?.likes?.length}
            likedBy={post?.likes?.map((like: any) => like?.id)}
            currentUser={currentUser?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
