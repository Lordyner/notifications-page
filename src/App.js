import './index.scss';
import avatarMark from './images/avatar-mark-webber.webp';
import avatarAngela from './images/avatar-angela-gray.webp';
import avatarJacob from './images/avatar-jacob-thompson.webp';
import avatarRizky from './images/avatar-rizky-hasanuddin.webp';
import avatarKimberly from './images/avatar-kimberly-smith.webp';
import chessImg from './images/image-chess.webp';
import avatarNathan from './images/avatar-nathan-peterson.webp';
import avatarAnna from './images/avatar-anna-kim.webp';

function App() {
  return (
    <main className='container'>
      <div className='notifications-container'>
        <section className='notifciations-container-header'>
          <div className='notification-title'>
            <h2>Notifications</h2>
            <span className='notification-counter'>3</span>
          </div>

          <a className='text-right'>Mark all as read</a>
        </section>

        <div className='notification unread'>
          <div className='avatar-container'>
            <img src={avatarMark}></img>
          </div>
          <div className='notification-text-content'>
            <p>
              <a className='author-name'>Mark Webber </a> reacted to your recent post <a className='font-weight-bold'>My first tournament today!</a>
              <span className="red-dot" />
            </p>
            <p>1m ago</p>
          </div>
        </div>
        <div className='notification unread'>
          <div className='avatar-container'>
            <img src={avatarAngela}></img>
          </div>
          <div className='notification-text-content'>
            <p>
              <a className='author-name'>Angela Gray </a> followed you
              <span className="red-dot" />
            </p>
            <p>5m ago</p>
          </div>
        </div>
        <div className='notification unread'>
          <div className='avatar-container'>
            <img src={avatarJacob}></img>
          </div>
          <div className="notification-text-content">
            <p>
              <a className='author-name'>Jacob Thompson </a> has joined your group <a className='font-weight-bold primary-blue'> Chess Club</a>
              <span className="red-dot" />
            </p>
            <p>1 day ago</p>
          </div>

        </div>
        <div className='notification'>
          <div className='avatar-container align-self-start '>
            <img src={avatarRizky}></img>
          </div>
          <div className="notification-text-content">
            <p>
              <a className='author-name'>Rizky Hasanuddin </a> sent you a private message
            </p>
            <p>5 days ago</p>
            <div className='message-container'>
              <p>Hello, thanks for setting up the Chess Club, I've been a member for a few weeks
                weeks now and I'm already having lots of fun and improving my game.
              </p>
            </div>
          </div>

        </div>
        <div className='notification justify-content-between'>
          <div class='d-flex align-items-center'>
            <div className='avatar-container'>
              <img src={avatarKimberly}></img>
            </div>
            <div className="notification-text-content">
              <p>
                <a className='author-name'>Kimberly Smith </a> commented on your picture
              </p>
              <p>1 week ago</p>
            </div>
          </div>
          <div className="notification-picture-container">
            <img src={chessImg}></img>
          </div>
        </div>
        <div className='notification'>
          <div className='avatar-container'>
            <img src={avatarNathan}></img>
          </div>
          <div className="notification-text-content">
            <p>
              <a className='author-name'>Nathan peterson </a> reacted to your recent post <a className='font-weight-bold'>5 end-game strategies to increase your win rate</a>
            </p>
            <p>2 weeks ago</p>
          </div>

        </div>
        <div className='notification'>
          <div className='avatar-container'>
            <img src={avatarAnna}></img>
          </div>
          <div className='notification-text-content'>
            <a className='author-name'>Anna Kim</a> left the group <a>Chess Club</a>
            <p>2 weeks ago</p>
          </div>
        </div>
      </div>
    </main >
  );
}

export default App;
