import React from 'react';
var About = React.createClass({
render: function () {
  return (
  <div>
    <div className="RowFlex ColorAbout">
      <div className="TextAbout">
        About us
      </div>
      <div className="TextHistory">HISTORY OF CREATION</div>
      <div className="TextHistoryDescription">
        Около года назад мы заинтересовались возможностью увидеть мир глазами других людей. Каково было бы очутиться в центре митингующей толпы и взглянуть на события глазами непосредственного участника протеста, а через минуту — наблюдать за восходом солнца с воздушного шара в Каппадокии? Вам это может показаться невероятным, но мы задумывали создать нечто близкое к телепортации. Хотя у нас есть много способов следить за событиями и узнавать о новых местах, мы поняли, что ничто не сможет сравниться с видеотрансляцией в прямом эфире. Одна фотография стоит тысячи слов, но только видеотрансляция в прямом эфире способна перенести зрителя в другое место и показать ему окружающий мир.
      </div>
    </div>
      <div className="TextTeam">
        Join the team
      </div>
      <div className="PanelAbout">
        <button className="ButtonAbout">Design engineer</button>
        <button className="ButtonAbout">Software engineer</button>
      </div>
    <div className="AboutWorker">
      <div className="AboutMargin">
        <div className="MenuName">Design developer</div>
        <div>
          <img className="ImgAbout" src="http://cs629530.vk.me/v629530469/333ed/XGMm17hCMUU.jpg" width="180px" height="180px"/>
        </div>
        <a className="MenuName" href="https://www.facebook.com/profile.php?id=100003799963785">Vlad Salinov</a>
      </div>
      <div className="AboutMargin">
        <div className="MenuName">Frontend engineer</div>
        <div>
          <img className="ImgAbout" src="http://cs628025.vk.me/v628025197/32b3d/ymDqlPLtNvI.jpg" width="180px" height="180px"/>
        </div>
        <a className="MenuName" href="https://www.facebook.com/Braymanrun?pnref=lhc.friends">Artem Rakitski</a>
      </div>
      <div className="AboutMargin">
        <div className="MenuName">Backend engineer</div>
        <div>
          <img className="ImgAbout" src="http://cs628623.vk.me/v628623703/124a3/LfYfm5_XhDE.jpg" width="180px" height="180px"/>
        </div>
        <a className="MenuName" href="https://www.facebook.com/profile.php?id=100011018440746&pnref=lhc.friends">Yury Orgish</a>
      </div>
    </div>
  </div>
);
}
});
export default About;
