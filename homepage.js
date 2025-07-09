// feed, then display the about post, then create post function

const posts = [
    {
      id: 1,
      title: "Sunday Morning Soccer at Central Park",
      description: "Join us for a casual pick-up soccer game this Sunday at 9 AM. All skill levels welcome!",
      image: "images/sundayMorningSoccer.png",
      comments: [
        { user: "Alex", comment: "Count me in!" },
        { user: "Jamie", comment: "Can I bring my younger brother?" }
      ],
      isSaved: false,
      responses: {
        committed: 0,
        interested: 0,
        notInterested: 0
      },
      buttons: {
        committed: function() { this.responses.committed++; },
        interested: function() { this.responses.interested++; },
        notInterested: function() { this.responses.notInterested++; }
      }
    },
    {
      id: 2,
      title: "Community Basketball Night",
      description: "Looking for some friendly competition? Meet us at the rec center for 3-on-3 basketball games every Friday evening.",
      image: "images/communityBasketball.png",
      comments: [
        { user: "Taylor", comment: "Been waiting for this all week!" },
        { user: "Jordan", comment: "What time does it start?" }
      ],
      isSaved: false,
      responses: {
        committed: 0,
        interested: 0,
        notInterested: 0
      },
      buttons: {
        committed: function() { this.responses.committed++; },
        interested: function() { this.responses.interested++; },
        notInterested: function() { this.responses.notInterested++; }
      }
    },
    {
      id: 3,
      title: "Evening Volleyball on the Beach",
      description: "Bump, set, spike! Join our beach volleyball group every Wednesday at 6 PM. Bring water and sunscreen.",
      image: "images/EveningVolleyballontheBeach.jpg",
      comments: [
        { user: "Morgan", comment: "I love volleyball — see you there!" }
      ],
      isSaved: false,
      responses: {
        committed: 0,
        interested: 0,
        notInterested: 0
      },
      buttons: {
        committed: function() { this.responses.committed++; },
        interested: function() { this.responses.interested++; },
        notInterested: function() { this.responses.notInterested++; }
      }
    },
    {
      id: 4,
      title: "Pick-Up Ultimate Frisbee",
      description: "Fast-paced and fun! Meet us at Hilltop Field for a friendly game of Ultimate Frisbee every Saturday afternoon.",
      image: "images/UltimateFrisbee.jpg",
      comments: [
        { user: "Riley", comment: "Bringing a few friends along!" },
        { user: "Sam", comment: "Any equipment I should bring?" }
      ],
      isSaved: false,
      responses: {
        committed: 0,
        interested: 0,
        notInterested: 0
      },
      buttons: {
        committed: function() { this.responses.committed++; },
        interested: function() { this.responses.interested++; },
        notInterested: function() { this.responses.notInterested++; }
      }
    },
    {
      id: 5,
      title: "Beginner Tennis Meetup",
      description: "Looking to learn or improve your tennis game? Join our beginner group every Monday evening at River Courts.",
      image: "images/BeginnerTennisMeetup.jpg",
      comments: [
        { user: "Jesse", comment: "Finally something for beginners!" },
        { user: "Avery", comment: "Can I borrow a racket?" }
      ],
      isSaved: false,
      responses: {
        committed: 0,
        interested: 0,
        notInterested: 0
      },
      buttons: {
        committed: function() { this.responses.committed++; },
        interested: function() { this.responses.interested++; },
        notInterested: function() { this.responses.notInterested++; }
      }
    }
  ];
  

//////////Rendering the post feed/////////

function getRandomPost(posts){
    let randomNum = Math.floor(Math.random() * posts.length);
    const post = posts[randomNum];
    return post;
}

function createPostTemplate(posts){
    return `<section class="hero">
                <h2>${posts.title}</h2>
                <img src=${posts.image} alt="An image of a post">   
                <div class="button-group">
                    <button id="lm-button">Learn More</button>
                    <p class="hide" id="post-description">${posts.description}</p>
                    <button id="save">save</button>
                    <button id="chat">chat</button>
                    <button id="nextEvent">Next</button>
                </div>
            </section>`;
}

function renderPosts(post){
  postContainer = document.querySelector('#post-container');
  postContainer.innerHTML = post;
}

function init() {
  Rpost = getRandomPost(posts);
  renderPosts(createPostTemplate(Rpost));
}

init()

//////////Different kind of buttons//////////

//Learn More
lmBttn = document.querySelector('#lm-button');
lmBttn.addEventListener('click', (event) => {
  const description = document.querySelector('#post-description');
  const currentClass = description.getAttribute('class');
  if ( currentClass == 'hide'){
    document.querySelector('#post-description').removeAttribute('class');

  }
  else{
    document.querySelector('#post-description').setAttribute('class', 'hide');

  }

});

// Create post
const cpBttn = document.querySelector('#create-post').addEventListener('click', (event) => {
    document.querySelector('#create-post-section').classList.remove('hide');

})

const cvBttn = document.querySelector('#close-viewer').addEventListener('click', (event) =>{
    document.querySelector("#create-post-section").classList.add('hide');
})

const sfBttn = document.querySelector('#submit-button').addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelector("#create-post-section").classList.add('hide');
})
 