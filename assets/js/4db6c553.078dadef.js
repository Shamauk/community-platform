"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[631],{8381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(4848),i=t(8453);const s={id:"rollback",title:"Rollback a Release"},l=void 0,r={id:"Maintainers/rollback",title:"Rollback a Release",description:"As a maintainer, you may need to rollback a release if a deployment has gone wrong or if there are issues with the site. This document outlines the steps to rollback a release.",source:"@site/docs/Maintainers/Rollback.md",sourceDirName:"Maintainers",slug:"/Maintainers/rollback",permalink:"/Maintainers/rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Maintainers/Rollback.md",tags:[],version:"current",frontMatter:{id:"rollback",title:"Rollback a Release"}},a={},c=[];function d(e){const n={li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"As a maintainer, you may need to rollback a release if a deployment has gone wrong or if there are issues with the site. This document outlines the steps to rollback a release."}),"\n",(0,o.jsx)(n.p,{children:"Note: Do not use the Firebase UI to do this for hosting, as it will not rollback our serverless functions."}),"\n",(0,o.jsx)(n.p,{children:"Use the CircleCI to perform the rollback deployment so that we go through the same steps as a normal deployment."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Access CircleCI Build Pipelines:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to the CircleCI build pipelines interface."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Locate the Desired Release:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use the search function to find the specific release you want to rollback to."}),"\n",(0,o.jsx)(n.li,{children:"Click on the corresponding build number to view its details."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Access Workflow View:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Once on the build details page, switch to the workflow view."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Initiate Rerun:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Identify the workflow corresponding to the release you wish to rollback to."}),"\n",(0,o.jsx)(n.li,{children:'Click on the "Rerun" button associated with this workflow.'}),"\n",(0,o.jsx)(n.li,{children:'From the options presented, select "Rerun workflow from start".'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Optional: Selective Deployment:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If you don't intend to deploy to all production environments, you have the option to cancel specific jobs after they've started."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By following these steps, you can effectively rollback a release in your deployment pipeline using CircleCI."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);