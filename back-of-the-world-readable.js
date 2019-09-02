var LEVELS = [ // Define levels
    ["                                                                                ", "                                                                                ", "                                                                                ", "                                                                                ", "                                                                                ", "                                                                                ", "                                                                  xxx           ", "                                                   xx      xx    xx!xx          ", "                                    o o      xx                  x!!!x          ", "                                                                 xx!xx          ", "                                   xxxxx                          x!x           ", "                                                                            xx  ", "  xx                                      o o                                x  ", "  x                       o                                                    x  ", "  x                                      xxxxx                             o x  ", "  x                   o                                                    x  ", "  x  @                                                           xxxxx       x  ", "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ", "                              x   x                  x     x                    ", "                              x!!!x                  x!!!!!x                    ", "                              x!!!x                  x!!!!!x                    ", "                              xxxxx                  xxxxxxx                    ", "                                                                                ", "                                                                                "],
    ["                                      x!!x                        xxxxxxx                                    x!x  ", "                                      x!!x                     xxxx     xxxx                                 x!x  ", "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ", "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ", "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ", "                                                xx!x         x     o   o                                    xx!x  ", "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ", "                                                 x!x         x     x   x                        !!!!!!!!!!!!!!xx  ", "                                                             xx             xx            xxxxxxxxxxxxxxxxxxxxx   ", "                                                              xx!!!!!!!!!!!xx            !                        ", "                                                               xxxx!!!!!xxxx                                      ", "                                               x     x            xxxxxxx        xxx         xxx                  ", "                                               x     x                           x x         x x                  ", "                                               x     x                             x         x                    ", "                                               x     x                             xx        x                    ", "                                               xx    x                             x         x                    ", "                                               x     x      o  o     x   x         x         x                    ", "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ", "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ", "             xx       xx        x o x          x    xx               x   x   x               x                    ", "     @       x         x        x   x          x     x               x   x   x               x                    ", "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ", "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ", "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x           x x         x                    ", "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ", "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ", "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ", "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ", "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ", "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
    ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                        o                                                                     ", "                                                                                                              ", "                                        x                                                                     ", "                                        x                                                                     ", "                                        x                                                                     ", "                                        x                                                                     ", "                                       xxx                                                                    ", "                                       x!x                 !!!        !!!  xxx                                ", "                                       x!x                 !x!        !x!                                     ", "                                     xxx!xxx                x          x                                      ", "                                      x!!!x                 x   oooo   x       xxx                            ", "                                      x!!!x                 x          x      x!!!x                           ", "                                      x!!!x                 xxxxxxxxxxxx       xxx                            ", "                                     xx!!!xx      x   x      x                                                ", "                                      x!!!xxxxxxxxx   xxxxxxxx              x x                               ", "                                      x!!!x           x                    x!!!x                              ", "                                      x!!!x           x                     xxx                               ", "                                     xx!!!xx          x                                                       ", "                                      x!!!x           x            xxx                                        ", "                                      x!!!x           x           x!!!x                                       ", "                                      x!!!x           x     o      xxx       xxx                              ", "                                     xx!!!xx          x                     x!!!x                             ", "                              o   o   x!!!x           x     x                xx         xxx                   ", "                                      x!!!x           x              x                 x!!!x                  ", "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   !x                   ", "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ", "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ", "                             xx           xx                                         xxx                      ", "  xxx                         x     x     x                                         x!!!x                xxx  ", "  x x                         x    x!x    x                                          xxx                 x x  ", "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ", "  x                           x           x                              x   x                             x  ", "  x                           xx          x                              x x x                             x  ", "  x                                       x       oxxxx!    oxxxx!     xxx xxx                             x  ", "  x                xxx             o o    x                              x         xxx                     x  ", "  x               xx!xx       xx          x         o         o         xxx       x!!!x          x         x  ", "  x               ox!xo       x    xxx    x                             x x        xxx          xxx        x  ", "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ", "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx      ooo           x         x  ", "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ", "                                                                                                              ", "                                                                                                              "],
    ["                                                                                                  xxx x       ", "                                                                                                      x       ", "                                                                                                  xxxxx       ", "                                                                                                  x           ", "                                                                                                  x xxx       ", "                          o                                                                       x x x       ", "                                                                                             o o oxxx x       ", "                   xxx                                                                                x       ", "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ", "       x     x                                                x   x x   x x   x x   x x   x x   x x           ", "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ", "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ", "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ", "                                                                                                              ", "          o              xxx                              xx                                                  ", "                                                                                                              ", "                                                                                                              ", "                                                      xx                                                      ", "                   xxx         xxx                                                                            ", "                                                                                                              ", "                          o                                                     x      x                      ", "                                                          xx     xx                                           ", "             xxx         xxx         xxx                                 x                  x                 ", "                                                                                                              ", "                                                                                                              ", "  xxxxxxxxxxx                                                                                                 ", "  !         ! o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ", "  !         !   !       x   x       x   x                                     x     x                         ", "  !  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ", "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ", "        !!                                   !!   !                                                           ", "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "                                                                                                              "]
];

function Vector(x, t) { // vector util func
    this.x = x, this.y = t
}

Vector.prototype.plus = function(x) { // more vector utils (mult. and add)
    return new Vector(this.x + x.x, this.y + x.y)
}, Vector.prototype.times = function(x) {
    return new Vector(this.x * x, this.y * x)
};

var actorchars = { // defines what the symbols on level def mean
    "@": Player,
    o: Coin,
    "=": Lava,
    "|": Lava,
    v: Lava
};

function Player(x) { // The player
    this.pos = x.plus(new Vector(0, -.5)), this.size = new Vector(.5, 1), this.speed = new Vector(0, 0)
}

function Lava(x, t) { // The Lava
    this.pos = x, this.size = new Vector(1, 1), "=" === t ? this.speed = new Vector(2, 0) : "|" === t ? this.speed = new Vector(0, 2) : "v" === t && (this.speed = new Vector(0, 3), this.repeatPos = x)
}

function Coin(x) { // the coin
    this.basePos = this.pos = x, this.size = new Vector(.6, .6), this.wobble /* Slight coin movement */ = Math.random() * Math.PI * 2
}

function Level(x) { // new level
    this.width = x[0].length, this.height = x.length, this.grid = [], this.actors = [];
    for (var t = 0; t < this.height; t++) {
        for (var e = x[t], o = [], s = 0; s < this.width; s++) {
            var i = e[s],
                r = null,
                a = actorchars[i];
            a ? this.actors.push(new a(new Vector(s, t), i)) : "x" === i ? r = "wall" : "!" === i ? r = "lava" : "|" === i ? r = "lava" : "=" === i ? r = "lava" : "v" === i && (r = "lava", console.log(r)), o.push(r)
        }
        this.grid.push(o)
    }
    this.player = this.actors.filter(function(x) {
        return "player" === x.type
    })[0], this.status = this.finishDelay = null
}

function element(x, t) { // create a element
    var e = document.createElement(x);
    return t && (e.className = t), e
}

function DOMDisplay(x, t) { // create a space for the game using HTML DOM
    this.wrap = x.appendChild(element("div", "game")), this.level = t, this.wrap.appendChild(this.drawBackground()), this.actorLayer = null, this.drawFrame()
}

Player.prototype.type = "player", Lava.prototype.type = "Lava", Coin.prototype.type = "coin", Level.prototype.isFinished = function() {
    return null != this.status && this.finishDelay < 0
};

var scale = 15; // scale var

DOMDisplay.prototype.drawBackground = function() { // create BG in table form
    var x = element("table", "background");
    return x.style.width = this.level.width * scale + "px", x.style.height = this.level.height * scale + "px", this.level.grid.forEach(function(t) {
        var e = x.appendChild(element("tr"));
        e.style.height = scale + "px", t.forEach(function(x) {
            e.appendChild(element("td", x))
        })
    }), x
}, DOMDisplay.prototype.drawActors = function() { // Draw all actors as elements
    var x = element("div");
    return this.level.actors.forEach(function(t) {
        var e = x.appendChild(element("div", "actor " + t.type));
        e.style.width = t.size.x * scale + "px", e.style.height = t.size.y * scale + "px", e.style.left = t.pos.x * scale + "px", e.style.top = t.pos.y * scale + "px"
    }), x
}, DOMDisplay.prototype.drawFrame = function() { // Draw frame (actors)
    this.actorLayer && this.wrap.removeChild(this.actorLayer), this.actorLayer = this.wrap.appendChild(this.drawActors()), this.wrap.className = "game " + (this.level.status || ""), this.scrollPlayerIntoView()
}, DOMDisplay.prototype.scrollPlayerIntoView = function() { // For scrolling levels (when too long or when screen is too small)
    var x = this.wrap.clientWidth,
        t = this.wrap.clientHeight,
        e = x / 3,
        o = this.wrap.scrollLeft,
        s = o + x,
        i = this.wrap.scrollTop,
        r = i + t,
        a = this.level.player,
        n = a.pos.plus(a.size.times(.5)).times(scale);
    n.x < o + e ? this.wrap.scrollLeft = n.x - e : n.x > s - e && (this.wrap.scrollLeft = n.x + e - x), n.y < i + e ? this.wrap.scrollTop = n.y - e : n.y > r - e && (this.wrap.scrollTop = n.y + e - t)
}, DOMDisplay.prototype.clear = function() { // clear
    this.wrap.parentNode.removeChild(this.wrap)
}, Level.prototype.obstacleAt = function(x, t) { // Humm... Where is that wall and lava block?
    var e = Math.floor(x.x),
        o = Math.ceil(x.x + t.x),
        s = Math.floor(x.y),
        i = Math.ceil(x.y + t.y);
    if (e < 0 || o > this.width || s < 0) return "wall";
    if (i > this.height) return "lava";
    for (var r = s; r < i; r++)
        for (var a = e; a < o; a++) {
            var n = this.grid[r][a];
            if (n) return n
        }
}, Level.prototype.actorAt = function(x) { // The actor is... Wait... I can't find it.
    for (var t = 0; t < this.actors.length; t++) {
        var e = this.actors[t];
        if (e != x && x.pos.x + x.size.x > e.pos.x && x.pos.x < e.pos.x + e.size.x && x.pos.y + x.size.y > e.pos.y && x.pos.y < e.pos.y + e.size.y) return e
    }
};
var maxStep = .05;
Level.prototype.animate = function(x, t) { // animate level!!
    for (null != this.status && (this.finishDelay -= x); x > 0;) {
        var e = Math.min(x, maxStep);
        this.actors.forEach(function(x) {
            x.act(e, this, t)
        }, this), x -= e
    }
}, Lava.prototype.act = function(x, t) { // Lava is at —.
    var e = this.pos.plus(this.speed.times(x));
    t.obstacleAt(e, this.size) ? this.repeatPos ? this.pos = this.repeatPos : this.speed = this.speed.times(-1) : this.pos = e
};
var wobbleSpeed = 8, // COIN
    wobbleDist = .07; // again
Coin.prototype.act = function(x) { // and again
    this.wobble += x * wobbleSpeed;
    var t = Math.sin(this.wobble) * wobbleDist;
    this.pos = this.basePos.plus(new Vector(0, t))
};
var playerXSpeed = 12; // For moving left and right
Player.prototype.moveX = function(x, t, e) {
    this.speed.x = 0, e.left && (this.speed.x -= playerXSpeed), e.right && (this.speed.x += playerXSpeed);
    var o = new Vector(this.speed.x * x, 0),
        s = this.pos.plus(o),
        i = t.obstacleAt(s, this.size);
    i ? t.playerTouched(i) : this.pos = s
};
var gravity = 30, // Falling
    jumpSpeed = 17; // Jumping
Player.prototype.moveY = function(x, t, e) { // As in fall and jump
    this.speed.y += x * gravity;
    var o = new Vector(0, this.speed.y * x),
        s = this.pos.plus(o),
        i = t.obstacleAt(s, this.size);
    i ? (t.playerTouched(i), e.up && this.speed.y > 0 ? this.speed.y = -jumpSpeed : this.speed.y = 0) : this.pos = s
}, Player.prototype.act = function(x, t, e) {
    this.moveX(x, t, e), this.moveY(x, t, e);
    var o = t.actorAt(this);
    o && t.playerTouched(o.type, o), "lost" == t.status && (this.pos.y += x, this.size.y -= x)
}, Level.prototype.playerTouched = function(x, t) {
    "lava" == x && null == this.status ? (this.status = "lost", this.finishDelay = 1) : "coin" == x && (this.actors = this.actors.filter(function(x) {
        return x != t
    }), this.actors.some(function(x) {
        return "coin" == x.type
    }) || (this.status = "won", this.finishDelay = 1))
};
var arrowCodes = { // key codes
    37: "left",
    38: "up",
    39: "right"
};

function trackKeys(x) { // track the keys (what else can I say?)
    var t = Object.create(null);

    function e(e) {
        if (x.hasOwnProperty(e.keyCode)) {
            var o = "keydown" == e.type;
            t[x[e.keyCode]] = o, e.preventDefault()
        }
    }
    return addEventListener("keydown", e), addEventListener("keyup", e), t
}

function runAnimation(x) {
    var t = null;
    requestAnimationFrame(function e(o) {
        var s = !1;
        if (null != t) {
            var i = Math.min(o - t, 100) / 1e3;
            s = !1 === x(i)
        }
        t = o, s || requestAnimationFrame(e)
    })
}
var arrows = trackKeys(arrowCodes);

function runLevel(x, t, e) { // run a level
    var o = new t(document.body, x);
    runAnimation(function(t) {
        if (x.animate(t, arrows), o.drawFrame(t), x.isFinished()) return o.clear(), e && e(x.status), !1
    })
}

function runGame(x, t) { // run the game
    ! function e(o) {
        runLevel(new Level(x[o]), t, function(t) {
            "lost" == t ? e(o) : o < x.length - 1 ? e(o + 1) : alert("Wait. You won? You actually WON this darn thing?\n\nOh.\n\nI was not expecting this. Oh well... Well done, I guess.")
        })
    }(0)
}
runGame(LEVELS, DOMDisplay); // Let's BEGIN!!
