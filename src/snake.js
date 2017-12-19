
// const keys = {
//     enter: 13,
//     left: 37,
//     up: 38,
//     right: 39,
//     down: 40,
// }
// const game = {
//     lastPress: null,
//     pause: true,
//     gameOver: true,
//     direction: 0,
//     score: 0,
// }
// context.scale(20, 20);


// function clear() {
//     context.fillStyle = '#000';
//     context.fillRect(0, 0, canvas.width, canvas.height);
// }

// function draw() {

// }

// function init() {
//     clear();
// }

// init();

class Snake {
    
    KEY_ENTER = 13;
    KEY_LEFT = 37;
    KEY_UP = 38;
    KEY_RIGHT = 39;
    KEY_DOWN = 40;

    canvas = null;
    context = null;
    lastPress = null;
    pause = true;
    gameOver = true;
    direction = 0;
    score = 0;

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');

        // Compatibility for requestAnimationFrame
        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 17);
                };
        }());

    }

    clean() {
        // Clean canvas
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, canvas.width, canvas.height); 
    }
}

export default Snake;