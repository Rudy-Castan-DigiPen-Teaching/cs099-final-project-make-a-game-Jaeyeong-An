// Name       : Jaeyeong An
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

class button
{
    constructor(x,y,width,height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(context, TextColor = 0, size = 24,plus_x = 0, plus_y = 0, nextScene )
    {
        const IsOnButtonX = mouseX > this.x && mouseX < this.x+this.width
        const IsOnButtonY = mouseY > this.y && mouseY < this.y+this.height
        push()
        rect(this.x,this.y,this.width,this.height)
        pop()

        push()
        fill(TextColor)
        textSize(size)
        text(context,this.x+plus_x, this.y+plus_y)
        pop()

        if(mouseIsPressed)
        {
            if(IsOnButtonX && IsOnButtonY)
            {
                CurrentScreen = nextScene;
            }
        }
    }
}
