'use client';

import Link from 'next/link';
import type { ReactElement } from 'react';
import { useParams } from 'next/navigation';

import useTranslation from '../../../i18n/client';
import { languages } from '../../../i18n/settings';

function ToggleLanguage(): ReactElement {
  const { lng } = useParams();
  const { t } = useTranslation(lng, 'common');
  console.log(t('welcomeMessage'));
  return (
    <div>
      <p>{t('welcomeMessage')}</p>
      {languages.map((lng) => (
        <Link href={`/${lng}`} key={lng}>
          {lng}
        </Link>
      ))}
      &nbsp;
    </div>
  );
}

export default ToggleLanguage;
