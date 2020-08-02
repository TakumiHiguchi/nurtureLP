import React, {Component} from 'react';
import './App.scss';
import './App_sm.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight,faChevronDown,faShareAlt,faShieldAlt,faBook } from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; //twitterアイコン

import Header from './component/header'

const ChevronRight ={
  marginLeft:"10px"
}
const Twitter ={
  marginRight:"5px",
  color:"#00aced"
}
const Book ={
  marginRight:"5px"
}
const IndexIcon ={
  fontSize:"5em"
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        device: 'pc',
    };
  }
  componentDidMount() {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0) {
      this.setState({ device: 'sp' });
    } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
      // iOS12 まで
      this.setState({ device: 'tab' });
    } else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
      // iOS13 以降
      this.setState({ device: 'tab' });
    } else {
      this.setState({ device: 'pc' });
    }
  }
  render(){
    return (
      <div className="App">
        <div className="wrap scroll-y">
          <section className="top_section">
            <Header />
            <div className="next"><FontAwesomeIcon style={{fontSize:"4em"}} icon={faChevronDown} /></div>
            <div className="flex-jus-between top_section_inner">
              <div></div>
              <div className="title">
                <h1><span className="maintitle">N:urture</span><span className="subtitle">日本大学生専用の時間割管理アプリ</span></h1>
                {this.state.device == "pc" ?
                  <a href="./app">今すぐ使う<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                  :
                  <div></div>
                }
              </div>
              
            </div>
            
          </section>
          <section className="about_section" id="about">
            <h2>N:urture（ナーチャ）とは？</h2>
            <div className="content flex-jus-center">
              <div className="mocImage"><img alt="nurtureトップ" src="https://hiiragi000.xsrv.jp/images/portfolio/nurtureMoc.png" /></div>
              <div className="contentInner">
                <h3 style={{marginBottom:"30px"}}>日本大学生が作った、日本大学生のための時間割管理アプリ</h3>
                <p>日本大学の授業に最適化された時間割アプリです。<br />すでに他のユーザーが登録している授業なら、授業を選択するだけで時間割を作ることができます。</p>
                <p>他にも、タスクや試験、授業変更から休講までカレンダー上に登録できたり、<br />授業やタスクを登録したカレンダーを友達や先輩、先生と共有することができます。</p>
                {this.state.device == "pc" ?
                  <p>他にも、タスクや試験、授業変更から休講までカレンダー上に登録できたり、<br />授業やタスクを登録したカレンダーを友達や先輩、先生と共有することができます。</p>
                  :
                  <p>他にも、タスクや試験、授業変更から休講までカレンダー上に登録できたり、授業やタスクを登録したカレンダーを友達や先輩、先生と共有することができます。</p>
                }
                <p>現在も開発は続けられているので、新たな機能を提案していただくことも可能です。</p>
                <p>また、当サービスではメールアドレス・パスワードを一切保存していないため、<br />セキュリティー面でも安心です。</p>
              </div>
            </div>
          </section>
          <section className="can_section" id="feature">
            <h2>N:urtureの特徴</h2>
            <p　style={{textAlign:"center"}} className="subindex">ここではN:urtureの魅力を少しだけ紹介します。</p>
            <div className="content flex-jus-center">
              <div className="canContainer">
                <div><FontAwesomeIcon style={IndexIcon} icon={faCalendarCheck} /></div>
                <h3>スケジュールをカレンダーごとに登録</h3>
                <p>授業やタスクや試験などのスケジュールをカレンダーに登録して管理できます。<br/>カレンダーは複数作成可能なので、サークルの予定と授業の予定などを別々に管理することが可能です。</p>
              </div>
              <div className="canContainer">
                <div><FontAwesomeIcon style={IndexIcon} icon={faShareAlt} /></div>
                <h3>カレンダーを他のユーザーと共有</h3>
                <p>作ったカレンダーは、他のユーザーと共有することができます。<br/>そのままコピーして共有する機能に加え、カレンダーをフォローして変更を自動で反映する機能もあります。</p>
              </div>
              <div className="canContainer">
                <div><FontAwesomeIcon style={IndexIcon} icon={faShieldAlt} /></div>
                <h3>安心のセキュリティ</h3>
                <p>ログインにGoogle OAuth 2.0を採用しており、メールアドレス・パスワードを保存していないため、当サービスから個人情報が流出することはありません。</p>
              </div>
            </div>
          </section>
          <section className="member_section" id="member">
            <h2>制作メンバー</h2>
            <p　style={{textAlign:"center"}} className="subindex">N:urtureの制作に関わったメンバーです。</p>
            <div className="content flex-jus-center">
              <div className="memberContainer">
                  <div className="icon"><img src="https://hiiragi000.xsrv.jp/images/nurture/takumi.jpg" /></div>
                  <div className="prf">
                    <p className="name">Takumi</p>
                    <p className="des">設計・バックエンド・フロントエンドを担当。</p>
                  </div>
                  <div className="link">
                    <a href="https://twitter.com/taku_blockchain"><FontAwesomeIcon style={Twitter} icon={faTwitter} />Twitter</a>
                    <a href="https://techlife.branchwith.com/portfolio/"><FontAwesomeIcon style={Book} icon={faBook} />Portfolio</a>
                  </div>
              </div>
              <div className="memberContainer" id="member">
                  <div className="icon"><img src="https://hiiragi000.xsrv.jp/images/nurture/Rinn.jpg" /></div>
                  <div className="prf">
                    <p className="name">Rinn</p>
                    <p className="des">イラスト・アイコン・画像を担当。</p>
                  </div>
                  <div className="link">
                    <a href="https://twitter.com/30z7fkUvk5I5HZY"><FontAwesomeIcon style={Twitter} icon={faTwitter} />Twitter</a>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
