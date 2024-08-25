import React from 'react';

export interface PlaySongProps {
  path?: string; 
}

class PlaySong extends React.Component<PlaySongProps> {

  constructor(props: PlaySongProps) {
    super(props);
  }

  componentDidMount(): void {
    (document.getElementById("backgroundMusic") as HTMLAudioElement).play().catch((error) => {
      console.log("error:", error)
      document.addEventListener('click', () => {
        (document.getElementById("backgroundMusic")  as HTMLAudioElement).play()
      }, { once: true } )
    })
  }
  render(): React.ReactNode {
    return <audio id="backgroundMusic" autoPlay={true}>
    <source src={this.props.path? this.props.path: ""} type="audio/mpeg" />
    Your browser does not support the audio element. 
    </audio>
  }
}

export default PlaySong;