(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(2),o=t.n(i),a=t(22),c=t.n(a),s=t(5),l=t(6),d=t(10),b=t(9),h=t(25),j=t(26),x=t(29),p=t(27),g=t(70),f=t(66),m=t(71),u=t(0),O=t(14);function v(){var n=Object(s.a)(['\n\n    .navbar * {\n        transition: ease-in-out 0.3s;\n        \n    }\n\n    .navbar {\n        transition: ease-in-out 0.3s;\n        position: relative;\n        display: flex;\n        z-index: 997;\n        overflow-y: hidden;\n    }\n\n    .navbar-brand a {\n        color: #fff;\n    }\n\n    .navbar-nav .nav-item + .nav-item {\n        margin-left: 30px;\n    }\n\n    .nav-item a{\n        display: block;\n        position: relative;\n        color: rgba(255, 255, 255, 0.7);\n        font-size: 16px;\n        font-family: "Poppins", sans-serif;\n        font-weight: 400;\n    }\n\n    .nav-link{\n        padding: 0 !important;\n    }\n\n    .nav-item a:hover, .nav-item > .active, .nav-item:hover > a {\n        color: #fff !important;\n        text-decoration: none;\n    }\n\n    .nav-item a:before {\n        content: "";\n        position: absolute;\n        width: 0;\n        height: 2px;\n        bottom: -4px;\n        left: 0;\n        background-color: #18d26e;\n        visibility: hidden;\n        width: 0px;\n        transition: all 0.3s ease-in-out 0s;\n    }\n\n    .nav-item a:hover:before, .nav-item:hover > a:before, .nav-item > .active:before {\n        visibility: visible;\n        width: 25px;\n    }\n\n    .social-links {\n        margin-top: 40px;\n        display: flex;\n    }\n\n    .social-links a {\n        font-size: 16px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(255, 255, 255, 0.1);\n        color: #fff;\n        line-height: 1;\n        margin-right: 8px;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px;\n    }\n\n    .social-links a:hover {\n        background: #18d26e;\n    }\n\n    @media (max-width: 992px) {\n        .navbar-collapse{\n            margin: 0px !important;\n            position: fixed;\n            top: 55px;\n            right: 15px;\n            bottom: 15px;\n            left: 15px;\n            z-index: 9999;\n            overflow-y: auto;\n            background: rgba(0, 0, 0, 0.7);\n            transition: ease-in-out 0.2s;\n            border-radius: 10px;\n            padding: 10px 0;\n            border: 2px solid rgba(255, 255, 255, 0.12);\n        }\n\n        .navbar-toggler {\n            position: fixed;\n            padding: 0;\n            right: 22px;\n            top: 22px;\n            z-index: 9998;\n            border: 0;\n            background: none;\n            font-size: 24px;\n            transition: all 0.4s;\n            outline: none !important;\n            line-height: 1;\n            cursor: pointer;\n            text-align: right;\n        }\n        .navbar-toggler:hover, .navbar-toggler:hover svg{\n            color: #fff;\n            transition: none !important;\n        }\n        .nav-item a{\n            display: block;\n            position: relative;\n            margin: 10px 20px;\n            font-weight: 500;\n            outline: none;\n        }\n        .navbar-nav .nav-item + .nav-item {\n            margin-left: 0px;\n        }\n    }\n\n    ',"\n"]);return v=function(){return n},n}var C=function(n){Object(x.a)(t,n);var e=Object(p.a)(t);function t(){return Object(h.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsx)(y,{pathname:this.props.location.pathname,children:Object(r.jsx)(g.a,{fixed:"top",variant:"dark",expand:"lg",children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(g.a.Brand,{children:Object(r.jsx)(d.c,{to:"/",children:"CTF4Hire"})}),Object(r.jsxs)("h2",{className:"home-text",children:["Custom cybersecurity training. Personalized learning.",Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"Capture the Flag for you and your team."})]}),Object(r.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav",children:Object(r.jsx)(u.b.Provider,{value:{size:"32px"},children:Object(r.jsx)(O.a,{})})}),Object(r.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(m.a,{className:"ml-auto",children:[Object(r.jsx)(m.a.Item,{children:Object(r.jsx)(d.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(r.jsx)(m.a.Item,{children:Object(r.jsx)(d.c,{activeClassName:"active",to:"/info",children:"Information"})}),Object(r.jsx)(m.a.Item,{children:Object(r.jsx)(d.c,{activeClassName:"active",to:"/events",children:"Past Events"})}),Object(r.jsx)(m.a.Item,{children:Object(r.jsx)(d.c,{activeClassName:"active",to:"/services",children:"Services"})}),Object(r.jsx)(m.a.Item,{children:Object(r.jsx)(d.c,{activeClassName:"active",to:"/requestCTF",children:"Request a CTF"})})]})}),Object(r.jsxs)("div",{className:"social-links",children:[Object(r.jsxs)("a",{href:"https://twitter.com/ctf4hire",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(O.i,{})]}),Object(r.jsxs)("a",{href:"https://www.facebook.com/ctf4hire",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(O.b,{})]}),Object(r.jsxs)("a",{href:"https://www.instagram.com/ctf4hire/",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(O.d,{})]}),Object(r.jsxs)("a",{href:"https://linkedin.com/company/ctf4hire/",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(O.f,{})]})]})]})})})}}]),t}(i.Component),y=l.a.div(v(),(function(n){return"/"===n.pathname?'\n    /*******************************************************/\n    /********************* HOME ROUTE **********************/\n        .navbar {\n            transition: ease-in-out 0.3s;\n            position: relative;\n            height: 100vh;\n            display: flex;\n            align-items: center;\n            z-index: 997;\n            overflow-y: hidden;\n        }\n\n        .navbar .container {\n            flex-direction: column;\n            align-items: start;\n        }\n\n        .navbar-brand {\n            font-size: 48px;\n            margin: 0;\n            padding: 0;\n            line-height: 1;\n            font-weight: 700;\n            font-family: "Poppins", sans-serif;\n        }\n\n        .home-text {\n            font-size: 24px;\n            margin-top: 20px;\n            color: rgba(255, 255, 255, 0.8);\n            font-family: "Raleway", sans-serif;\n        }\n\n        .home-text span {\n            color: #fff;\n            border-bottom: 2px solid #18d26e;\n            padding-bottom: 6px;\n        }\n\n        .navbar-collapse {\n            margin-top: 35px;\n        }\n        \n        @media (max-width: 992px) {\n            .navbar-brand {\n                font-size: 36px !important;\n            }\n            \n            .navbar .container {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n            }\n            \n            .home-text {\n                font-size: 20px;\n                line-height: 30px;\n            }\n            .social-links {\n                margin-top: 15px;\n            }\n            \n        }\n\n    /*******************************************************/\n    /******************* END HOME ROUTE ********************/\n    ':'\n    /*******************************************************/\n    /******************* NOT HOME ROUTE ********************/\n\n        .navbar {\n            height: 80px;\n            background: rgba(0, 0, 0, 0.9);\n            padding: 0;\n        }\n\n        .navbar-brand{\n            font-size: 36px;\n            font-weight: 700;\n            font-family: "Poppins", sans-serif;\n        }\n\n        .home-text{\n            display: none;\n        }\n\n        .social-links {\n            display: none;\n        }\n        \n        @media (max-width: 992px) {\n            .navbar-brand {\n                padding: 0px 15px;\n                font-size: 26px !important;\n            }\n        }\n\n    /*******************************************************/\n    /***************** END NOT HOME ROUTE ******************/    \n    '})),k=Object(b.f)(C),A=function(){return Object(r.jsx)("div",{})},w=t(68),I=t(67),T=t(69),N=function(n){return Object(r.jsx)("section",{className:"mt-4 pb-5",children:n.children})};function z(){var n=Object(s.a)(["\n    .container{\n        background: rgba(0, 0, 0, 0.9);\n        padding: 30px;    \n    }\n"]);return z=function(){return n},n}var F=l.a.div(z()),S=function(n){return Object(r.jsx)(F,{children:Object(r.jsx)(f.a,{children:n.children})})};function H(){var n=Object(s.a)(['\n    font-size: 14px;\n    font-weight: 500;\n    padding: 0;\n    line-height: 1px;\n    margin: 0 0 20px 0;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: #aaaaaa;\n    font-family: "Poppins", sans-serif;\n\n    &::after {\n        content: "";\n        width: 120px;\n        height: 1px;\n        display: inline-block;\n        background: #4ceb95;\n        margin: 4px 10px;\n    }\n']);return H=function(){return n},n}var P=l.a.h2(H()),D=function(n){return Object(r.jsx)(P,{children:n.children})};function R(){var n=Object(s.a)(['\n    margin: 0;\n    margin: -15px 0 15px 0;\n    font-size: 36px;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-family: "Poppins", sans-serif;\n    color: #fff;\n\n']);return R=function(){return n},n}var M=l.a.p(R()),Q=function(n){return Object(r.jsx)(M,{children:n.children})},E=t(44),L=t.n(E);function J(){var n=Object(s.a)(['\n    a {\n        color: inherit;\n    }\n\n    .count-box {\n        padding: 30px 30px 25px 30px;\n        width: 100%;\n        position: relative;\n        text-align: center;\n        background: rgba(255, 255, 255, 0.08);\n    }\n\n    .count-box i {\n        position: absolute;\n        top: -25px;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 12px;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 12px;\n        color: #18d26e;\n        border-radius: 50px;\n    }\n\n    .count-box span {\n        font-size: 36px;\n        display: block;\n        font-weight: 600;\n        color: #fff;\n    }\n\n    .count-box p {\n        padding: 0;\n        margin: 0;\n        font-family: "Raleway", sans-serif;\n        font-size: 14px;\n    }\n']);return J=function(){return n},n}var G=Object(l.a)(I.a)(J()),B=function(n){var e=n.icon;return Object(r.jsx)(G,{lg:3,md:6,className:"mt-5 mt-lg-0",children:Object(r.jsx)(d.b,{to:n.link,children:Object(r.jsxs)("div",{className:"count-box",children:[Object(r.jsx)(u.b.Provider,{value:{size:"24px"},children:Object(r.jsx)("i",{children:Object(r.jsx)(e,{height:"24px",width:"24px"})})}),Object(r.jsx)("small",{children:n.small}),Object(r.jsx)("span",{datatoggle:"counter-up",children:Object(r.jsx)(L.a,{end:n.number})}),Object(r.jsx)("p",{children:n.text})]})})})};function V(){var n=Object(s.a)(["\n    a {\n        color: inherit;\n    }\n\n    .icon-box {\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        background: rgba(255, 255, 255, 0.08);\n        transition: ease-in-out 0.3s;\n    }\n\n    .icon-box:hover {\n        background: rgba(255, 255, 255, 0.12);\n    }\n\n    .icon-box i {\n        font-size: 32px;\n        padding-right: 10px;\n        line-height: 1;\n    }\n\n    .icon-box h3 {\n        font-weight: 700;\n        margin: 0;\n        padding: 0;\n        line-height: 1;\n        font-size: 16px;\n        color: #fff;\n    }\n"]);return V=function(){return n},n}var q=Object(l.a)(I.a)(V()),U=function(n){var e=n.icon;return Object(r.jsx)(q,{lg:3,md:4,className:"mt-4",children:Object(r.jsx)(d.b,{to:n.link,children:Object(r.jsxs)("div",{className:"icon-box",children:[Object(r.jsx)(u.b.Provider,{value:{color:n.color,size:"32px"},children:Object(r.jsx)("i",{children:Object(r.jsx)(e,{height:"24px",width:"24px"})})}),Object(r.jsx)("h3",{children:n.text})]})})})},W=t(45),_=t.n(W),Y=(t(61),t(62),t(36));function K(){var n=Object(s.a)(["\n    .testimonial-item {\n        box-sizing: content-box;\n        min-height: 320px;\n    }\n\n    .testimonial-item p {\n        font-style: italic;\n        margin: 0 15px 0 15px;\n        padding: 30px 20px 60px 20px;\n        background: rgba(255, 255, 255, 0.1);\n        position: relative;\n        border-radius: 6px;\n        z-index: 1;\n    }\n\n    .quote-icon {\n        color: rgba(255, 255, 255, 0.25);\n        font-size: 26px;\n    }\n\n    .quote-icon-left {\n        display: inline-block;\n        margin-right: 10px;\n        position: relative;\n        top: -10px;\n    }\n\n    .quote-icon-right {\n        display: inline-block;\n        margin-left: 10px;\n        position: relative;\n        top: 5px;\n    }\n\n    .testimonial-img {\n        width: 90px !important;\n        /* border-radius: 50%; */\n        margin: -40px 0 0 40px;\n        position: relative;\n        z-index: 2;\n        /* border: 6px solid rgba(255, 255, 255, 0.12); */\n    }\n"]);return K=function(){return n},n}var Z=l.a.div(K()),X=function(n){return Object(r.jsx)(Z,{children:Object(r.jsxs)("div",{className:"testimonial-item",children:[Object(r.jsx)("p",{children:Object(r.jsxs)(u.b.Provider,{value:{size:"22px"},children:[Object(r.jsx)(Y.a,{className:"quote-icon quote-icon-left"}),n.text,Object(r.jsx)(Y.b,{className:"quote-icon quote-icon-right"})]})}),Object(r.jsx)("img",{src:n.image,className:"testimonial-img",alt:""})]})})},$=t.p+"static/media/hacktivitycon.60022e30.png",nn=t.p+"static/media/virseccon.4c2fab7c.png",en=t.p+"static/media/bsidesbos.9e06bf63.png",tn=t.p+"static/media/nahamcon.583ab327.png";function rn(){var n=Object(s.a)(["\n\n    .owl-dots {\n        margin-top: 5px;\n        text-align: center;\n    }\n    \n    .owl-dot {\n        display: inline-block;\n        margin: 0 5px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, 0.3) !important;\n    }\n    \n    .owl-dot.active {\n        background-color: #18d26e !important;\n    }\n"]);return rn=function(){return n},n}var on={0:{items:1},768:{items:2},900:{items:3}},an=[{image:$,text:"Huge thanks to all involved for creating this amazing CTF. Stuff like this makes me love cybersecurity even more!"},{image:nn,text:"I enjoyed this CTF a lot. I don't normally interact with communities on Discord, but I did enjoy interacting with people and working through some of the challenges together over DM. Thanks all involved with providing us another awesome CTF!"},{image:en,text:"Thank you for putting this CTF together. Although it was extremely challenging I had fun with the community. Thank you for your hard work. I think it safe to say that everyone was pushed beyond their limits today. You all rock!!"},{image:$,text:"It was a ton of fun and seriously thanks for doing it, our team had a total blast!"},{image:tn,text:"I've never done a CTF quite like this one, but I will definitely be participating in more in the future. Keep up the great work!"}],cn=function(n){Object(x.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(h.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).Testimonials=an.map((function(n,e){return Object(r.jsx)(X,{image:n.image,text:n.text},e)})),n}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsx)(sn,{children:Object(r.jsx)(_.a,{items:3,margin:8,autoplay:!0,dots:!0,loop:!0,responsive:on,children:this.Testimonials})})}}]),t}(i.Component),sn=l.a.div(rn()),ln=cn,dn=t(16),bn=t.p+"static/media/info_intro.566df13e.jpg";function hn(){var n=Object(s.a)(["\n\n"]);return hn=function(){return n},n}function jn(){var n=Object(s.a)(["\n\n"]);return jn=function(){return n},n}function xn(){var n=Object(s.a)(["\n\n"]);return xn=function(){return n},n}function pn(){var n=Object(s.a)(["\n    h3 {\n        font-weight: 700;\n        font-size: 26px;\n        color: #18d26e;\n    }\n"]);return pn=function(){return n},n}var gn=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsxs)(N,{children:[Object(r.jsx)(S,{children:Object(r.jsxs)(fn,{children:[Object(r.jsx)(D,{children:"Information"}),Object(r.jsx)(Q,{children:"Learn more"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(I.a,{lg:4,children:Object(r.jsx)(T.a,{src:bn,alt:"Intro",fluid:!0})}),Object(r.jsxs)(I.a,{lg:8,className:"pt-4 pt-lg-0",children:[Object(r.jsx)("h3",{children:"Capture The Flag"}),Object(r.jsx)("p",{children:"Learn practical, hands-on skills with engaging exercises and cybersecurity training as part of a capture the flag competition. Collaborate with your team members, solve new problems, and grow your personnel!"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"CTF4Hire"})," offers custom Capture the Flag events for any company, conference, or event. Running some internal training for your team? We can provide the infrastructure, challenges, support and maintenance for an enterprise-wide activity. Hosting a virtual conference, open to the whole world? Our platform scales to handle the traffic."]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:Object(r.jsx)(d.b,{to:"/requestCTF",children:"Request a CTF"})})," to see what we can build for you!"]})]})]})]})}),Object(r.jsx)(S,{children:Object(r.jsx)(mn,{children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(B,{icon:O.c,small:"about",link:"#team",number:10,text:"Supporting Personnel"}),Object(r.jsx)(B,{icon:O.h,small:"over",link:"#challenges",number:350,text:"Developed Training Sets"}),Object(r.jsx)(B,{icon:O.j,small:"more than",link:"/events",number:15e3,text:"Previous Players"}),Object(r.jsx)(B,{icon:O.e,small:"created over",link:"#infrastructure",number:5e4,text:"Challenge Deployments"})]})})}),Object(r.jsx)(S,{children:Object(r.jsxs)(un,{children:[Object(r.jsx)(D,{children:"Jeopardy categories"}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(U,{icon:dn.h,color:"#ffbb2c",link:"#test",text:"Cryptography"}),Object(r.jsx)(U,{icon:dn.f,color:"#5578ff",link:"#test",text:"Web Security"}),Object(r.jsx)(U,{icon:dn.c,color:"#e80368",link:"#test",text:"Binary Exploitation"}),Object(r.jsx)(U,{icon:dn.d,color:"#e361ff",link:"#test",text:"Steganography"}),Object(r.jsx)(U,{icon:dn.a,color:"#47aeff",link:"#test",text:"Miscellaneous"}),Object(r.jsx)(U,{icon:dn.e,color:"#ffa76e",link:"#test",text:"Fundamental"}),Object(r.jsx)(U,{icon:dn.i,color:"#11dbcf",link:"#test",text:"Open Source Intelligence"}),Object(r.jsx)(U,{icon:dn.j,color:"#4233ff",link:"#test",text:"Mobile Applications"}),Object(r.jsx)(U,{icon:dn.b,color:"#29cc61",link:"#test",text:"Reverse Engineering"}),Object(r.jsx)(U,{icon:dn.g,color:"#b20969",link:"#test",text:"Host Forensics"}),Object(r.jsx)(U,{icon:O.g,color:"#ff5828",link:"#test",text:"Networking"}),Object(r.jsx)(U,{icon:dn.k,color:"#dc3545",link:"#test",text:"Read Team Operations"})]})]})}),Object(r.jsx)(S,{children:Object(r.jsxs)(On,{children:[Object(r.jsx)(D,{children:"Testimonials"}),Object(r.jsx)(ln,{})]})})]})})},fn=l.a.div(pn()),mn=l.a.div(xn()),un=l.a.div(jn()),On=l.a.div(hn());function vn(){var n=Object(s.a)(['\n    padding: 20px 20px 20px 20px;\n    margin: 0px 0px 20px 20px;\n    margin-top: -2px;\n    border-left: 2px solid rgba(255, 255, 255, 0.2);\n    position: relative;\n    background: rgba(255, 255, 255, 0.08);\n\n\n\n    &::before{\n        content: "";\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        border-radius: 50px;\n        left: -9px;\n        top: 0;\n        background: #18d26e;\n        border: 2px solid #18d26e;\n        \n    }\n    &:hover{\n        opacity: 1;\n        \n        border-left: 2px solid #18d26e;\n        \n        background: rgba(255, 255, 255, 0.12);\n    }\n\n    h4 {\n        line-height: 18px;\n        font-size: 18px;\n        font-weight: 600;\n        text-transform: uppercase;\n        font-family: "Poppins", sans-serif;\n        color: #18d26e;\n        margin-bottom: 10px;\n    }\n\n     h5 {\n        font-size: 16px;\n        background: rgba(255, 255, 255, 0.15);\n        padding: 5px 15px;\n        display: inline-block;\n        font-weight: 600;\n        margin-bottom: 10px;\n    }\n    a {\n        color:white;\n    }\n\n    p a {\n        color: #18d26e;\n    }\n\n    p a:hover {\n        color: #35e888;\n        text-decoration: none;\n    }\n']);return vn=function(){return n},n}var Cn=l.a.div(vn()),yn=function(n){return Object(r.jsx)(Cn,{children:Object(r.jsxs)("a",{href:n.link,children:[Object(r.jsx)("h4",{children:n.name}),Object(r.jsx)("h5",{children:n.date}),n.children]})})},kn=t.p+"static/media/grimmcon.794295d7.jpg";function An(){var n=Object(s.a)(["\n    .resume-title {\n        font-size: 26px;\n        font-weight: 700;\n        margin-top: 20px;\n        margin-bottom: 20px;\n        color: #fff;\n    }\n    ul {\n        padding-left: 20px;\n    }\n    ul li {\n        padding-bottom: 10px;\n    }\n    img {\n        width: 90px;\n        margin: -100px 0 0 40px;\n        position: relative;\n        bottom: 0px;\n        z-index: 2;\n        padding-top: 20px;\n        float: right;\n    }\n"]);return An=function(){return n},n}var wn=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsx)(In,{children:Object(r.jsx)(N,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(D,{children:"Past events"}),Object(r.jsx)(Q,{children:"Previous CTF competitions"}),Object(r.jsxs)(w.a,{children:[Object(r.jsxs)(I.a,{lg:6,children:[Object(r.jsx)("h3",{className:"resume-title",children:"Jeopardy CTFs"}),Object(r.jsxs)(yn,{name:"VirSecCon CTF",date:"April 3-4, 2020",link:"events/virseccon",children:[Object(r.jsxs)("p",{children:["Delivered alongside the ",Object(r.jsx)("a",{href:"https://virseccon.com",target:"_blank",rel:"noreferrer",children:"VirSecCon"})," conference hosted by The Cyber Mentor and NahamSec."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"60+ Challenges"}),Object(r.jsx)("li",{children:"3,500+ Players"})]}),Object(r.jsx)("a",{href:"https://virseccon.com",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:nn,alt:"VirSecCon Logo"})})]}),Object(r.jsxs)(yn,{name:"NahamCon 2020 CTF",date:"June 12-13, 2020",link:"events/nahamcon2020",children:[Object(r.jsxs)("p",{children:["Delivered alongside the ",Object(r.jsx)("a",{href:"https://nahamcon.splashthat.com/",target:"_blank",rel:"noreferrer",children:"NahamCon 2020"})," conference hosted by NahamSec, The Cyber Mentor, STOK and John Hammond."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"75+ Challenges"}),Object(r.jsx)("li",{children:"5,000+ Players"})]}),Object(r.jsx)("a",{href:"https://nahamcon.splashthat.com/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:tn,alt:"NahamCon Logo"})})]}),Object(r.jsxs)(yn,{name:"Veterans in Security CTF",date:"November 10, 2020",link:"events/vetsec",children:[Object(r.jsxs)("p",{children:["Delivered alongside the ",Object(r.jsx)("a",{href:"https://www.hackerone.com/events/veterans-security-community-day",target:"_blank",rel:"noreferrer",children:"Veterans in Security"})," community event hosted by HackerOne."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"30+ Challenges"}),Object(r.jsx)("li",{children:"100+ Players"})]}),Object(r.jsx)("a",{href:"https://www.hackerone.com/events/veterans-security-community-day",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAGFBMVEUAAAD////8/PwfHx9hYWHp6emvr69/f39mV9RNAAADm0lEQVR42u3dQU9bRxQG0JHskvUdxWQ9U5FunRRYgwpkGydp16GkdFuUNr+/Cyj4YTC0ssDXPbP1yM9HM5/fs6W5t5TNGKMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArL4XkdHR0fT/JCTn2tE3fkyTQ75q7bee+/xyzQ15Dh6i2hRe/yQGTKOHlejxlliyGGN61En07SQUbQbSLTPaSFbcwsSUV+mhbyNAWQ7LeSwDSCTDYEECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyHNARru7uz/mh4xOPkTE5Pyn5JDxr9Fr7xGTs9SQ0Wn0FhHRW3zODDmu19Pbqs6+Pwdkf/7we/s+LeRF67H6cgRPDxnPBof4V1WO4Okhpz2Gp/jf54TMBf1qvEwJGQR9lQUinhgyDHpeyOhW0NNCThcdKSGLQc8JWQx6TsgdQU8JGc3udKSDjC7udqSDHN8ZkHyQ/fscySDjds/GSgYZ3XUnzAi5uN+RCnJv0JNB9usSRyLIeNZjEyDLgp4KcrHckQaytyzoiSCj9oAjC2TrgY2VBvImNgRy0TYEcgoCAvL/CPvhpkDebsp95LvFO3tLCRkvQPqtn1lZHhpntxcgzmYpH+NvvVLjU8kJufX427anSSHDvdV2DkpSSHlT54P+R8kKGY1vvm+v2kckXZGb/hE1PpXMkOv/tdrraWpI2b/sTdImByU3pBxH7f0y6Lkh5WQWcdMnJjGk7H47/1o2ATIYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCPHMMqhvUBSFvfbhfD6lP11dLJwypo7f06QV4MIO3j0snD4mHtYJ0gg6J5NQ4er67bZa0ge3Mfrr36F+oV7ayVQeYaDvR4aLNs3ZQTattlvSBlK/o/jo8PTr6ol5Nru676sjaQshe1997bVaWj5Vc9vZwcdd16vZVyVY4mJl8eddnfIiJi52tZQ0gZvzs///OxjQF3v53/fjQtawl51gECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLfIX8D91MmsuWdJ7oAAAAASUVORK5CYII=",alt:"HackerOne Logo"})})]})]}),Object(r.jsxs)(I.a,{lg:6,children:[Object(r.jsx)("h3",{className:"resume-title d-none d-lg-block",children:"\xa0"}),Object(r.jsxs)(yn,{name:"HacktivityCon CTF",date:"July 29-31, 2020",link:"events/hacktivitycon",children:[Object(r.jsxs)("p",{children:["Delivered alongside the ",Object(r.jsx)("a",{href:"https://www.hackerone.com/hacktivitycon",target:"_blank",rel:"noreferrer",children:"HacktivityCon"})," conference hosted by NahamSec and HackerOne."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"90+ Challenges"}),Object(r.jsx)("li",{children:"5,000+ Players"})]}),Object(r.jsx)("a",{href:"https://www.hackerone.com/hacktivitycon",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:$,alt:"HacktivityCon Logo"})})]}),Object(r.jsxs)(yn,{name:"BsidesBOS CTF",date:"September 26th, 2020",link:"events/bsidesbos",children:[Object(r.jsxs)("p",{children:["Delivered alongside the Security ",Object(r.jsx)("a",{href:"https://www.bsidesbos.org/",target:"_blank",rel:"noreferrer",children:"BsidesBOS"})," conference."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"50+ Challenges"}),Object(r.jsx)("li",{children:"2,000+ Players"})]}),Object(r.jsx)("a",{href:"https://www.bsidesbos.org/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:en,alt:"BsidesBOS Logo"})})]}),Object(r.jsxs)(yn,{name:"GRIMMCon 0x3 CTF",date:"December 30, 2020",link:"events/grimmcon",children:[Object(r.jsxs)("p",{children:["Delivered alongside the ",Object(r.jsx)("a",{href:"https://www.grimm-co.com/grimmcon-0x3/",target:"_blank",rel:"noreferrer",children:"GRIMMCon 0x3"})," conference hosted by GRIMM."]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"30+ Challenges"}),Object(r.jsx)("li",{children:"1,000+ Players"})]}),Object(r.jsx)("a",{href:"https://www.grimm-co.com/grimmcon-0x3/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:kn,alt:"NahamCon Logo"})})]})]})]})]})})})})},In=l.a.div(An());function Tn(){var n=Object(s.a)(["\na {\n    color: inherit;\n}\n.icon-box {\n    text-align: center;\n    background: rgba(204, 204, 204, 0.1);\n    padding: 80px 20px;\n    transition: all ease-in-out 0.3s;\n}\n.icon-box:hover {\n    background: ",";\n}\n.icon {\n    background: "," !important;\n    margin: 0 auto;\n    width: 64px;\n    height: 64px;\n    border-radius: 5px;\n    transition: all .3s ease-out 0s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n    transform-style: preserve-3d;\n}\n.icon-box:hover .icon {\n    background: white !important;\n}\n.icon::before {\n    position: absolute;\n    content: '';\n    left: -8px;\n    top: -8px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.15);\n    border-radius: 5px;\n    transition: all .3s ease-out 0s;\n    transform: translateZ(-1px);\n}\n.icon-box:hover .icon::before {\n    background: "," !important;\n}\n.icon-box:hover .icon svg {\n    color: "," !important;\n}\nh4 {\n    font-weight: 700;\n    margin-bottom: 15px;\n    font-size: 24px;\n}\np {\n    line-height: 24px;\n    font-size: 14px;\n    margin-bottom: 0;\n}\n"]);return Tn=function(){return n},n}var Nn=Object(l.a)(I.a)(Tn(),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.hovercolor}),(function(n){return n.color})),zn=function(n){var e=n.icon;return Object(r.jsx)(Nn,{lg:4,md:6,className:"mt-4",color:n.color,hovercolor:n.hovercolor,children:Object(r.jsx)(d.b,{to:n.link,children:Object(r.jsxs)("div",{className:"icon-box",children:[Object(r.jsx)("div",{className:"icon",children:Object(r.jsx)(u.b.Provider,{value:{color:"#fff",size:"28px"},children:Object(r.jsx)(e,{})})}),Object(r.jsx)("h4",{children:n.title}),Object(r.jsx)("p",{children:n.children})]})})})},Fn=t(21),Sn=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsx)(N,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(D,{children:"Services"}),Object(r.jsx)(Q,{children:"Get the right CTF for you and your team"}),Object(r.jsxs)(w.a,{className:"mt-n4",children:[Object(r.jsx)(zn,{title:"Attach & Defense",icon:Fn.c,color:"#ffbe0b",hovercolor:"#ffdd80",link:"#attackanddefense",children:"Want a red vs. blue competition? Attack and Defense is the way to go!"}),Object(r.jsx)(zn,{title:"Jeopardy",icon:Fn.f,color:"#18d26e",hovercolor:"#35e888",link:"#jeopardy",children:"Looking for a classic Jeopardy-style CTF? It's our bread and butter."}),Object(r.jsx)(zn,{title:"Boot 2 Root",icon:Fn.d,color:"#fb5607",hovercolor:"#fba780",link:"#boot2root",children:"Need a boot2root box to pwn? Look no further."}),Object(r.jsx)(zn,{title:"King Of The Hill",icon:Fn.a,color:"#ff006e",hovercolor:"#ff80b7",link:"#kingofthehill",children:"Are you a fan of KOTH? We can build that for you."}),Object(r.jsx)(zn,{title:"Live Training",icon:Fn.e,color:"#8338ec",hovercolor:"#b792ec",link:"#livetraining",children:"We can provide custom interactive training sessions to improve your skills."}),Object(r.jsx)(zn,{title:"Challenge Development",icon:Fn.b,color:"#3a86ff",hovercolor:"#9bc1ff",link:"#challengedev",children:"You need some challenges for your own CTF? We will be happy to build them for you."})]})]})})})};function Hn(){var n=Object(s.a)(["\n  background-color: #dc3545;\n  padding: 30px;\n  font-size: 1.2rem;\n"]);return Hn=function(){return n},n}var Pn=l.a.div(Hn()),Dn=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsx)(N,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(D,{children:"Request a CTF"}),Object(r.jsx)(w.a,{className:"justify-content-md-center",children:Object(r.jsx)(I.a,{md:5,children:Object(r.jsxs)(Pn,{children:["The ",Object(r.jsx)("strong",{children:"CTF4Hire"})," team is currently preparing for ",Object(r.jsx)("b",{children:Object(r.jsx)("u",{children:Object(r.jsx)("a",{href:"https://ctf.nahamcon.com/",children:"NahamCon 2021"})})})," and is unable to take more requests at this time. Check back after March, 2021 and we should have some more availability!"]})})})]})})})},Rn=t(46),Mn=t.n(Rn);function Qn(){var n=Object(s.a)(["\n  font-family: monospace;\n  font-size: 35px;\n  color: #18d26e;\n\n  .box {\n    padding: 50px 30px;\n    background: rgba(0, 0, 0, 0.9);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n  }\n\n  .Typewriter {\n    width: 100%;\n  }\n\n  .Typewriter__cursor {\n    font-size: 32px;\n    vertical-align: top;\n  }\n"]);return Qn=function(){return n},n}var En=l.a.div(Qn()),Ln=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsx)(En,{children:Object(r.jsx)("div",{className:"box",children:Object(r.jsx)(Mn.a,{options:{delay:200,cursor:"&#9610;"},onInit:function(n){n.pauseFor(500).typeString("<strong>404</strong>, page not found.").start()}})})})})};t(63);function Jn(){var n=Object(s.a)(["\n    .page-container{\n        position: relative;\n        min-height: 100vh;\n    }\n    footer{\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        text-align: right;\n        padding: 15px;\n        font-size: 13px;\n    }   \n\n"]);return Jn=function(){return n},n}var Gn=l.a.div(Jn()),Bn=function(){return Object(r.jsx)(o.a.Fragment,{children:Object(r.jsxs)(Gn,{children:[Object(r.jsx)("div",{className:"page-container",children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(k,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",component:A}),Object(r.jsx)(b.a,{exact:!0,path:"/info",component:gn}),Object(r.jsx)(b.a,{exact:!0,path:"/events",component:wn}),Object(r.jsx)(b.a,{exact:!0,path:"/services",component:Sn}),Object(r.jsx)(b.a,{exact:!0,path:"/requestCTF",component:Dn}),Object(r.jsx)(b.a,{component:Ln})]})]})}),Object(r.jsx)("footer",{children:"\xa9 CTF4Hire"})]})})};c.a.render(Object(r.jsx)(o.a.Fragment,{children:Object(r.jsx)(Bn,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.4b8b2da9.chunk.js.map