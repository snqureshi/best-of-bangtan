# Best of Bangtan

[Best of Bangtan](https://best-of-bangtan.netlify.app/)

## Project Description

Best-of-Bangtan is an application featuring Airtable and React build where the users will be able to get and post information as well as reviews about their new favorite BTS songs. Users will also be able to find songs by the title of the track and click onto the titles to get to the information page. Users will be able to submit their own reviews as well. Since the BTS fandom is so large and diverse, there are bound to be many different takes on the same song and this app will create a community space for such discussions.

## Wireframes

The wireframes below show the homepage and information page for Best-of-Bangtan in mobile and desktop formats. In both instances you have a header with a nagivation links. On the mobile version, the navigation links will be displayed on a full page hamburger menu, whereas in the desktop webpage, it will be displayed on interactive links. In both cases, on the homepage, the user will be able to view the title and video of a song and they will be able to click on a song title which will navigate to the corresponding information page populated with the title, artist, year of release, duration, stand-out lyrics, spotify link, youtube video, as well as the rating, review and author. In the mobile version, the information page will be displayed in rows where as in the desktop version, they will be displayed as both columns and rows.

[Wireframes](https://i.imgur.com/AfUjs0F.png)

## Component Hierarchy

[Component Breakdown](https://i.imgur.com/m038LGO.png)

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recqtNjLLdiuqTrob",
      "fields": {
        "author": "Shamma",
        "year": 2013,
        "Rating": 6,
        "spotify": "https://open.spotify.com/track/4frlkLwlnm58ejpNwWjxyl?si=522f4ea285b945a7",
        "duration": 13320,
        "video": "https://www.youtube.com/watch?v=rBG5L7UsUxA",
        "lyric": "Rebel against this hell-like society, give your dream a special pardon",
        "title": "No More Dream ",
        "review": "Very strong message of not confirming to society's expectations of you.",
        "performer": "BTS"
      },
      "createdTime": "2021-02-14T20:40:21.000Z"
    },
    {
      "id": "recXrpxGwC2a1SsxP",
      "fields": {
        "author": "Llama",
        "year": 2013,
        "Rating": 8.5,
        "spotify": "https://open.spotify.com/track/1hehPTlSVIhHEvCkVoe4HX?si=2bd7891ee50149f9",
        "duration": 12600,
        "video": "https://www.youtube.com/watch?v=r5GaAEHvHj0",
        "lyric": "In Seoul to the SKY, would the parents really be happy?",
        "title": "N.O",
        "review": "In-Seoul and SKY both refer to specific groups of universities in Korea, I thought the message about applying to universities just to please your pare...",
        "performer": "BTS"
      },
      "createdTime": "2021-02-14T20:40:21.000Z"
    },
    {
      "id": "reccqaAigUw0TNqLl",
      "fields": {
        "author": "Seokjin",
        "year": 2014,
        "Rating": 7,
        "spotify": "https://open.spotify.com/track/3CYqr8tC0Y3mrw80y6zqJC?si=ac3432d141c945ae",
        "duration": 14340,
        "video": "https://www.youtube.com/watch?v=K5mGRX4gN2Y",
        "lyric": "In the 21st century, we are divided into exactly two classes Those who have, those who don’t have  Those who’re wearing shoes, those who don’t have Th...",
        "title": "Spine-Breaker",
        "review": "Loved how they talked about how class division was felt in school. Another problem associated with this padded jacket fever was extortion bullying. ",
        "performer": "BTS"
      },
      "createdTime": "2021-02-14T20:40:21.000Z"
    }
  ],
  "offset": "reccqaAigUw0TNqLl"
}
```

### MVP/PostMVP

#### MVP

- Home page with videos & clickable titles that route to information page
- Information page rendering title, artist, year of release, duration, stand-out lyrics, spotify link, youtube video, as well as the rating, review and author.
- Use forms to submit new favorite songs and update Airtable.
- Search page to find songs by title
- Navigation bar with clickable links that route to their respective pages (hamburger menu for mobile viewing)

#### PostMVP

- Delete posts from the details page
- if multiple reviews are available for one song, display all reviews fav lyrics, ratings, and authors in the information page instead of having multiple information page for the same song.
- Allow users to submit links to covers of the song titles on the form page
- Advanced CSS to improve user experience (hovers, animations)

## Project Schedule

| Day    | Deliverable                                                       | Status              |
| ------ | ----------------------------------------------------------------- | ------------------- |
| Feb 16 | Proposal Approval/ Airtable Setup/ Components Creation/Psuedocode | Complete            |
| Feb 17 | Get & Post Song Reviews from Airtable                             | Complete            |
| Feb 18 | Filter songs by title/ Setup Routes & Links                       | Complete            |
| Feb 19 | Work on CSS Components to match wireframes                        | Complete            |
| Feb 20 | Delete posts/ Compile all reviews of one song together            | Complete/Incomplete |
| Feb 21 | Feb 20th continued/ Submit cover links in form                    | Incomplete          |
| Feb 22 | Media queries /Advanced CSS                                       | Complete            |
| Feb 23 | Presentations                                                     | Incomplete          |

## Timeframes

| Component                                 | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                                  |    H     |     3 hrs      |     4 hrs     |    4 hrs    |
| Airtable setup                            |    H     |      1 hr      |    1.5 hrs    |   1.5 hrs   |
| Set up components/pseudocode              |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Data population on Home Page              |    H     |      3hrs      |     1 hr      |    1 hr     |
| Data population on Information Page       |    H     |      3hrs      |     1 hr      |    1 hr     |
| Create & Render Form on Submit page       |    H     |      2hrs      |     2 hrs     |    2 hrs    |
| Search by Title page                      |    H     |      3hrs      |     2 hr      |    2 hr     |
| Nav Bar/Link & Route properly/Nav Bar CSS |    H     |      3hrs      |     3 hrs     |    3 hrs    |
| Delete Button on Homepage                 |    M     |      1 hr      |    1.5hrs     |   1.5hrs    |
| Homepage Component CSS /Media Query       |    H     |      2hrs      |     1 hr      |    1 hr     |
| Information-page Component CSS/MQ         |    H     |      3hrs      |     3 hr      |    3 hr     |
| Search Component CSS/MQ                   |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form Component CSS/MQ                     |    H     |      2hrs      |     3 hrs     |    3hrs     |
| NavBar Component CSS/MQ                   |    M     |      2hrs      |     4hrs      |    4hrs     |
| Advanced CSS (Hovers/Animations)          |    M     |      3hrs      |     2hrs      |    2hrs     |
| Total                                     |          |     34hrs      |    32 hrs     |   32 hrs    |

## SWOT Analysis

### Strengths:

I have a good understanding of GET, POST, and DELETE and I also mapped out my components in detail so I have a better understanding of what I'll need to make those components functional and reach MVP.

### Weaknesses:

For my PMVPs, I have to do additional research on airtable and how to compile all the reviews for one song as well as submit additional links without alreading the song information. I will also need to spend a lot of time on CSS to recreate my wireframe.

### Opportunities:

This is an opportunity to demonstrate how as a developer I am now able to create multiple components on a webpage and work with browser-router. Personally, I have enjoyed working with react much more than plain JS, and I am passionate about my topic so I am excited to build.

### Threats:

I can see myself moving on from MVP functionality directly onto PMVP functionality without finishing and polishing CSS and not having enough time at the end, which is a big threat. I will have to remind myself to make the website look good before moving onto next steps.
