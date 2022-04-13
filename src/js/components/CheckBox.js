import {useState} from 'react';

const Checkbox = ({handleContract}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="checkbox">
      Full Time
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleContract}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};
export default Checkbox;
