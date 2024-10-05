import{a as L,i as a,S}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const q="https://pixabay.com/api/",b="46311357-e3a4e4c71d54a60b91a510c1d";async function y(t,r=1){try{return(await L.get(q,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(o){throw console.log(o),o}}function g(t){const r=document.querySelector(".gallery"),o=t.hits.map(({webformatURL:n,largeImageURL:e,tags:s,likes:l,views:f,comments:v,downloads:w})=>`<li class="gallery-query">
    <a class="gallery-link" href="${e}">
    <img class="gallery-image"
    src="${n}"
    data-source="${e}"
    alt="${s}"
    width="360"  onclick="return false">
    <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${l}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${f}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${v}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${w}</p>
                    </li>
                </ul>
            </a>
       </li>`).join("");r.insertAdjacentHTML("beforeend",o)}function m(){document.querySelector(".loader").classList.remove("visually-hidden")}function i(){document.querySelector(".loader").classList.add("visually-hidden")}function P(){document.querySelector(".load-more").classList.remove("visually-hidden")}function p(){document.querySelector(".load-more").classList.add("visually-hidden")}const c=document.querySelector(".form"),M=document.querySelector(".gallery");let h=null,u=1;const d=15,$=document.querySelector(".load-more");c.addEventListener("submit",async t=>{t.preventDefault();const r=c.elements.query.value.trim();if(r===""){a.error({title:"",message:"Query is invalid! Please enter search parameters!",position:"topRight"});return}M.innerHTML="",u=1;try{m();const o=await y(r,u,d);g(o),h=new S(".gallery a").refresh(),i(),o.hits.length>=d?P():p(),o.totalHits===0&&(i(),a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(o){console.error("Error fetching images",o),a.error({title:"",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}finally{i(),c.reset()}});function E(){const{height:t}=document.querySelector(".gallery-query").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}$.addEventListener("click",async()=>{u+=1;const t=c.elements.query.value.trim();try{m();const r=await y(t,u,d);g(r),h.refresh(),i(),E(),r.hits.length<d&&(p(),a.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r),a.error({title:"",message:"Sorry, something went wrong. Please try again!",position:"topRight"})}finally{i()}});
//# sourceMappingURL=index.js.map
