import React from 'react';

export interface PlaySongProps {
  path?: string; 
}

class PlaySong extends React.Component<PlaySongProps> {

  constructor(props: PlaySongProps) {
    super(props);
  }

  playAudio(): void {
    const audioElement = document.getElementById("backgroundMusic") as HTMLAudioElement;
    audioElement.play().catch((error) => {
      console.log("error:", error);
      document.addEventListener('click', () => {
        audioElement.play().catch((error) => {
          console.log("error:", error);
        });
      }, { once: true });
    });
  }

  componentDidMount(): void {
    this.playAudio();
  }


  componentDidUpdate(prevProps: Readonly<PlaySongProps>): void {
    if (prevProps.path !== this.props.path) {
      this.updateAudioSource();
    }
  }

  updateAudioSource(): void {
    const audioElement = document.getElementById("backgroundMusic") as HTMLAudioElement;
    const sourceElement = document.getElementById("backgroundMusicSource") as HTMLSourceElement;

    if (sourceElement && audioElement) {
      sourceElement.src = this.props.path || "";
      audioElement.load(); // 변경된 소스를 로드
      this.playAudio(); // 오디오 재생
    }
  }

  render(): React.ReactNode {
    return <audio id="backgroundMusic" autoPlay={true}>
    <source id="backgroundMusicSource" src={this.props.path || ""} type="audio/mpeg" />
    Your browser does not support the audio element. 
    </audio>
  }
}

export default PlaySong;