const prompt = require('prompt-sync')();

console.log('you are standing in front of a scary house')
const hauntedhouse = prompt('do you want to enter the house? ')
if (hauntedhouse === 'no'){
    console.log('you are a coward');
    process.exit();
}

console.log('you enter the scary house');
console.log('you go into the foyer of the house');
console.log('you can go left into the library');
console.log('you can go right into the kitchen');
console.log('you can go up the stairs');
const foyeroptions = prompt('which way do you want to go? ');
if (foyeroptions === 'right'){
    console.log('you go into the kitchen')
    console.log('a crazy woman with a knife attacks you');
    const kitchenoptions = prompt('fight or run? ');
    if (kitchenoptions === 'run'){
        console.log('the woman stabs you in the back and you die')
        process.exit();
    }
    else if (kitchenoptions === 'fight'){
        console.log('you take the knife and stab her, and she dies')
    }
}
else if (foyeroptions === 'up'){
    console.log('you go up the stairs');
    console.log('you meet a scary ghost on the landing')
    const stairsoptions = prompt('run away, make friends with the ghost, or cast it out? ')
    if (stairsoptions === 'run away' || stairsoptions === 'make friends'){
        console.log('the ghost takes your soul!');
        process.exit();
    }
    else if (stairsoptions === 'cast it out'){
        console.log('you cast out the ghost in the name of Jesus!')
    }
}
else if (foyeroptions === 'left'){
    console.log('you go left into the library');
    console.log('you see a chest sitting on a desk there');
    let libraryoptions = prompt('open the chest, or look around? ');

    let founddoor = false;

    if (libraryoptions === 'look around'){
        console.log('you discover a locked door!');
        founddoor = true;
        const dooroptions = prompt('look for a key, or go back to the foyer? ');
        if (dooroptions === 'go back'){
            console.log('you go back to the foyer')
            console.log('you are attacked by a ghost and a crazy lady with a knife');
            console.log('you die');
            process.exit();
        }
        else if (dooroptions === 'look for a key'){
            console.log('you look for a key')
            libraryoptions = 'open the chest';
        }
    }
    if (libraryoptions === 'open the chest'){
        console.log('you discover a key inside the chest');
        console.log('a man jumps up from behind the desk with a chainsaw and attacks you');
        const chainsawoptions = prompt('fight or run away? ');
        if (chainsawoptions === 'run away'){
            console.log('the man chainsaws you in the back and you die')
            process.exit();
        }
        else if (chainsawoptions === 'fight'){
            console.log('you hit the man in the head with the chest, and he dies');
            console.log('you get the key from the chest')
        }
        if (!founddoor){
            console.log('you look around and find a locked door');
        }
        console.log('you open the locked door and discover a magic portal');
        const portaloptions = prompt('enter the portal? ');
        if (portaloptions === 'yes'){
            console.log('you enter the magic portal');
            const sequeloptions = prompt('do you want to know what happens next? ');
            if (sequeloptions === 'yes'){
                console.log('look out for the sequel!');
                process.exit();
            }
        }
    }
}
console.log('you leave the house alive');
console.log('congratulations! you survived the haunted house!')