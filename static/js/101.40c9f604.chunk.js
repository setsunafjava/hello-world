(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[101],{2238:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(883),o=t(122),r=t(13),m=t(28);a.default=function(){return n.a.createElement(r.t,{header:n.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("div",{className:"flex items-center mb-16"},n.a.createElement(l.a,{className:"text-18",color:"action"},"home"),n.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),n.a.createElement(o.a,{color:"textSecondary"},"Documentation"),n.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),n.a.createElement(o.a,{color:"textSecondary"},"Authentication")),n.a.createElement(o.a,{variant:"h6"},"Auth0 Authentication"))),content:n.a.createElement("div",{className:"p-24 max-w-2xl"},n.a.createElement(o.a,{className:"mb-16",component:"p"},"With Auth0 Authentication in Fuse React."),n.a.createElement("ul",null,n.a.createElement("li",{className:"mb-12"},"You can ",n.a.createElement(m.a,{to:"/register"},"register"),"."),n.a.createElement("li",{className:"mb-12"},"You can ",n.a.createElement(m.a,{to:"/login"},"login"),"."),n.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) as user_metadata to Auth0 Database.")),n.a.createElement(o.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",n.a.createElement("code",null,"/src/auth0Service")),n.a.createElement(o.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in ",n.a.createElement("code",null,"src/app/App.js"),"."),n.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),n.a.createElement(o.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Auth0 Project into ",n.a.createElement("code",null,"src/app/services/auth0Service/auth0ServiceConfig.js")),n.a.createElement(r.l,{component:"pre",className:"language-jsx my-16"},'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '))})}}}]);