let playerData = {
    strength: 2,
    health: 10,
};

//this funciton is used in my Mode/Fight.js for the battle scenarios as a calcultor for damage//--// NOT FINISHED


export function playerCalc(props) {
    if (props - playerData.strength < 0) {
        return true;
    } else {
        return false;
    }
}


export default playerData;