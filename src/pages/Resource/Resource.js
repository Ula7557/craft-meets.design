import styles from "./resource.module.scss";
import Error from '../../components/error/Error'
import './video.scss'
import parse from "html-react-parser";
import ResourceBanner from "../../assets/images/resource_banner.png";
import { useState } from "react";
import GetData from "../../hooks/getData";
import Loading from "../../components/loading/Loading";
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
import 'video-react/dist/video-react.css'
const Resource = () => {
  const [active, setActive] = useState(false);
  const [loading, data, error] = GetData("/v1/resources");
  if (error) return <Error/>;
  if (loading) return <Loading />;
  const videos = data.filter((el) => el.category.slug === "videos");
  const photo = data.filter((el) => el.category.slug === "photos");
  return (
    
      <div className={styles.resource_page_wrapper}>
        <div
          className={styles.page_banner}
          style={{
            backgroundImage: `url(${ResourceBanner})`,
          }}
        >
          <h1>Resources</h1>
        </div>
        <div className="container">
          <div className={styles.inner}>
            <div className={`${styles.tab_change}`}>
              <button
                onClick={() => setActive(true)}
                className={active ? styles.active : ""}
              >
                Photos
              </button>
              <button
                onClick={() => setActive(false)}
                className={active ? "" : styles.active}
              >
                Videos
              </button>
            </div>
            {active ? (
              <div className={styles.photo_resource}>
                {photo.map((el, index) => (
                  <div className={styles.photo_card} key={index}>
                    <img
                      src={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                      alt=""
                    />
                    <h3>{el.title}</h3>
                    <div>{parse(`${el.body}`)}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.video_resource}>
                {videos.map((el, index) => (
                  <div className={styles.video_card} key={index}>
                    <div className={styles.left_side}>
                    {

                          el.articleAttachments[0] !== undefined ?(
                            <Player poster="/assets/poster.png">
                            <source src={`${el.articleAttachments[0].base_url}/${el.articleAttachments[0].path}`}/>
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
                          ):(
                            <div className={styles.coming_soon}>
                              <h3>Release is coming soon</h3>
                            </div>
                          )
                        }
                      
                    </div>
                    <div className={styles.right_side}>
                      <h2>{el.title}</h2>
                      <div>{parse(`${el.body}`)}</div>
                      {
                        el.articleAttachments[0] !== undefined ? (
                          <a rel="noopener noreferrer" target="_blank" className={styles.button} href={`${el.articleAttachments[0].base_url}${el.articleAttachments[0].path}`}>Download</a>
                        ):(
                          <button  className={styles.button}>No video</button>
                        )
                      }
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  );
};
export default Resource;