import React, { Component } from 'react'
import NewsItems from '../NewsItems'

export class News extends Component {

  article = [
    {
      "source": {
        "id": "marca",
        "name": "Marca"
      },
      "author": "LW",
      "title": "Karim Benzema uses Tupac reference to describe Kylian Mbappe's betrayal - Marca English",
      "description": "The level of betrayal Karim Benzema is feeling from Kylian Mbappe is quite palpable, especially after the recent Tupac Shakur reference on the Real Madrid striker&apos;s Instagram",
      "url": "https://www.marca.com/en/football/real-madrid/2022/05/22/6289c709268e3e75548b4581.html",
      "urlToImage": "https://phantom-marca.unidadeditorial.es/0d81be4f9886afda13b4f9ceb5363543/resize/1200/f/jpg/assets/multimedia/imagenes/2022/05/22/16531955998085.jpg",
      "publishedAt": "2022-05-22T05:16:14Z",
      "content": "The level of betrayal Karim Benzema is feeling from Kylian Mbappe is quite palpable, especially after the recent Tupac Shakur reference on the Real Madrid striker's Instagram stories. All Madridista … [+1838 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "Does Rohit Sharma need 'break' like Virat Kohli? Ravi Shastri gives his verdict - Hindustan Times",
      "description": "IPL 2022: Rohit Sharma finished with 268 runs from 14 games at an average of 19.14, failing to score a single fifty for the first time in his IPL career.",
      "url": "https://www.hindustantimes.com/cricket/rohit-sharma-needs-break-like-virat-kohli-ravi-shastri-gives-his-verdict-on-mumbai-indians-captain-s-batting-woes-101653194904553.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/22/1600x900/Virat_Kohli_and_Rohit_Sharma_(1)_1653195781855_1653195794746.jpg",
      "publishedAt": "2022-05-22T05:08:40Z",
      "content": "While Mumbai Indians ended their mediocre IPL season on a winning note, Rohit Sharma prolonged his mediocre spell with the bat as the batter perished for just 2 against Delhi Capitals on Saturday. Th… [+3011 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "PARIS SAINT-GERMAIN - FC METZ (5 - 0) - Highlights - (PSG - FCM) / 2021-2022 - Ligue 1 Uber Eats Official",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_K1C_WK6NTE",
      "urlToImage": null,
      "publishedAt": "2022-05-22T04:25:06Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more Remind me later"
    },
    {
      "source": {
        "id": null,
        "name": "Cricketaddictor.com"
      },
      "author": "More by Vicky Singh",
      "title": "RST vs DCN Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- MCA T20 Cup - Cricket Addictor",
      "description": "RST vs DCN Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- MCA T20 Cup",
      "url": "https://cricketaddictor.com/fantasy-cricket/rst-vs-dcn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-mca-t20-cup/",
      "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/05/IMG-20220521-WA0024.jpg",
      "publishedAt": "2022-05-22T04:12:49Z",
      "content": "RST vs DCN Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of MCA T20 Cup match between Royal Strikers and Deccan. They will play against each other fo… [+3969 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Insidesport.in"
      },
      "author": null,
      "title": "BCCI Selection Meeting LIVE: Umran, Arshdeep to be named in Indian Team for SA T20 Series: Follow LIVE - InsideSport",
      "description": "BCCI Selection Meeting LIVE: Chetan Sharma led selectors to meet TODAY, Umran Malik, Arshdeep Singh, Rahul Tripathi set to get nod for South Africa T20 Series",
      "url": "https://www.insidesport.in/bcci-selection-meeting-live-chetan-sharma-led-selection-committee-to-meet-today-umran-malik-arshdeep-singh-rahul-tripathi-set-to-get-india-call-up-for-south-africa-t20-series-follow-live-updates/",
      "urlToImage": "https://www.insidesport.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-21-at-3.23.14-PM.jpeg?w=696",
      "publishedAt": "2022-05-22T04:10:57Z",
      "content": "BCCI Selection Meeting LIVE – Indian Team for SA T20 Series: The Chetan Sharma-led selection committee will meet today to pick two separate squads. One squad under Shikhar Dhawan will play against So… [+4750 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricketaddictor.com"
      },
      "author": "More by Vicky Singh",
      "title": "EAG vs ROY Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU's Pondicherry T10 - Cricket Addictor",
      "description": "EAG vs ROY Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU’s Pondicherry T10",
      "url": "https://cricketaddictor.com/fantasy-cricket/eag-vs-roy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-pondicherry-t10/",
      "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/05/Pondicherry-T10-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpeg",
      "publishedAt": "2022-05-22T04:09:59Z",
      "content": "EAG vs ROY Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of BYJUs Pondicherry T10 match between Eagles and Royals. EAG vs ROY BYJUs Pondicherry T10 … [+3995 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ThePrint"
      },
      "author": null,
      "title": "What if the best performers of IPL 2022 formed a team? Here’s who would make the squad - ThePrint",
      "description": "As the group stages come to a close, ThePrint picks out the best playing XI of the current season so far, while also highlighting emerging players and comeback stars.",
      "url": "https://theprint.in/sport/what-if-the-best-performers-of-ipl-2022-formed-a-team-heres-who-would-make-the-squad/964489/",
      "urlToImage": "https://static.theprint.in/wp-content/uploads/2022/05/re-6-1.jpg",
      "publishedAt": "2022-05-22T04:04:39Z",
      "content": "New Delhi: The Indian Premier League (IPL) has brought in two brand new teams at record valuations this year, and a lot of fresh talent in the form of national as well as international players. Howev… [+8620 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Manchester Evening News"
      },
      "author": "Samuel Luckhurst, Richard Fay, Steven Railston",
      "title": "Three ways Man United could line up vs Crystal Palace - Manchester Evening News",
      "description": "Man United play Crystal Palace on Sunday and our MEN writers have shared their preferred starting line ups.",
      "url": "https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-united-team-crystal-palace-24017907",
      "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/sport/football/article24020595.ece/ALTERNATES/s1200/0_ipiccy_image-11.jpg",
      "publishedAt": "2022-05-22T04:00:00Z",
      "content": "Manchester United play Crystal Palace at Selhurst Park on Sunday afternoon. The fixture is United's final match of an appalling Premier League season and it's also Ralf Rangnick's last game in char… [+3030 chars]"
    },
    {
      "author": null,
      "title": "MI vs DC Screening at the RCB Bio Bubble | IPL 2022 - Royal Challengers Bangalore",
      "description": "RCB qualified for the playoffs for the third consecutive year and the entire team was glued to the television watching #MIvDC. We bring to you raw emotions, ...",
      "url": "https://www.youtube.com/watch?v=ucn1fIoIR_o",
      "urlToImage": "https://i.ytimg.com/vi/ucn1fIoIR_o/hqdefault.jpg",
      "publishedAt": "2022-05-22T03:34:59Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "My dream, my goal is to win an Olympic gold for my country: Nikhat Zareen - The Indian Express",
      "description": "Nikhat started her boxing journey in earnest in 2009, won the youth world championship in 2011, fell in the quarters of the senior world championship in 2016, and has now won the gold.",
      "url": "https://indianexpress.com/article/idea-exchange/my-dream-my-goal-is-to-win-an-olympic-gold-for-my-country-nikhat-zareen-7929747/",
      "urlToImage": "https://images.indianexpress.com/2022/05/nikhat-2col.jpg",
      "publishedAt": "2022-05-22T03:07:11Z",
      "content": "WHEN NIKHAT Zareen was a young girl interested in boxing, she remembers people telling her father, Mohammad Jameel, why have you put her in boxing? Its a mens sport (mardon ka khel hai), who will mar… [+2933 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sandeep Dwivedi",
      "title": "French Open: Suffering in Spain, succeeding in Paris - The Indian Express",
      "description": "Weekly Sports Newsletter: Like Bruguera and Nadal before him, Alcaraz, 19, too is a product of a that produces resolute clay-courters with high pain threshold and French Open titles.",
      "url": "https://indianexpress.com/article/sports/tennis/weekly-sports-newsletter-french-open-suffering-in-spain-succeeding-in-paris-7928614/",
      "urlToImage": "https://images.indianexpress.com/2022/05/Alcaraz-Nadal.jpg",
      "publishedAt": "2022-05-22T02:47:08Z",
      "content": "Every year in the fashion capital of the world, on tastefully decorated courts, elegantly-dressed fans get enchanted by dishevelled gritty men in dirt-stained clothes. Invariably, for close to three … [+8387 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Chessbase.com"
      },
      "author": "Carlos Alberto Colodro",
      "title": "Superbet Poland: Rapport inflicts a first loss on Anand - ChessBase",
      "description": "Vishy Anand won the rapid section of the Superbet tournament in Warsaw, despite losing his round-9 encounter against Richard Rapport. The latter goes into the 18 rounds of blitz in sole second place, after winning twice and losing once on Saturday. Jan-Krzysz…",
      "url": "https://en.chessbase.com/post/superbet-poland-2022-d3",
      "urlToImage": "https://en.chessbase.com/thumb/103250_l200",
      "publishedAt": "2022-05-22T02:05:33Z",
      "content": "<ul><li>Still no ChessBase Account?learn more &gt;8 million games online! Updated weekly, our definitive database has all the latest games. With Live Book and Lets Check!</li><li>Still no ChessBase… [+4520 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Manchester Evening News"
      },
      "author": "Casey Evans",
      "title": "Erik ten Hag can offer Juan Mata the perfect role at Manchester United - Manchester Evening News",
      "description": "Mata is set to hold talks with Ten Hag, having originally looked as though he was on his way out of the club.",
      "url": "https://www.manchestereveningnews.co.uk/sport/football/football-news/juan-mata-ten-hag-united-24025256",
      "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/incoming/article24025338.ece/ALTERNATES/s1200/0_GettyImages-1397937884.jpg",
      "publishedAt": "2022-05-22T01:00:00Z",
      "content": "Following the appointment of Erik ten Hag, fans have been getting excited about the possibility of an overhaul at Manchester United. A number of players look set to leave the club this summer, either… [+2399 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sports Mole"
      },
      "author": "Ben Knapton",
      "title": "Chelsea boss Thomas Tuchel hints at striker signings - Sports Mole",
      "description": "Chelsea manager Thomas Tuchel hints that the club will seek to",
      "url": "https://www.sportsmole.co.uk/football/chelsea/transfer-talk/news/chelsea-boss-thomas-tuchel-hints-at-striker-signings_486433.html",
      "urlToImage": "//b.smimg.net/22/19/thomas-tuchel_1.JPG",
      "publishedAt": "2022-05-22T00:00:16Z",
      "content": "Chelsea manager Thomas Tuchel has hinted that the Blues will be in the market for new forwards in the summer transfer window. Barring a remarkable swing in goal difference on the final day of the Pr… [+3387 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "Sourav Ganguly buys Rs 40-crore home in Kolkata - The Indian Express",
      "description": "Ganguly recently told reporters that he was happy to found a new home in central Kolkata and it would be convenient for him to commute.",
      "url": "https://indianexpress.com/article/cities/kolkata/sourav-ganguly-buys-rs-40-crore-home-in-kolkata-7929790/",
      "urlToImage": "https://images.indianexpress.com/2022/01/21-Sourav-Ganguly-2col.jpg",
      "publishedAt": "2022-05-21T23:09:02Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "ATP Tour"
      },
      "author": "ATP Tour",
      "title": "Day 1 Preview: Carlos Alcaraz, Alexander Zverev, Felix Auger-Aliassime Open Roland Garros Campaigns - ATP Tour",
      "description": "Day 1 Preview: Alcaraz, Zverev, Felix Open Roland Garros Campaigns",
      "url": "https://www.atptour.com/en/news/roland-garros-day-1-sunday-preview",
      "urlToImage": "https://www.atptour.com/-/media/images/news/2022/05/21/22/29/alcaraz-roland-garros-day-1-preview.jpg",
      "publishedAt": "2022-05-21T22:34:28Z",
      "content": "The Sunday start of Roland Garros includes opening-round matches for Carlos Alcaraz, Alexander Zverev and Felix Auger-Aliassime in Paris. The year's second Grand Slam begins exclusively with singles … [+4952 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Joe Bernstein",
      "title": "Ralf Rangnick accepts blame for failing to turn Man United's season around - Daily Mail",
      "description": "Ralf Rangnick has taken blame for Manchester United's collapse this season by admitting he shouldn't have expected a team spearheaded by Cristiano Ronaldo to adopt an energetic press.",
      "url": "https://www.dailymail.co.uk/sport/football/article-10840897/Ralf-Rangnick-accepts-blame-failing-turn-Man-Uniteds-season-around.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/21/22/58116703-0-image-a-5_1653169092569.jpg",
      "publishedAt": "2022-05-21T21:40:09Z",
      "content": "Ralf Rangnick has accepted blame for Manchester Uniteds collapse this season by acknowledging he shouldnt have expected a team spearheaded by Cristiano Ronaldo to adopt an energetic press. Rangnick … [+2288 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      artice: this.article
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <h2 className='my-3 mx-3'>Top Stories</h2>
          <div className="row">
            {this.state.artice.map((element) => {
              return (
                <div key={element.url} className="col-md-3 my-3 mx-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
                </div>
              )
            })}


          </div>
        </div>
      </>
    )
  }
}

export default News
