export default class APODStorage {


    constructor() {
        this.apodsKey = 'nasaFavorites';
    }

    saveAPOD = (apod) => {
        const favoriteAPODs = this.getAPODs();
        favoriteAPODs.push(apod);
        localStorage.setItem(this.apodsKey, JSON.stringify(favoriteAPODs));
    };

    deleteAPOD = (apod) => {
        const favoriteAPODs = this.getAPODs();
        let updatedList = [];
        updatedList = favoriteAPODs.filter(b => b.Title != apod.Title);

        localStorage.setItem(this.apodsKey, JSON.stringify(updatedList));
    }

    getAPODs = () => {
        const apodsString = localStorage.getItem(this.apodsKey);
        let apods = [];
        if (apodsString)
            apods = JSON.parse(apodsString);

        return apods;
    }

}