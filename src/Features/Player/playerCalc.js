let playerData = {
    strength: 2,
    health: 10,
};


export function playerCalc(props) {
    if (props - playerData.strength < 0) {
        return true;
    } else {
        return false;
    }
}


export default playerData;