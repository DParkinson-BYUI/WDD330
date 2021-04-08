import APODController from "./APODController.js";
import APODView from "./APODView.js";

const favoritesButton = document.getElementById('buttonFavorites');
const loadMorePicsButton = document.getElementById('buttonReturnResult');
const apodController = new APODController();
const apodView = new APODView();

let myPics = await apodController.searchForNewPics();
console.log(myPics);
if (myPics !== undefined)
    console.log(myPics);

favoritesButton.addEventListener('click', function (ev) {
    apodController.showFavoritePics();
    ev.stopPropagation();
});
loadMorePicsButton.addEventListener('click', function (ev) {
    apodController.searchForNewPics();
    ev.stopPropagation();
});