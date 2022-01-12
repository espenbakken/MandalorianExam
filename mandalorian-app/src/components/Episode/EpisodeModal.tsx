import { FC, useState, ChangeEvent} from 'react';
import { IEpisode } from '../../interfaces/IEpisode';
import Popup from 'reactjs-popup';
import './Episode.css';
import { EpisodeService } from "../../services/EpisodeService";

const EpisodeModal : FC<IEpisode> = ({ id, title, season, date, rating, description, episodePicture, episodeId}) => {
    
    const [ newEpisode, setEpisode ] = useState<IEpisode>({id: id, title: title, season: season, date: date, rating: rating,  description: description, episodePicture: episodePicture, episodeId: episodeId});

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let { name } = event.target;
        let { value } = event.target;
    
        switch( name ){
            case "rating": 
            setEpisode( { ...newEpisode, rating: parseInt(value) } );
        }
    }

    const putNewRating = () => {
        EpisodeService.updateRating(newEpisode)
        alert("Rating changed!");
        window.location.reload();
    }

    return (
        <Popup trigger={<button className="button"> Read more </button>} modal>
          <div className="Modal" id={id}>
              <div className="header">{title}</div>
              <div className="content">
                  {' '}
                  {description}
                  <br />
                  <img className="episodeImg" src={`https://localhost:5001/images/episodes/${episodePicture}`} alt="" width="70%"/>
                  <br />
                  {date}
                  <div className="header">Rating: {rating}</div>
              </div>
              <div className="actions">
               <form>
                   <label>Please rate this episode:
                    <select onChange={handleChange} name="rating" placeholder="Please rate this episode">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                   </label>
                   <input onClick={putNewRating} type="button" value="Rate"/>
               </form>
              </div>
          </div>
        </Popup>
        )
}

export default EpisodeModal;