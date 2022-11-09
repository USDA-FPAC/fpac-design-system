
export function useSpinboxControls( id, s=null ) {

  let step = s ? s : 1;

  const stepUp = () => {
    document.getElementById(id).stepUp();
  }

  const stepDown = () => {
    document.getElementById(id).stepDown();
  }

  return {
    stepUp,
    stepDown
  }
}