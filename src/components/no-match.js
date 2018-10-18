// React
import React from 'react';
// Components
// Styles

export default function NoMatch(props) {
  const errorMessageArray = [
    'You sought knowledge but found naught but a faded memory.',
    'There is nothing to be found here.',
    'A lonely road...',
    'I was looking at a riverbed and the story it told of a river that flowed made me sad to think it was dead.',
    'Tank grinder, are you?',
    '…blood-black nothingness began to spin / A system of cells interlinked within / Cells interlinked within cells interlinked / Within one stem. And dreadfully distinct / Against the dark, a tall white fountain played.',
    `My name is Ozymandias, King of Kings;
    Look on my Works, ye Mighty, and despair!
    Nothing beside remains. Round the decay
    Of that colossal Wreck, boundless and bare
    The lone and level sands stretch far away.`,
    `But in the case / Of my white fountain what it did replace / Perceptually was something that, I felt, / Could be grasped only by whoever dwelt / In the strange world where I was a mere stray.`
  ];

  const randMessage = Math.floor(Math.random() * errorMessageArray.length);

  return (
    <div className="not-found-container">
      <h1>Error</h1>
      <p className="not-found-error">404 not found</p>
      <p className="not-found-error">
        <em>{errorMessageArray[randMessage]}</em>
      </p>
    </div>
  );
}
