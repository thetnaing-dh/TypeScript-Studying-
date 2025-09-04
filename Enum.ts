let drive = (direction: 0 | 1 | 2 | 3):void =>{
    if(direction === 0){
        console.log("Direction is up.")
    } else if(direction === 1){
        console.log("Direction is down.")
    } else if(direction === 2){
        console.log("Direction is left.")
    } else if(direction === 3){
        console.log("Direction is right.")
    }
}
drive(0);

//enumeration
enum Direction{
    Up,
    Down,
    Left,
    Right
}

let eDrive = (direction: Direction):void =>{
    if(direction === Direction.Up){
        console.log("Direction is up.")
    } else if(direction === Direction.Down){
        console.log("Direction is down.")
    } else if(direction === Direction.Left){
        console.log("Direction is left.")
    } else if(direction === Direction.Right){
        console.log("Direction is Right.")
    }
}
eDrive(Direction.Down);
