import{d as $,l as B,r as S,o as i,c as n,e,t as m,v as P,x as b,y as _,k as s,n as p,a as l,i as d,F as h,h as g,f as j,u as Y}from"./app-DGeX6b1V.js";import{u as z,r as v,e as V,m as F}from"./index-jN5mUv6Z.js";const O={class:"box py-4"},Q={key:0},J=e("h2",{class:"section-heading"},"You have submitted a dataset",-1),M=e("p",{class:"mb-2"},"Someone will reach out soon for more information. Here is a summary of the information you submitted:",-1),U=e("h2",{class:"section-heading mb-4"},"DataHub Submission Form",-1),q={class:"columns mb-0"},Z={class:"column"},A={class:"field"},G=e("label",{class:"label mb-0"},"Publisher",-1),W=e("p",{class:"help mt-0 mb-2"},"What organization is responsible for maintaining the project?",-1),X={class:"control has-icons-left has-icons-right"},R=["aria-invalid"],L={class:"icon is-small is-left"},K={key:0,class:"icon is-small is-right"},tt={key:1,class:"icon is-small is-right"},st=e("label",{class:"label mb-0"},"Submitter Information",-1),et=e("p",{class:"help mb-2 mt-0"},"Please provide your contact information. A follow-up email will be sent informing you of next steps.",-1),at={class:"field"},ot={class:"control has-icons-left has-icons-right"},it=["aria-invalid"],nt={class:"icon is-small is-left"},lt={key:0,class:"icon is-small is-right"},rt={key:1,class:"icon is-small is-right"},ct={class:"field"},dt={class:"control has-icons-left has-icons-right"},ut=["aria-invalid"],mt={class:"icon is-small is-left"},pt={key:0,class:"icon is-small is-right"},ht={key:1,class:"icon is-small is-right"},ft=e("label",{class:"label mb-0"},"JPO Contact Information",-1),bt=e("p",{class:"help mb-2 mt-0"},"Who is your JPO Project Manager for this project? They will be required to approve your submission before the process can continue.",-1),_t={class:"field"},gt={class:"control has-icons-left has-icons-right"},vt=["aria-invalid"],$t={class:"icon is-small is-left"},yt={key:0,class:"icon is-small is-right"},kt={key:1,class:"icon is-small is-right"},Nt={class:"field"},jt={class:"control has-icons-left has-icons-right"},Et=["aria-invalid"],wt={class:"icon is-small is-left"},Vt={key:0,class:"icon is-small is-right"},St={key:1,class:"icon is-small is-right"},Ct=e("label",{class:"label mb-0"},"Dataset Information",-1),xt=e("p",{class:"help mt-0 mb-2"},"Include the name of the dataset and a brief description of the data being made available, including information about the project that generated the data.",-1),It={class:"field"},Tt={class:"control has-icons-left has-icons-right"},Dt=["aria-invalid"],Ht={class:"icon is-small is-left"},Bt={key:0,class:"icon is-small is-right"},Pt={key:1,class:"icon is-small is-right"},Yt={class:"field"},zt={class:"control"},Ft=["aria-invalid"],Ot=e("label",{class:"label mb-0"},"Complete the Captcha Puzzle",-1),Qt=e("div",{class:"",id:"captcha-container"},null,-1),Jt={key:0,class:"notification is-danger is-light mt-3"},Mt=e("a",{href:"mailto:data.itsjpo@dot.gov"},"data.itsjpo@dot.gov",-1),Ut={key:1,class:"notification is-danger is-light mt-3"},qt=e("p",null,"Your submission was invalid. Please correct the errors above to submit.",-1),Zt=[qt],At={class:"control mt-4"},Gt=["disabled"],Wt={__name:"SubmissionForm",setup(C){const y=$(!1),k=$(!1),f=$(null),E=$(!1),w=$(!1),x=()=>{var u=document.querySelector("#captcha-container");AwsWafCaptcha.renderCaptcha(u,{apiKey:"gpXqf8izCY3eGXU4iRbCEm8Yp4OI08/v0+b138h1LgTC8XC+2VVv50BAfiYJwmbRNI0HbUJj4bu83kQH0VCCZGENdAjnQXLR7MWGFIGHu5TVZ/K1hF5tBEY7orBFJ87Kngy33UDeCCaatvD8zS4NItc8s9vCJNldpmPRSqFavQJxRuzH1NC1wIo5sa39r8CieGxz+u2brKkBdYHW/dQ7tC3H/VtJZeC8yYQ47ocejUCeMleE2uqdYJ3OdMRlP7wrjaj/njZJMndvQoqA9Y8nE4wg3fFyICY0wVbem9SCUfr9gpvqHjSBznVzFwfY9Yz12365T3A3ukaQQWIcKNare7//wLqHZ4wyHkEXd3HGus2IXvDBossNcZRp8XDwbXKE6hUlVqYtoeqWow96ZEfka/yg8NOrosUMlCQuyrC5xdhO7I4kgleVfwU+80QkRMzFso0oC9vmn3FNFOfNonBspk6CQ9OO2gQoXYVDnVZ7oZXurHVOMMh36VzqAuvCQJVfLNEncsB2GQVmBLfY/fuTG9FciQyVw9uZytDpBkuTcp+nXb3ZV54KvjIf2+wSW4z2uVoY2DeGh9ZGJv5MQEd6PsYPkRhPyWt7EibH/Tp8rVZboKKkye0H/r+RBrSGe471TQEO0YnhFLVr4qAlDIaylyslIYg4aUWnVH9986X38kI=_0_1",onSuccess:I,onError:T,dynamicWidth:!0,disableLanguageSelector:!0,skipTitle:!0})},I=u=>{k.value=!0},T=u=>{f.value=u},D=()=>{t.value.$validate(),t.value.$invalid?E.value=!0:(y.value=!0,AwsWafIntegration.fetch("https://rz9myf5nfj.execute-api.us-east-1.amazonaws.com/default/datahub_submission_send_email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)}).then(o=>{if(o.ok)return w.value=!0,o.json();f.value="Response could not be successfully returned."}).catch(o=>{f.value="Form could not be submitted"}),y.value=!1)},N=$({publisher:"",contact:{jpoName:"",jpoEmail:"",submitterName:"",submitterEmail:""},dataset:{name:"",description:""}}),H={publisher:{required:v},contact:{jpoName:{required:v},jpoEmail:{required:v,email:V},submitterName:{required:v},submitterEmail:{required:v,email:V}},dataset:{name:{required:v},description:{required:v,minLength:F(100)}}},t=z(H,N),c=u=>!u.$invalid&&u.$dirty;return B(()=>{x()}),(u,o)=>{const r=S("font-awesome-icon");return i(),n("div",O,[w.value?(i(),n("div",Q,[J,M,e("pre",null,m(N.value),1)])):(i(),n("form",{key:1,onSubmit:P(D,["prevent"])},[U,e("div",q,[e("div",Z,[e("div",A,[G,W,e("div",X,[b(e("input",{class:p(["input",{"is-danger":s(t).publisher.$error,"is-success":c(s(t).publisher)}]),type:"text",placeholder:"Name of Publishing Organization","onUpdate:modelValue":o[0]||(o[0]=a=>s(t).publisher.$model=a),onBlur:o[1]||(o[1]=(...a)=>s(t).publisher.$touch&&s(t).publisher.$touch(...a)),"aria-invalid":s(t).publisher.$error},null,42,R),[[_,s(t).publisher.$model]]),e("span",L,[l(r,{icon:"fa-solid fa-building"})]),s(t).publisher.$error?(i(),n("span",K,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).publisher)?(i(),n("span",tt,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).publisher.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),st,et,e("div",at,[e("p",ot,[b(e("input",{class:p(["input",{"is-danger":s(t).contact.submitterName.$error,"is-success":c(s(t).contact.submitterName)}]),type:"text",placeholder:"Name of Submitter","onUpdate:modelValue":o[2]||(o[2]=a=>s(t).contact.submitterName.$model=a),onBlur:o[3]||(o[3]=(...a)=>s(t).contact.submitterName.$touch&&s(t).contact.submitterName.$touch(...a)),"aria-invalid":s(t).contact.submitterName.$error},null,42,it),[[_,s(t).contact.submitterName.$model]]),e("span",nt,[l(r,{icon:"fa-solid fa-user"})]),s(t).contact.submitterName.$error?(i(),n("span",lt,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).contact.submitterName)?(i(),n("span",rt,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).contact.submitterName.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),e("div",ct,[e("p",dt,[b(e("input",{class:p(["input",{"is-danger":s(t).contact.submitterEmail.$error,"is-success":c(s(t).contact.submitterEmail)}]),type:"text",placeholder:"Email of Submitter","onUpdate:modelValue":o[4]||(o[4]=a=>s(t).contact.submitterEmail.$model=a),onBlur:o[5]||(o[5]=(...a)=>s(t).contact.submitterEmail.$touch&&s(t).contact.submitterEmail.$touch(...a)),"aria-invalid":s(t).contact.submitterEmail.$error},null,42,ut),[[_,s(t).contact.submitterEmail.$model]]),e("span",mt,[l(r,{icon:"fa-solid fa-envelope"})]),s(t).contact.submitterEmail.$error?(i(),n("span",pt,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).contact.submitterEmail)?(i(),n("span",ht,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).contact.submitterEmail.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),ft,bt,e("div",_t,[e("p",gt,[b(e("input",{class:p(["input",{"is-danger":s(t).contact.jpoName.$error,"is-success":c(s(t).contact.jpoName)}]),type:"text",placeholder:"Name of Project Manager","onUpdate:modelValue":o[6]||(o[6]=a=>s(t).contact.jpoName.$model=a),onBlur:o[7]||(o[7]=(...a)=>s(t).contact.jpoName.$touch&&s(t).contact.jpoName.$touch(...a)),"aria-invalid":s(t).contact.jpoName.$error},null,42,vt),[[_,s(t).contact.jpoName.$model]]),e("span",$t,[l(r,{icon:"fa-solid fa-user"})]),s(t).contact.jpoName.$error?(i(),n("span",yt,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).contact.jpoName)?(i(),n("span",kt,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).contact.jpoName.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),e("div",Nt,[e("p",jt,[b(e("input",{class:p(["input",{"is-danger":s(t).contact.jpoEmail.$error,"is-success":c(s(t).contact.jpoEmail)}]),type:"text",placeholder:"Email of Project Manager","onUpdate:modelValue":o[8]||(o[8]=a=>s(t).contact.jpoEmail.$model=a),onBlur:o[9]||(o[9]=(...a)=>s(t).contact.jpoEmail.$touch&&s(t).contact.jpoEmail.$touch(...a)),"aria-invalid":s(t).contact.jpoEmail.$error},null,42,Et),[[_,s(t).contact.jpoEmail.$model]]),e("span",wt,[l(r,{icon:"fa-solid fa-envelope"})]),s(t).contact.jpoEmail.$error?(i(),n("span",Vt,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).contact.jpoEmail)?(i(),n("span",St,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).contact.jpoEmail.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),Ct,xt,e("div",It,[e("p",Tt,[b(e("input",{class:p(["input",{"is-danger":s(t).dataset.name.$error,"is-success":c(s(t).dataset.name)}]),type:"text",placeholder:"Name of Dataset","onUpdate:modelValue":o[10]||(o[10]=a=>s(t).dataset.name.$model=a),onBlur:o[11]||(o[11]=(...a)=>s(t).dataset.name.$touch&&s(t).dataset.name.$touch(...a)),"aria-invalid":s(t).dataset.name.$error},null,42,Dt),[[_,s(t).dataset.name.$model]]),e("span",Ht,[l(r,{icon:"fa-solid fa-file-pen"})]),s(t).dataset.name.$error?(i(),n("span",Bt,[l(r,{icon:"fa-solid fa-exclamation-triangle"})])):d("",!0),c(s(t).dataset.name)?(i(),n("span",Pt,[l(r,{icon:"fa-solid fa-check"})])):d("",!0)]),(i(!0),n(h,null,g(s(t).dataset.name.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))]),e("div",Yt,[e("p",zt,[b(e("textarea",{class:p(["textarea has-fixed-size",{"is-danger":s(t).dataset.description.$error,"is-success":c(s(t).dataset.description)}]),placeholder:"Description of Dataset","onUpdate:modelValue":o[12]||(o[12]=a=>s(t).dataset.description.$model=a),onBlur:o[13]||(o[13]=(...a)=>s(t).dataset.description.$touch&&s(t).dataset.description.$touch(...a)),"aria-invalid":s(t).dataset.description.$error},null,42,Ft),[[_,s(t).dataset.description.$model]])]),(i(!0),n(h,null,g(s(t).dataset.description.$errors,a=>(i(),n("p",{class:"help is-danger",key:a.$uid},m(a.$message),1))),128))])])]),Ot,Qt,f.value?(i(),n("div",Jt,[e("p",null,[j("A server error has been encountered: "),e("strong",null,m(f.value),1),j(". If errors persist, please contact "),Mt,j(" for additional support.")])])):d("",!0),E.value&&!c(s(t))?(i(),n("div",Ut,Zt)):d("",!0),e("div",At,[e("button",{class:p(["button is-primary",{"is-loading":y.value}]),type:"submit",disabled:!k.value},"Submit",10,Gt)])],32))])}}},Xt={class:"pb-6 has-padding-mobile"},Rt={class:"container is-max-desktop"},Lt=e("article",{class:"mb-4"},[e("h1",{class:"page-heading mt-5 has-color-dot"},"ITS DataHub Submissions"),e("p",{class:"mb-2"}," ITS DataHub is a web-system designed for storing and making any open, non-personally identifiable data generated by the ITS Joint Program Office (JPO) funded projects discoverable. If you have a dataset that you would like to include in the ITS DataHub, please submit the form below to send your request to the ITS JPO Data Program. The information you are required to submit will include the publisher, a point of contact, the name of the dataset, and a description of the data being included. "),e("p",{class:"mb-2"}," After you submit the form below, an administrator will be in contact to follow up with next steps, which will include generating a metadata file for your project and submitting it as a ZIP file to ITS DataHub. ")],-1),ss={__name:"SubmissionView",setup(C){return Y({title:"Department of Transportation - ITS DataHub | Metadata Guidelines",meta:[{name:"description",content:"A guide to submitting data to the ITS DataHub."}]}),(y,k)=>{const f=S("Navigation");return i(),n(h,null,[l(f),e("main",null,[e("section",Xt,[e("div",Rt,[Lt,l(Wt)])])])],64)}}};export{ss as default};