function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // added my code here: Aldo
    // I used a switch to evaluate the value of 'direction' and take action.
    // This approach makes no difference in the performance and speed for this particular project 
    //      but ilustrates the importance of saving memory resources and improve spped and performance in bigger projects.
    //      I also make sure it does not matter if we pass any cardinal point in lowercase, UPPERCASE, camelCase, etc. 
    //      By converting everyting to lowercase we don't have to deal with that problem.
    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';

        function moveCharacter() {
            direction = String(direction).toLowerCase();
            switch (direction) {
                case 'west':
                    x--;
                    break;
                case 'north':
                    y++;
                    break;
                case 'east':
                    x++;
                    break;
                case 'south':
                    y--;
                    break;
                default:
                    break;
            }
            if (x < 0) x++;
            if (x > window.innerWidth) x--;
            if (y < 0) y++;
            if (y > window.innerHeight) y--;
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }

        setInterval(moveCharacter, 1);
        document.addEventListener('keydown', function(e) {
            if (e.repeat) return;
            switch(e.key.toLowerCase()) {
                case 'arrowleft':
                    direction = 'west';
                    break;
                case 'arrowup':
                    direction = 'north';
                    break;
                case 'arrowright':
                    direction = 'east';
                    break;
                case 'arrowdown':
                    direction = 'south';
                    break;
                default:
                    break;
            }
            callback(direction);
        })

        document.addEventListener('keyup', function(e) {
            direction = null;
            callback(direction);
        })
    }
    // end added my code

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    };
}