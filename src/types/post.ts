export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
