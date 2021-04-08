import APODStorage from "./APODStorage.js"

const loader = document.querySelector('.loader');
const saveConfirmed = document.querySelector('.save-confirmed');

// NASA API
const count = 10;
const apiKey = 'gZZ1SdlkyFBoDkwXjrPR8bBR0zvsBraSv3FQ6V1e';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favorites = {};

export default class APOD {
    constructor() {
        this.Copyright = "";
        this.Date = "";
        this.Explanation = "";
        this.Hdurl = "";
        this.Media_type = "";
        this.Service_version = "";
        this.Title = "";
        this.Url = "";

    }

    fillAPOD = async (data, apod) => {
        if (apod == undefined) {
            apod = new APOD();
        }

        if (data.title) {
            apod.Title = data.title;
        }

        if (data.copyright) {
            apod.Copyright = data.copyright === undefined ? '' : data.copyright;
        }

        if (data.date) {
            apod.Date = data.date;
        }

        if (data.explanation) {
            apod.Explanation = data.explanation;
        }

        if (data.hdurl) {
            apod.Hdurl = data.hdurl;
        }

        if (data.media_type) {
            apod.Media_type = data.media_type;
        }

        if (data.service_version) {
            apod.Service_version = data.service_version;
        }

        if (data.url) {
            apod.Url = data.url;
        }
        return apod;
    }

    getNasaPictures = async() => {
        // Show Loader
        loader.classList.remove('hidden');
        let loadedPics = await fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let result = Promise.all(data.map(d => this.fillAPOD(d)));
                return result;
            })
            .catch(e => console.log(e));

            loadedPics = loadedPics.sort(this.sortByDate);

            return { loadedPics: loadedPics };
      }    

    addToFavorites = () => {
        saveConfirmed.hidden = false;
        setTimeout(() => {
          saveConfirmed.hidden = true;
        }, 2000);
        let storage = new APODStorage();
        storage.saveAPOD(this);
    }

    removeFromFavorites = () => {
        let storage = new APODStorage();
        storage.deleteAPOD(this);
    }

    getMyAPODs = () => {
        let storage = new APODStorage();
        let myAPODs = storage.getAPODs();
        if (myAPODs === undefined) {
            myAPODs = [];
        }
        myAPODs = myAPODs.map((x) => {
            let newAPOD = new APOD();
            newAPOD.Copyright = x.Copyright === undefined ? '' : x.Copyright;
            newAPOD.Date = x.Date;
            newAPOD.Explanation = x.Explanation;
            newAPOD.Hdurl = x.Hdurl;
            newAPOD.Media_type = x.Media_type;
            newAPOD.Service_version = x.Service_version;
            newAPOD.Title = x.Title;
            newAPOD.Url = x.Url;
            return newAPOD;
        })

        myAPODs = myAPODs.sort(this.sortByDate);
        return myAPODs;
    }

    sortByDate = (a, b) => {
        let x = a.Date;
        let y = b.Date;
        return x > y ? 1 : -1
    }
}