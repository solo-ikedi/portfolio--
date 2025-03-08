document.addEventListener("DOMContentLoaded", function () {
    // Generate multiple bubbles dynamically
    const bubbleContainer = document.querySelector(".bubbles");
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("span");
        bubble.classList.add("bubble");
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubbleContainer.appendChild(bubble);
    }

    // Handle moving letters of "Solomon Ikedi" falling effect
    const solomonText = document.querySelector(".solomon-text");
    const name = "Solomon Ikedi".split("");
    solomonText.innerHTML = name.map((letter, index) => 
        `<span style="animation-delay: ${index * 0.2}s">${letter}</span>`
    ).join("");

    // Project Video Switching for iPhone & Laptop
    const projects = [
        "images/mine e.jpg",
        "videos/portfolio.mp4",
        "videos/patient_dashboard.mp4",
        "videos/family_prestige.mp4",
        "videos/IVTC CAP.mp4",
        "videos/My.mp4"
    ];
    let currentProject = 0;
    const iphoneVideo = document.getElementById("iphone-project-video");
    const laptopVideo = document.getElementById("laptop-project-video");
    document.getElementById("next-project").addEventListener("click", function() {
        currentProject = (currentProject + 1) % projects.length;
        iphoneVideo.src = projects[currentProject];
        laptopVideo.src = projects[currentProject];
        iphoneVideo.play();
        laptopVideo.play();
    });

    // Mobile Navbar Toggle
    document.querySelector(".navbar-toggler").addEventListener("click", function() {
        document.querySelector("#navbarNav").classList.toggle("show");
    });

    // Light & Dark Mode Toggle
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.innerText = "🌙";
    toggleThemeBtn.classList.add("btn", "btn-outline-warning", "ms-3");
    document.querySelector(".navbar .container").appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        document.querySelector(".navbar").classList.toggle("navbar-light");
        document.querySelector(".navbar").classList.toggle("bg-light");
        toggleThemeBtn.innerText = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    // Improved Background Color Transition
    setInterval(() => {
        document.body.style.background = `linear-gradient(135deg, rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}), rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}))`;
    }, 5000);

    // iPhone Rotation Animation
    const iphoneFrame = document.querySelector(".iphone-frame");
    setInterval(() => {
        iphoneFrame.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    }, 3000);
});
