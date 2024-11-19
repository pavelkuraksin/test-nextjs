import type IPost from '@/app/[lng]/DummyPosts/interfaces/IPost';
import type { IDummyPostResponse } from '@/app/[lng]/interfaces/IDummyData';

import DummyPosts from '@/app/[lng]/DummyPosts/components/DummyPosts';

const getDummyData = async (): Promise<IPost[]> => {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json() as IDummyPostResponse;

  return data.posts;
};

async function DummyPostsPage() {
  const dummyData = await getDummyData();

  return (
    <DummyPosts data={dummyData} />
  );
}

export default DummyPostsPage;
