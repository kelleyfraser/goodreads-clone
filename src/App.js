import Announcement from './components/announcement';
import Banner from './components/banner';
import Bookshelves from './components/bookshelves';
import CurrentlyReading from './components/currentlyReading';
import GoodreadsChoiceAwards from './components/goodreadsChoiceAwards';
import Header from './components/header';
import ImproveRecommendations from './components/improveRecommendations';
import Links from './components/links';
import News from './components/news';
import ReadingChallenge from './components/readingChallenge';
import Recommendations from './components/recommendations';
import SmallScreenNavbar from './components/smallScreenNavbar';
import UpdatesFeed from './components/updatesFeed';
import WantToRead from './components/wantToRead';
import './App.scss';

// Initialize a value to use in the reading challenge component
let percentOfYear = 3;

// Helper function to calculate a percent
const calculatePercent = (num1, num2) => {
  return Math.round((num1 / num2) * 100)
}

// Helper function to render a message based on readers progress
const renderMessage = (percent) => {
  if (percent > percentOfYear)
    return "You're ahead of schedule";
  else if (percent == percentOfYear)
    return "You're on track!";
  else
    return "You're behind.";
}

// Initialize user stats object
const userStats = {
  totalBooks: 30,
  booksRead: 1,
  numRated: 11
};

// Initialize an array of book objects
const books = [
  {
    title: "A Breath of Snow and Ashes",
    author: "Diana Gabaldon",
    imgUrl: "./images/book1.jpg",
    description: "A Breath of Snow and Ashes continues the extraordinary story of 18th-century Scotsman Jamie Fraser and his 20th-century wife, Claire. The year is 1772, and on the eve of the Ameri…",
    stars: 4.43
  },
  {
    title: "Born a Crime: Stories From a South African Childhood",
    author: "Trevor Noah",
    imgUrl: "./images/book2.jpg",
    description: "The memoir of one man's coming-of-age, set during the twilight of apartheid and the tumultuous days of freedom that followed. Trevor Noah's unlikely path from apartheid South Afr…",
    stars: 4.49
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    imgUrl: "./images/book3.jpg",
    description: "As a botanist, Robin Wall Kimmerer has been trained to ask questions of nature with the tools of science. As a member of the Citizen Potawatomi Nation, she embraces the noti…",
    stars: 4.57
  },
  {
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    imgUrl: "./images/book4.jpg",
    description: "So begins this exquisite novel about a Chinese American family living in 1970s small-town Ohio. Lydia is the favorite child of Marilyn and James Lee, and her parents are deter…",
    stars: 3.86
  },
  {
    title: "Visual Thinking: The Hidden Gifts of People Who Think in Pictures, Patterns, and Abstractions",
    author: "Temple Grandin",
    imgUrl: "./images/book5.jpg",
    description: "A landmark book that reveals, celebrates, and advocates for the special minds and contributions of visual thinkers A quarter of a century after her memoir, Thinking in Pictur…",
    stars: 3.78
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    imgUrl: "./images/book6.jpg",
    description: "'I live for the dream that my children will be born free,' she says. 'That they will be what they like. That they will own the land their father gave them.' 'I live for you,' I say sadly.…",
    stars: 4.26
  },
  {
    title: "1984",
    author: "George Orwell",
    imgUrl: "./images/book7.jpg",
    description: "The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his 'most solid, most brilliant' work. Though the…",
    stars: 4.19
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    imgUrl: "./images/book8.jpg",
    description: "They are an unlikely pair: George is 'small and quick and dark of face'; Lennie, a man of tremendous size, has the mind of a young child. Yet they have formed a 'family,' cling…",
    stars: 3.88
  }
];

function App() {
  /*
    Render all components to the app.

    Separate main content components into three columns. 

    Column 1 has repeated components from column 3, but these are only visible on smaller screens where column 3 is hidden. 
  */
  return (
    <div className="App">
      <Banner />
      <Header />
      <SmallScreenNavbar />
      <div className="content">
        <div className="secondary-column">
          <CurrentlyReading book={books[2]} />
          <ReadingChallenge
            data={userStats}
            percent={calculatePercent(userStats.booksRead, userStats.totalBooks)}
            message={renderMessage(calculatePercent(userStats.booksRead, userStats.totalBooks))} />
          <WantToRead />
          <Bookshelves />
          <GoodreadsChoiceAwards />
          <Recommendations readBook={books[7]} recommendedBook={books[6]} />
          <ImproveRecommendations
            data={userStats.numRated}
            percent={calculatePercent(userStats.numRated, 20)} />
          <News />
          <Links />
        </div>
        <div className="primary-column">
          <Announcement />
          <UpdatesFeed books={books} />
          <p>Original site can be found at: <a href="https://www.goodreads.com" target="_blank">https://www.goodreads.com/</a></p>
        </div>
        <div className="tertiary-column">
          <GoodreadsChoiceAwards />
          <Recommendations readBook={books[7]} recommendedBook={books[6]} />
          <ImproveRecommendations
            data={userStats.numRated}
            percent={calculatePercent(userStats.numRated, 20)} />
          <News />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
