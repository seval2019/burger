import React from 'react';
import Banner from "../assets/banner.png";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage: `url(${Banner})` }}></div>
        <div className="rightSide">
          <h1>Bizimle İletişime Geçin</h1>
          <form action="">
            <label> Ad Soyad</label>
            <input type="text" name="name"/>
            <label> E-mail</label>
            <input type="email" name="email" />
            <label> Mesajınız</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
    </div>
  )
}
