import Background from "../Components/LandingComponents/Background"


function LandingView(props) {
  return(
    <Background getStarted={props.getStarted}></Background>
  )
}

export default LandingView