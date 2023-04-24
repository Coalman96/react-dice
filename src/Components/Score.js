import Dice from "./Dice"

//점수 표시(총점, 기록, 현재점수)
const Score = ({user, color, history}) => {
    const num = history[history.length -1] || 1;
    const sum = history.reduce((acc, cur)=>{
        return acc + cur},0)
    return(
        <div style={{
            width:'500px',
            height:'100%',
            backgroundColor:'rgba(255,255,255,0.4)',
            borderRadius:'30px',
        }}>
            <h2>{user}</h2>
            <Dice color={color} num={num}/>
            <h3>총점</h3>
            <p>{sum}</p>
            <h4>기록</h4>
            <p style={{
                width:'80%',
                margin:'0 auto',
            }}>{history.join('-')}</p>
        </div>
    )
}

export default Score