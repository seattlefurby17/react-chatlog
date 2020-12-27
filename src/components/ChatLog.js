import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.chatData.map((chatEntry, index) => {
        return (
            <ChatEntry
            sender={chatEntry.sender}
            body={chatEntry.body}
            timeStamp={chatEntry.timeStamp}
            key={index}
            />
        );
    });
    return (
        <div className='ChatLog'>
            {chatComponents}
        </div>
    );
};

export default ChatLog;