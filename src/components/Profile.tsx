import cardBg from '../assets/bg-pattern-card.svg';
import victorImg from '../assets/image-victor.jpg';

export default function Profile() {
    return(
        <div className="card">
            <img className="background" src={cardBg}/>
            <img className="avatar" src={victorImg}/>
            <div className="content">
                <div className="box">
                    <div className='personal'>
                        <div className="name">Victor Crest</div>
                        <div className="age">26</div>
                    </div>
                    <div className="location">London</div>
                </div>
                <div className="divider"/>
                <div className='infos'>
                    <div className="info">
                        <div className="value">80K</div>
                        <div className="key">Followers</div>
                    </div>
                    <div className="info">
                        <div className="value">803K</div>
                        <div className="key">Likes</div>
                    </div>
                    <div className="info">
                        <div className="value">1.4K</div>
                        <div className="key">Photos</div>
                    </div>
                </div>
            </div>
        </div>
    )
}