import type IComment from '@/app/[lng]/DummyComments/interfaces/IComment';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

function DummyComments({ data }: { data: IComment[] }) {
  return (
    <ScrollArea className="h-80 w-4/5 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Comment</h4>
        {data.map((item) => (
          <>
            <div key={item.id} className="text-sm">
              {item.body}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

export default DummyComments;
