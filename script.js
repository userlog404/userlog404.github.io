/*LOADING SCREEN*/
document.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".lad_home").classList.add("active");
    /*LOADER*/
    document.querySelector(".page_loader").classList.add("fade_out");
    setTimeout(() =>{
        document.querySelector(".page_loader").style.display = "none";
    },600);
});

/*NAVBAR*/ 
const navTodd = document.querySelector(".nav_todd");
navTodd.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide_scroll");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade_out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}



/*POPPY*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view_project_btn")){
        togglePoppy();
        document.querySelector(".portfolio_poppy").scrollTo(0,0);
        portfolioDetails(e.target.parentElement);
    }
} );

function togglePoppy(){
    document.querySelector(".portfolio_poppy").classList.toggle("open");
    document.body.classList.toggle("hide_scroll");
    document.querySelector(".main").classList.toggle("fade_out");
}

document.querySelector(".pop_close").addEventListener("click", togglePoppy);

/*HIDE POPPY*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pop_inner")){
        togglePoppy();
    }
});

function portfolioDetails(portfolioItem){
    document.querySelector(".pop_thumb img").src =
    portfolioItem.querySelector(".item_thumb img").src;
 
    document.querySelector(".pop_header h3").innerHTML =
    portfolioItem.querySelector(".port_item_title").innerHTML;
    
    document.querySelector(".pop_body").innerHTML =
    portfolioItem.querySelector(".port_item_details").innerHTML;
}


/*ACTIVE*/
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("link_item") && e.target.hash !== ""){
        //activate overlay
        document.querySelector(".overlay").classList.add("active");
        navTodd.classList.add("hide");
        const hash = e.target.hash;
        if(e.target.classList.contains("nav_item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide_scroll");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade_out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

/*ABOUT ME*/
const tabsContainer = document.querySelector(".about_tabs"),
aboutSection = document.querySelector(".about_sec");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab_item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab_content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// /*FORM CHECK*/
// const form = document.getElementById('contact_form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('message');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const nameValue = name.value.trim();
// 	const emailValue = email.value.trim();
// 	const messageValue = message.value.trim();
	
// 	if(nameValue === '') {
// 		setErrorFor(name, 'Name cannot be blank');
// 	} else {
// 		setSuccessFor(name);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(messageValue === '') {
// 		setErrorFor(message, 'Message cannot be blank');
// 	} else {
// 		setSuccessFor(message);
// 	}
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }