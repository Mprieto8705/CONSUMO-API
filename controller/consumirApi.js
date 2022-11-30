const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3cf20da86bbedbf3b792255504ff2db8&hash=4f00ba94ee5228822ea25921a7b06838';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();