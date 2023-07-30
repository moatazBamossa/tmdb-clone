import { useEffect, useState } from 'react';
import './header.css'
type itemstHeaders = {
  items: string[]
  pic?: string
}
export const Header = (props: itemstHeaders) => {
  const items = props.items;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {

      const handleScroll = () => {
        setIsSticky(window.scrollY > headerTop);
      };

      const header = document.querySelector('.header');
      const headerTop = header!.getBoundingClientRect().top;

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return(
    <header className={`header${isSticky ? ' is-sticky' : ''}`}>
        <div className="header__inner">
            <div className="header__logo">
                <img src={props.pic || reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className="header__nav">
                <ul>
                    {items.map((item)=>(
                      <a><li>{item}</li></a>
                    ))}
                </ul>
            </div>
        </div>
    </header>
  )
}
