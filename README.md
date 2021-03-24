# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Anni Shao**

Time spent: **5** hours spent in total

Link to project: <https://glitch.com/edit/#!/gratis-maize-brian>

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial - button 4 has higher pitch
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Toggle between Light mode and Dark mode
- [X] Displays what round the user was on when they lose the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://github.com/annishao/Codepath_SITE/blob/main/codepath.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

   [Picking color palette](https://htmlcolorcodes.com/)
   
   [Dark/Light mode](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
   
   [JavaScript Random](https://www.w3schools.com/js/js_random.asp)
   
   [Writing Clean Code](https://wpshout.com/unconditionally-refactoring-nested-statements-cleaner-code/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   After I wrote the guess function on my own, I checked my code with the version provided and I was shocked by how different they looked. While my version had less lines of code, I felt like the version provided looked cleaner since everything was separated into different branches. I was conflicted: my code looked simpler, but to a developer reading my code for the first time, would my logic be more difficult to grasp? I turned to the internet, hoping to get a clear answer on which code format is preferred. After googling, I found an article (last link for question 1) and learned that my implementation was known as gateway logic checking since the code progresses step by step, whereas the provided implementation is known as bubble style since many code executions were hidden in many bubbles of if statements. I learned that bubble style makes the control flow more complicated and is not a favored way of writing code. Thus, I was able to resolve my conflict by researching good coding habits and following their advice. I stuck with my own implementation of the guess method over what was provided. Ultimately, I am glad to have encountered this challenge. Avoiding nested statements is an instance of good coding style that transcends all coding languages. I will take what I have learned from this and apply it to projects in the future.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

   I'm impressed with the scope of web development. I was able to create a fully functioning game without even touching backend or middle end web development. Thus, naturally after completing this submission I wonder what's the next step to make this project involve databases and storing data?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
   
   If I had a few more hours to work on this, I would give the users more customization power. I had a lot of fun fiddling with the colors of the game so I would give the user more options to choose from to personalize the color palette of the game. They could choose a blue, yellow, red, orange, etc. themed game. Then, the colors of the background as well as the buttons would change accordingly. I would also allow the user to input how many rounds they'd like the game to run for and then the game would be randomized for them.



## License

    Copyright Anni Shao

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

\ ゜o゜)ノ