import React from 'react';
import { Header, Menu, Hamburguer } from './NavbarStyled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/box.svg';
import useMedia from '../../hooks/useMedia';

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const match = useMedia('(max-width: 728px)');
  const menuRef = React.useRef();

  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [menu]);

  React.useEffect(() => {
    if (!match) setMenu(false);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          setMenu(false);
          document.body.style.overflow = 'auto';
        }
      },
      { threshold: 0.5 },
    );

    if (menuRef.current) observer.observe(menuRef.current);

    return () => observer.disconnect();
  }, [match]);

  return (
    <Header>
      <div className="container">
        <Link to="/">
          magic
          <Logo />
          box
        </Link>
        <Menu
          ref={menuRef}
          className={match ? `mobile ${menu ? 'active' : ''}` : ''}
        >
          <ul>
            <a href="#planos">Planos</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#infraestrutura" className="mobile">
              Infraestrutura
            </a>
            <a href="#time" className="mobile">
              Time
            </a>
            <a href="#algomais" className="mobile">
              Algo mais
            </a>
            <a href="#contato" className="mobile">
              Contato
            </a>
          </ul>
          <button id="btn" className={match ? 'mobile' : ''}>
            Matricule-se
          </button>
        </Menu>
        <Hamburguer
          className={match ? 'mobile' : ''}
          onClick={() => setMenu(!menu)}
        >
          <span id="hamburguer" className={menu ? 'active' : ''}></span>
        </Hamburguer>
      </div>
    </Header>
  );
};

export default Navbar;
