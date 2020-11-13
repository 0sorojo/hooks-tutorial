import React from 'react';
import ConditionalRendering from './Views/ConditionalRendering';
import PropDrilling from './Views/PropDrilling';
import ReactForms from './Views/ReactForms';
import UseContextPrac from './Views/UseContextPrac';
import UseEffectPrac from './Views/UseEffectPrac';
import UseReducerPrac from './Views/UseReducerPrac';
import UseRefPrac from './Views/UseRefPrac';
import USbasics from './Views/UseStateBasics';
import CustomHookExample from './Views/CustomHookExample';

const App = () => {
  return (
    <div className='container'>
      <UseContextPrac />
      <CustomHookExample />
    </div>
  );
};

export default App;
