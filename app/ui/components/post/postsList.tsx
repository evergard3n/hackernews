import { Post } from "@/app/lib/definitions";
import PostThumbnail from "./postThumbnail";
import { compareDesc } from "date-fns";
export default function PostsList({ posts }: { posts: Post[] }) {    
    const sortedPosts = posts.sort((a, b) => compareDesc(new Date(a.timestamp), new Date(b.timestamp)));
    return (
        <div className="flex flex-col gap-4 mt-8">
            {sortedPosts.map((post) => (
                <PostThumbnail key={post.post_id} post={post} />
            ))}
        </div>
    );
}