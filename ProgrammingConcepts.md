You must create a document that explains the following:

**In your own words**, explain the following programming topics. 

Topics:

1. Shapes

I created a Shapes where conversations and names were printed.

//name
        fill(255)
        rect(700,400,200,50)
        //context
        fill(220,120)
        rect(50,450,this.width,this.height)
        textSize(size)
        fill(0)
        text(name,720,435)



2. Colors

By changing the color of the hotel rooms, I distinguished the light of the room.

fill(120)

This code is used to describe an off-light room.

3. Variables

Each time you choose a choice or end the story with the F key, the variable changes.
Then the current screen changes depending on the variable.

let MainMenu = 0;
let CurrentScreen = MainMenu;

4. Conditional Statements

When you press the f key on a particular screen, the screen changes according to the increasing variable.

if(talkN1 == 0)
                {
                    textSize(24)
                    text('You accepted immediately because you thought you could see Lingard.',70,500)
                    text('So you went to the hotel',70,550)
                }
                else if(talkN1 == 1)
                {
                    textSize(24)
                    text('There is someone standing next to the hotel entrance.',70,500)
                    text('It is too dark to see. I have to get closer.',70,550)
                    
                }
                else
                {
                    text('it was my favorite soccer player, Lingard.',70,500)
                    text('Maybe he is waiting for my friend who was supposed to come.',70,550)
                    Choice1Button.draw('Talk',0,32,50,50,G3)  
                    Choice3Button.draw('Pass',0,32,50,50,G4) 
                }



5. Loops

I used Loops to implement a room with 5*5 structure.
 
 for(let i = 0; i < cols; i++)
                {
                    for(let j = 0; j < rows; j++)
                    {
                        push()
                        let x = i*150;
                        let y = j*100;
                        fill(120)
                        rect(x+100,y+50,150,100)
                        pop()
                    }
                }
                
Through this code, I made the 25 rectangular shapes with width of 150 and height of 100 with 5*5 structure.

6. Functions

By pressing the f key or the m key, the current screen changes depending on the variable using the code that adjusts the value of a particular variable.

function keyPressed()
{
    if(keyCode === 70)
    {
        if(CurrentScreen ==G1)
        {
            talkF1 = talkF1+1
        }
    }
}

This code allows the conversation to proceed by pressing the f key on the conversation screen and increasing the value of a particular variable by one.


7. Classes

I made a button class and I put in a value, and I made a different size of button according to that value.

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
    }
}

8. Arrays
A two-dimensional arrangement was used to make a particular room look lit in the hotel with 5*5 structure.

light = make_2d_array(cols,rows)
    for(let i = 0; i < cols; ++i)
    {
        for(let j = 0; j < rows; ++j)
        {
            light[i][j] = 100;
        }
    }
    light[0][0] = 255
    light[0][1] = 255
    light[0][2] = 255
    light[0][3] = 255
    light[0][4] = 255
    light[1][3] = 255
    light[2][2] = 255
    light[3][1] = 255
    light[3][3] = 255
    light[4][0] = 255
    light[4][4] = 255
    
let cols = 5;
let rows = 5;
function make_2d_array(cols, rows)
{
    let array = new Array(cols);
    for( let i = 0; i < array.length; ++i )
    {
        array[ i ] = new Array(rows);
    }
    return array;
}