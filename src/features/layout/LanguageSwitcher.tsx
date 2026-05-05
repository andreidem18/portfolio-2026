'use client';

import { useRouter } from 'next/navigation';
import { ESFlag, UKFlag } from './flags';

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    router.refresh();
  };

  return (
    <div className='flex gap-1'>
      <button onClick={() => changeLanguage('en')} className='cursor-pointer hover:-translate-y-0.5 duration-200'>
        <UKFlag className='w-5' />
      </button>
      <button onClick={() => changeLanguage('es')} className='cursor-pointer hover:-translate-y-0.5 duration-200'>
        <ESFlag className='w-5 ' />
      </button>
    </div>
  );
}
