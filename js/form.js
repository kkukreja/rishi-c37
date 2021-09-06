class Form {

    constructor() {
        this.title = createImg("assets/title.png");
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Submit");
        this.greeting = createElement("h3");

    }

    setElementPosition() {
        this.title.position(width / 5, 50);
        this.title.size(1000, 120)
        this.input.position(width / 2 - 100, height / 2 - 80);
        this.playButton.position(width / 2 - 50, height / 2);
        this.greeting.position(width / 2-150, height / 2 +50)
    }

    setElementsStyle() {
        this.title.class("titleText");
        this.input.class("inputbox")
        this.playButton.class("button");
        this.greeting.class("greeting")
    }
    display() {
        this.setElementPosition();
        this.setElementsStyle();

        this.playButton.mousePressed( () =>{
            var name = this.input.value();
            this.input.hide();
            this.playButton.hide();

            playerCount += 1;
            // player.updateCount(playerCount);
            // player.update(name);

            this.greeting.html(" Hello " + name + " waiting for other players to join");
        })

    }

    play() {

    }
}