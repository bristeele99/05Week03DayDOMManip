let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const newTitle = document.getElementById('main-title');
 newTitle.textContent = 'Hi! Welcome to DOM Torretos Homepage!';

  // Part 2
  document.body.style.backgroundColor = 'turquoise'

  // Part 3
  let domsFavoriteThings = document.getElementById('favorite-things')
  let lastItem = domsFavoriteThings.lastElementChild;
  domsFavoriteThings.removeChild(lastItem);

  // Part 4
  const spTitle = document.getElementsByClassName('special-title');
  for (let i=0; i<spTitle.length;i++){
    const spTitleEl = spTitle[i];
    spTitleEl.style.fontSize = '2rem';
    spTitleEl.style.backgroundColor = 'green';
}

  // Part 5
  // Assuming the Past Races list has an id of "past-races"
const pastRacesList = document.getElementById("past-races");
// Get all list items in the Past Races list
const raceItems = pastRacesList.getElementsByTagName("li");
// Loop through the list items to find and remove the one with text content "Chicago"
for (let i = 0; i < raceItems.length; i++) {
    if (raceItems[i].textContent === "Chicago") {
        // Remove the list item
        pastRacesList.removeChild(raceItems[i]);
        break; // Exit the loop once Chicago is removed
    }
}

  // Part 6
  //1. access the 'past-race' id
  //2. access raceItems array
  //3. create new li element
  const newRaceEl = document.createElement("li")
  //4. create new text-content
  newRaceEl.textContent = 'Nurburging Nordschleife'
  //5. append to race Items array
  pastRacesList.appendChild(newRaceEl);

  // Part 7
  //1. Access "dom adventures" id 
   const domAdvent = document.getElementById('dom-adventures')

  //2. access array class "blog-post purple"
  const blogPosts = domAdvent.querySelector('.blog-post.purple')

  //3. Create new <div> with class .blog-post
   const newBlogPost = document.createElement('div');
   newBlogPost.classList.add('blog-post');

  //4. Create new <h2> element, add text, and append to new <div>
  const newH2 = document.createElement('h2');
  newH2.textContent = 'Nurburgring Nordschleife';
  newBlogPost.appendChild(newH2);

  //5. Create new <p> element, add text, and append to new <div>
  const newP = document.createElement('p');
  newP.textContent = 'I DRIFTED MY CAR OFF A CLIFF SO FAST I ENDED BACK UP ON THE CLIFFSIDE!'
  newBlogPost.appendChild(newP);

  //6. Append the new <div> to the first element with class "blog-post purple"
  if (blogPosts) {
    blogPosts.appendChild(newBlogPost);
  } else {
    console.error('No element with class "blog-post purple" found.');
  }
  //7. Append the new <div> to the overall document under "dom adventures"
  domAdvent.appendChild(newBlogPost);
  

  // Part 8
  const quoteTitleEl = document.querySelector('#quote-title')
  quoteTitleEl.addEventListener('click',randomQuote);

  // Part 9
   //1. access .blog-post class elements
   const allBlogPosts = document.getElementsByClassName('blog-post')
   //2. for loop and add two event handlers to each
   for (let i=0; i<allBlogPosts.length; i++){
      //a. add click listener mouseout
    allBlogPosts[i].addEventListener('mouseover',function(event){
      //i. should toggle .purple class
      event.target.classList.toggle('purple');
    })
     //b. add click listener moustenter
    allBlogPosts[i].addEventListener('mouseenter',function(event){
        //i. should toggle .red class
      event.target.classList.toggle('red');
    })
   }
});
