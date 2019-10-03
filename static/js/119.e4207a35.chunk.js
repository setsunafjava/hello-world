(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[119],{2250:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(883),l=t(122),c=t(13);a.default=function(){return o.a.createElement(c.t,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(r.a,{className:"text-18",color:"action"},"home"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Documentation"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Working with Fuse React")),o.a.createElement(l.a,{variant:"h6"},"Code Splitting (Lazy loading)"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(l.a,{className:"mb-16",component:"p"},"Code-splitting your app can help you \u201clazy-load\u201d just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven\u2019t reduced the overall amount of code in your app, you\u2019ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load."),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h5"},"Route-based code splitting"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"We are using ",o.a.createElement("b",null,"React.lazy")," function to dynamically import component.",o.a.createElement("br",null),o.a.createElement("b",null,"FuseSuspense")," component is created for to avoid repetition of ",o.a.createElement("b",null,"React.Suspense")," component defaults, which is used in the theme layouts.",o.a.createElement("br",null),"Checkout the examples below to see dynamically or regular way of importing the components."),o.a.createElement("div",{className:"flex flex-wrap"},o.a.createElement("div",{className:"w-full lg:w-1/2 lg:pr-8"},o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Lazy Loaded Component:"),o.a.createElement(c.l,{component:"pre",className:"language-jsx my-16"},"\n                            import React from 'react';\n\n                            export const AnalyticsDashboardAppConfig = {\n                                settings: {\n                                    layout: {\n                                        config: {}\n                                    }\n                                },\n                                routes  : [\n                                    {\n                                        path     : '/apps/dashboards/analytics',\n                                        component: React.lazy(() => import('./AnalyticsDashboardApp'))\n                                    }\n                                ]\n                            };\n                            ")),o.a.createElement("div",{className:"w-full lg:w-1/2 lg:pl-8"},o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h6"},"Regular Loaded Component:"),o.a.createElement(c.l,{component:"pre",className:"language-jsx my-16"},"\n                                    import AnalyticsDashboardApp from './AnalyticsDashboardApp';\n\n                                    export const AnalyticsDashboardAppConfig = {\n                                        settings: {\n                                            layout: {\n                                                config: {}\n                                            }\n                                        },\n                                        routes  : [\n                                            {\n                                                path     : '/apps/dashboards/analytics',\n                                                component: AnalyticsDashboardApp\n                                            }\n                                        ]\n                                    };\n                                  "))),o.a.createElement(l.a,{className:"mt-32 mb-8",variant:"h5"},"Code splitting the Redux reducers (Dynamically loaded reducers)"),o.a.createElement(l.a,{className:"mb-16",component:"p"},"We created Higher Order Component ",o.a.createElement("code",null,"withReducer")," to load redux reducer before the component render.",o.a.createElement("br",null),"You just need to pass ",o.a.createElement("b",null,"key")," and the ",o.a.createElement("b",null,"reducer")," to the component."),o.a.createElement(c.l,{component:"pre",className:"language-jsx my-16"},"\n                              import withReducer from 'app/store/withReducer';\n                              import reducer from './store/reducers';\n                              .\n                              .\n                              export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);\n                            "))})}}}]);