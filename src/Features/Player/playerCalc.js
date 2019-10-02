let playerData = {
    strength: 2,
    health: 10,
};


export function playerCalc(props) {
    let playerHealth = 5;
    let playerStrength = 2;
    let reduction = props - playerData.strength;
    if(props - playerData.strength < 0) {
        return true;
    } else {
        return false;
    }
}


export default playerData;