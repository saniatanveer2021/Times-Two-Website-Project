function automaticScrollPerventor() {
    const WrapperContainer = document.querySelector(".WrapperContainer");
    WrapperContainer.addEventListener("wheel", (details) => {
        details.preventDefault();
    }, { passive: false });
}
automaticScrollPerventor();

function loadPreLoaderScreen() {
    gsap.to(window, {
        scrollTo: {
            y: 0,
            autoKill: true
        },
        duration: 0.1,
    })
    let preLoaderScreen = document.querySelector(".loader");
    const preloaderInternalDetails = document.querySelector(".preloaderInternalDetails");
    gsap.to(preloaderInternalDetails, {
        duration:0.1,
        display: "initial",
    })
    gsap.to(preLoaderScreen, {
        delay: 0.2,
        duration: 5.3,
        onComplete: function () {
            preLoaderScreen.style.display = "none";
            preLoaderScreen.style.cursor = "inherit";
            document.body.classList.remove("no-scroll");
            let page1Video = document.querySelector(".page1 video")
            const centerHiddenTextH2 = document.querySelectorAll(".centerHiddenText");
            page1Video.autoplay = true;
            page1Video.muted = true;
            page1Video.play();
            gsap.to(centerHiddenTextH2, {
                delay: 0.2,
                top: "0%"
            })
        }
    })
}
function preloaderScreen() {
    let mainX = document.querySelectorAll("#mainX");
    let X1 = document.querySelectorAll("#X1");
    let X2 = document.querySelectorAll("#X2");
    let times2 = document.querySelectorAll("#times2");
    let firstHeading = document.querySelectorAll(".firstHeading");
    let firstH2 = document.querySelector(".firstHeading h2");
    let secondH2 = document.querySelectorAll("#secondHeading h2");
    let times = document.querySelector(".times h2");
    let two = document.querySelector(".two h2");
    let menuLoadingLine = document.querySelector(".menuLoadingLine");

    gsap.set([mainX, X1], {
        opacity: 0,
        transformOrigin: "center center",
        scaleX: 0
    })
    gsap.set(X2, {
        transformOrigin: "center center",
        rotate: "-71deg",
        opacity: 0
    })
    gsap.set(times2, {
        x: "-100%"
    })
    gsap.set(firstHeading, {
        color: "white",
        y: "30%"
    })
    gsap.set(firstH2, {
        y: "100%",
        scaleX: 1
    })
    gsap.set(secondH2, {
        y: "100%"
    })
    gsap.set(menuLoadingLine, {
        x: "-100%"
    })

    gsap.to(menuLoadingLine, {
        delay: 1,
        duration: 0.5,
        x: "0%"
    })

    let t1 = gsap.timeline();
    t1.to(mainX, {
        delay: 1,
        duration: 0.5,
        ease: Expo.easeOut,
        opacity: 1,
        scaleX: 1,
    })
    t1.to(mainX, {
        rotate: "55deg",
        x: "-31.3%",
        duration: 0.3,
        ease: Expo.easeIn
    })
    t1.to(X1, {
        duration: 0.1,
        ease: Expo.easeOut,
        opacity: 1,
        scaleX: 1,
    })
    t1.to(X2, {
        duration: 0.2,
        opacity: 1,
        rotate: "0deg",
        ease: Expo.easeOut
    })
    gsap.to(firstHeading, {
        delay: 1.8,
        y: "-35%",
    })
    gsap.to(firstHeading, {
        delay: 1.8,
        color: "#7D7D7D",
    })
    gsap.to(firstH2, {
        delay: 1,
        duration: 1,
        y: "0%",
        ease: Expo.easeOut
    })
    gsap.to(secondH2, {
        delay: 1.8,
        y: "0%",
        duration: 1,
        ease: Expo.easeOut
    })
    gsap.to([times, two], {
        delay: 1.8,
        color: "white",
    })
    gsap.to(firstH2, {
        delay: 3.4,
        y: "-100%"
    })
    gsap.to(times, {
        delay: 3.3,
        left: "5vw",
        duration: 0.5,
        ease: Expo.easeIn
    })
    gsap.to(two, {
        delay: 3.3,
        right: "3.5vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    let topX2 = document.querySelector(".topBottomX2 #topX2");
    let bottomX2 = document.querySelector(".topBottomX2 #bottomX2");
    gsap.set([topX2, bottomX2], {
        x: "1vw"
    })
    gsap.to(times2, {
        delay: 3.5,
        x: "0%",
        duration: 0.2,
        ease: Expo.easeOut,
    })
    gsap.to([topX2, bottomX2], {
        x: "0.2vw",
        delay: 3.5,
        duration: 0.2,
        ease: Expo.easeOut
    })

    let mainCenterX = document.querySelector("#mainCenterX");
    let mainX_X1 = mainCenterX.querySelector("#centerX1");
    let mainX_X2 = mainCenterX.querySelector("#centerX2");
    mainCenterX.querySelector("#centerX").remove();
    mainCenterX.querySelector("#center2").remove();
    gsap.set(mainCenterX, {
        x: "-145%",
    })
    gsap.set(mainX_X1, {
        opacity: 0,
        y: "80%",
        rotate: "-55deg",
        scaleX: 0.6,
        scaleY: 0.9
    })
    gsap.set(mainX_X2, {
        opacity: 0,
        scaleX: 0.6,
        x: "25.5%",
        y: "123%",
        rotate: "-35.5deg"
    })
    gsap.to(mainCenterX, {
        delay: 3.4,
        x: "90%",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(mainX_X1, {
        delay: 3.4,
        opacity: 1,
        y: "0%",
        rotate: "0deg",
        scaleX: 1,
        scaleY: 1,
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(mainX_X2, {
        delay: 3.4,
        opacity: 1,
        rotate: "0deg",
        scaleX: 1,
        x: "0%",
        y: "0%",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(mainCenterX, {
        delay: 3.9,
        scale: 8.9,
        top: "0.8vh",
        left: "-3.7vw",
        duration: 0.4,
        ease: Expo.easeIn
    })

    let mainCenter2 = document.querySelector("#mainCenter2");
    mainCenter2.querySelector("#centerX").remove();
    mainCenter2.querySelector("#centerX1").remove();
    mainCenter2.querySelector("#centerX2").remove();
    let main2_times2 = mainCenter2.querySelector("#center2");

    gsap.set(mainCenter2, {
        x: "50%",
    })
    gsap.set(main2_times2, {
        x: "100%",
    })
    gsap.to(mainCenter2, {
        delay: 3.4,
        x: "-20%",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(main2_times2, {
        delay: 3.4,
        x: "0%",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(mainCenter2, {
        delay: 3.9,
        scale: 8.8,
        top: "0.6vh",
        left: "-0.9vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    let left2X = document.querySelector(".leftRightX2 #left2X");
    let right2X = document.querySelector(".leftRightX2 #right2X");
    gsap.set(right2X, {
        x: "1vw"
    })
    gsap.to(topX2, {
        delay: 3.9,
        y: "-4vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(bottomX2, {
        delay: 3.9,
        y: "4vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(left2X, {
        delay: 3.9,
        x: "-5vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    gsap.to(right2X, {
        delay: 3.9,
        x: "5vw",
        duration: 0.4,
        ease: Expo.easeIn
    })
    loadPreLoaderScreen();
}
window.addEventListener("load", preloaderScreen);

function customCursor() {
    let customCursor = document.querySelector(".customCursor");
    window.addEventListener("mousemove", (details) => {
        gsap.to(customCursor, {
            duration: 0.3,
            x: details.clientX - 15,
            y: details.clientY - 15
        })
    })
}
customCursor();

function customCursorEnterenceCode() {
    let customCursor = document.querySelector(".customCursor");
    gsap.to(customCursor, {
        duration: 0.2,
        scale: 0.3
    })
}
function customCursorExitCode() {
    let customCursor = document.querySelector(".customCursor");
    gsap.to(customCursor, {
        duration: 0.2,
        scale: 1
    })
}
function navigationAnimationFunction() {
    const navigation = document.querySelector(".navigation");
    navigation.addEventListener("wheel", (details) => {
        details.preventDefault();
    }, { passive: false });
    let leftButton = document.querySelector(".leftButton");
    let firstH1 = document.querySelector(".visibleH2 h2");
    let hidddenH2 = document.querySelectorAll(".hidddenH2 span");
    leftButton.addEventListener("mouseenter", () => {
        leftButton.style.backgroundColor = "black";
        leftButton.style.color = "white";
        leftButton.style.cursor = "pointer";
        customCursorEnterenceCode();
        gsap.to(firstH1, {
            duration: 0.3,
            y: "-1vw"
        })
        gsap.to(hidddenH2, {
            duration: 0.3,
            top: "-0.3vw",
        })
    })
    leftButton.addEventListener("mouseleave", () => {
        leftButton.style.backgroundColor = "transparent";
        leftButton.style.color = "black";
        customCursorExitCode();
        gsap.to(hidddenH2, {
            duration: 0.3,
            top: "1.3vw",
        })
        gsap.to(firstH1, {
            duration: 0.3,
            y: "0vw"
        })
    })

    let rightButton = document.querySelector(".rightButton");
    let firstText = document.querySelectorAll(".marque .firstText");
    let hiddenText = document.querySelectorAll(".hiddenText span");
    rightButton.addEventListener("mouseenter", () => {
        rightButton.style.backgroundColor = "black";
        rightButton.style.color = "white";
        rightButton.style.cursor = "pointer";
        customCursorEnterenceCode();
        gsap.to(firstText, {
            duration: 0.3,
            top: "-1.3vw"
        })
        gsap.to(hiddenText, {
            duration: 0.3,
            top: "-0.2vw",
        })
    })
    rightButton.addEventListener("mouseleave", () => {
        rightButton.style.backgroundColor = "transparent";
        rightButton.style.color = "black";
        customCursorExitCode();
        gsap.to(hiddenText, {
            duration: 0.3,
            top: "1.3vw"
        })
        gsap.to(firstText, {
            duration: 0.3,
            top: "0vw"
        })
    })

}
navigationAnimationFunction();

function centerMenuClickAndDragAnimation() {

    let bottomProjectsLayout = document.querySelector(".bottomProjectsLayout");
    let projectsUpperLayer = document.querySelector(".projectsUpperLayer");
    let dragBarCover = document.querySelector(".dragBarCover");
    let timesTwoLogo = document.querySelector(".bottomProjectsLayout #timesTwoLogo");
    let bottomBrandsList = document.querySelector(".bottomBrandsList");
    let projectsUpperLayerHandBurger = document.querySelector(".projectsUpperLayer .handBurgerIcon");
    let allBrandSlides = document.querySelectorAll(".bottomBrandsList .timesTwoBrand");
    let customCursor = document.querySelector(".customCursor");
    projectsUpperLayer.addEventListener("wheel", (details) => {
        details.preventDefault();
    }, { passive: false });
    projectsUpperLayer.addEventListener("mouseenter", () => {
        customCursorEnterenceCode();
    });
    projectsUpperLayer.addEventListener("mouseleave", () => {
        customCursorExitCode();
    });
    projectsUpperLayerHandBurger.addEventListener("click", () => {
        gsap.to(projectsUpperLayer, {
            duration: 0.2,
            opacity: 0,
            pointerEvents: "none",
        })
        gsap.to(bottomProjectsLayout, {
            y: "1.8vw",
            height: "97vh",
            cursor: "default"
        })
        gsap.to([dragBarCover, timesTwoLogo], {
            opacity: 1,
        })
        gsap.to(bottomBrandsList, {
            top: "16.5%"
        })
    })
    allBrandSlides.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            customCursorEnterenceCode();
        })
        item.addEventListener("mouseleave", () => {
            customCursorExitCode();
        })
    })
    dragBarCover.addEventListener("mouseenter", () => {
        automaticScrollPreventer();
        gsap.to(customCursor, {
            duration: 0.5,
            scale: 0
        })
    })
    dragBarCover.addEventListener("mouseleave", () => {
        gsap.to(customCursor, {
            duration: 0.5,
            scale: 1
        })
    })
    dragBarCover.addEventListener("drag", () => {
        gsap.to(bottomProjectsLayout, {
            duration: 0.2,
            height: "40vw",
            onComplete: () => {
                allowScrolling = false;
                gsap.to(projectsUpperLayer, {
                    duration: 0.5,
                    opacity: 1,
                    ease: "linear",
                    pointerEvents: "all",
                })
                projectsUpperLayer.style.pointerEvents = "all";
                gsap.to([dragBarCover, timesTwoLogo], {
                    duration: 0.3,
                    opacity: 0
                })
                gsap.to(bottomProjectsLayout, {
                    height: "6.8vw",
                    y: "0vw"
                })
                gsap.to(bottomBrandsList, {
                    top: "0%"
                })
            }
        })
    })

    let rightBottomButton = document.querySelector(".rightContainer .button");
    let textCover = document.querySelector(".rightContainer .frontText");
    let visibleH5 = document.querySelector(".frontText h5");
    let hidddenH5 = document.querySelector(".frontText .hiddenText h5");
    gsap.set(hidddenH5, {
        y: "1vw"
    })
    rightBottomButton.addEventListener("mouseenter", () => {
        rightBottomButton.style.backgroundColor = "white";
        textCover.style.color = "black";
        rightBottomButton.style.cursor = "pointer";
        customCursorEnterenceCode();
        gsap.to(visibleH5, {
            duration: 0.3,
            y: "-1vw"
        })
        gsap.to(hidddenH5, {
            duration: 0.3,
            y: "0vw"
        })
    })
    rightBottomButton.addEventListener("mouseleave", () => {
        rightBottomButton.style.backgroundColor = "transparent";
        textCover.style.color = "white";
        customCursorExitCode();
        gsap.to(visibleH5, {
            duration: 0.3,
            y: "0vw"
        })
        gsap.to(hidddenH5, {
            duration: 0.3,
            y: "1.3vw",
        })
    })
}
centerMenuClickAndDragAnimation();

function textAnimation(menuBrandBar) {
    let bottomAnimatedTextH2 = menuBrandBar.querySelector(".bottomAnimatedText h2");
    let bottomHiddenTextH2 = menuBrandBar.querySelector(".bottomHiddenText h2");
    menuBrandBar.style.pointerEvents = "all";
    gsap.set(bottomAnimatedTextH2, {
        y: "0vw"
    })
    gsap.set(bottomHiddenTextH2, {
        y: "1.4vw"
    })
    menuBrandBar.addEventListener("mouseenter", () => {
        gsap.to(bottomAnimatedTextH2, {
            duration: 0.2,
            y: "-1.4vw"
        })
        gsap.to(bottomHiddenTextH2, {
            duration: 0.2,
            y: "0vw"
        })
    })
    menuBrandBar.addEventListener("mouseleave", () => {
        gsap.to(bottomAnimatedTextH2, {
            duration: 0.2,
            y: "0vw"
        })
        gsap.to(bottomHiddenTextH2, {
            duration: 0.2,
            y: "1.4vw"
        })
    })
}
function menuTextAnimationOnHover() {
    const animations = [
        { timesTwoBrandBottomAnimatedText: ".timesTwoBrand .leftSideDetails" },
        { dueBottomAnimatedText: ".due .leftSideDetails" },
        { pinecastBottomAnimatedText: ".pinecast .leftSideDetails" },
        { googlePixelBottomAnimatedText: ".googlePixel .leftSideDetails" },
        { gantryBottomAnimatedText: ".gantry .leftSideDetails" },
        { spaceforBottomAnimatedText: ".spacefor .leftSideDetails" },
        { whatWeDoBottomAnimatedText: ".whatWeDo .leftSideDetails" },
        { letsPartnerBottomAnimatedText: ".letsPartner .leftSideDetails" }
    ];
    animations.forEach((animation) => {
        const cssSelector = Object.values(animation)[0];
        const element = document.querySelector(cssSelector);
        textAnimation(element);
    })
}
menuTextAnimationOnHover();

function frontBrandBarTextAnimation() {
    const animations = [
        { timesTwoDetails: "#timesTwoDetails" },
        { dueDetails: "#dueDetails" },
        { pinecastDetails: "#pinecastDetails" },
        { googlePixelDetails: "#googlePixelDetails" },
        { gantryDetails: "#gantryDetails" },
        { spaceforDetails: "#spaceforDetails" },
        { whatWeDoDetails: "#whatWeDoDetails" },
        { letsPartnerDetails: "#letsPartnerDetails" }
    ];
    animations.forEach((animation) => {
        const cssSelector = Object.values(animation)[0];
        const element = document.querySelector(cssSelector);
        textAnimation(element);
    })
}
frontBrandBarTextAnimation();

gsap.registerPlugin(ScrollToPlugin);
function frontBrandBarAnimation(brandLoadingLine, page, pageVideo, brandIMG, currentHeading, nextHeading, videoDurationTime) {
    gsap.to(brandLoadingLine, {
        duration: videoDurationTime,
        width: "82.9%",
        ease: "linear",
        repeat: 0,
        onComplete: () => {
            brandLoadingLine.style.width = "0%";
            gsap.to(brandIMG, {
                top: "0%"
            })
            gsap.to(currentHeading, {
                y: "-1.4vw"
            })
            gsap.to(nextHeading, {
                top: "0%"
            })
            gsap.to(window, {
                scrollTo: {
                    y: page.offsetTop,
                    autoKill: true
                },
                duration: 1,
                ease: "power2.out"
            })
            let leftButton = document.querySelector(".navigation .leftButton");
            let rightButton = document.querySelector(".navigation .rightButton");
            let svg = document.querySelector(".navigation svg");
            if (page.classList.contains("page4", "page5", "page6", "page7")) {
                leftButton.style.border = "1px solid white";
                leftButton.style.color = "white";
                leftButton.addEventListener("mouseenter", () => {
                    leftButton.style.color = "black";
                    leftButton.style.backgroundColor = "white";
                })
                leftButton.addEventListener("mouseleave", () => {
                    leftButton.style.color = "white";
                    leftButton.style.backgroundColor = "transparent";
                })
                svg.style.fill = "white";
                rightButton.style.border = "1px solid white";
                rightButton.style.color = "white";
                rightButton.addEventListener("mouseenter", () => {
                    rightButton.style.color = "black";
                    rightButton.style.backgroundColor = "white";
                })
                rightButton.addEventListener("mouseleave", () => {
                    rightButton.style.color = "white";
                    rightButton.style.backgroundColor = "transparent";
                })
            }
            if (page.classList.contains("page8")) {
                gsap.to(brandLoadingLine, {
                    duration: 15,
                    width: "82.9%",
                    ease: "linear"
                })
                leftButton.style.border = "1px solid black";
                leftButton.style.color = "black";
                leftButton.addEventListener("mouseenter", () => {
                    leftButton.style.color = "white";
                    leftButton.style.backgroundColor = "black";
                })
                leftButton.addEventListener("mouseleave", () => {
                    leftButton.style.color = "black";
                    leftButton.style.backgroundColor = "transparent";
                })
                svg.style.fill = "black";
                rightButton.style.border = "1px solid black";
                rightButton.style.color = "black";
                rightButton.addEventListener("mouseenter", () => {
                    rightButton.style.color = "white";
                    rightButton.style.backgroundColor = "black";
                })
                rightButton.addEventListener("mouseleave", () => {
                    rightButton.style.color = "black";
                    rightButton.style.backgroundColor = "transparent";
                })
            }
            pageVideo.autoplay = true;
            pageVideo.muted = true;
            pageVideo.play();
        }
    })
}
function runSequentialBarAndPageAnimations() {
    let bottomLoadingLine = document.querySelector(".projectsUpperLayer .bottomLoadingLine");
    const animations = [
        { page: ".page2", pageVideo: ".page2 video", img: "#dueIMG", current: "#timesTwoDetails", next: "#dueDetails", delay: 14 },  //14
        { page: ".page3", pageVideo: ".page3 video", img: "#pinecastIMG", current: "#dueDetails", next: "#pinecastDetails", delay: 20 },  //20
        { page: ".page4", pageVideo: ".page4 video", img: "#googlePixelIMG", current: "#pinecastDetails", next: "#googlePixelDetails", delay: 12 },  //12
        { page: ".page5", pageVideo: ".page5 video", img: "#gantryIMG", current: "#googlePixelDetails", next: "#gantryDetails", delay: 5 },  //5
        { page: ".page6", pageVideo: ".page6 video", img: "#spaceforIMG", current: "#gantryDetails", next: "#spaceforDetails", delay: 14 },  //14
        { page: ".page7", pageVideo: ".page7 video", img: "#whatWeDoIMG", current: "#spaceforDetails", next: "#whatWeDoDetails", delay: 30 },  //30
        { page: ".page8", pageVideo: ".page8 video", img: "#letsPartnerIMG", current: "#whatWeDoDetails", next: "#letsPartnerDetails", delay: 43 },  //43
    ];
    let cumulativeDelay = 5.3;
    animations.forEach((animation) => {
        setTimeout(() => {
            const page = document.querySelector(animation.page);
            const pageVideo = document.querySelector(animation.pageVideo);
            const brandIMG = document.querySelector(animation.img);
            const currentHeading = document.querySelector(animation.current);
            const nextHeading = document.querySelector(animation.next);
            frontBrandBarAnimation(bottomLoadingLine, page, pageVideo, brandIMG, currentHeading, nextHeading, animation.delay);
        }, cumulativeDelay * 1000);
        cumulativeDelay += animation.delay;
    })
}
runSequentialBarAndPageAnimations();