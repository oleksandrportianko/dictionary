async function getDictionary() {
   let wrapper = document.querySelector('.wrapper')
   let pagination = document.querySelector('.pagination')
   let dictionary = [];

   await fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   dictionary= [...data];
  });

  let numberOfPage = Math.ceil(dictionary.length / 40)

  function strPad() {
     let deleteContainer = document.querySelectorAll('.container-element');
   
     deleteContainer.forEach(function(elem){
       elem.parentNode.removeChild(elem);
     });

     let start = this.value * 40 - 40
     let end = this.value * 40 - 1
   for (let i = start; i <= end; i++) {
      let container = document.createElement('div')
      let english = document.createElement('div')
      let ukrainian = document.createElement('div')
      let flexContainer = document.createElement('div')
      let image = document.createElement('img')
   
      container.className = `container-element container${dictionary[i].id}`
      english.className = `english english${dictionary[i].id}`
      ukrainian.className = `ukrainian ukrainian${dictionary[i].id}`
      flexContainer.className = `flex-container flex-container${dictionary[i].id}`
      image.className = `image image${dictionary[i].id}`
   
      english.innerHTML = dictionary[i].english
      ukrainian.innerHTML = dictionary[i].ukrainian
      image.src = dictionary[i].status !== true ? 'http://cdn.onlinewebfonts.com/svg/img_275506.png':'http://cdn.onlinewebfonts.com/svg/img_525444.png';
      
      wrapper.appendChild(container)
      container.appendChild(flexContainer)
      flexContainer.appendChild(english)
      flexContainer.appendChild(ukrainian)
      flexContainer.appendChild(image)
     }
  }

  if (numberOfPage > 1) {
   for (let i = 1; i <= numberOfPage; i++) {
      let link = document.createElement('button')
      link.className = 'page-link'
      link.value = i
      link.innerHTML = i
      pagination.appendChild(link)
   }
  }

   let bt = document.getElementsByClassName("page-link");
   for (var i = 0; i < bt.length; i++) {
      bt[i].onclick = strPad;
   }

  for (let i = 0; i <= 39; i++) {
   let container = document.createElement('div')
   let english = document.createElement('div')
   let ukrainian = document.createElement('div')
   let flexContainer = document.createElement('div')
   let image = document.createElement('img')

   container.className = `container-element container${dictionary[i].id}`
   english.className = `english english${dictionary[i].id}`
   ukrainian.className = `ukrainian ukrainian${dictionary[i].id}`
   flexContainer.className = `flex-container flex-container${dictionary[i].id}`
   image.className = `image image${dictionary[i].id}`

   english.innerHTML = dictionary[i].english
   ukrainian.innerHTML = dictionary[i].ukrainian
   image.src = dictionary[i].status !== true ? 'http://cdn.onlinewebfonts.com/svg/img_275506.png':'http://cdn.onlinewebfonts.com/svg/img_525444.png';
   
   wrapper.appendChild(container)
   container.appendChild(flexContainer)
   flexContainer.appendChild(english)
   flexContainer.appendChild(ukrainian)
   flexContainer.appendChild(image)
  }
}