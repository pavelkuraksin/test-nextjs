import type IPost from '@/app/[lng]/DummyPosts/interfaces/IPost';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

function DummyPosts({ data }: { data: IPost[] }) {
  return (
    <ScrollArea className="h-80 w-4/5 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Post</h4>
        {data.map((item) => (
          <>
            <div key={item.id} className="text-sm">
              {item.title}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

export default DummyPosts;
