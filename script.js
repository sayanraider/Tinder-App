let users = [
    {
        profilepic: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 6,
        displaypic: "https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        location: "kolkata, India",
        
        name: "Jayantika",
        age: 21,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-vip-crown-2-line"></i>`,
                interest: "gaming"
            }
        ],
        bio: "If you swipe right I will cook you dinner",
        isFriends: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1718938610048-843cfecefef6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       
        displaypic: "https://images.unsplash.com/photo-1719054415089-9d834be43f64?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 8,
        location: "vopal, India",
        name: "sayantika",
        age: 21,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-vip-crown-2-line"></i>`,
                interest: "gaming"
            }
        ],
        bio: "If you swipe right I will cook you dinner",
        isFriends: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       
        displaypic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 8,
        location: "vopal, India",
        name: "Nayantika",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-vip-crown-2-line"></i>`,
                interest: "gaming"
            }
        ],
        bio: "If you swipe right I will cook you dinner",
        isFriends: true
    },
    {
        profilepic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
       
        displaypic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 8,
        location: "vopal, India",
        name: "Kaberi",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-vip-crown-2-line"></i>`,
                interest: "gaming"
            }
        ],
        bio: "If you swipe right I will cook you dinner",
        isFriends: null
    },
    
];

function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;
function setData(index){
    select(".prflimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[curr].interests.forEach(function (interest) {
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
            ${interest.icon}
            <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
        </div>`;
    });
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[curr].bio;
    
}

(function setInitial() {
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr + 1]?.displaypic;

    setData(curr);
    curr = 2;
})();

function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displaypic;
                
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
           // ease: "Circ",
            duration: 0.9
        }, "a")
            .from(".incomingcard", {
                scale: 0.9,
                opacity: 0,
               // ease: "Circ",
                duration: 1.1
            }, "a");
    }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details.element", {
        y: "100%",
        opacity: 0,
        stagger: 0.06,
        //ease:power4.easeInOut,
        duration: 1.5
    });
    
});
accept.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details.element", {
        y: "100%",
        opacity: 0,
        stagger: 0.06,
        //ease:power4.easeInOut,
        duration: 1.5
    });
    
});

(function containerCreator() {
    document.querySelectorAll(".element").forEach(function (element) {
        let div = document.createElement("div");
        div.classList.add('${element.classList[1]}container', 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    });
})();


