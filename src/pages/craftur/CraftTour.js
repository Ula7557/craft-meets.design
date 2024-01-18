import './craft.scss'
import Import1 from './image1.jpg'
import Banner from './6.jpg'
import Import3 from './image3.png'


const CraftTour = ()=>{
    return (
        <div className='tour-wrapper'>
            <div className="container">
                <h1>Craft Tour</h1>
                <img className='image1' src={Banner} alt="" />
                <h6>
                Uzbekistan has been a melting pot of cultures, customs and languages for centuries. It is home to four significant UNESCO world heritage sites and six UNESCO Intangible cultural heritage listings. From such a rich list of important places to visit, things to do and an enormous variety of sightseeing on offer, we present you with our amazing tour where you will fully discover Uzbekistan. Uzbekistan: culture, heritage and language program is one of the best ways to see the gorgeous ancient cities of Uzbekistan, and become closer to the mysterious and exciting East and its marvelous culture. This program provides a unique opportunity to learn the Uzbek language and culture. Our well-experienced teachers and internationally-recognized craft masters guide those activities and training.
                </h6>
                <div className='tour-next'>
                    <img className='image2' src={Import1} alt="" />
                    <p>
                    In 11 days, you will be able to not only see such places as Khast Imam mosque the oldest Quran in the world is there, the magnificent Jome mosque, The Registan Square located in the very heart of the ancient city of Samarkand, medieval astronomer Mirzo Ulugbek’s Observatory. Uzbekistan has been a melting pot of cultures, customs and languages for centuries. It is home to four significant UNESCO World Heritage sites and six UNESCO Intangible Cultural Heritage listings. From such a rich list of important places to visit, things to do and an enormous variety of sightseeing on offer, we present you with our amazing tour where you will fully discover Uzbekistan.
                    </p>
                </div>
                <h6>
                But also dive into the history of these places, try delicious national cuisine, learn the Uzbek language and participate in special quests and activities organized by our tour operators. For those who are interested in art or just want to try themselves in the process of making artworks, there will be masterclasses with the best craft makers and artists of Uzbekistan.
                </h6>
                <div className='tour-next'>
                    <p>
                    At the end, we will have a closing ceremony with certificate awarding and a musical concert in Abul Qasim Madrassa. Uzbekistan has been a melting pot of cultures, customs and languages for centuries. It is home to four significant UNESCO World Heritage sites and six UNESCO Intangible Cultural Heritage listings. From such a rich list of important places to visit, things to do and an enormous variety of sightseeing on offer, we present you with our amazing tour where you will fully discover Uzbekistan.ww
                    </p>
                    <img className='image2' src={Import3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CraftTour