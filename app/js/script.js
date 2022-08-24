$(function () {
    var midWidth = Math.floor($(window).width());
    var midHeight = 100;
    var mousePos = {
        x: midWidth,
        y: midHeight
    };
    $(document).mousemove(function (event) {
        mousePos.x = event.screenX * 9;
        mousePos.y = event.screenY / 2;
        var transX = mousePos.x - midWidth;
        var transY = mousePos.y - midHeight;
        var skewX = 0;
        if (transX > -15 && transX < 15 && transY < 0) {
            skewX = transX / 2;
        } else if (transX > -15 && transX < 15 && transY >= 0) {
            skewX = -(transX / 2);
        } else if (transX > 15) {
            skewX = -(transY / 2);
        } else if (transX < -15) {
            skewX = transY / 2;
        }
        if (transX >= 15) {
            transX = 15;
        } else if (transX <= -15) {
            transX = -15;
        }
        if (transY >= 15) {
            transY = 15;
        } else if (transY <= -15) {
            transY = -15;
        }

        if (skewX >= 7) {
            skewX = 7;
        } else if (skewX <= -7) {
            skewX = -7;
        }
        $('.iris').css({
            "transform": "translateX(" + transX + "px) translateY(" + transY + "px) skewX(" + skewX + "deg) skewY(2deg)"
        });

    });

});

function update(picker, selector) {
    document.querySelector(selector).style.background = picker.toBackground();
}
jscolor.trigger('input change');


function invert() {
    document.getElementById("logo").style.filter = "invert(100%)";
}

document.addEventListener("DOMContentLoaded", invert);




//https://www.smarthouse.ua/ua/umnyj-dom-ventilyaciya-kondicionirovanie.html
$(window).on('load', function (event) {
    (function () {
        var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
        initHeader();
        initAnimation();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = {
                x: width / 2,
                y: height / 2
            };
            canvas = document.getElementById('demo-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');
            points = [];
            for (var x = 0; x < width; x = x + width / 20) {
                for (var y = 0; y < height; y = y + height / 20) {
                    var px = x + Math.random() * width / 20;
                    var py = y + Math.random() * height / 20;
                    var p = {
                        x: px,
                        originX: px,
                        y: py,
                        originY: py
                    };
                    points.push(p);
                }
            }
            for (var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for (var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if (!(p1 == p2)) {
                        var placed = false;
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }
            for (var i in points) {
                var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                points[i].circle = c;
            }
        }

        function addListeners() {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            var posx = posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.screenX;
                posy = e.screenY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = posx;
            target.y = posy;
        }

        function scrollCheck() {}

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            points = null;
            points = [];
            initHeader();
            initAnimation();
        }

        function initAnimation() {
            animate();
            for (var i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (var i in points) {
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }
                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: function () {
                    shiftPoint(p);
                }
            });
        }

        function drawLines(p) {
            if (!p.active) return;
            for (var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(200,200,200,' + p.active + ')';
                ctx.stroke();
            }
        }

        function Circle(pos, rad, color) {
            var _this = this;
            (function () {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();
            this.draw = function () {
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(200,200,200,' + _this.active + ')';
                ctx.fill();
            };
        }

        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    })();
});