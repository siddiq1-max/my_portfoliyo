const elements=document.querySelectorAll("section,.card");

elements.forEach(el=>{
el.style.opacity=0;
el.style.transform="translateY(40px)";
el.style.transition="0.8s";
});

function reveal(){
elements.forEach(el=>{
const pos=el.getBoundingClientRect().top;
if(pos<window.innerHeight-100){
el.style.opacity=1;
el.style.transform="translateY(0)";
}
});
}

window.addEventListener("scroll",reveal);
reveal();

document.querySelectorAll(".glass, .exp-card, .project-card").forEach(card=>{
    card.addEventListener("mousemove", e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / midY) * 8;
        const rotateY = ((x - midX) / midX) * 8;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", ()=>{
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
});
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".hero-img img").forEach(img=>{
        const speed = window.scrollY * 0.08;
        img.style.transform = `translateY(${speed}px)`;
    });
});
