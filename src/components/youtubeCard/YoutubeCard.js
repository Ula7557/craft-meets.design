import './youtubecard.scss'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
  } from "video-react";

const Youtube = ({desc, title, url}) => {
    return (
        <div className="youtube-card">
            <div className="left-side" >
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
            </div>
            <div className="right-side" >
              <h3>Video content coming soon ...</h3>
                    <Player poster="/assets/poster.png">
                        <source src={url}/>
                        <ControlBar>
                          <ReplayControl seconds={10} order={1.1} />
                          <ForwardControl seconds={30} order={1.2} />
                          <CurrentTimeDisplay order={4.1} />
                          <TimeDivider order={4.2} />
                          <PlaybackRateMenuButton
                            rates={[5, 2, 1, 0.5, 0.1]}
                            order={7.1}
                          />
                          <VolumeMenuButton disabled />
                        </ControlBar>
                      </Player>
            </div>
        </div>
    )
}

export default Youtube