import logo from '../images/logo.svg'
import './game.css'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import rock from '../images/icon-rock.svg'
import triangle from '../images/bg-triangle.svg'

export default function Game() {
    return (
        <div className="container">
            <div className="score_container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="score">
                    <p>SCORE</p>
                    <h2>12</h2>
                </div>
            </div>



            <div className="game">
                <div className="paper">
                    <div className="circle_color_paper">
                        <div className="circle circle_paper">
                            <img className="img_paper" src={paper} alt="" />
                        </div>
                    </div>
                </div>
                <div className="circle_color_scissors">
                    <div className="scissors">
                        <div className="circle circle_scissors">
                            <img className="img_scissors" src={scissors} alt="" />
                        </div>
                    </div> 
                </div>
                <div className="circle_color_rock">
                    <div className="rock">
                        <div className="circle circle_rock">
                            <img className="img_rock" src={rock} alt="" />
                        </div>
                    </div>
                </div>
                <div className="triangle">
                    <img src={triangle} alt="" />
                </div>
            </div>
            <div className="rules">
                <button className="btn_rules">RULES</button>
            </div>
        </div>

        
    );
}