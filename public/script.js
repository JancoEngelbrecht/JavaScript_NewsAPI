document.getElementById('action-weather').addEventListener('click', () => {
  // Fetch weather data from your API
  fetch('https://newsheadlines-c0haf4f6d4bvhaa7.westeurope-01.azurewebsites.net/weather')
    .then(response => response.json())
    .then(data => {
      document.getElementById('weatherResult').innerHTML = `
        <p>Temperature: ${data.temperature}°C</p>
        <p>Condition: ${data.condition}</p>
      `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
});

let countA = 0;
let countB = 1;
let countC = 2

const actionMore = document.getElementById("action-more");
const actionBack = document.getElementById("action-back");

function countAdd(){

  if (countC+3 > 20) {
    countA = countA;
    countB = countB;
    countC = countC;
    alert('Max News Articles Reached')
  } else {
    countA = countA+3;
    countB = countB+3;
    countC = countC+3;
  }
  console.log(countA,countB,countC)
}

function countSubtract(){
  if (countC-3 < 0) {
    countA = countA;
    countB = countB;
    countC = countC;
    alert('Min News Articles Reached')
  } else {
    countA = countA-3;
    countB = countB-3;
    countC = countC-3;
    console.log(countA,countB,countC)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  
  // Fetch weather data from your API
  fetch('https://newsheadlines-c0haf4f6d4bvhaa7.westeurope-01.azurewebsites.net/news')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      // Article 1
      if(data.articles[countA].title){
        document.getElementById('articleHeader1').innerHTML = ` 
        <h1>${data.articles[countA].title}</h1>`;
      } else {
        document.getElementById('articleHeader1').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countA].urlToImage){
        document.getElementById('articleImage1').innerHTML = ` 
        <a href="${data.articles[countA].url}" target="_blank"><img src="${data.articles[countA].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage1').innerHTML = ` 
        <a href="${data.articles[countA].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countA].description){
      document.getElementById('articleDescription1').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countA].description}</p>
      `;
      } else {
        document.getElementById('articleDescription1').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }

      // Article 2
      if(data.articles[countB].title){
        document.getElementById('articleHeader2').innerHTML = ` 
        <h1>${data.articles[countB].title}</h1>`;
      } else {
        document.getElementById('articleHeader2').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countB+3].urlToImage){
        document.getElementById('articleImage2').innerHTML = ` 
        <a href="${data.articles[countB].url}" target="_blank"><img src="${data.articles[countB].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage2').innerHTML = ` 
        <a href="${data.articles[countB].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countB].description){
      document.getElementById('articleDescription2').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countB].description}</p>
      `;
      } else {
        document.getElementById('articleDescription2').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }
      
      // Article 3
      if(data.articles[countC].title){
        document.getElementById('articleHeader3').innerHTML = ` 
        <h1>${data.articles[countC].title}</h1>`;
      } else {
        document.getElementById('articleHeader3').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countC].urlToImage){
        document.getElementById('articleImage3').innerHTML = ` 
        <a href="${data.articles[countC].url}" target="_blank"><img src="${data.articles[countC].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage3').innerHTML = ` 
        <a href="${data.articles[countC].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countC].description){
      document.getElementById('articleDescription3').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countC].description}</p>
      `;
      } else {
        document.getElementById('articleDescription3').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }

    })
    .catch(error => console.error('Error fetching weather data:', error));
});


actionMore.addEventListener("click", () => {
  
  // Fetch weather data from your API
  fetch('https://newsheadlines-c0haf4f6d4bvhaa7.westeurope-01.azurewebsites.net/news')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      // Article 1
      if(data.articles[countA].title){
        document.getElementById('articleHeader1').innerHTML = ` 
        <h1>${data.articles[countA].title}</h1>`;
      } else {
        document.getElementById('articleHeader1').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countA].urlToImage){
        document.getElementById('articleImage1').innerHTML = ` 
        <a href="${data.articles[countA].url}" target="_blank"><img src="${data.articles[countA].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage1').innerHTML = ` 
        <a href="${data.articles[countA].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countA].description){
      document.getElementById('articleDescription1').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countA].description}</p>
      `;
      } else {
        document.getElementById('articleDescription1').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }

      // Article 2
      if(data.articles[countB].title){
        document.getElementById('articleHeader2').innerHTML = ` 
        <h1>${data.articles[countB].title}</h1>`;
      } else {
        document.getElementById('articleHeader2').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countB+3].urlToImage){
        document.getElementById('articleImage2').innerHTML = ` 
        <a href="${data.articles[countB].url}" target="_blank"><img src="${data.articles[countB].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage2').innerHTML = ` 
        <a href="${data.articles[countB].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countB].description){
      document.getElementById('articleDescription2').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countB].description}</p>
      `;
      } else {
        document.getElementById('articleDescription2').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }
      
      // Article 3
      if(data.articles[countC].title){
        document.getElementById('articleHeader3').innerHTML = ` 
        <h1>${data.articles[countC].title}</h1>`;
      } else {
        document.getElementById('articleHeader3').innerHTML = ` 
        <h1>${"What a Story"}</h1>`;
      }

      if(data.articles[countC].urlToImage){
        document.getElementById('articleImage3').innerHTML = ` 
        <a href="${data.articles[countC].url}" target="_blank"><img src="${data.articles[countC].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      } else {
        document.getElementById('articleImage3').innerHTML = ` 
        <a href="${data.articles[countC].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
      }

      if(data.articles[countC].description){
      document.getElementById('articleDescription3').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countC].description}</p>
      `;
      } else {
        document.getElementById('articleDescription3').innerHTML = ` 
      <p class="max-w-lg text-center mt-5 mb-5"></p>
      `;
      }

    })
    .catch(error => console.error('Error fetching weather data:', error));
});

