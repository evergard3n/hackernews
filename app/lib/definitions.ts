export default interface User {
  username: string;
  email: string;
  password: string;
  id: number;
  avatar: string;
}

export interface Post {
  author: User;
  title: string;
  content: string;
  post_id: number;
  timestamp: string;
}