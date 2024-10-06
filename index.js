import{a as S,i as l,S as q}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function m(r){const t=document.querySelector(".gallery"),s=r.hits.map(({webformatURL:c,largeImageURL:e,tags:o,likes:a,views:v,comments:w,downloads:L})=>`<li class="gallery-query">
    <a class="gallery-link" href="${e}">
    <img class="gallery-image"
    src="${c}"
    data-source="${e}"
    alt="${o}"
    width="360"  onclick="return false">
    <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${a}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${v}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${w}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${L}</p>
                    </li>
                </ul>
            </a>
       </li>`).join("");t.insertAdjacentHTML("beforeend",s)}function p(){document.querySelector(".loader").classList.remove("visually-hidden")}function i(){document.querySelector(".loader").classList.add("visually-hidden")}function b(){document.querySelector(".load-more").classList.remove("visually-hidden")}function y(){document.querySelector(".load-more").classList.add("visually-hidden")}const P="https://pixabay.com/api/",M="46311357-e3a4e4c71d54a60b91a510c1d";async function h(r,t=1){try{return(await S.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(s){throw y(),i(),console.log(s),s}}const g=document.querySelector(".form"),$=document.querySelector(".gallery");let f=null,u=1;const d=15,R=document.querySelector(".load-more");let n="";g.addEventListener("submit",async r=>{if(r.preventDefault(),n=g.elements.query.value.trim(),n===""){l.error({title:"",message:"Query is invalid! Please enter search parameters!",position:"topRight"});return}$.innerHTML="",u=1;try{p();const t=await h(n,u,d);m(t),f=new q(".gallery a").refresh(),i(),t.hits.length>=d?b():y(),t.totalHits===0&&(i(),l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(t){console.error("Error fetching images",t),l.error({title:"",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}finally{i(),g.reset()}});function E(){const{height:r}=document.querySelector(".gallery-query").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}R.addEventListener("click",async()=>{if(u+=1,n===""){l.error({title:"",message:"Query is invalid! Please enter search parameters!",position:"topRight"});return}try{p();const r=await h(n,u,d);m(r),f.refresh(),E(),r.hits.length<d&&(y(),l.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r),l.error({title:"",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}finally{i()}});
//# sourceMappingURL=index.js.map
