import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBellConcierge,
  faMessage,
  faSearch,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import cn from '../../../utils/cn';
import IconButton from '../../../components/IconButton';
import { useEffect, useRef, useState } from 'react';
import InputFieldWrapper from '@/components/form/InputFieldWrapper';

export default function AdminHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        console.log('scrolled');
        setIsScrolled(true);
      } else {
        console.log('not scrolled');
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn([
          'flex gap-6 items-center px-6',
          'fixed top-0 h-16 left-64 right-0 z-10',
          'bg-f1-dark-alt',
        ])}
      >
        <AdminHeaderSearchbar />
        <nav className='ml-auto'>
          <ul className='flex gap-6 items-center'>
            <li>
              <IconButton>
                <FontAwesomeIcon
                  icon={faBellConcierge}
                  className='text-xl text-neutral-200'
                />
              </IconButton>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  icon={faMessage}
                  className='text-xl text-neutral-200'
                />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  className='text-xl text-neutral-600 text-center rounded-full bg-amber-400 p-2'
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function AdminHeaderSearchbar() {
  // const classes = {
  //   containerClasses: cn([
  //     'flex gap-2 items-center rounded bg-f1-dark-field px-4 py-2',
  //     'focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent',
  //   ]),
  //   inputClasses: cn([
  //     'bg-transparent border-none outline-none placeholder-neutral-200 grow max-w-[300px] w-full focus:ring-0 focus:border-transparent',
  //   ]),
  //   buttonClasses: cn([
  //     'bg-transparent border-none outline-none text-neutral-200',
  //   ]),
  // };

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('searching...');
  }

  return (
    <form id='adminHeaderSearchbar' onSubmit={handleSearch}>
      <InputFieldWrapper className='px-2 py-1'>
        <input
          type='text'
          placeholder='Search'
          className={'border-none outline-none bg-transparent'}
        />
        <button type='submit' form='adminHeaderSearchbar' className={''}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </InputFieldWrapper>
    </form>
  );
}
