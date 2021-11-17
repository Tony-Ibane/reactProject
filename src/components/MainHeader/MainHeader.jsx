import React from 'react';
import './style.css';
import img from '../../assets/logoBenkyou.png';
import iconFlower from '../../assets/flower.png';

export default function MainHeader() {
  return (
    <React.Fragment>
      <section className="mainHeader">
        <header>
          <img className="logo" src={img} alt="logo Benkyou"></img>
        </header>

        <div className="sideMenu">
          <ul>
            <li>
              <button>
                Job Status
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                Presentation
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                Video
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                Game
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                Exercise
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                3D assets
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                New Job
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
            <li>
              <button>
                Look&Feel
                <img className="flower" src={iconFlower}></img>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
