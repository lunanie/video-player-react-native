import React, {useState, useRef} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import moment from 'moment';

import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import FullScreen from '../components/fullscreen';

const Player = _ => {
  const [loading, changeLoading] = useState(true);
  const [paused, togglePaused] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const player = useRef(null);

  const onBuffer = ({isBuffering}) => {
    changeLoading(isBuffering);
  };

  const onLoad = payload => {
    changeLoading(false);
    setVideoDuration(payload.duration);
  };

  const playPause = () => {
    togglePaused(!paused);
  };

  const onFullScreen = () => {
    console.log('PLAYER', player.current);
    player.current.presentFullscreenPlayer();
  };

  const onProgress = payload => {
    setCurrentTime(payload.currentTime);
  };

  const onChangeFinished = payload => {
    player.current.seek(payload);
    togglePaused(false);
    changeLoading(false);
  };

  const onChangeStarted = payload => {
    togglePaused(true);
    changeLoading(true);
  };

  const time = moment(currentTime * 1000).format('mm:ss');
  const totalTime = moment(videoDuration * 1000).format('mm:ss');

  return (
    <Layout
      loading={loading}
      video={
        <Video
          ref={player}
          style={styles.video}
          source={{
            uri: 'http://techslides.com/demos/sample-videos/small.mp4',
          }}
          resizeMode="contain"
          onBuffer={onBuffer}
          onProgress={onProgress}
          onLoad={onLoad}
          paused={paused}
        />
      }
      loader={<ActivityIndicator color="white" />}
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} paused={paused} />
          <ProgressBar
            onChangeFinished={onChangeFinished}
            onChangeStarted={onChangeStarted}
            progress={currentTime}
            videoDuration={videoDuration}
          />
          <Text style={styles.progressTime}>
            {time} / {totalTime} 
          </Text>
          <FullScreen onFullScreen={onFullScreen} />
        </ControlLayout>
      }
    />
  );
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  progressTime: {
    color: 'white',
    marginLeft: 5,
  },
});

export default Player;
