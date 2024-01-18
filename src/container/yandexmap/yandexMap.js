import { YMaps, Map , Placemark, FullscreenControl, GeolocationControl, ZoomControl} from 'react-yandex-maps'
import './yandexmap.scss'


const YandexMap = ()=>{
    return (
        <YMaps>
            <div className='yandex_map_wrapper'>
                <Map defaultState={{ center: [41.311151, 69.279737], zoom: 9 }} width="100%" height="100%">
                    <Placemark geometry={[41.311151, 69.279737]}/>
                    <FullscreenControl options={{float: 'left'}}/>
                    <GeolocationControl options={{float: 'right'}}/>
                    <ZoomControl options={{float: 'left'}}/>
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMap