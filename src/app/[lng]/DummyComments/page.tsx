import type IComment from '@/app/[lng]/DummyComments/interfaces/IComment';
import type ICommentResponse from '@/app/[lng]/DummyComments/interfaces/ICommentResponse';

import DummyComments from '@/app/[lng]/DummyComments/components/DummyComments';

const getDummyData = async (): Promise<IComment[]> => {
  const response = await fetch('https://dummyjson.com/comments');
  const data = await response.json() as ICommentResponse;

  return data.comments;
};

async function DummyCommentPage() {
  const dummyData = await getDummyData();

  return (
    <DummyComments data={dummyData} />
  );
}

export default DummyCommentPage;
