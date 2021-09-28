import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ClipboardCopy({copyText}) {

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }

      const handleCopyClick = () => {
        copyTextToClipboard(copyText)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return (
        <div className="flex flex-row space-x-5 items-center w-full justify-center pl-5">
            <input type="text" name="link" id="link"
                value={copyText} readOnly
                className="mt-1 px-4 py-3 block w-2/4 rounded-md border-gray-400 shadow-sm"/>
            <button className="flex flex-row text-white bg-greySec rounded-md p-3 text-base" onClick={handleCopyClick}>
                <ContentCopyIcon className="h-6 w-6 mr-3"/> Copy </button>
                <span className="text-green-600">{ isCopied ? 'Copied!' : ' '}</span>
        </div>
    )
}

export default ClipboardCopy
