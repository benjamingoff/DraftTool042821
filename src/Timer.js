import * as React from 'react';
import { render } from 'react-dom';



function Timer() {
  const [counter, setCount] = React.useState(27);


  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCount(prevCount => prevCount - 1), 1000);
  }, [counter]);

  return (
    <div className="Timer">
      Pick: {counter}
    </div>
  );
}

//const rootElement = document.getElementById('root');
//render(<Timer />, rootElement);

export default Timer;