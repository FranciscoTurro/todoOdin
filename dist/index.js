(()=>{"use strict";const e=e=>{1==t[e].checked?t[e].checked=!1:t[e].checked=!0},t=[],n=document.querySelector(".newTodo"),d=document.getElementById("description"),c=document.getElementById("date"),o=document.getElementById("project"),a=document.getElementById("content"),i=document.getElementById("sidebar"),l=document.getElementById("datalist"),s=document.querySelector(".allTodo");document.getElementById("debug").addEventListener("click",(()=>{t.forEach((e=>{console.log(e)}))})),n.addEventListener("click",(()=>{a.innerHTML="",t.push(((e,t,n,d)=>({description:e,dueDate:t,checked:n,project:d}))(d.value,c.value,!1,o.value)),r(),p(o.value),m(),description.value="",c.value="",o.value=""})),s.addEventListener("click",(()=>{a.innerHTML="",r()}));const r=()=>{for(let n=0;n<t.length;n++){const d=document.createElement("div");d.classList.add("todoDiv");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.classList.add(n);const o=document.createElement("div");o.textContent=t[n].description;const i=document.createElement("div");i.textContent=t[n].dueDate,1==t[n].checked&&(d.classList.add("checked"),c.checked=!0),d.appendChild(c),d.appendChild(o),d.appendChild(i),a.appendChild(d),c.addEventListener("click",(t=>{e(parseInt(t.target.classList)),t.target.parentNode.classList.toggle("checked")}))}},u=[],p=e=>{if(""!=e&&!u.find((t=>t===e))){u.push(e);const t=document.createElement("button");t.classList.add("projBtn"),t.textContent=e,i.appendChild(t),t.addEventListener("click",(()=>{a.innerHTML="",h(t.textContent)}))}},m=()=>{l.innerHTML="",u.forEach((function(e){var t=document.createElement("option");t.value=e,l.appendChild(t)}))},h=e=>{t.forEach((t=>{t.project==e&&E(t)}))},E=n=>{const d=document.createElement("div");d.classList.add("todoDiv");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.classList.add(t.indexOf(n,0));const o=document.createElement("div");o.textContent=n.description;const i=document.createElement("div");i.textContent=n.dueDate,1==n.checked&&(d.classList.add("checked"),c.checked=!0),d.appendChild(c),d.appendChild(o),d.appendChild(i),a.appendChild(d),c.addEventListener("click",(t=>{e(parseInt(t.target.classList)),t.target.parentNode.classList.toggle("checked")}))},v=document.getElementById("modalContainer");document.querySelector(".modalButton").addEventListener("click",(()=>{v.style.display="block"})),window.addEventListener("click",(e=>{e.target==v&&(v.style.display="none")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQjBDLEVBQVluQyxFQUdkLEdBQ0EsRUFHRW1DLEVBQWVDLElBQ25CLE1BQU10QixFQUFVMUIsU0FBUzJCLGNBQWMsT0FDdkNELEVBQVFFLFVBQVVDLElBQUksV0FDdEIsTUFBTUMsRUFBYzlCLFNBQVMyQixjQUFjLFNBQzNDRyxFQUFZQyxhQUFhLE9BQVEsWUFDakNELEVBQVlGLFVBQVVDLElBQUloQyxFQUFNb0QsUUFBUUQsRUFBTSxJQUM5QyxNQUFNaEIsRUFBaUJoQyxTQUFTMkIsY0FBYyxPQUM5Q0ssRUFBZUMsWUFBY2UsRUFBSy9CLFlBQ2xDLE1BQU1pQixFQUFVbEMsU0FBUzJCLGNBQWMsT0FDdkNPLEVBQVFELFlBQWNlLEVBQUs5QixRQUNQLEdBQWhCOEIsRUFBS2xELFVBQ1A0QixFQUFRRSxVQUFVQyxJQUFJLFdBQ3RCQyxFQUFZaEMsU0FBVSxHQUd4QjRCLEVBQVFTLFlBQVlMLEdBQ3BCSixFQUFRUyxZQUFZSCxHQUNwQk4sRUFBUVMsWUFBWUQsR0FDcEI1QixFQUFRNkIsWUFBWVQsR0FFcEJJLEVBQVlwQixpQkFBaUIsU0FBVTBCLElBQ3JDekMsRUFBa0IwQyxTQUFTRCxFQUFFRSxPQUFPVixZQUNwQ1EsRUFBRUUsT0FBT0MsV0FBV1gsVUFBVVksT0FBTyxVQUFVLEdBQy9DLEVBR0VVLEVBQWlCbEQsU0FBU0csZUFBZSxrQkFDM0JILFNBQVNDLGNBQWMsZ0JBRS9CUyxpQkFBaUIsU0FBUyxLQUNwQ3dDLEVBQWVDLE1BQU1DLFFBQVUsT0FBTyxJQUd4Q0MsT0FBTzNDLGlCQUFpQixTQUFVMEIsSUFDNUJBLEVBQUVFLFFBQVVZLElBQ2RBLEVBQWVDLE1BQU1DLFFBQVUsT0FDakMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9vZGluLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvZG8gPSAoZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNoZWNrZWQsIHByb2plY3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY2hlY2tlZCxcclxuICAgIHByb2plY3QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUNoZWNrZWRUb2RvID0gKG51bWJlcikgPT4ge1xyXG4gIGlmICh0b2Rvc1tudW1iZXJdLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgdG9kb3NbbnVtYmVyXS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvZG9zW251bWJlcl0uY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdG9kb3MgPSBbXTtcclxuXHJcbmV4cG9ydCB7IFRvZG8sIHRvZG9zLCBjaGFuZ2VDaGVja2VkVG9kbyB9O1xyXG4iLCJpbXBvcnQgeyBjaGFuZ2VDaGVja2VkVG9kbywgVG9kbywgdG9kb3MgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xyXG5cclxuY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VG9kb1wiKTtcclxuY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XHJcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XHJcbmNvbnN0IGRhdGFsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhbGlzdFwiKTtcclxuY29uc3QgYWxsVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsVG9kb1wiKTtcclxuY29uc3QgZGVidWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG5cclxuZGVidWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB0b2Rvcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5uZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHRvZG9zLnB1c2goVG9kbyhkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBmYWxzZSwgcHJvamVjdC52YWx1ZSkpO1xyXG4gIGRyYXdUb2RvKCk7XHJcbiAgcHJvamVjdHNDcmVhdG9yKHByb2plY3QudmFsdWUpO1xyXG4gIGRhdGFsaXN0Q29tcGxldGlvbigpO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICBkYXRlLnZhbHVlID0gXCJcIjtcclxuICBwcm9qZWN0LnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5hbGxUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRyYXdUb2RvKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgZHJhd1RvZG8gPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGl2XCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveERpdi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBjaGVja2JveERpdi5jbGFzc0xpc3QuYWRkKGkpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0b2Rvc1tpXS5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG9zW2ldLmR1ZURhdGU7XHJcbiAgICBpZiAodG9kb3NbaV0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XHJcbiAgICAgIGNoZWNrYm94RGl2LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3hEaXYpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuXHJcbiAgICBjaGVja2JveERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY2hhbmdlQ2hlY2tlZFRvZG8ocGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0KSk7XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBuYW1lcyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0c0NyZWF0b3IgPSAocHJvamVjdCkgPT4ge1xyXG4gIGlmIChwcm9qZWN0ID09IFwiXCIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG5hbWVzLmZpbmQoKGUpID0+IGUgPT09IHByb2plY3QpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hbWVzLnB1c2gocHJvamVjdCk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qQnRuXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGRyYXdQcm9qZWN0cyhidXR0b24udGV4dENvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZGF0YWxpc3RDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGRhdGFsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBpdGVtO1xyXG4gICAgZGF0YWxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XHJcbiAgdG9kb3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQucHJvamVjdCA9PSBwcm9qZWN0KSB7XHJcbiAgICAgIGRyYXdUb2RvT25lKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZHJhd1RvZG9PbmUgPSAodG9kbykgPT4ge1xyXG4gIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9EaXZcIik7XHJcbiAgY29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tib3hEaXYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gIGNoZWNrYm94RGl2LmNsYXNzTGlzdC5hZGQodG9kb3MuaW5kZXhPZih0b2RvLCAwKSk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG4gIGlmICh0b2RvLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcclxuICAgIGNoZWNrYm94RGl2LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveERpdik7XHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG5cclxuICBjaGVja2JveERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNoYW5nZUNoZWNrZWRUb2RvKHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdCkpO1xyXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcclxuY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQnV0dG9uXCIpO1xyXG5cclxubW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAvL21ha2VzIHRoZSBtb2RhbCBhcHBlYXJcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ID09IG1vZGFsQ29udGFpbmVyKSB7XHJcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vbWFrZXMgdGhlIG1vZGFsIGRpc3NhcHBlYXIgaWYgaSBjbGljayBvdXRzaWRlIG9mIGl0XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNoYW5nZUNoZWNrZWRUb2RvIiwibnVtYmVyIiwidG9kb3MiLCJjaGVja2VkIiwibmV3VG9kbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlc2MiLCJnZXRFbGVtZW50QnlJZCIsImRhdGUiLCJwcm9qZWN0IiwiY29udGVudCIsInNpZGViYXIiLCJkYXRhbGlzdCIsImFsbFRvZG8iLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwicHVzaCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsIlRvZG8iLCJ2YWx1ZSIsImRyYXdUb2RvIiwicHJvamVjdHNDcmVhdG9yIiwiZGF0YWxpc3RDb21wbGV0aW9uIiwiaSIsImxlbmd0aCIsInRvZG9EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hlY2tib3hEaXYiLCJzZXRBdHRyaWJ1dGUiLCJkZXNjcmlwdGlvbkRpdiIsInRleHRDb250ZW50IiwiZGF0ZURpdiIsImFwcGVuZENoaWxkIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInRvZ2dsZSIsIm5hbWVzIiwiZmluZCIsImJ1dHRvbiIsImRyYXdQcm9qZWN0cyIsIml0ZW0iLCJvcHRpb24iLCJkcmF3VG9kb09uZSIsInRvZG8iLCJpbmRleE9mIiwibW9kYWxDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9