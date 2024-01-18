import{j as e}from"./jsx-runtime.n8eUWEGm.js";import{c as s,D as o,a,b as t,e as i,f as d,g as c,d as p}from"./dropdown-menu.v60XWngP.js";import"./index.cRtcXttU.js";import"./index.2owYyvi2.js";import"./utils.RTvLu3b9.js";/**
 * @license lucide-react v0.311.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function w(r){return e.jsxs(o,{children:[e.jsxs(a,{className:"text-white flex justify-center items-center",children:["Genres ",e.jsx(m,{className:"ml-1"})]}),e.jsxs(t,{className:"w-56",children:[e.jsx(i,{children:"Select a Genre"}),e.jsx(d,{}),e.jsx(c,{children:r.genres.genres.map(n=>e.jsx(p,{children:e.jsx("a",{href:`/genre/${n.id}?genre=${n.name}`,children:n.name})},n.id))})]})]})}export{w as default};
