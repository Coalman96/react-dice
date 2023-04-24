import diceBlue01 from '../images/dice-blue-1.svg';
import diceBlue02 from '../images/dice-blue-2.svg';
import diceBlue03 from '../images/dice-blue-3.svg';
import diceBlue04 from '../images/dice-blue-4.svg';
import diceBlue05 from '../images/dice-blue-5.svg';
import diceBlue06 from '../images/dice-blue-6.svg';
import diceRed01 from '../images/dice-red-1.svg';
import diceRed02 from '../images/dice-red-2.svg';
import diceRed03 from '../images/dice-red-3.svg';
import diceRed04 from '../images/dice-red-4.svg';
import diceRed05 from '../images/dice-red-5.svg';
import diceRed06 from '../images/dice-red-6.svg';

//색상은 배열 활용
const diceImages = {
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
}

// 빨간색, 파란색 주사위 생성
const Dice = ({color, num}) => {
    const src = diceImages[color][num-1]
    const alt = `${color}${num}`
    return(
        <figure>
            <img src = {src} alt={alt}></img>
        </figure>
    )
}

export default Dice