class hraci {
    constructor(
        x,
        y,
        width,
        height,
        color,
        speed,
        velocity,
        gravitace,
        jumpCount,
        canJump,
        isColliding
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.dir = { left: false, right: false };
        this.velocity = velocity;
        this.gravitace = gravitace;
        this.jumpCount = 2;
        this.canJump = canJump;
        this.isColliding = false;
    }

    canvasPos() {
        return {
            x: this.x + canvas.width / 2 - this.width / 2,
            y: -this.y + canvas.height / 2 - this.height / 2,
        };
    }

    move() {
        this.x += this.speed * this.dir.right;
        this.x -= this.speed * this.dir.left;

        this.velocity += this.gravitace;
        this.y += this.velocity;

        if (this.jumpCount > 2) {
            this.canJump = false;
        }

        if (this.canJump == true && this.jumpCount < 2) {
            this.velocity = 10;
            this.canJump = false;
            this.jumpCount++;
            console.log(this.jumpCount);
        }

        //toto me dojebe :)
        if (this.y < -309) {
            this.y = -308;
            this.velocity = 0;
            this.jumpCount = 0;
        }
        //-------------------

        switch (this.jumpCount) {
            case 2: this.color = "red";
                break;
            case 1: this.color = "yellow";
                break;
            case 0: this.color = "green";
                break;
        }
    }

    kolize(blok) {
        if (
            this.y + this.height / 2 > blok.y - blok.height / 2 &&
            this.y - this.height / 2 < blok.y + blok.height / 2 &&
            this.x - this.width / 2 < blok.x + blok.width / 2 &&
            this.x + this.width / 2 > blok.x - blok.width / 2
        ) {
            this.isColliding = true;

            let top = blok.y - blok.height / 2 - (this.y + this.height / 2);
            let down = blok.y + blok.height / 2 - (this.y - this.height / 2);
            let right = blok.x - blok.width / 2 - (this.x + this.width / 2);
            let left = blok.x + blok.width / 2 - (this.x - this.width / 2);

            if (
                Math.abs(top) < down &&
                Math.abs(top) < Math.abs(right) &&
                Math.abs(top) < left
            ) {
                this.y += top;
                this.velocity = 0;
            } else if (
                down < Math.abs(top) &&
                down < Math.abs(right) &&
                down < left
            ) {
                this.y += down+1;
                this.velocity = 0;
                this.jumpCount = 0;
            } else if (
                left < Math.abs(top) &&
                left < Math.abs(right) &&
                left < down
            ) {
                this.x += left;
            } else if (
                Math.abs(right) < Math.abs(top) &&
                Math.abs(right) < left &&
                Math.abs(right) < down
            ) {
                this.x += right;
            }
        } else {
            //this.color = "white";
            this.isColliding = false;
        }
    }
}

class tiles {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    canvasPos() {
        return {
            x: this.x + canvas.width / 2 - this.width / 2,
            y: -this.y + canvas.height / 2 - this.height / 2,
        };
    }
}