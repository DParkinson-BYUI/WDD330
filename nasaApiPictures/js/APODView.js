export default class APODView {

    constructor() {
        this.resultsNav = document.getElementById('resultsNav');
        this.favoritesNav = document.getElementById('favoritesNav');
        this.imagesContainer = document.querySelector('.images-container');
        this.saveConfirmed = document.querySelector('.save-confirmed');
        this.loader = document.querySelector('.loader');
    }

    buildAPODDisplay = (page, apods, myAPODs) => {
          // Reset DOM, Create DOM Nodes, Show Content
        this.imagesContainer.textContent = '';
        const currentArray = page === 'results' ? apods : Object.values(myAPODs);
        currentArray.forEach((result) => {
            // Card Container
            const card = document.createElement('div');
            card.classList.add('card');
            // Link
            const link = document.createElement('a');
            link.href = result.Hdurl;
            link.title = 'View Full Image';
            link.target = '_blank';
            // Image
            const image = document.createElement('img');
            image.src = result.Url;
            image.alt = 'NASA Picture of the Day';
            image.loading = 'lazy';
            image.classList.add('card-img-top');
            // Card Body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            // Card Title
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = result.Title;
            // Save Text
            const saveText = document.createElement('p');
            saveText.classList.add('clickable');
            if (page === 'results') {
                saveText.textContent = 'Add To Favorites';                
                saveText.addEventListener('click', function(ev) {
                    result.addToFavorites();
                    ev.stopPropagation();
                });
            } else {
                saveText.textContent = 'Remove Favorite';                
                saveText.addEventListener('click', function(ev) {
                    result.removeFromFavorites();
                    location.reload();
                    ev.stopPropagation();
                });                
            }
            // Card Text
            const cardText = document.createElement('p');
            cardText.textContent = result.Explanation;
            // Footer Container
            const footer = document.createElement('small');
            footer.classList.add('text-muted');
            // Date
            const date = document.createElement('strong');
            date.textContent = result.Date;
            // Copyright
            const copyrightResult = result.Copyright === undefined ? '' : result.Copyright;
            const copyright = document.createElement('span');
            copyright.textContent = ` ${copyrightResult}`;
            // Append
            footer.append(date, copyright);
            cardBody.append(cardTitle, saveText, cardText, footer);
            link.appendChild(image);
            card.append(link, cardBody);
            this.imagesContainer.appendChild(card);
        });
    }

    isFavorite = (apod, myAPODs) => {
        let updatedList = [];
        updatedList = myAPODs.filter(a => a.apodsKey == apod.apodsKey);

        return updatedList.length > 0 ? true : false;
    }

    // Scroll To Top, Remove Loader, Show Content
    showContent(page) {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
        this.loader.classList.add('hidden');
        if (page === 'results') {
            this.resultsNav.classList.remove('hidden');
            this.favoritesNav.classList.add('hidden');
        } else {
            this.resultsNav.classList.add('hidden');
            this.favoritesNav.classList.remove('hidden');
        }
    }

}