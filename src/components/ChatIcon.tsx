'use client';

import { useEffect } from "react";

const ChatIcon = () => {
    useEffect(() => {
        // Ensure the script Logic is added on the client side

        (function(
            w:Window & {chatbotConfig?: [string, string, {apiHost:string}]},
            d,
            s,
            ...args
        ){
            // Create and append the chatbot container div
            const div = d.createElement('div');
            div.id = 'aichatbot';
            d.body.appendChild(div);
            // Assign chatbotConfig to window
            w.chatbotConfig = args as [string, string, {apiHost:string}];
            // Locate the first script tag and insert the chatbot script
            const f = d.getElementsByTagName(s)[0];
            const j = d.createElement(s) as HTMLScriptElement
            j.defer = true;
            j.type = 'module';
            j.src = 'https://aichatbot.sendbird.com/index.js';
            // j.src = "https://aichatbot.sendbird.com/playground/index.html?app_id=C38292E3-7934-4A35-9D05-67C133CAA543&bot_id=xY3ZOOb57ghVQGc1Nw1Rp&region=ap-5";
            f.parentNode?.insertBefore(j,f);
        })(
          window,
          document,
          'script',
        //   process.env.APPLICATION_ID,
        "2B80EEE5-F37E-4445-B9AB-CDD807DC5D25",
        "EWKJNkmmtGuW9CdQvpPjk",
        //   process.env.SENDBIRD_API_TOKEN,
          {
            // apiHost:process.env.API_REQUEST_URL
            apiHost:"https://api-2B80EEE5-F37E-4445-B9AB-CDD807DC5D25.sendbird.com",
          }  
        );
        return ()=> {
            const div = document.getElementById('aichatbot');
            if(div){
                document.body.removeChild(div);
            }
        }
    }, []);

    return <div/>
}

export default ChatIcon;