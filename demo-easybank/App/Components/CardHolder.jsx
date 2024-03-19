export default function CardHolder({title, description, bgColor, card}){
    const bkgrclr={backgroundColor:bgColor}
    return(
    <div style={bkgrclr}>
        <div>{title}</div>
        <div>{description}</div>
        <div>{card}</div>
    </div>
   ) 
}