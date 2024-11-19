import type IComment from '@/app/[lng]/DummyComments/interfaces/IComment';

interface ICommentResponse {
  comments: IComment[],
  total: number,
  skip: number,
  limit: number,
}

export default ICommentResponse;
