import * as React from 'react';

function ControlPanel(props) {
  const {year} = props;
  console.log(year);

  return (
    <div className="control-panel">
      <h3>Interactive GeoJSON</h3>
    
      
     
      <hr />
      <label>Leto:<b>{year}</b></label>
      <div key={'year'} className="input">
        <input
          type="range"
          value={year}
          min={1995}
          max={2005}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);