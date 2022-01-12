import { FC, useState, ChangeEvent } from "react";
import { EpisodeService } from "../../services/EpisodeService";
import { IEpisode } from "../../interfaces/IEpisode";
import './Episode.css';
import { useNavigate } from "react-router-dom";

const CreateEpisodeForm : FC = () => {

    const [ newEpisode, setEpisode ] = useState<IEpisode>({title: "", season: "", date: "", rating:0,  description: "", episodePicture: "", episodeId: ""});
    const [ newImage, setNewImage ] = useState<File>();
    const [ chooseId, setChooseId ] = useState<IEpisode>({title: "", season: "", date:"", rating: 0, description: "", episodePicture: "", episodeId: ""});
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;
        let { value } = event.target;      
         
        switch( name ){
            case "title":
                setEpisode( { ...newEpisode, title: value } );
            break;
            case "season": 
                setEpisode( { ...newEpisode, season: value } )
            break;
            case "date": 
                setEpisode( { ...newEpisode, date: value } )
            break;
            case "rating": 
                setEpisode( { ...newEpisode, rating: parseInt(value) } )
            break;
            case "description": 
                setEpisode( { ...newEpisode, description: value } )
            break;
            case "episodeId":
                setEpisode( {...newEpisode, episodeId: value})
            break;   
            case "episodePicture":
                let { files } = event.target;
                if( files ){
                    console.log( files[0].name );
                    setEpisode( { ...newEpisode, episodePicture: files[0].name } );
                    setNewImage( files[0] );          }                           
            break;

            case "idToDelete": 
                setChooseId({ ...chooseId, episodeId: value });
                console.log(chooseId);
            break;
          
        }
    }

    const postNewEpisode = () => {
        console.log( newEpisode );
        console.log( newImage );
        EpisodeService.postEpisode(newEpisode, newImage as File);
        navigate('/')
        alert("New post added"); 
    }

    const deletePost = () => {
        EpisodeService.deleteById(chooseId);
        alert("Episode deleted!");
        navigate('/')
    }

    return (
        <section>
            <div id="container">
                <h3>Add new post</h3>
                <div id="form">
                    <div>
                        <label>Title</label>
                        <br/>
                        <input onChange={handleChange}name="title" type="text"/>
                    </div>
                    <div>
                        <label>Season</label>
                        <br/>
                        <input onChange={handleChange} name="season" type="text" placeholder="season1 or season2"/>
                    </div>
                    <div>
                        <label>Date</label>
                        <br/>
                        <input onChange={handleChange} name="date" type="date"/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <br/>
                        <input onChange={handleChange} name="rating" type="text" placeholder="Between 1 and 9"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <br/>
                        <input onChange={handleChange} name="description" type="text"/>
                    </div>
                    <div>
                        <label> Episode ID </label>
                        <br />
                        <input onChange={handleChange} name="episodeId" type="text" />
                    </div>
                    <div>
                        <label>Choose episodeimage</label>
                        <br/>
                        <input onChange={handleChange} name="episodePicture" type="file"/>
                    </div>
                    <input onClick={postNewEpisode} type="button" value="Save new episode" />
                </div>
                <section id="delete-episode">
                    <h3>Delete episode by ID</h3>
                    <input onChange={handleChange} name="idToDelete"type="text" placeholder="Choose your id"></input>
                    <input onClick={deletePost} type="button" value="Delete episode"></input>
                </section>
            </div>
        </section>
    )
}

export default CreateEpisodeForm;