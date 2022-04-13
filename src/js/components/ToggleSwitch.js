import React, {useState, useEffect} from 'react';
import IconSun from '../images/IconSun';
import IconMoon from '../images/IconMoon';

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
    document.querySelector(':root').classList.toggle('dark');
  };
  useEffect(() => {}, []);
  return (
    <div className="toggle-switch-container">
      <IconSun />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <IconMoon />
    </div>
  );
}
export default ToggleSwitch;
