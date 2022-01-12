import axios from "axios";
import { IEpisode } from "../interfaces/IEpisode";

export const EpisodeService = (function(){
    
    const urlToEpisodeController = "https://localhost:5001/Episode";
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

    const updateRating = (newEpisode: IEpisode) => {
        const urlToEpisodeControllerAPI = urlToEpisodeController + "/Update?episodeId=" + newEpisode.episodeId + "&newRating=" + newEpisode.rating

        axios.patch( urlToEpisodeControllerAPI);
        axios({
            url: urlToEpisodeControllerAPI,
            method: "PATCH",
        })
    } 

    const deleteById = (chooseId: IEpisode) => {
        const urlToEpisodeControllerDelete = urlToEpisodeController + "/Delete?episodeId=" + chooseId.episodeId
        axios.delete(urlToEpisodeControllerDelete);
        axios({
            url: urlToEpisodeControllerDelete,
            method: "DELETE",
        })
    }

    return {
        getAll, 
        getOne,
        postEpisode,
        updateRating,
        deleteById
    } 
}()) 