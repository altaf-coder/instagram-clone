interface ProfilePageProps {
  id: string;
}
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/post/PostCard";
import { Image as ImageIcon, Film, Heart, MessageCircle } from "lucide-react";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "../input";
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
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MoreHorizontal, Settings, Bookmark, LogOut, Moon, Sun, Palette } from "lucide-react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const ProfilePage: React.FC<ProfilePageProps> = ({ id }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
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
  const [savedPostsOpen, setSavedPostsOpen] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedPostsLoading, setSavedPostsLoading] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const Following = currentUser?.followingIds?.includes(id);

  useEffect(() => {
    (async () => {
      try {
        setPostsLoading(true);
        const res = await axios.get("/api/post/getuserposts", {
          params: { userId: id },
        });
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setPostsLoading(false);
      }
    })();
  }, [id]);
  
  useEffect(() => {
    const fetchedUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/user/userbyid", {
          params: { id },
        });
        setIsFollowing(currentUser?.followingIds?.includes(res.data.id));
        setUser(res.data);
        setFollowersCount(res.data.followersCount);
        setFollowingCount(res.data.followingCount);
        setFollowingIds(res.data.following);
        setFollowersIds(res.data.followers);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchedUser();
  }, [id, currentUser]);
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

  const fetchSavedPosts = async () => {
    try {
      setSavedPostsLoading(true);
      const res = await axios.get("/api/post/getsavedposts");
      setSavedPosts(res.data);
      setSavedPostsOpen(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load saved posts");
    } finally {
      setSavedPostsLoading(false);
    }
  };

  const handlePostClick = (postId: string) => {
    router.push(`/post/${postId}`);
  };

  const getPostImage = (post: any) => {
    if (!post.postImage || !Array.isArray(post.postImage) || post.postImage.length === 0) {
      return null;
    }
    const firstImage = post.postImage[0];
    if (typeof firstImage === "string") {
      return firstImage;
    } else if (firstImage && typeof firstImage === "object") {
      return (firstImage as any).url || (firstImage as any).id || String(firstImage);
    }
    return String(firstImage);
  };

  const isVideo = (url: string) => {
    return url && /\.(mp4|mov|webm|mkv)$/i.test(url);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-10 px-4 w-full max-w-md mx-auto">
        <div className="w-full space-y-6">
          <div className="flex sm:hidden items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
          <div className="hidden sm:flex items-start gap-10">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="space-y-4 flex-1">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center mt-4 sm:mt-10 px-4 pb-20 lg:pb-10 w-full max-w-4xl mx-auto"
    >
      <div className="w-full">
        {/* Top Row for sm: Avatar + Username + Button */}
        <div className="flex sm:hidden items-center gap-4 mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user?.image || "/images/profile.webp"} />
          </Avatar>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-foreground">
              {user?.userName || user?.name}
            </p>
            <div className="flex items-center gap-2">
              {showEdit ? (
                <>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button size="sm" variant="secondary" className="h-[30px] text-sm px-4">
                        Edit Profile
                      </Button>
                    </SheetTrigger>
                <SheetContent className="bg-background border-border">
                  <SheetHeader>
                    <SheetTitle className="text-foreground">Edit profile</SheetTitle>
                    <SheetDescription className="text-muted-foreground">
                      Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                    <ProfileUpload onChange={setImage} value={image} />
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-4">
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
                      <Label htmlFor="sheet-demo-bio">Bio</Label>
                      <Input
                        value={bio}
                        onChange={(e: any) => setBio(e.target.value)}
                        name="bio"
                      />
                    </div>
                  </div>
                  <SheetFooter className="mt-4">
                    <Button
                      type="submit"
                      onClick={handleEdit}
                      disabled={!name && !userName && !bio && !image}
                    >
                      Save changes
                    </Button>
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                  </SheetContent>
                </Sheet>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={fetchSavedPosts}>
                        <Bookmark className="mr-2 h-4 w-4" />
                        Saved Posts
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? (
                          <>
                            <Sun className="mr-2 h-4 w-4" />
                            Switch to Light Mode
                          </>
                        ) : (
                          <>
                            <Moon className="mr-2 h-4 w-4" />
                            Switch to Dark Mode
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        <Palette className="mr-2 h-4 w-4" />
                        System Theme
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => router.push("/settings")}>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => signOut()}
                        className="text-destructive focus:text-destructive"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button
                    onClick={isFollowing ? unfollowUser : followUser}
                    size="sm"
                    variant={isFollowing ? "outline" : "default"}
                    className="h-[30px] text-sm px-4"
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[30px] text-sm px-3"
                  >
                    Message
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Instagram Style */}
        <div className="hidden sm:flex flex-row items-start gap-8 lg:gap-12">
          <Avatar className="h-24 w-24 lg:h-32 lg:w-32 flex-shrink-0">
            <AvatarImage src={user?.image || "/images/profile.webp"} className="object-cover" />
          </Avatar>

          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-lg lg:text-xl font-semibold text-foreground">
                {user?.userName || user?.name}
              </p>
              {!showEdit && (
                <>
                  <Button
                    onClick={Following ? unfollowUser : followUser}
                    size="sm"
                    variant={isFollowing ? "outline" : "default"}
                    className="h-[30px] lg:h-[38px] text-sm lg:text-base px-4"
                  >
                    {Following ? "Following" : "Follow"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[30px] lg:h-[38px] text-sm lg:text-base px-3"
                  >
                    Message
                  </Button>
                </>
              )}
              {showEdit && (
                <>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="h-[38px] text-base px-4">
                        Edit Profile
                      </Button>
                    </SheetTrigger>
                  <SheetContent className="bg-background border-border">
                    <SheetHeader>
                      <SheetTitle className="text-foreground">Edit profile</SheetTitle>
                      <SheetDescription className="text-muted-foreground">
                        Make changes to your profile here. Click save when you&apos;re done.
                      </SheetDescription>
                      <ProfileUpload onChange={setImage} value={image} />
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-4">
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
                        <Label htmlFor="sheet-demo-bio">Bio</Label>
                        <Input
                          value={bio}
                          onChange={(e: any) => setBio(e.target.value)}
                          name="bio"
                        />
                      </div>
                    </div>
                    <SheetFooter className="mt-4">
                      <Button
                        type="submit"
                        onClick={handleEdit}
                        disabled={!name && !userName && !bio && !image}
                      >
                        Save changes
                      </Button>
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={fetchSavedPosts}>
                        <Bookmark className="mr-2 h-4 w-4" />
                        Saved Posts
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? (
                          <>
                            <Sun className="mr-2 h-4 w-4" />
                            Switch to Light Mode
                          </>
                        ) : (
                          <>
                            <Moon className="mr-2 h-4 w-4" />
                            Switch to Dark Mode
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        <Palette className="mr-2 h-4 w-4" />
                        System Theme
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => router.push("/settings")}>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => signOut()}
                        className="text-destructive focus:text-destructive"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>

            <div className="flex text-foreground gap-6 text-sm">
              <p className="font-semibold">{posts?.length} Posts</p>
              <p
                className="cursor-pointer hover:opacity-80 transition"
                onClick={() => setIsFollowOpen(true)}
              >
                {followersCount} Followers
              </p>
              <p
                className="cursor-pointer hover:opacity-80 transition"
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

            <p className="text-foreground font-semibold text-base">{user?.name}</p>

            <p className="text-foreground text-sm">
              {user?.bio || "Edit Profile to Add bio."}
            </p>
          </div>
        </div>

        {/* Bottom Section on sm only */}
        <div className="sm:hidden flex flex-col items-center text-center gap-2 text-foreground text-sm mt-4">
          <div className="flex justify-center gap-4 text-xs">
            <p className="font-semibold">{posts?.length} Posts</p>
            <p className="cursor-pointer hover:opacity-80" onClick={() => setIsFollowOpen(true)}>
              {followersCount} Followers
            </p>
            <p
              className="cursor-pointer hover:opacity-80"
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
          <p className="font-semibold mt-2">{user?.name}</p>
          <p className="text-xs">{user?.bio || "Edit Profile to Add bio."}</p>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-border my-6 w-full" />

      {/* Posts Grid - Instagram Style */}
      {postsLoading ? (
        <div className="grid grid-cols-3 gap-0.5 sm:gap-1 w-full max-w-4xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Skeleton key={i} className="aspect-square w-full" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 w-full max-w-4xl">
          <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center mb-4">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-lg font-semibold">No posts yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-0.5 sm:gap-1 w-full max-w-4xl">
          {posts.map((post: any, index: number) => {
            const postImageUrl = getPostImage(post);
            const video = postImageUrl && isVideo(postImageUrl);
            return (
              <motion.div
                key={post?.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square group cursor-pointer overflow-hidden bg-black"
                onClick={() => handlePostClick(post.id)}
              >
                {postImageUrl ? (
                  video ? (
                    <div className="relative w-full h-full">
                      <video
                        src={postImageUrl}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                          <Film className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={postImageUrl}
                      alt={post.caption || "Post"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="h-5 w-5 fill-white" />
                      {post.likes?.length || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-5 w-5 fill-white" />
                      {post.postComments?.length || 0}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Saved Posts Dialog */}
      <Dialog open={savedPostsOpen} onOpenChange={setSavedPostsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Saved Posts</DialogTitle>
            <DialogDescription>Posts you've saved</DialogDescription>
          </DialogHeader>
          {savedPostsLoading ? (
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="aspect-square w-full" />
              ))}
            </div>
          ) : savedPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Bookmark className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">No saved posts</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-1">
              {savedPosts.map((post: any) => {
                const postImageUrl = getPostImage(post);
                const video = postImageUrl && isVideo(postImageUrl);
                return (
                  <div
                    key={post.id}
                    className="relative aspect-square group cursor-pointer overflow-hidden bg-black"
                    onClick={() => {
                      setSavedPostsOpen(false);
                      handlePostClick(post.id);
                    }}
                  >
                    {postImageUrl ? (
                      video ? (
                        <div className="relative w-full h-full">
                          <video
                            src={postImageUrl}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                              <Film className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={postImageUrl}
                          alt={post.caption || "Post"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white font-semibold">
                        <span className="flex items-center gap-1">
                          <Heart className="h-5 w-5 fill-white" />
                          {post.likes?.length || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-5 w-5 fill-white" />
                          {post.postComments?.length || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProfilePage;
