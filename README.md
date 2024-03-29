<img  width="100%" padding="0" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/d324a33b-f356-4b8f-bf6f-68023ac3e453">

#### 26/02/2024

### The Cases

<p>Around the end of the first "CSS to The Rescue" lecture (given by Sanne 't Hooft and Nils Blinder), we were informed about the final assignment, containing 4 choices  </p>

<ul>
<li>Control Panel</li>
<li>Firework Show</li>
<li>Paper-airplane</li>
<li>Rubix Cube</li>
</ul>

<p>I picked fireworks for my project, but I wanted to spice it up. Just before the assessment, Sanne t'Hooft showed me some of his work that totally blew me away. It hardly had any JS, and I was like, "Wow!". My favorite one was <a href="https://sinds1971.nl/viswinkel/">Freddy's Fabulous Fish Tanks</a> It's like a mix of a control panel and fireworks, even though the fish obviously don't explode. But when you mix up all the species, they create this incredible display.</p>

<img width="600" alt="Scherm­afbeelding 2024-03-13 om 23 19 17" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/2d382601-0b1d-425c-9076-0e7b0f66fd21">

<p>I went for a similar idea, but with birds this time. Picture a bunch of birds flying at different speeds. They put on a colorful show just like fireworks.They create a colorful spectacle just like fireworks. Each bird flies at a different speed, forming a diverse mix that can mesmerize the user. But here's the twist: the user can shoot the birds from the sky. Some are easier targets than others because of their speed. When shot, the birds simply fall off.</p>

<img width="400" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/d659ef3d-702e-4701-af38-9a87f7a4cd37">
<p>
<img width="480" alt="Scherm­afbeelding 2024-03-14 om 05 49 25" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/6869e3b3-d3ef-4962-9ece-a185179c2d3a">
<img width="480" alt="Scherm­afbeelding 2024-03-14 om 05 37 50" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/93bf9536-de04-4fa1-b348-5b1f441bf3f5">
<img width="480" alt="Scherm­afbeelding 2024-03-14 om 05 42 59" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/87fcbfb9-f282-43be-b483-1dbbe670797f">
<img width="480" alt="Scherm­afbeelding 2024-03-14 om 05 46 43" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/57d9ae23-ab63-43fe-ab6c-ce7bb2a106fe">
</p>

<p>Here are some sketches to give you an idea of what I want to achieve. Each house has a different type of bird, each faster than the last. When you hover over these houses, you can see the birds peeking outClicking on several birdhouses will launch them to the center of the screen. One can add as much birds as they want to, but also shoot them down. Turning them red and drop them down.</p>

### How could this work? 

<p>I could consider using three different types of aninmations:</p>
<ul>
<li>One taking off, flying to the circle</li>
<li>It will then start flying in circles</li>
<li>And when it's shot, the death animation plays</li>
</ul>

<hr> 

<img  width="600" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/270752a8-bd60-4258-aa58-fb9d09b40d01">

#### 29/02/2024

<p>It was time to get to coding! The list-items part creates a list of birds with radio buttons for selection. Each list-items element represents a list item and contains an input radio button along with the name of the bird displayed as a paragraph. Each radio button has a unique name attribute to group them together, allowing the user to select only one bird at a time. </p>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing Has</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header></header>
    <main>
        <ul>
            <li>
                <input type="radio" name="addBird1">
                <p>bird1</p>
            </li>
            <li>
                <input type="radio" name="addBird2">
                <p>bird2</p>
            </li>
            <li>
                <input type="radio" name="addBird3">
                <p>bird3</p>
            </li>
            <li>
                <input type="radio" name="addBird4">
                <p>bird4</p>
            </li>
            <li>
                <input type="radio" name="addBird5">
                <p>bird5</p>
            </li>
            <li>
                <input type="radio" name="addBird6">
                <p>bird6</p>
            </li>
            <li>
                <input type="radio" name="addBird7">
                <p>bird7</p>
            </li>
            <li>
                <input type="radio" name="addBird8">
                <p>bird8</p>
            </li>
        </ul>

    </main>
    <footer></footer>

</body>
</html>
```
<img width="1000" alt="Scherm­afbeelding 2024-03-14 om 06 00 42" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/f1170a36-1955-4da0-95b3-d83086418cb1">

<p>Regarding the CSS, I recognized that I would likely need to employ repetitive selectors to achieve the functionality I desired. However, this approach wasn't practical. Additionally, it would complicate any future changes, as identifying what adjustments I wanted to make would become akin to solving a large puzzle.</p>

```CSS
section:has( input[name^="addBird"]:checked) + article p  {
    display: block;
}

section:has( input[name="addBird2"]:checked) + article p:nth-of-type(2) {
    display: block;
} 



section input:nth-of-type(2) {
    display: none; 
}
section input:nth-of-type(3) {
    display: none; 
}
section input:nth-of-type(4) {
    display: none; 
}
section input:nth-of-type(5) {
    display: none; 
}

/* And so on, up to 19 */


section:has(input:first-of-type:checked) input:nth-of-type(2){
    display: block; 
}
section:has(input:nth-of-type(2):checked) input:nth-of-type(3){
    display: block; 
}
section:has(input:nth-of-type(3):checked) input:nth-of-type(4){
    display: block; 
}
section:has(input:nth-of-type(4):checked) input:nth-of-type(5){
    display: block; 
}

/* And once again, up to 19 */

```

<p>With Sanne's help, I created multiple variables for the list items, intending to create a method where my birds would dynamically appear with an added 'flying' animation. Each bird's speed and position are controlled by these custom variables. The list is styled as a grid, with radio buttons hidden by default. When a radio button is checked, the corresponding bird's name is displayed and animated to simulate flying. The animation moves the bird vertically while increasing its font size based on its position in the list.</p>

```CSS
li:nth-child(1)  { --i:1;  --x:10; --y:46; }
li:nth-child(2)  { --i:2;  --x:50; --y:68; }
li:nth-child(3)  { --i:3;  --x:23; --y:23; }
li:nth-child(4)  { --i:4;  --x:67; --y:97; }
li:nth-child(6)  { --i:6;  --x:91; --y:24; }
li:nth-child(5)  { --i:5;  --x:12; --y:56; }
li:nth-child(7)  { --i:7;  --x:33; --y:89; }
li:nth-child(8)  { --i:8;  --x:47; --y:35; }
li:nth-child(10) { --i:10; --x:13; --y:23; }


ul  {
    display: grid;
    justify-items: start;

    margin:0;
    padding:0;
    list-style:none;
}

ul li {
    grid-column-start:1;
    grid-row-start:1;
}

ul input {
    display:none;
}

input[name="addBird1"]:not(:checked) {
    display:block;
}

li:has(input:checked) + li input:not(:checked) {
    display:block;
}

p {
    display: none;
}


input:checked + p {
    display:block;
    animation: flying 1s ease;
    animation-iteration-count: infinite;
    font-size:calc(1em * var(--i));

    position: fixed;
    left: calc(1vw * var(--x));
    top: calc(1dvh * var(--y));
}

@keyframes flying {
    0% {
        translate: 0 10rem;
    }

    100% {

        translate: 0 1rem;
    }
}
```

<hr>

#### 01/03/2024

<img width="400" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/3f7c6f19-89fd-4e9b-83bf-56a357b95661">
<p>It was time to get creative with styling! Although I'm still refining the HTML, I decided to start adding some design elements. After all, that's the essence of the course we're following, right? I searched online for some birdhouse SVGs, and I even found one with a matching bird.</p>

<p><img width="251" alt="Scherm­afbeelding 2024-03-14 om 06 49 34" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/cad4eacb-446c-440c-85ad-869e4483fafe">
<img width="280" alt="Scherm­afbeelding 2024-03-14 om 06 50 00" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/cfe98442-0248-456e-b17e-31d992d10377">
</p>

<p>I also edited the list-items, with the actual bird.</p>

### HTML before
```HTML
<li>
    <input type="radio" name="addBird5">
     <p>bird5</p>
</li>
```

### HTML after
```HTML
<li>
    <input type="radio" name="addBird8">
    <img src="./imgs/birdie.png" alt="">
</li>
```

<p>I also edited the list-items variables with additional filters! Each time a bird would appear, it would be displayed in a different color. When a user selects a bird, it gracefully flies onto the screen with a smooth animation, while its size adjusts based on its position in the list. The radio buttons don't look like typical buttons; they're transformed into adorable birdhouses, adding a delightful touch to the interface. By hiding the default appearance of the radio buttons and cleverly inserting the birdhouse backgrounds, we ensure a cohesive and visually appealing design. Plus, organizing everything in a neat grid layout adds structure and makes navigation a breeze. Together, these CSS styles create a playful and engaging user experience that captures the essence of our webpage beautifully.</p>

### CSS After

```CSS
li:nth-child(1)  { --i:1;  --x:0; --y:0; filter: invert(14%) sepia(86%) saturate(6754%) hue-rotate(359deg) brightness(98%) contrast(115%);}
li:nth-child(2)  { --i:2;  --x:50; --y:68; filter: invert(89%) sepia(26%) saturate(2802%) hue-rotate(114deg) brightness(103%) contrast(101%);}
li:nth-child(3)  { --i:3;  --x:23; --y:23; filter: invert(10%) sepia(90%) saturate(7456%) hue-rotate(273deg) brightness(101%) contrast(121%);}
li:nth-child(4)  { --i:4;  --x:67; --y:97; filter: invert(76%) sepia(53%) saturate(598%) hue-rotate(344deg) brightness(100%) contrast(92%);}
li:nth-child(6)  { --i:6;  --x:91; --y:24; filter: invert(93%) sepia(24%) saturate(629%) hue-rotate(357deg) brightness(93%) contrast(102%);}
li:nth-child(5)  { --i:5;  --x:12; --y:56; filter: invert(90%) sepia(20%) saturate(900%) hue-rotate(57deg) brightness(101%) contrast(97%);}
li:nth-child(7)  { --i:7;  --x:33; --y:89; filter: invert(56%) sepia(75%) saturate(6663%) hue-rotate(324deg) brightness(98%) contrast(95%);}
li:nth-child(8)  { --i:8;  --x:47; --y:35; filter: invert(38%) sepia(100%) saturate(912%) hue-rotate(345deg) brightness(101%) contrast(102%);}
li:nth-child(10) { --i:10; --x:13; --y:23; filter: invert(48%) sepia(100%) saturate(5349%) hue-rotate(285deg) brightness(95%) contrast(131%);}


[type=radio] {
    appearance: none;
}

[type=radio]::before  {
    content: "";
    width: 4rem;
    height: 4rem;
    background-image: url(./imgs/birdhouse.svg);
    background-repeat: no-repeat;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
}

input:checked+img{
    display: block;
    animation: flying 1s ease;
    animation-fill-mode: forwards;
    font-size: calc(1em * var(--i));
    width: 3rem;
    position: fixed;
    left: calc(1vw * var(--x));
    top: calc(1dvh * var(--y));

    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

}
```

<p><img width="994" alt="Scherm­afbeelding 2024-03-14 om 07 17 22" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/7ec44e67-456a-4f8a-b0df-e16418b0b04e">
</p>
<hr>
<img width="400" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/fdec8cbc-1413-4f90-a724-0059b9570d73">

### 03/03/2024

### BIG changes 


<img width="600" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/888aed37-5cd8-4fc1-bcbd-5bc8254a57d3">

<p>Sanne helped me sketch out the birds, their homes, and the areas they're supposed to fly in on paper. We made sure to consider everything, like margins, padding, and how long the animations should last. Before, I was using an offset-path, but it didn't work out as I wanted. Sunflower (The Yellowbird) ended up flying in the wrong direction, and changing the viewport messed up everything's position.</p>

### BEFORE
<img width="700" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/703c580f-07d0-422e-8a34-b88aef48b56f">

### NEW CALCULATIONS (VARIABLES) 

```CSS
ul:first-of-type {
    --houseSize: 5em;
    --birdSize:calc( var(--houseSize) - var(--housePadding) * 2);
    --houseTop: calc( var(--navPadding) + var(--houseSize) * .5 );
    --housePadding: 1em; 

    --houseLeft: calc( 
            var(--navPadding) 
            + 
            (var(--i) - .5) * var(--houseSize) 
            + 
            (var(--i) - 1) * var(--navGap) 
        ); 


    position: relative;

    /* background-color: red; */
    background-image: 
        url("./birdhouse-hover.svg"),
        url("./birdhouse.svg");
    background-repeat: no-repeat;
    background-position:center;
    background-size: 0 0, contain;

    margin: 0;
    padding: 0;
    list-style: none;
    
    width: var(--houseSize);
    aspect-ratio: 1;

    display: grid;
}
```
<p>This code snippet styles the first ul element in a document, primarily for rendering a grid of birdhouses. It sets custom CSS variables to define sizes and positions relative to the birdhouses and birds, such as --houseSize for the size of the birdhouse and --birdSize for the bird's size. Additionally, it calculates the top and left positions of each birdhouse based on the number of birdhouses and the gap between them. The background image of each birdhouse is specified with a hover effect using SVG images. Margins, padding, and list styles are reset, while the width of the birdhouse and its aspect ratio are defined. Finally, the display is set to a grid layout for optimal alignment of birdhouses.</p>

### Background

<p>I decided to jazz up the style by adding a background. That's when I thought about clouds. I thought, why not animate clouds and a sun? And when you switch on the day-night mode, instead of just a quick change, imagine everything shifting slowly, almost like a theatrical performance. It's all about timing, making sure each element transitions smoothly.</p>

<img width="500" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/92cceefd-a7d4-4e41-82cc-17bb289160e0">
<br> 
<img width="500" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/ce334e68-9839-425f-9625-e5c7375e2a2f">

### 11/03/2024

### Meet Teal! 
<p>After the success of the first bird, I decided to add a second one to make things more entertaining. Teal is a cheerful bird that enjoys flying in loops and is slightly faster than Sunflower (the Yellow Bird).</p>
<img width="200" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/81e8cfd9-fefe-42a5-9ab4-7a90a36d860d">


### Meet Paradise! 
<p>Paradise is a lightning-fast flyer! This vibrant bird thrives on zipping past slower companions. While occasionally displaying a touch of cockiness, Paradise remains ever ready to assist fellow birds in times of need.</p>

<img width="200" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/579ee023-e49d-412a-8399-1f5938b9f957">


###  ̶M̶e̶e̶t̶ ̶C̶r̶o̶w̶z̶i̶l̶l̶a̶
<p>CANCELLED</p>
<img width="200" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/2abbeb22-908b-4cab-8bed-767d25690fc3">



```CSS
body {
    background-image: url(./imgs/background.svg);
    background-size: cover;
}
```

### 12/03/2024

<img width="500" alt="Scherm­afbeelding 2024-03-19 om 11 07 52" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/8370c9ba-099c-4c7f-90a0-1b59ce087362">


<p>After that, I threw in some more scenery like clouds, the sun, and the first birdhouse. So basically, when the user clicks on the house, a bird pops up and flies to the center of the screen, adjusting for the width of their browser.</p>

<img width="500" alt="Scherm­afbeelding 2024-03-19 om 11 19 59" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/38ec0a7d-d3af-411d-bc6f-906d49f6653e">

### The Result
<p><img width="500" alt="Scherm­afbeelding 2024-03-19 om 13 24 39" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/1c53b30e-0e4f-4d9c-9abe-6dacb7c5be8c"><img width="500" alt="Scherm­afbeelding 2024-03-19 om 13 26 21" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/be29113e-f9a9-4e22-a613-21e4f6ec46ec"><img width="500" alt="Scherm­afbeelding 2024-03-19 om 13 26 32 1" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/83358b7e-f872-451c-b049-e5937b9a6b39">
</p>

## But what about a day and dark mode... 

<img  width="700" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/f356d018-95ab-4c69-89c8-8f182a743ba4">

<h3>The most obvious question is: what <b>What are style-queries?</b></h3>
<p>Style queries, also known as container queries, are a feature in CSS that let you check the size and style of a parent element. They've recently become supported across all modern browsers. With these queries, you can now not only check the size but also the style values of a parent element. This means you have more control over how styles behave in CSS, allowing for better organization between the logic and design of an application. While style queries currently only work with custom CSS property values, they're still handy for combining styles and keeping data separate from design. They're particularly useful for creating reusable components with different styles and making targeted style changes based on specific conditions or states.</p>

<p><i>You can read more about it at <a href="https://developer.chrome.com/docs/css-ui/style-queries?hl=nl">Developer Chrome's article</a>, which is also the source of this little summary</i></p>

<p>For a more visual example, visit this <a href="https://codepen.io/web-dot-dev/pen/KKxzYQx"></a></p>

### How will I do it? 

<p>First, I'll create a checkbox and place it in the same parent (NAV) as the birds, within its own respective separate div.</p>

```HTML
<div>
    <input type="checkbox" name="dayAndNight">
</div>
```

<p>I note down the selector, including its only property, which is the night variable.</p>

```CSS
html:has( [ name="dayAndNight"]:checked ) {
    --dayAndNight:night;
}
```

<p>Now to define everything with the style query</p>

```CSS
@container style(--dayAndNight:night) {
    body {
        background-color: rgb(0, 0, 66);
        transition: 1s 2s;    
    }

    /*********/
    /* STARS */
    /*********/


    /*|*****************************************|*/
    /*|  CREDITS FOR THE STARS: SANNE 'T HOOFT  |*/
    /*|*****************************************|*/

    body::after{
        opacity:1;
        scale:1;

		box-shadow:
			-41vw -25vh 0 0 #ffff,
			-30vw -48vh 0 0 #ffff,
			-22vw  44vh 0 0 #ffff,
			-19vw  37vh 0 0 #ffff,
			 53vw -13vh 0 0 #ffff,
			 48vw -36vh 0 0 #ffff,
			 34vw  12vh 0 0 #ffff,
			 27vw -25vh 0 0 #ffff,
			 15vw -41vh 0 0 #ffff,
			-46vw  44vh 0 0 #ffff,
			-36vw -20vh 0 0 #ffff,
			-25vw  23vh 0 0 #ffff,
			-17vw -39vh 0 0 #ffff,
			 44vw -32vh 0 0 #ffff,
			 38vw -18vh 0 0 #ffff,
			 23vw  11vh 0 0 #ffff,
			 19vw -37vh 0 0 #ffff,
			-42vw  40vh 0 0 #ffff,
			-30vw -26vh 0 0 #ffff,
			-21vw  19vh 0 0 #ffff,
			-11vw  25vh 0 0 #ffff,
			 40vw  38vh 0 0 #ffff,
			 32vw  44vh 0 0 #ffff,
			 29vw -27vh 0 0 #ffff,
			 13vw -33vh 0 0 #ffff,
			-48vw -46vh 0 0 #ffff,
			-34vw -12vh 0 0 #ffff,
			-27vw  45vh 0 0 #ffff,
			-15vw -11vh 0 0 #ffff,
			 46vw -34vh 0 0 #ffff,
			 36vw  23vh 0 0 #ffff,
			 25vw  49vh 0 0 #ffff,
			 17vw -12vh 0 0 #ffff,
			-44vw  28vh 0 0 #ffff,
			-28vw -21vh 0 0 #ffff,
			-23vw  37vh 0 0 #ffff,
			-19vw -30vh 0 0 #ffff,
			 42vw -16vh 0 0 #ffff,
			 30vw  49vh 0 0 #ffff,
			 21vw -25vh 0 0 #ffff,
			 10vw  18vh 0 0 #ffff;
	
		filter:
			drop-shadow(19vw 23vh 0 #fff9)
			drop-shadow(-23vw -37vh 0 #fff9)
			drop-shadow(13vw 53vh 0 #fff9)
			drop-shadow(-59vw -11vh 0 #fff9)
			drop-shadow(67vw 17vh 0 #fff9);

        transition-delay: 2s;
	}



    /* titel */
    h1 {
        font-size: 5rem;
        transform-origin: center; 
        opacity: 0;
        pointer-events: none; 
        transition: 0.5s
    }



    /* hoekwolken 1 tot 3 */
    main > img:nth-of-type(-n + 3) {
        bottom: -40rem;
        transition: 1s calc(var(--index) * 0.1s);
    }

    /* bewegende wolken 4 tot 8 */
    main > img:nth-of-type(n + 4):nth-of-type(-n + 8) {
        top: -30rem;
        transition: 1s calc(var(--index) * 0.1s);
    }

    /* zon/maan */
    main > img:nth-of-type(9) {
        --width-sun:75vmin;

        filter: contrast(10);
        filter: grayscale(1);

        width: var(--width-sun);
        top: calc( (100dvh - var(--width-sun)) / 2);
        left: calc( (100vw - var(--width-sun)) / 2);
        
        transition: 1s 3s all;
    }



    /*************/
    /* NAVIGATIE */
    /*************/

    /* day/night switch */
    input[name="dayAndNight"] {
        background-color: rgb(30, 30, 68);
        background-image: url("./imgs/moon.png");
    }



    /* ZZZ */
    @keyframes fadeIn {
        0%, 70%, 100%  {
            opacity: 0;
            scale:0;
        }
        65% {
            opacity: 1;
            scale:1;
        }
    }

    ul:nth-of-type(1):hover ~ p {
        position: absolute;

        display: block;
        margin: 0;

        font-weight: 900;
        font-family: cloudy;
        color: white;

        pointer-events: none; 
        user-select: none;

        animation: fadeIn 2s linear infinite both;
    }
    
    ul:nth-of-type(1):hover ~ p:nth-of-type(1) {
        left:45%;
        bottom:1em;
        
        animation-delay: 0s;
    }
    
    ul:nth-of-type(1):hover ~ p:nth-of-type(2) {
        left:60%;
        bottom:1.875rem;

        font-size: 1.25rem;

        animation-delay: .25s;
    }
    
    ul:nth-of-type(1):hover ~ p:nth-of-type(3) {
        left:75%;
        bottom:3rem;

        font-size: 1.5rem;

        animation-delay: .5s;
    }


/***********/
/* HUISJES */
/***********/

    main nav ul {
        filter: brightness(20%);
        transition: 1s 2.5s all;
    }

    main nav ul li label:first-of-type {
        pointer-events: none;
    }
}
```

### The result! 
<img width="800" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/367ec70b-7353-4abb-8dbe-e0d631edc931">


### 18/03/2024

<img width="400" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/833cdfc0-67d9-4006-84cd-f3921bbc76d5">

<p>Alright, this is what I had in mind for the clouds and the sun and moon: CSS nesting! It's when you can put CSS rules inside other rules, making your styles more organized. It's like putting smaller rules inside bigger ones. This is handy for complex HTML structures because you don't have to repeat the parent selector over and over again. Instead, you just nest the child selector inside the parent's curly braces. This makes your CSS code easier to read and manage. You usually do this using preprocessors like Sass or Less, which turn your nested CSS into regular CSS that browsers can use.</p> 

<p><i>Once again, a major shoutout to Sanne who helped me sorting this out. It was quite the hassle but through his help, I've been able to achieve my desired results</i></p>

```CSS

main > img {
    position: absolute;
    z-index:20;
    pointer-events: none;
    user-select: none;

    /* hoekwolken 1 tot 3 */
    &:nth-of-type(-n + 3) {
        bottom: 0;
        opacity: 0.5;
        transition: 0.5s;
    }

    &:nth-of-type(1) {
        width: 70%;
    }

    &:nth-of-type(2) {
        width: 100%;
        right: 0;
    }

    &:nth-of-type(3) {
        width: 100%;
        left: 0;
    }

    /* bewegende wolken 4 tot 8 */
    &:nth-of-type(n + 4):nth-of-type(-n + 8) {
        width: 30%;
        transition: 1s;
    }

    &:nth-of-type(4) {
        top: 10%;
        left: 50%;
    }
    
    &:nth-of-type(5) {
        top: 50%;
        left: 50%;
    }

    &:nth-of-type(6) {
        top: 30%;
        left: 15%;
    }

    &:nth-of-type(7) {
        top: 20%;
        right: 20%;
    }

    &:nth-of-type(8) {
        top: 20%;
        right: 90%;
    }

    @media (width > 48em) {

        @keyframes movingClouds { 
            from {
                translate: 0 0;
            }
            to {
                translate: -5rem 0;
            }
        }
    
        &:nth-of-type(n + 4):nth-of-type(-n + 8) {
            animation: movingClouds var(--dur) infinite alternate-reverse ease-in-out; 
        }
    
        &:nth-of-type(4) {
            width: 300px;
            --dur:25s;
        }
    
        &:nth-of-type(5) {
            width: 300px;
            --dur:30s;
        }
    
        &:nth-of-type(6) {
            width: 300px;
            --dur:70s;
        }
    
        &:nth-of-type(7) {
            width: 200px;
            --dur:50s;
        }
    
        &:nth-of-type(8) {
            width: 200px;
            --dur:30s;
        }
    
    }

    /* zon/maan 9 */
    &:nth-of-type(9){
        top: 10%;
        left: 80%;
        z-index:10;
    
        width: 10%;
    
        transition: 1s;
    }
}
```

## A NEW BIRD APPROACHES
<p>Meet Edward The Eagle. The predator that terrifies every living bird in the sky. No one dares to share the sky with him, and whenever other birds see him, they immediately faint.</p>

### Edward The Eagle
<img width="200" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/3f509255-583a-4dd4-8fc4-69db94f659a5">

### Edward's House 
<img width="100" src="https://github.com/AliAhmed205/CSS2TheRescue/assets/118130116/cbbcfd65-402c-40f1-9404-ed70a6783e4f">


<p>Each bird house in the CSS</p>

```CSS
/*********************/
/* First Bird House  */
/*********************/

section:nth-of-type(1) ul {
    --i:1;
    --radius: 20vmin;
    --flying:10s;

    background-image: 
        url("./imgs/birdhouse-hover.svg"),
        url("./imgs/birdhouse.svg");
}


/**********************/
/* Second Bird House  */
/**********************/

section:nth-of-type(2) ul {
    --i:2;
    --radius: 27vmin;
    --flying:7s;

    background-image: 
        url("./imgs/birdhouse-house_2.svg"),
        url("./imgs/birdhouse-2.svg");
}

/**********************/
/* Third Bird House  */
/**********************/

section:nth-of-type(3) ul {
    --i:3;
    --radius: 35vmin;
    --flying:5s;

    background-image: 
        url("./imgs/birdhouse-house_3.svg"),
        url("./imgs/birdhouse-3.svg");
}

h4 {
    display: none;
}


section:nth-of-type(4) ul {
    --i:4;
    --radius: 35vmin;
    --flying:5s;
    background-image: 
        url("./imgs/birdhouse-house_4.svg"),
        url("./imgs/birdhouse-4.svg");
}

ul:has( label:nth-of-type(1):hover ),
ul:has( label:nth-of-type(1):focus-within ) {
    background-size: contain;
}

li {
    z-index: 50;
    grid-area: 1/1;
    padding: var(--housePadding);
    pointer-events: none;
    display:grid;
}
```

### He controls the sky... Literally 

```CSS

/********************************************************************************************/
/* Don't panic about the selector below!                                                    */
/* When you the eagle's house is checked, the rest of the birds inside the other ul's die.  */
/* However, when the eagle gets checked, the birds can be once again added                  */ 
/********************************************************************************************/

html:has( section:nth-of-type(4) :checked  ):not( :has( label:nth-of-type(2) :checked))  section:nth-of-type(-n + 3) label:nth-of-type(1):has(:checked) + label:nth-of-type(2) {
    animation-play-state: paused, paused, running;
}

```









