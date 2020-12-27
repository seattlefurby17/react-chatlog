import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          This is the dialouge between Vladimir and Estragon
        </h1>
      </header>
      <main className="App-main">
        <ChatLog chatData={chatMessages} />
      </main>
    </div>
  );
};

export default App;
