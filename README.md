# PicPacPoe
![app Icon](https://github.com/ankitrai96/tic-tac-toe/blob/master/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png)

a manifestation of Minimax algorithm over a classic tic-tac-toe game

### Modules
this project has and is developed in three modules as follow:
##### 1. Duo Mode
void of artificial intelligence. Rather, both the characters of game, i.e. Poop :poop: and Ghost :ghost: (similar to classic tokens X and O), are controlled manually by player(s)

![Duo mode Gameplay](https://github.com/ankitrai96/tic-tac-toe/blob/master/assets/exhibits/duoMode.gif)

##### 2. Easy Mode
this mode is powered by a relatively easy artificial intelligence game engine which randomly decides moves of :ghost: out of available spots (referred as Cells in source code)

![Easy mode Gameplay](https://github.com/ankitrai96/tic-tac-toe/blob/master/assets/exhibits/easyGhost.gif)

##### 3. Pro Mode
this is where the game engine utilizes miniMax algorithm. It is impossible for you :poop: to defeat :ghost: in this mode!

![Pro mode Gameplay](https://github.com/ankitrai96/tic-tac-toe/blob/master/assets/exhibits/hardGhost.gif)

### Source Code Directory
apart from the initial react-native directory structure, "src" is root of rest of the source code of this repository which contains react components such as GameEngine, Cell, AppGrid, et cetera.
