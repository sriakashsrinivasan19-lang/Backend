import card1 from '../assets/cards/card1.png'
import card2 from '../assets/cards/card2.png'
import card3 from '../assets/cards/card3.jpg'
import card4 from '../assets/cards/card4.png'

const Cards = () => {
  return (
    <>
    <div className='text-center font-serif font-extrabold text-3xl mb-10'>
       <p>PRO CARDS TO EXPLORE</p>
    </div>
    <div className='flex justify-between mb-10 mx-5  '>
        <img src={card1} alt="" className='border rounded shadow-2xl'/>
        <img src={card2} alt="" className='border rounded shadow-2xl' />
        <img src={card3} alt="" className='border rounded shadow-2xl' />
        <img src={card4} alt="" className='border rounded shadow-2xl ' />
        
    
    </div>
    
    </>
  )
}

export default Cards