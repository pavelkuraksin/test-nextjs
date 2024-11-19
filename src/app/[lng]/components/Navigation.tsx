'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

function Navigation({ lang } : { lang: string | undefined }) {
  const currentRoute = usePathname();

  return (
    <NavigationMenu className="flex justify-center p-6">
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-2">
          <Link href={`/${lang}/`}>
            <Button className={currentRoute === `/${lang}` ? 'bg-blue-500' : ''}>Home</Button>
          </Link>

          <Link href={`/${lang}/DummyPosts`}>
            <Button className={currentRoute === `/${lang}/DummyPosts` ? 'bg-blue-500' : ''}>Posts</Button>
          </Link>

          <Link href={`/${lang}/DummyComments`}>
            <Button className={currentRoute === `/${lang}/DummyComments` ? 'bg-blue-500' : ''}>Comments</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
