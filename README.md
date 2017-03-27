## Morphe

### Background

Morphe will allow user overlay digital makeup over an image.


### Functionality & MVP  

- [ ] Face detection
- [ ] Overlay makeup based on facial landmarks
- [ ] Change colors and filters

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.  Game controls will include Start, Stop, and Reset buttons as well as a slider to control the speed.  On the left, three clickable shapes will be used to toggle between the types of grids available.  On the right, there will be three (or more) clickable gradient-filled rectangles used to toggle between color schemes (see Bonus Features).  Additionally, a drop-down will be added to the Controls to toggle between different rule sets (again, see Bonus Features).

![wireframes](wireframe/Morphe.pdf)

### Architecture and Technologies




- Vanilla JavaScript for overall structure and game logic,
- Cvv.js for face detection
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`select.js`: this script will handle the logic detecting face and landmarks.
`Easel.js` elements and rendering them to the DOM.

`paint.js`: this script will handle logic on what to paint on the picture.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules. Write a basic entry file. Check that face landmarks are correct.

**Day 2-3**: Learn Easel/canvas and draw the makeup.

- Draw the shapes (eyeliner, lips, filters for cheecks and eyebrows)
- Ensure the shapes correctly stretches and attaches to landmarks

**Day 4**: Enable camera Style page:

- enable webcamera to take picture
- buttons to change filters


### Bonus features

- [ ] Allow live-streaming (will need to change library to dibs so that the face detection runs in under 20ms)
