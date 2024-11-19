import type IUser from '@/app/[lng]/DummyComments/interfaces/IUser';

interface IComment {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: IUser,
}

export default IComment;