actionBack.addEventListener("click", () => {
  
   // Fetch weather data from your API
   fetch('https://newsheadlines-c0haf4f6d4bvhaa7.westeurope-01.azurewebsites.net/news')
   .then(response => response.json())
   .then(data => {
     console.log(data)
     
     // Article 1
     if(data.articles[countA].title){
       document.getElementById('articleHeader1').innerHTML = ` 
       <h1>${data.articles[countA].title}</h1>`;
     } else {
       document.getElementById('articleHeader1').innerHTML = ` 
       <h1>${"What a Story"}</h1>`;
     }

     if(data.articles[countA].urlToImage){
       document.getElementById('articleImage1').innerHTML = ` 
       <a href="${data.articles[countA].url}" target="_blank"><img src="${data.articles[countA].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     } else {
       document.getElementById('articleImage1').innerHTML = ` 
       <a href="${data.articles[countA].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     }

     if(data.articles[countA].description){
     document.getElementById('articleDescription1').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countA].description}</p>
     `;
     } else {
       document.getElementById('articleDescription1').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5"></p>
     `;
     }

     // Article 2
     if(data.articles[countB].title){
       document.getElementById('articleHeader2').innerHTML = ` 
       <h1>${data.articles[countB].title}</h1>`;
     } else {
       document.getElementById('articleHeader2').innerHTML = ` 
       <h1>${"What a Story"}</h1>`;
     }

     if(data.articles[countB].urlToImage){
       document.getElementById('articleImage2').innerHTML = ` 
       <a href="${data.articles[countB].url}" target="_blank"><img src="${data.articles[countB].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     } else {
       document.getElementById('articleImage2').innerHTML = ` 
       <a href="${data.articles[countB].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     }

     if(data.articles[countB].description){
     document.getElementById('articleDescription2').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countB].description}</p>
     `;
     } else {
       document.getElementById('articleDescription2').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5"></p>
     `;
     }
     
     // Article 3
     if(data.articles[countC].title){
       document.getElementById('articleHeader3').innerHTML = ` 
       <h1>${data.articles[countC].title}</h1>`;
     } else {
       document.getElementById('articleHeader3').innerHTML = ` 
       <h1>${"What a Story"}</h1>`;
     }

     if(data.articles[countC].urlToImage){
       document.getElementById('articleImage3').innerHTML = ` 
       <a href="${data.articles[countC].url}" target="_blank"><img src="${data.articles[countC].urlToImage}" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     } else {
       document.getElementById('articleImage3').innerHTML = ` 
       <a href="${data.articles[countC].url}" target="_blank"><img src="../images/breakingnews.jpg" class="w-full h-auto pl-6 pr-6" alt=""></a>`;
     }

     if(data.articles[countC].description){
     document.getElementById('articleDescription3').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5">${data.articles[countC].description}</p>
     `;
     } else {
       document.getElementById('articleDescription3').innerHTML = ` 
     <p class="max-w-lg text-center mt-5 mb-5"></p>
     `;
     }

   })
   .catch(error => console.error('Error fetching weather data:', error));
});

actionMore.addEventListener("click", countAdd);
actionBack.addEventListener("click", countSubtract)
