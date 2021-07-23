import React, { useEffect, useState } from "react";
import './index.css';

import Picker from 'emoji-picker-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';




export default () => {

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [copied, setCopied] = useState(false);
  const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  const onEmojiClick = (event, emojiObject) => {
     setChosenEmoji(emojiObject);
   };

  //  <CopyToClipboard
  //     text={chosenEmoji.emoji}
  //     onCopy={() => setCopied(true)}>
  // </CopyToClipboard>

return(
    <>
        <div>
         {chosenEmoji ? (

             <div>
               <span>You chose: {chosenEmoji.emoji}</span>

              <span> {copied ? 'Copied text!' : ''} </span>
            </div>

         ) : (
           <span>No emoji Chosen</span>
         )}
         <Picker onEmojiClick={onEmojiClick} />

         <CopyToClipboard
              text={ chosenEmoji ? (chosenEmoji.emoji) : ('')}
              onCopy={() => setCopied(true)}>
                <button> Click to copy to Keypboard </button>
              </CopyToClipboard>



      </div>
    </>
  );
};
