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
                Около полугода назад мы задумались, как можно помочь людям найти организацию для решения каких либо
                 проблем. При этом расчитывать не на красивые, и к сожелению иногда лживые, слова рекламщиков. И мы
                 решили сделать сервис для поиска организаций любого маштаба и предоставить им площадку для
                 соревнования. На нашем ресурсе всё решается отзывами клиентов, чем лучше вы его обслужили,
                 тем лучше отзыв, чем лучше отзыв, тем выше вы в поисковом запрос, тем вероятнее то, что вашу
                 организацию выберет большее количество людей.
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
                <a className="MenuName" href="https://www.facebook.com/Braymanrun">Artem Rakitski</a>
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
