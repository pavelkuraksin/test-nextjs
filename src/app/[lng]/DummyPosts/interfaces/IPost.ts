interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
}

export default IPost;
