import Content from './js/Layout/Conent';
import ToggleSwitch from './js/components/ToggleSwitch';
import Logo from './js/images/Logo';

function App() {
  return (
    <>
      <div className="header">
        <div className="header-logo-container">
          <Logo />
          <ToggleSwitch />
        </div>
      </div>
      <Content></Content>
    </>
  );
}

export default App;
