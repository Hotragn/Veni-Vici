# Web Development Project 4 - Veni Vici Anime

Submitted by: **Hotragn Pettugani**

This web app: **Veni Vici Anime** allows users to discover random anime content using the Jikan API. Users can view anime details, add attributes to a ban list to filter future results, toggle themes between One Piece and Naruto, and see a history of previously displayed results.

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (e.g., title, genre, type, synopsis).
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time
  - Displayed attributes match the displayed image
  - There is at least one image per API call
- [x] **API call response results appear random to the user**
  - Clicking on the API call button generates seemingly random new results each time
  - Repeat results are permitted but infrequent due to the large dataset
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - At least one attribute for each API result is clickable (e.g., genre, type)
  - Clicking on a clickable attribute not on the ban list immediately adds it to the ban list
  - Clicking on an attribute in the ban list immediately removes it from the ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button does not result in any image/attributes with values in the ban list being displayed
  - More attribute values on the ban list may result in a higher frequency of repeat results
  - _To ensure an accurate grade, the recording shows that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_

## Optional Features

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list (e.g., genre and type)
- [x] Users can see a stored history of their previously displayed results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

## Additional Features

The following **additional** features are implemented:

- [x] Theme toggle functionality allows switching between One Piece and Naruto themes
- [x] Improved user interface with styled buttons for banning/unbanning attributes

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://submissions.us-east-1.linodeobjects.com/web102/oh6Yy9SB.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif.

## Notes

Challenges Encountered:
- Ensuring that banned attributes dynamically filtered future API results without breaking functionality
- Handling cases where no suitable anime was found due to extensive bans
- Styling buttons for better user experience while maintaining theme consistency

## License

    Copyright 2025 Hotragn Pettugani

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
