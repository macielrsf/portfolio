import {useMemo} from 'react';
import { Link } from 'react-router-dom'
import { MdWbSunny } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

interface headerProps {
  showMenu: boolean
  text: string
}

import './styles.css';

const Header = ({ showMenu, text }: headerProps) => {
  const formatNameWithSpaces = useMemo(() => (text: string): string => {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
      newText += text.charAt(i).toUpperCase() + ' '
    }
    return newText.trim()
  }, []);

  return (
    <div className="header">
      <h2 className="logo">
        <a href="/">
          <span>&lt; </span> {formatNameWithSpaces(text)} <span> /&gt;</span>
        </a>
      </h2>
      {showMenu && (
        <ul className="menu">
          <li>
            {' '}
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#about">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link to="/login">Contact</Link>
          </li>
          <li>
            <a href="https://wa.me/5537999931412" target="_blank">
              <MdWbSunny className="social-media-icon" color="white" size={20} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5537999931412" target="_blank">
              <TbWorld className="social-media-icon" color="white" size={20} />
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header;
