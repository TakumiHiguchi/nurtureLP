import React, {Component} from 'react';
import '../css/header.scss';


function header(props) {
  return (
    <header className="header flex-jus-between">
      <h1>N:urture</h1>
      <div className="flex">
        <a href="#about">N:urtureとは？</a>
        <a href="#feature">N:urtureの特徴</a>
        <a href="#member">制作メンバー</a>
        <a href="./app">今すぐ使う！</a>
      </div>
    </header>
  );
}

export default header;
