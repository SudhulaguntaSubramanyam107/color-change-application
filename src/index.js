import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from "./App"
 

let ele=document.getElementById("root")
let root=ReactDOM.createRoot(ele)
root.render(
<App>
    <button>Like</button> 
    <button>Share</button> 
    <button>Subscribe</button>
</App> 

)