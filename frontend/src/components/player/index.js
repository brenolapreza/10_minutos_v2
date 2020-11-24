import Video from './style'
export default function Player() {
    return (
       <Video 
       width="100%" loop="true" autoPlay muted controls
       align="center" valign="middle"
       >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></source>
       </Video>
    )
}