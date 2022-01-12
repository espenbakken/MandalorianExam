import { FC } from 'react';
import Popup from 'reactjs-popup';
import '../Episode/Episode.css';
import { ICharacter } from '../../interfaces/ICharacter';

const CharacterModal : FC<ICharacter> = ({ id, characterName, characterPicture, characterQuote, characterDescription}) => {
    return (
        <Popup trigger={<button className="button"> Read more </button>} modal>
          <div className="Modal" id={id}>
              <div className="header"><h5>{characterName}</h5></div>
              <div className="content">
                  {' '}
                  <div className="text">
                    {characterDescription}
                  </div>
                  <br />
                  <br />
                  <img src={`https://localhost:5001/images/character/${characterPicture}`} alt="" width="30%"/>
                  <br />
                  <br />
                  <i><h5>"{characterQuote}"</h5></i>
              </div>
              <div className="actions">
              </div>
          </div>
        </Popup>
        )
}

export default CharacterModal;