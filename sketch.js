// Name       : Jaeyeong An
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

let MainMenu = 0;
let G1 = 1;
let G2 = 2;
let G3 = 3;
let G4 = 4;
let G5 = 5;
let G6 = 6;
let G7 = 7;
let G8 = 8;
let G9 = 9;
let G10 = 10;
let G11 = 11;
let G12 = 12;
let G13 = 13;
let G14 = 14;
let G17 = 17;
let G18 = 18;
let G19 = 19;

let H1 = 51
let S1 = 61
let W1 = 71
let W2 = 72
let W3 = 73
let W4 = 77
let W5 = 75
let P1 = 81
let E1 = 91
let E2 = 92
let E3 = 93
let E4 = 94

let O1 = 1001;
let C1 = 1002;
let End1 = 1003;
let CurrentScreen = MainMenu;



let R1 = 601;
let R2 = 602;
let L1 = 603;
let GYM1 = 604;
let ENTRANCE1 = 605;

let talkF1 = 0

let talkG1 = 0

let talkN1 = 0
let talkN2 = 0
let talkN3 = 0
let talkN4 = 0
let talkN5 = 0
let talkN6 = 0
let talkN7 = 0
let talkN8 = 0
let talkN9 = 0
let talkN10 = 0
let talkN11 = 0
let talkN12 = 0
let talkN13 = 0
let talkN14 = 0
let talkN15 = 0
let talkN16 = 0
let talkN17 = 0
let talkN18 = 0
let talkN19 = 0

let talkC1 = 0
let talkC2 = 0
let talkC3 = 0
let talkC4 = 0

let talkS1 = 0

let talkH = 0

let minimap = 0



function setup()
{
    createCanvas( 950, 800 );
    
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
}

