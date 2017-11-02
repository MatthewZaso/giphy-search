# Matt Zaso - Giphy Search
A simple, responsive giphy browser. On initial load this site will show all of the most recently trending gifs. Users can select a gif to see it's full-quality version and supplied title. Searching for a gif will return the matching set from the giphy servers.


## Build System
- Added Webpack to compile and bundle all file types.
    - Easily bundle all js and compile scss
    - Allows us to use webpack dev server and hot reloading
- Included Babel loader to add support for ES6 code
    - Uses preset-env to support older browsers
- Added PostCss/Autoprefixer for wider browser support

## Project Structure
- Project pieces separated out into containers, components, with matching css structure for better organization
    - Containers made to hold majority of app logic, while components are simplified to render-only items.

## Frontend
- Basic, custom 12-col CSS grid added for responsive scaling.
- Redux added for better scaling and state management
    - Probably not necessary with the small amount of state management required right now, but offers greater scalability.
    - Using dispatch feels cleaner than modifying state directly anyways.
- Makes use of upcoming JS features such as promises and fetch (polyfilled)

## Potential improvements
- Cache html/js/css and trending API with serviceworker through workbox plugin for webpack
    - Initially added, but removed due to not using https locally for development
- Add paddles to pop-up modal to use a carousel-like experience for browsing
    - Could be implemented by instead passing all gif data to the modal for easy switching.
- Use intersection observers (with polyfill) to create an infinite scroll experience
    - A new reducer could easily add additional gif to the current collection

