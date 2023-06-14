import React, {useState} from 'react'
import { elastic as Menu } from 'react-burger-menu'
import { LoginModal } from '../loginModal/modal.component';


export const BurgerMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
    return (
      <Menu>
        <div>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/clients">Clients</a>
        </div>
        <div>
            <p id="login" className="menu-item" onClick={showModal} >Login</p>
            <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      </Menu>
    );
}