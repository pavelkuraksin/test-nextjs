'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import useTranslation from '../../../i18n/client';
import { languages } from '../../../i18n/settings';

import type { ReactElement } from 'react';

function ToggleLanguage(): ReactElement {
  const { lng } = useParams();
  const { t } = useTranslation(lng, 'common');
  return (
    <div>
      <p>{t('welcomeMessage')}</p>
      {languages.map((language) => (
        <Link href={`/${language}`} key={language}>
          {language}
        </Link>
      ))}
      &nbsp;
    </div>
  );
}

export default ToggleLanguage;
