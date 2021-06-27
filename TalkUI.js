// Name       : Jaeyeong An
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

class talk
{
    constructor(width=850,height=300)
    {
        this.width = width
        this.height = height
    }
    draw(name = narration,size=24,LastPage = 0)
    {
        push()
        //name
        fill(255)
        rect(700,400,200,50)
        //context
        fill(220,120)
        rect(50,450,this.width,this.height)
        textSize(size)
        fill(0)
        text(name,720,435)
        if(LastPage == 0)
        {
            text('press F for next page',650,780)
        }
        else
        {
            text('press F to end the talk',650,780)
        }
        pop()
    }
}