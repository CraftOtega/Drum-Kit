const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) =>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(" + kit + ".png)";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    audioEl.src = kit + ".mp3"
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    });
    window.addEventListener("keydown", ()=>{
        if(event.key === kit.slice(0,1)){;
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)";
            }, 100);
        };
    })
})