function draw()
{
    background( 220 );
    
    let talkUI = new talk()
    switch(CurrentScreen)
    {
        case MainMenu:
            {
                push()
                textSize(200)
                text('Initial ',100,250)
                fill(255,0,0)
                text('        K',100,250)
                pop()
                StartButton.draw('start',0,24,40,50,G1)
                OptionButton.draw('option',0,24,40,50,O1)
                CreditButton.draw('credit',0,24,40,50,C1)
            }
            break;     
        case G1:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                push()
                talkUI.draw('Friend',24)
                if(talkF1 == 0)
                {
                    textSize(24)
                    text('I was invited to a hotel that is about to open,',70,500)
                    text('but suddenly work has come up.',70,550)
                }
                else if(talkF1 ==1)
                {
                    text('So I can not make it. Will you go instead?',70,500)
                    text('One of the hotel owners is your favorite soccer player, Lingard!',70,550)
                }
                else
                {
                    CurrentScreen = G2
                }
            }
            break;
        case G2:
            {
                push()
                textSize(40)
                text('[On the way to the hotel]',20,50)
                pop()
                talkUI.draw('narration',24)
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
            }
            break;
        case G3:
            {
                push()
                textSize(40)
                text('[Hotel Entrance]',20,50)
                pop()
                talkUI.draw('soccer',24)
                if(talkC1 == 0)
                {
                    textSize(24)
                    text('Welcome to our hotel.',70,500)
                    text('We wanted to show you before it opened, so We invited you.',70,550)
                    text('Excuse me, whose invitation are you here?',70,600)
                }
                else if(talkC1 == 1)
                {
                    textSize(24)
                    text('I said him I came here instead of my friend.',70,500)
                }
                else
                {
                    textSize(24)
                    text('Oh, then you are my guest. Nice to meet you. ',70,500)
                    text('I wish your friend was here. Sorry for here that',70,550)
                    text('Excuse me, what do you do for a living?',70,600)
                    Choice1Button.draw('Detective',0,32,50,50,G5)  
                    Choice3Button.draw('Freelance',0,32,50,50,G6)
                }
            }
            break;
        case G4:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN2 == 0)
                {
                    textSize(24)
                    text('You ignored the man at the entrance',70,500)
                    text('and entered the hotel right away.',70,550)
                }
                else if(talkN2 == 1)
                {
                    text('There seems to be some kind of event at the restaurant.',70,500)
                }
                else
                {
                    talkC3 = 2
                    CurrentScreen = G6
                }
            }
            break;
        case G5:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                talkUI.draw('soccer',24)
                if(talkC2 == 0)
                {
                    textSize(24)
                    text('former co-worker of him, but now retired.',70,500)
                    text('Now I run a small detective office.',70,550)
                }
                else
                {
                    textSize(24)
                    text('You are still a detective after retirement. You are very professional.',70,500)
                    text('I have been a professional, so I like that mindset.',70,550)
                    text('Are you interested in shooting?',70,600)
                    Choice1Button.draw('Yes',0,32,50,50,G7)  
                    Choice3Button.draw('No',0,32,50,50,G8)
                }
            }
            break;
        case G6:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                talkUI.draw('soccer',24)
                if(talkC3 == 0)
                {
                    textSize(24)
                    text('I am retired now.',70,500)
                }
                else if(talkC3 == 1)
                {
                    textSize(24)
                    text('Oh, I was rude. I am sorry. Please come to the restaurant after you look around.',70,500)
                    text('There will be a small party and event at the restaurant, so please attend.',70,550)
                }
                else
                {
                    textSize(24)
                    text('Then look around the hotel before going to the restaurant.',70,500)
                    text('You choose where to go by press M.',70,550)
                    text('You go to the restaurant, and the story goes on.',70,600)
                }
            }
            break;
        case G7:
            {
                
                talkUI.draw('narration',24)
                if(talkN3 ==0)
                {
                    push()
                    textSize(40)
                    text('[Friend House]',20,50)
                    pop()
                    text('Then come with me to the shooting range!',70,500)
                }
                else if(talkN3 ==1)
                {
                    text('Two other people were using the shooting range.',70,500)
                }
                else if(talkN3 ==2)
                {
                    text('these are my friends who are the co-owners of this hotel with me.',70,500)
                }
                else if(talkN3 ==3)
                {
                    text('Nice to meet you. I am sure you know.',70,500)
                    text('I am a former martial artist, Michael',70,550)
                    text('He is known for always knocking out opponents in the fourth round..',70,600)
                }
                else if(talkN3 ==4)
                {
                    text('you are so confident, Michael.',70,500)
                    text('Hello, I am a former basketball player, James. They are old friends.',70,550)
                }
                else if(talkN3 ==5)
                {
                    text('How about take a look at shooting skills of former Detective?',70,500)
                    text('Unfortunately, we only have a revolver in place.',70,550)
                    text('But I am sure you will do a good job because',70,600)
                    text('it is something you have always used in criminal work.',70,650)
                }
                else if(talkN3 ==6)
                {
                    text('You did some shooting with them.',70,500)
                    text('They are all pretty good at shooting ',70,550)
                }
                else if(talkN3 ==7)
                {
                    text('You are all still good.',70,500)
                    text('former detective is pretty good, too.',70,550)
                    text('Then how about go to the restaurant?. There will be a party soon.',70,600)
                }
                else if(talkN3 ==8)
                {
                    text('So you went to the restaurant with them.',70,500)
                }
                else
                {
                    CurrentScreen = R1
                }
            }
        break;
        case G8:
        {
            push()          
            textSize(40)             
            text('[Friend House]',20,50)              
            pop()
            talkUI.draw('soccer',24)
            if(talkC4 == 0)
            {
                text('Oh, I see. Then, please look around the hotel and come to the restaurant later.',70,500)
                text('There will be an event soon, so please attend.',70,550)
            }
            else
            {
                talkC3 =2
                CurrentScreen = G6
            }
        }
        break;
        case H1:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                text('H1screen',400,400)
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
                RestaurantButton.draw('restaurant',0,32,90,80,R1)
                GymButton.draw('Gym',0,32,90,80,GYM1)
                LobbyButton.draw('Lobby',0,32,20,80,L1)
            }
            break;
        case S1:
            {
                push()
                textSize(40)
                text('[Shooting Range]',20,50)
                pop()
                text('S1screen',400,400)
                talkUI.draw('security',24)
                if(talkS1 == 0)
                {
                    textSize(24)
                    text('Public access is not permitted.',70,500)
                }
                else
                {
                    textSize(24)
                    text('I can not get in here without permission.',70,500)
                    text('go somewhere else',70,550)
                }
            }
            break;
        case W1:
            {
                push()
                textSize(40)
                text('[Walking Trails]',20,50)
                pop()
                talkUI.draw('narration',24)
                text('there are not many people take a walk at night',70,500)
                text('There is a shooting range near the back of the trail.',70,550)
                Choice1Button.draw('Go',0,32,50,50,W2)  
                Choice2Button.draw('take more look here.',0,32,50,50,W3)
            }
            break;
        case W2:
            {
                push()
                textSize(40)
                text('[Walking Trails]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN4 == 0)
                {
                    text('There are materials that seem to be needed for construction.',70,500)
                    text('It is late at night, so everyone seems to be off work.',70,550)
                    text('Besides,the shooting range is near, So there is no one here.',70,600)
                }
                else if(talkN4 == 1)
                {
                    text('There is a mark on the lawn in the backyard.',70,500)
                    text('Is it a mark of moving the materials?',70,550)
                    Choice1Button.draw('look at the materials',0,32,50,50,W4)       
                    Choice2Button.draw('grass',0,32,50,50,W5)
                    Choice3Button.draw('go to restaurant.',0,32,50,50,R1)
                }
            }
            break;
        case W3:
            {
                push()
                textSize(40)
                text('[Walking Trails]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN5 ==0)
                {
                    text('I have looked around more, but I do not see anything special.',70,500)
                }
                else if(talkN5 ==1)
                {
                    text('I can hear the people around me talking.',70,500)
                }
                else if(talkN5 ==2)
                {
                    text('There is construction material in the back of the building.',70,500)
                    text('Besides, the shooting range is right next to it.',70,550)
                }
                else
                {
                    text('Oh, yeah, party at the restaurant is coming up.',70,500)
                    text('The people who came here should come.',70,550)
                    Choice1Button.draw('go to the restaurant.',0,32,50,50,R1)  
                    Choice3Button.draw('go to the backyard.',0,32,50,50,W2)
                }
            }
            break;
        case W4:
            {
                push()
                textSize(40)
                text('[Walking Trails]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN6 ==0)
                {
                    text('I have looked at the materials, but I do not see anything special.',70,500)
                }
                else if(talkN6 ==1)
                {
                    text('How about look at the grass?',70,500)
                    Choice1Button.draw('look at the grass',0,32,50,50,W5)  
                    Choice3Button.draw('go to the restaurant',0,32,50,50,R1)
                }
            }
        case W5:
            {
                push()
                textSize(40)
                text('[Walking Trails]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN7 ==0)
                {
                    text('I looked closely at the traces of steps of person.',70,500)
                }
                else if(talkN7 ==1)
                {
                    text('There are a few bullets here.',70,500)
                }
                else if(talkN7 ==3)
                {
                    text('accidentally fired from the shooting range?',70,500)
                    text('I do not know what the structure of the shooting range looks like, ',70,550)
                    text('but Is that right bullet hit this way?',70,600)
                }
                else
                {
                    Choice1Button.draw('Look at the materials',0,32,50,50,W4)  
                    Choice3Button.draw('go to the restaurant',0,32,50,50,R1)
                }
            }
        case P1:
            {
                push()
                textSize(40)
                text('[Parking lots]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN8 ==0)
                {
                    text('I checked the parking lot.',70,500)
                    text('I can see a few cars with unusual numbers.',70,550)
                }
                else if(talkN8 ==1)
                {
                    text('That car has the phrase HEART OF DIXIE on its license plate.',70,500)
                    text('That number of car is ABC-4444. That is amazing.',70,550)
                }
                else
                {
                    text('I think I have had a good look at the parking lot.',70,500)
                }
            }
            break;
        case ENTRANCE1:
            {
                push()
                textSize(40)
                text('[Hotel Entrance]',20,50)
                pop()
                talkUI.draw('narration',24)
                if(talkN9 ==0)
                {
                    text('Loud music greets people at the entrance.',70,500)
                    text('There seems to be a lot of people who have not gone to the restaurant yet.',70,550)
                }
                else if(talkN9 ==1)
                {
                    text('I can see quite a few other celebrities besides the three owners of this hotel.',70,500)
                }
                else
                {
                    text('I do not want to stay long here because it is noisy.',70,500)
                    text('go somewhere else.',70,550)
                }
            }
            break;
        case GYM1:
            {
                push()
                textSize(40)
                text('[Gym]',20,50)
                pop()
                talkUI.draw('narration',24)
                text('here is not ready yet. I can not enter',70,500)
                text('go somewhere else.',70,550)
            }
            break;
        case L1:
            {
                push()
                textSize(40)
                text('[Lobby]',20,50)
                pop()
                talkUI.draw('counter',24)
                if(talkN10 ==0)
                {
                    text('Please refrain from entering the guest room.',70,500)
                    text('There will be an event at the restaurant soon.',70,550)
                }
                else if(talkN10 ==1)
                {
                    text('It seems difficult to get to the guest room.',70,500)
                }
            }
            break;
        case R1:
            {
                push()
                textSize(40)
                text('[restaurant]',20,50)
                pop()
                talkUI.draw('Host',24)
                if(talkN11 ==0)
                {
                    text('Now that all the main characters of this event are here,',70,500)
                    text('start the event!',70,550)
                    text('First, Mr.Lingard will tell you about the opening of this hotel.',70,600)
                }
                else if(talkN11 ==1)
                {
                    text('Well, if you are invited here, you know us.',70,500)
                    text('So, to tell you about this hotel, ',70,550)
                    text('I wanted to emphasize the commonality of us, K.',70,600)
                }
                else if(talkN11 ==2)
                {
                    text('Are not you just trying to make some money ',70,500)
                    text('with the K-meme that is popular in Korea these days?',70,550)
                }
                else if(talkN11 ==3)
                {
                    text('These days, all three of you have a pretty bad reputation,',70,500)
                    text(' and you want to change your image.',70,550)
                }
                else if(talkN11 ==4)
                {
                    text('Is not that the reporter?',70,500)
                    text('he is famous for writing groundless articles about them.',70,550)
                    text('I am sure he is here to write something weird again.',70,600)
                }
                else if(talkN11 ==5)
                {    
                    text('I am the one who was officially invited.',70,500)
                    text('You are not gonna kick out the officially invited guests, are you?',70,550)
                }
                else if(talkN11 ==6)
                {    
                    text('I am having a great vacation.',70,500)
                    text('I am sure I will find some good news.',70,550)
                    text('HA HA.',70,600)
                }
                else if(talkN11 ==7)
                {    
                    text('Apparently, he is the reporter who wrote tabloid stories.',70,500)
                    text('Recently, he was found not guilty of false articles about them.',70,550)
                    text('So, I think He is looking for news on the three.',70,600)
                }
                else if(talkN11 ==8)
                {    
                    text('Well, thank you for coming to our hotel.',70,500)
                    text('We have a little present for you, so please enjoy it.',70,550)
                }
                else if(talkN11 ==9)
                {
                    text('Lingard and two friends approach me.',70,500)
                }
                else if(talkN11 ==10)
                {
                    text('con you help us?',70,500)
                    text('If you help me, I give you my signed uniform,',70,550)
                    text('one of the prizes for this event.',70,600)
                    
                }
                else if(talkN11 ==11)
                {
                    text('Hey, is it okay to give him?',70,500)
                    text('We have got three more, and we are late for shooting.',70,550)
                    text('Do not you think we should do that sooner?',70,600)
                }
                else if(talkN11 ==12)
                {
                    text('Well, that is true.',70,500)
                }
                else if(talkN11 ==13)
                {
                    text('So you are gonna help me?',70,500)
                }
                else if(talkN11 ==14)
                {
                    text('You accepted immediately because the uniform.',70,500)
                }
                else if(talkN11 ==15)
                {
                    text('Thank you.  .',70,500)
                    text('Then take this radio and',70,550)
                    text('listen to the explanation',70,600)
                }
                else if(talkN11 ==16)
                {
                    text('We are going to turn on the lights in guest room to make initial K.',70,500)
                    text('But building is not completed yet, so we had to turn it on one by one.',70,550)
                    text('So we turned it on ourselves, and it was not easy.',70,600)
                }
                else if(talkN11 ==17)
                {
                    text('So we go to the wrong room and try to turn the lights back on or off.',70,500)
                    text('I need your help with the radio.',70,550)
                }
                else
                {
                    CurrentScreen = G12
                }
            }
            break;
        case G12:
        {
            for(let i = 0; i < cols; i++)
            {
                for(let j = 0; j < rows; j++)
                {
                    push()
                    let x = i*150;
                    let y = j*100;
                    fill(light[i][j])
                    rect(x+100,y+50,150,100)
                    pop()
                }
            }
            rect(100,550,300,150)
            rect(400,550,150,150)
            rect(550,550,300,150)
            circle(770,200,60)
            circle(470,300,60)
            circle(620,400,60)
            text('Michael',750,200)
            text('James',450,300)
            text('Lingard',600,400)
            if(talkH ==1)
            {
                CurrentScreen = G13
            }
        }
        break;
        case G13:  
        {
            talkUI.draw('narration',24)
            if(talkN12 == 0)
            {
                push()
                textSize(300)
                ellipse(475,350,1000,700)
                text('Bang!!!',0,450)
                pop()
            }
            else if(talkN12 == 1)
            {
                text('You ran straight to where the gunfire went.',70,500)
            }
            else if(talkN12 == 2)
            {
                CurrentScreen = G14
            }
        }
        break;

        case G14:
        {
            push()
            textSize(40)
            text('[the scene of incident]',20,50)
            pop()
            talkUI.draw('narration',24)
            if(talkN13 ==0)
            {
                text('There was a body of the reporter and a revolver.',70,500)
            }
            else if(talkN13 ==1)
            {
                text('first of all, get everyone together at the restaurant first.',70,500)
            }
            else if(talkN13 ==2)
            {
                text('I sent them to the restaurant.',70,500)
            }
            else if(talkN13 ==3)
            {
                text('Now, look into the body.',70,500)
            }
            else if(talkN13 ==4)
            {
                text('right hand is pointing at 3')
                text('Holding Belt With Left Hand')
                text('Revolvers seem to be handled here at the shooting range')
                text('There is a bullet hole in the wall behind the poster')
            }
            else if(talkN13 ==5)
            {
                text('I think this is all the evidence available here.',70,500)
                text('go to the restaurant and talk to the three men.',70,550)
            }
            else
            {
                CurrentScreen = R2
            }
        }
        break;
        case R2:   
        {
            push()
            textSize(40)
            text('[restaurant]',20,50)
            pop()
            talkUI.draw('narration',24)
            if(talkN14 ==0)  
            {         
                text('Three men are talking to each other.',70,500)    
            }
            else if(talkN14 ==1)
            {
                text('Theoretically, all three of us can not shoot him.',70,500)
                text('Do not doubt each other.',70,550)
            }
            else if(talkN14 ==2)
            {
                text('You are right. We were all turning on the lights.',70,500)
                text('Turn on the lights in the room and move to the other room for 10 seconds.',70,550)
                text('But three seconds after we all turned on the lights, we heard a gunshot.',70,600)
            }
            else if(talkN14 ==3)
            {
                text('I have been having a bad knee lately, and I can not even run properly.',70,500)
                text('Three seconds would have been impossible even when I was a player.',70,550)
            }
            else if(talkN14 ==4)
            {
                text('According to the lobby, only three men and reporter ',70,500)
                text('went up to floor at that time.',70,550)
                text('So, did the criminal get in from the outside?',70,600)
            }
            else if(talkN14 ==5)
            {
                text('It is impossible because there is nothing out there to hang on to.',70,500)
                text('and there are people out there',70,550)
            }
            else
            {
                text('No matter how many times I look at him, he is one of these three.',70,500)
                text('Who is the criminal?',70,550)
                Choice1Button.draw('Lingard',0,24,50,50,G17)
                Choice2Button.draw('Michael',0,24,50,50,G18)
                Choice3Button.draw('James',0,24,50,50,G19)
            }
        }
        break;
        case G17:
            {
                talkUI.draw('soccer',24)
                if(talkN15 ==0)  
                {         
                    text('the criminal is you, Lingard!',70,500)    
                }
                else if(talkN15 ==1)  
                {         
                    text('Although it is true that I was the closest of the three journalists.',70,500)    
                    text('I can not even run properly because my legs hurt.',70,550)    
                    text('Most people know I retired because of this.',70,600)    
                    
                }
                else if(talkN15 ==2)  
                {         
                    text('when I saw the hole in the poster, ',70,500)    
                    text('the criminal must have shot it from the same floor.',70,550)
                    text('Then all that is possible is you, the closest one.',70,600)        
                }
                else if(talkN15 ==3)  
                {         
                    text('Probably, you lean something against the switch',70,500)   
                    text('in the room you need to go to.',70,550) 
                    text('With the exact pass that was your specialty. ',70,600)        
                    text('you have hit it with a ball and light it up just before you shot it.',70,650)        
                }
                else if(talkN15 ==4)  
                {         
                    text('That is ridiculous!',70,500)    
                    text('I even have a bad leg disease, how can I hit it all at once!',70,550)        
                }
                else if(talkN15 ==5)  
                {         
                    text('you have to go to the police to make a statement',70,500)            
                }
                else 
                {         
                    CurrentScreen = E2
                }
            }
        break;
        case G18:
            {
                talkUI.draw('basketball',24)
                if(talkN16 ==0)  
                {         
                    text('the criminal is you, James!')    
                }
                else if(talkN16 ==1)  
                {         
                    text('Why?',70,500)    
                    text('I was the furthest of the three in the building at the time!',70,550)    
                    
                }
                else if(talkN16 ==2)  
                {         
                    text('But dying message of reporter clearly points to you.',70,500)    
                    text('The hand on the belt is actually an expression ',70,550)    
                    text('of putting your hand on your waist,',70,600)
                    text('a routine before you do free-tu.',70,650)    
                }
                else if(talkN16 ==3)  
                {         
                    text('And right hand is none other than your floor number!',70,500)    
                    text('No matter how well a journalist knows about you,',70,550)       
                    text('he could not think a number for you right away.',70,600)       
                }
                else if(talkN16 ==4)  
                {         
                    text('So the sign means the floor where the killer shot!',70,500)    
                    text('So you are the only one on the fourth floor!',70,550)        
                }
                else if(talkN16 ==5)  
                {         
                    text('So how am I supposed to shoot from the fourth floor?',70,500)    
                    text('Is not it just a forced reasoning through a dying message?',70,550)        
                }
                else if(talkN16 ==6)  
                {         
                    text('The proof of that is grass!',70,500)    
                    text('You have misled the reporter towards the window on the first way up.',70,500)        
                    text('And that is when the reporter leaned out of the window and shot him!',70,550)        
                }
                else if(talkN19 ==7)  
                {         
                    text('Then there is a bullet on the lawn in the backyard, right?',70,500)           
                }
                else if(talkN16 ==8)  
                {         
                    text('Besides, you purposely made holes in walls and posters in advance',70,500)    
                    text('and made them look like they were shot on the same floor!',70,550)        
                }
                else if(talkN16 ==9)  
                {         
                    text('I can not believe you even know that.',70,500)    
                    text('That is right, I killed him.',70,550)        
                }
                else
                {
                    CurrentScreen = E3
                }
            }
        break;
        case G19:
            {
                talkUI.draw('Michael',24)
                if(talkN17 ==0)  
                {         
                    text('the criminal is you, Michael')    
                }
                else if(talkN17 ==1)  
                {         
                    text('Why me?',70,500)    
                    text('It is impossible because I am not good at running and it is far away!',70,550)    
                    
                }
                else if(talkN17 ==2)  
                {         
                    text('But the signal of reporter clearly points to you.',70,500)    
                    text('The belt on the left hand means the belt you receive',70,550)    
                    text('when you record a champion',70,600)
                    text('and the 4 on the right hand means you are called the man of 4!',70,650)    
                }
                else if(talkN17 ==3)  
                {         
                    text('Ha! You are only accusing me of that?',70,500)        
                }
                else if(talkN17 ==4)  
                {         
                    text('talk when the cops come in',70,500)    
                }
                else 
                {         
                    CurrentScreen = E4   
                }
            }
        break;

        case O1:
            {
                text('Option1screen',400,400)
            }
            break;
        case C1:
            {
                push()
                textSize(50)
                text('Made by Jaeyeong An',200,400)
                pop()
            }
            break;
        case E1:
            {
                push()
                textSize(40)
                text('[Friend House]',20,50)
                pop()
                talkUI.draw('friend',24)
                text('Hey, the hotel. There was a murder.',70,500)
                text('I am glad you and I both did not go, right?',70,550)
            }
        break;
        case E2:
            {
                talkUI.draw('Narration',24)
                text('He was eventually arrested but reportedly refused to plead guilty.',70,500)
                text('Was he really the criminal?',70,550)
            }
        break;
        case E3:
            {
                talkUI.draw('Narration',24)
                text('He says he was actually blackmailed by the reporter for an article about his wife.',70,500)
                text('So when his wife was having a hard time, he finally committed the crime.',70,550)
            }
        break;
        case E4:
            {
                talkUI.draw('Narration',24)
                text('He did not eventually become a suspect because of insufficient evidence.',70,500)
                text('So, is there a real killer?',70,550)
            }
        break;

    }
    if(minimap == 1)
    {
        push()
        textSize(32)
        rect(0,50,950,800)
        HotelButton.draw('Hotel',0,32,250,100,H1)
        ShootingButton.draw('Shooting Range',0,32,170,80,S1)
        WalkingButton1.draw('',0,32,0,50,W1)
        WalkingButton2.draw('Walking Trails',0,32,350,50,W1)
        push()
        strokeWeight(5)
        stroke(255)
        line(23,300,137,300)
        pop()
        ParkingButton.draw('Parking',0,32,5,50,P1)
        text('Lots',830,400)
        EntranceButton.draw('Entrance',0,32,75,100,E1)
        textSize(24)
        text('Click where you want to go. Press M to close the mini-map.',50,780)
        pop()
    }
}

function keyPressed()
{
    if(keyCode === 70)
    {
        if(CurrentScreen ==G1)
        {
            talkF1 = talkF1+1
        }
        else if(CurrentScreen ==G2)
        {
            talkN1 = talkN1+1
        }
        else if(CurrentScreen ==G3)
        {
            talkC1 = talkC1+1
        }
        else if(CurrentScreen ==G4)
        {
            talkN2 = talkN2+1
        }
        else if(CurrentScreen ==G5)
        {
            talkC2 = talkC2+1
        }
        else if(CurrentScreen ==G6)
        {
            talkC3 = talkC3+1
        }
        else if(CurrentScreen ==G7)
        {
            talkN3 = talkN3+1
        }
        else if(CurrentScreen ==W2)
        {
            talkN4 = talkN4+1
        }
        else if(CurrentScreen ==W3)
        {
            talkN5 = talkN5+1
        }
        else if(CurrentScreen ==W4)
        {
            talkN6 = talkN6+1
        }
        else if(CurrentScreen ==W5)
        {
            talkN7 = talkN7+1
        }
        else if(CurrentScreen ==P1)
        {
            talkN8 = talkN8+1
        }
        else if(CurrentScreen ==E1)
        {
            talkN9 = talkN9+1
        }
        else if(CurrentScreen ==L1)
        {
            talkN10 = talkN10+1
        }
        else if(CurrentScreen ==R1)
        {
            talkN11 = talkN11+1
        }
        else if(CurrentScreen ==G12)
        {
            talkH = talkH+1
        }
        else if(CurrentScreen ==G13)
        {
            talkN12 = talkN12+1
        }
        else if(CurrentScreen ==G14)
        {
            talkN13 = talkN11+3
        }
        else if(CurrentScreen ==R2)
        {
            talkN14 = talkN14+1
        }
        else if(CurrentScreen ==G17)
        {
            talkN15 = talkN15+1
        }
        else if(CurrentScreen ==G18)
        {
            talkN16 = talkN16+1
        }
        else if(CurrentScreen ==G19)
        {
            talkN17 = talkN17+1
        }
        else if(CurrentScreen ==G8)
        {
            talkC4 = talkC4+1
        }
        else if(CurrentScreen == S1)
        {
            talkS1 = talkS1+1
        }
    }
    if(keyCode === 77)
    {
        if(talkC3 >= 1)
        {
            if(minimap ==0)
            {
                minimap = 1
            }
            else
            {
                minimap = 0
            }
        }
    }
}

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

