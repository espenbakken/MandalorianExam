import axios from "axios";
import { IEpisode } from "../interfaces/IEpisode";

export const EpisodeService = (function(){
    
    const urlToEpisodeController = "https://localhost:5001/episode";
    const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";

    const getAll = async () => {
        if(window.location.pathname === "/allEpisodes"){
            const result = await axios.get( urlToEpisodeController);
            return result.data as IEpisode[];
        }
        else{
            const pathName = window.location.pathname;
            const result = await axios.get( urlToEpisodeController + pathName);
            console.log(result.data);
            return result.data as IEpisode[];
        }
    }

    const getOne = async () => {
        const season = window.location.pathname;
        const episode = "1";
        const result = await axios.get( urlToEpisodeController + season +"/" + episode);
        return result.data as IEpisode[];
    }

    const postEpisode = ( newEpisode: IEpisode, image: File ) => {

        let formData = new FormData();
        formData.append( "file", image );

        axios.post( urlToEpisodeController, newEpisode );
        axios({
            url: urlToImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    }    

    // const putRating = ( newEpisode: IEpisode ) => {
    //     const season = newEpisode.season;
    //     const episodeId = newEpisode.episodeId;
    //     const urlToEpisodeControllerId = urlToEpisodeController + "/" + "Update";

    //     axios.put( urlToEpisodeControllerId, newEpisode);
    //     axios({
    //         url: urlToEpisodeControllerId,
    //         method: "PUT"
    //     })
    //     console.log(urlToEpisodeControllerId);
    // }
    //?episodeId=4&newRating=44
    const updateRating = (newEpisode: IEpisode) => {
        // const rating = newEpisode.rating;
        const urlToEpisodeControllerAPI = urlToEpisodeController + "/Update?episodeId=" + newEpisode.episodeId + "&newRating=" + newEpisode.rating

        axios.patch( urlToEpisodeControllerAPI);
        axios({
            url: urlToEpisodeControllerAPI,
            method: "PATCH"
        })
    } 

    const deleteById = (chooseId: IEpisode) => {

        axios.delete(`https://localhost:5001/episode/allEpisodes/${chooseId.episodeId}`);

        /*const urlToEpisodeControllerDelete = urlToEpisodeController + "/allEpisodes/" + chooseId.episodeId
        axios.delete(urlToEpisodeControllerDelete);
        axios({
            url: urlToEpisodeControllerDelete,
            method: "DELETE"
        })*/
    }

    return {
        getAll, 
        getOne,
        postEpisode,
        updateRating,
        deleteById
        
    }
    
}()) 