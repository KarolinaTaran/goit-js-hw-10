import{i as d,f as m}from"./vendor-77e16229.js";d.settings({close:!0,messageColor:"white",backgroundColor:"red",position:"topCenter",closeOnClick:!0});let i,c;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],g()}},w=document.getElementById("datetime-picker");m(w,C);const a=document.querySelector("[data-start]");let b=document.querySelectorAll(".value");function g(){i<new Date?(d.show({message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}a.addEventListener("click",()=>{k(),a.disabled=!0});function k(){c&&clearInterval(c),c=setInterval(()=>{const t=new Date().getTime(),n=i-t;if(n<=0)clearInterval(c),console.log("Countdown finished!"),a.disabled=!1;else{const{days:s,hours:r,minutes:e,seconds:o}=p(n);y(s,r,e,o)}},1e3)}function p(t){const o=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:l,minutes:f,seconds:h}}function y(t,n,s,r){b.forEach((e,o)=>{switch(o){case 0:e.textContent=`${t}`;break;case 1:e.textContent=`${u(n)}`;break;case 2:e.textContent=`${u(s)}`;break;case 3:e.textContent=`${u(r)}`;break}})}function u(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer-dfd255e8.js.map
