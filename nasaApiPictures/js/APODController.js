import APOD from "./APOD.js";
import APODView from "./APODView.js";

export default class APODController {

    constructor(){
        this.apods = new APOD();
        this.apodView = new APODView();
        this.loadedAPODs = [];
        this.loadPicsButton = document.getElementById("buttonLoadPics");
        this.loadPicsButton.addEventListener('click', async () => {
            await this.searchForNewPics();
        })
        
    }

    buildResultsPage() {
        const myAPODs = this.apods.getMyAPODs();
        if (this.loadedAPODs === undefined){
            return;
        }

        this.apodView.buildAPODDisplay('results', this.loadedAPODs, myAPODs);
        this.apodView.showContent('results');
    }

    searchForNewPics = async () => {   
        let searchResults = await this.apods.getNasaPictures();
        this.loadedAPODs = searchResults.loadedPics;

        this.buildResultsPage();
      }

    showFavoritePics = async () => {
        this.buildFavoritesPage();
    }

    buildFavoritesPage(){
        const myAPODs = this.apods.getMyAPODs();
        if (myAPODs === undefined){
            return;
        }

        this.apodView.buildAPODDisplay('favorites', '', myAPODs);
        this.apodView.showContent('favorites');        
    }
      
      saveFavorite(itemUrl,favoriteItem) {
        // Loop through Results Array to select Favorite
        const myAPODs = this.apods.getMyAPODs();
        returnedPics.forEach((item) => {
            if (item.Url.includes(itemUrl) && !favoriteItem) {
                favorites[itemUrl] = item;
                // Show Save Confirmation for 2 seconds
                saveConfirmed.hidden = false;
                setTimeout(() => {
                    saveConfirmed.hidden = true;
                }, 2000);
                // Set Favorites in localStorage
                localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
            }
        });
    }      
}