

export function useRangeControls() {

  let step = '';
  let range = {};

  const setSpinboxLow = (_obj, _low, _high, _step) => {
    range.low = parseInt( _low.value );

    let highValue = parseInt(_high.value);
    let step = parseInt(_step);

    if((_obj.val + step) >= highValue) {
      _high.value = (_obj.val + step)
      // reset high value
      range.high = parseInt( _high.value );
    } else {
      range.high = highValue;
    }
    return getRangeValues();
  }

  const setSpinboxHigh = (_obj, _low, _high, _step) => {
    range.high = parseInt( _high.value );

    let lowValue = parseInt( _low.value );
    let step = parseInt(_step);
    if((_obj.val - step) <= lowValue) {
      _low.value = (_obj.val - step);
      // reset low value
      range.low = parseInt( _low.value );
    } else {
      range.low = lowValue;
    }
    return getRangeValues();
  }

  const getRangeValues = () => {
    return range;
  }

  return {
    setSpinboxLow,
    setSpinboxHigh,
    getRangeValues
  }
}