const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

// my code
// the following statement prevents the character running behind the rest of the items in our page
character.style.zIndex = 1;

function handleDirectionChange(direction) {
    /* After making sure everything works per specifications, I refactored the code to use a ternary conditional operator. 
    This way we accomplish the same functionality with only one line of code */
    character.src = 'assets/green-character/' + (direction === null ? 'static' : `${direction}`) + '.gif';
    // console.log(character.src);
    // if (direction === null) {
    //     character.src = 'assets/green-character/static.gif';
    // }
    // /* instead of writing a bunch of if's to move the character in certain direction, we just 
    // insert the variable 'direction' into the string that we pass to the src property which is the same as the .gif file
    // */
    // else {
    //     character.src = `assets/green-character/${direction}.gif`;
    // }    
}

let direction = null;
let x = 100;
let y = 250;

move(character).withArrowKeys(100,250, handleDirectionChange);

move(newImage('assets/tree.png')).to(200, 450)
// move(newImage('assets/tree.png')).withArrowKeys(200,450);
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
