"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},i="Frequently Asked Questions",l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Application Load Error 5:0000065434",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Final Steps",permalink:"/docs/finish"}},s={},p=[{value:"Application Load Error 5:0000065434",id:"application-load-error-50000065434",level:3},{value:"&quot;Bouncing&quot; NPCs",id:"bouncing-npcs",level:3},{value:"Can I use Vortex?",id:"can-i-use-vortex",level:3},{value:"Game runs too fast",id:"game-runs-too-fast",level:3},{value:"<code>IsDLLLoaded NVTF</code> reports <code>&gt;&gt; 0</code>",id:"isdllloaded-nvtf-reports--0",level:3},{value:"Merge, Rename, Replace?",id:"merge-rename-replace",level:3},{value:"MO2 reports overwritten loose files",id:"mo2-reports-overwritten-loose-files",level:3},{value:"MO2 reports files in Overwrite",id:"mo2-reports-files-in-overwrite",level:3},{value:"Mods taking up too much space",id:"mods-taking-up-too-much-space",level:3},{value:"No DLC pop-ups on new game",id:"no-dlc-pop-ups-on-new-game",level:3},{value:"Ultrawide resolution",id:"ultrawide-resolution",level:3},{value:"What do these installation instructions mean?",id:"what-do-these-installation-instructions-mean",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"application-load-error-50000065434"},"Application Load Error 5:0000065434"),(0,a.kt)("p",null,"Run your game directly through Steam once. You may also need to restart Steam and/or Mod Organizer 2.\nIf that still doesn't work, place a copy of your Steam.exe (a copy, not a shortcut) into the game's\n",(0,a.kt)("a",{parentName:"p",href:"setup#important-locations"},"Root")," folder."),(0,a.kt)("h3",{id:"bouncing-npcs"},'"Bouncing" NPCs'),(0,a.kt)("p",null,"To fix this issue, open ",(0,a.kt)("strong",{parentName:"p"},"Tools > INI Editor")," in MO2 and make sure you are in the ",(0,a.kt)("strong",{parentName:"p"},"FalloutCustom.ini"),"\ntab and NOT the ",(0,a.kt)("strong",{parentName:"p"},"Custom.ini")," tab. Paste in the following, then save and exit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},'[FootIK]\n; Fix "bouncing" NPCs\nfOnOffGain=0.01\nbFootPlacementOn=0\nfPelvisUpDownBias=0\nfPelvisOffsetDamping=0\nfOriginalGroundHeightMS=0\n')),(0,a.kt)("h3",{id:"can-i-use-vortex"},"Can I use Vortex?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Not really."),(0,a.kt)("p",null,"The guide is oriented completely towards MO2 and takes advantage of a number of its exclusive features. We are neither willing nor able to provide support for Vortex, as nobody in the modding community uses it. You should use whatever mod manager you like, but asking for Vortex support on the Discord is not permitted at this time. If using MO2 is a dealbreaker for you, we recommend ",(0,a.kt)("a",{href:"https://youtu.be/Zts-tF0nYIk",target:"_blank"},"Gopher's video tutorial")," instead of this guide.")),(0,a.kt)("h3",{id:"game-runs-too-fast"},"Game runs too fast"),(0,a.kt)("p",null,"If your game is moving too fast, double-click New Vegas Tick Fix (NVTF) and use\nthe ",(0,a.kt)("strong",{parentName:"p"},"INI Editor")," tab to make sure ",(0,a.kt)("strong",{parentName:"p"},"iMaxFPSTolerance")," is set to ",(0,a.kt)("strong",{parentName:"p"},"500")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NVTF.ini"),".\nIf that still doesn't fix it, verify that NVTF is actually working by using the console\ncommand ",(0,a.kt)("inlineCode",{parentName:"p"},"IsDLLLoaded NVTF"),"."),(0,a.kt)("h3",{id:"isdllloaded-nvtf-reports--0"},(0,a.kt)("inlineCode",{parentName:"h3"},"IsDLLLoaded NVTF")," reports ",(0,a.kt)("inlineCode",{parentName:"h3"},">> 0")),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",{parentName:"p",href:"intro#requirements"},"DirectX Runtime Libraries"),"."),(0,a.kt)("h3",{id:"merge-rename-replace"},"Merge, Rename, Replace?"),(0,a.kt)("p",null,"When installing multiple mods from the same page through MO2, you should ",(0,a.kt)("strong",{parentName:"p"},"Rename")," to the ",(0,a.kt)("strong",{parentName:"p"},"file name"),"\nof the file you downloaded, as described in ",(0,a.kt)("a",{parentName:"p",href:"mo2#how-to-install-mods"},"How to Install Mods"),"."),(0,a.kt)("h3",{id:"mo2-reports-overwritten-loose-files"},"MO2 reports overwritten loose files"),(0,a.kt)("p",null,"MO2 reporting overwritten loose files is fine. As long as your mods in the ",(0,a.kt)("strong",{parentName:"p"},"left")," pane of MO2 are in the\nexact order as they appear in the guide, these overwrites are intentional and safe."),(0,a.kt)("h3",{id:"mo2-reports-files-in-overwrite"},"MO2 reports files in Overwrite"),(0,a.kt)("p",null,"MO2 reporting files in overwrite is not a cause for concern. These are usually files generated by mods\n(like configuration INI files) or by programs ran through MO2. These files will still be loaded fine in-game,\nand will be prioritized as if they are the last mod in the left pane of MO2. Usually, you can just leave these\nfiles in the overwrite and ignore the warning. If you like, you can drag the files out of the Overwrite window\ninto their respective mod folders in MO2's left pane."),(0,a.kt)("h3",{id:"mods-taking-up-too-much-space"},"Mods taking up too much space"),(0,a.kt)("p",null,"If you've installed MO2 on a drive with limited space, you can change the ",(0,a.kt)("strong",{parentName:"p"},"Downloads")," file\npath to a different drive with more space. This will not affect download/game performance,\nand the downloads can be deleted after the mods have been installed."),(0,a.kt)("h3",{id:"no-dlc-pop-ups-on-new-game"},"No DLC pop-ups on new game"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"gameplay#delay-dlc-redux-ttw"},"Delay DLC Redux")," prevents the DLC pop-ups from showing until you reach the starting location for the DLC."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"overhauls#sawyerbatty"},"SawyerBatty")," distributes the crap pack items throughout the DC wasteland (or NV depending on where you chose to start)."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"SPOILERS: SawyerBatty DLC pack locations for Capital Wasteland"),(0,a.kt)("p",null,"Caravan Pack - Basement of Red's house in Big Town",(0,a.kt)("br",null),"Classic Pack - Trunk of a car South of Megaton",(0,a.kt)("br",null),"Mercenary Pack - Talon Outpost South West of Megaton near Grayditch",(0,a.kt)("br",null),"Tribal Pack - Back porch of house near Springvale School")),(0,a.kt)("h3",{id:"ultrawide-resolution"},"Ultrawide resolution"),(0,a.kt)("p",null,"In MO2, open ",(0,a.kt)("strong",{parentName:"p"},"Tools > INI Editor")," and make sure you are in the ",(0,a.kt)("strong",{parentName:"p"},"FalloutCustom.ini")," tab and NOT the ",(0,a.kt)("strong",{parentName:"p"},"Custom.ini")," tab.\nPaste in the following, then save and exit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[Display]\n; Ultrawide support\niSize W=3440\niSize H=1440\n")),(0,a.kt)("h3",{id:"what-do-these-installation-instructions-mean"},"What do these installation instructions mean?"),(0,a.kt)("p",null,"Review the ",(0,a.kt)("a",{parentName:"p",href:"mo2#how-to-install-mods"},"How to Install Mods")," section for how the guide presents\ninstructions on both ",(0,a.kt)("em",{parentName:"p"},"Mod Manager Download")," and ",(0,a.kt)("em",{parentName:"p"},"Manual Download")," formats."))}c.isMDXComponent=!0}}]);