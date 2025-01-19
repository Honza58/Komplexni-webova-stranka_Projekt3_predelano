
const body = document.querySelector("body");
const menuIcon = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossMenu = document.querySelector(".cross-menu");
const hamburgerMenuLight = document.querySelector(".hamburger-menu-light");
const navigation = document.querySelector("nav");
const Modes = document.querySelector(".modes");
const modeLight = document.querySelector(".mode-light");
const modeDark = document.querySelector(".mode-dark");
const darkTheme = document.querySelector(".dark-theme");



/**
 * Přidává událost na Modes -  vypíná a zapíná dark mód stránky
 *
 * @var {boolean} modesToogle - logická proměnná (přepínač logiky) 
 * @constant {HTMLElement} Modes - Element div s class-modes => contains inside(classes: mode-dark, mode-light)
 * @constant {HTMLElement} modeDark - Element div s class=mode-dark, zobrazen v light módu
 * @constant {img} hamburgerMenu - Element img s class-hamburger-menu, zobrazen při light módu
 * @constant {HTMLElement} modeLight - Element div s class=mode-light,  zobrazen při aktivní třídě dark-theme na elementu body
 * @constant {img} hamburgerMenuLight - Element img s class-hamburger-menu-light, zobrazen při aktivní třídě dark-theme na elementu body
 * @constant {HTMLElement} darkTheme - Element body s class-dark-theme, při aktivní třídě je stránka zobrazena v tmavém módu
 * @constant {HTMLElement} body - Element body
 * 
 * @returns {void} - funkce nevrací žádnou hodnotu
 *
 * @example //Příklad použití:
 * document.body.classList.toggle("dark-theme") - Přepnutí režimu  při kliknutí
 *
 * @description
 * Před kliknutím na proměnnou "Modes"  je "modesToogle" = false
 * Proměnná "Modes" (class = .modes) obsahuje v Html dva obrázky proměnná modeDark a modeLight
 * Na proměnnou "Modes" (.modes) se přidá událost click.
 * Při kliknutí na Modes se vybere light nebo dark mód dle toho zda je proměnná true nebo false
 * V CSS jsou nastaveny dvě třídy ".visible" a ".hidden"
 * Na základě splnění nebo nesplnění podmínky se tyto dvě třídy přidávají nebo odebírají na elementech v Html
 * Html elementy s přidávající třídou .hidden nebo .visible jsou ".mode-dark", "mode-light", ".hamburger-menu" , ".hamburger-menu-light"
 * Každé kliknutí přepne stránku na light nebo dark mód pomocí "document.body.classList.toggle("dark-theme");"
 */

let modesToogle = false;

  Modes.addEventListener("click", () => {
    if(!modesToogle) {
      modeDark.classList.add("visible");
      hamburgerMenu.classList.add("visible");
      modeLight.classList.remove("visible");
      hamburgerMenuLight.classList.add("hidden");
      modesToogle = true;
    } else {
      modeDark.classList.remove("visible");
      hamburgerMenu.classList.remove("visible");
      modeLight.classList.add("visible");
      hamburgerMenuLight.classList.remove("hidden");
      modesToogle = false;
    }
    document.body.classList.toggle("dark-theme"); 
  });



/**
 * Přidává událost na menuIcon -  rozbaluje a skrývá nabídku menu
 * 
 * @var {boolean} menuOpen -  logická proměnná (přepínač logiky)
 * @constant {HTMLElement} menuIcon - Element div s class-menuIcon => inside(classes: hamburger-menu, hamburger-menu-light, cross-menu)
 * @constant {img} hamburgerMenu - Element img s class-hamburger-menu, zobrazen při light módu
 * @constant {img} hamburgerMenuLight - Element img s class-hamburger-menu-light, zobrazen při aktivní třídě dark-theme, na elementu body
 * @constant {img} crossMenu - Element img s class-cross-menu, zobrazen při rozbalené navigaci
 * @constant {HTMLElement} navigation - Element nav nabídky(menu), zobrazen při rozbalené navigaci
 * 
 * @returns {void} - funkce nevrací žádnou hodnotu
 *
 * @example //Příklad použití:
 * menuIcon.addEventListener("click", ....
 *
 * @description
 * Proměnná menuOpen je nastavena na false, funguje jako tzv. logická proměnná (tzv.přepínač)
 * Na proměnnou menuIcon(class = .menu-icon) je přidána událost "click" pro rozbalení nebo ukrytí menu nabídky
 * V CSS jsou nastaveny 2 třídy ".visible" a ".hidden"
 * Při kliknutí na menuIcon, se dle splnění podmínky u proměnné "menuOpen", přidá třída ".hidden" nebo ".visible"
 * třídy se přidají na Html elementy  s třídou ".hamburger-menu", ".hamburger-menu-light", ".cross-menu" a element "nav"
 */
let menuOpen = false

menuIcon.addEventListener("click", () => {
  if(!menuOpen){
    // rozbalí navigační menu
    hamburgerMenuLight.classList.add("hidden");
    hamburgerMenu.classList.add("hidden");
    crossMenu.classList.add("visible");
    navigation.classList.add("visible");
    menuOpen = true;
  } else {
    // sbalení nabídky
    crossMenu.classList.remove("visible");
    navigation.classList.remove("visible");

     
    if(!body.classList.contains("dark-theme")){
      // pokud není aktivní třída .dark-theme na elementu body 
      hamburgerMenu.classList.remove("hidden");
      hamburgerMenuLight.classList.add("hidden");
    } else {
      //pokud je aktivní třída .dark-theme na elementu body 
      hamburgerMenu.classList.add("hidden");
      hamburgerMenuLight.classList.remove("hidden");
    }
    menuOpen = false;
  }  
})


const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");
const errorPostal = document.getElementById("errorPostal");
const errorPhone = document.getElementById("errorPhone");
const errorEmail = document.getElementById("errorEmail");
const errorEmailConfirm = document.getElementById("errorEmailConfirm")
const errorPassword = document.getElementById("errorPassword");

const regexPostal = /^\d{5}$/;
const regexPhone = /^\+([0-9]{3})([0-9]{9})$/;
const regexEmail = /^([a-zA-Z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,11})$/;
const messageAllPattern = document.getElementById("messageAllPattern");




/**
 * Funkce kontroluje ve formuláři prázdnost polí, správnost formátu psč, tel. čísla, emailů a shodnost emailů a hesel)
 *
 * ----lokální proměnné-----
 * @const {attribute} name - atribut name="name" inputu s id="name" pro zadávání jména
 * @const {attribute} surname - atribut name="surname" inputu s id="surname" pro zadávání příjméní
 * @const {attribute} street - atribut name="street" inputu s id="street" pro zadávání ulice
 * @const {attribute} town - atribut name="town" inputu s id="town" pro zadávání města
 * @const {attribute} postal - atribut name="postal" inputu s id="postal" pro zadávání PSČ
 * @const {attribute} phone - atribut name="phone" inputu s id="phone" pro zadávání telefonu
 * @const {attribute} email1 - atribut name="email1" inputu s id="email1" pro zadávání emailu
 * @const {attribute} emailConfirm - atribut name="emailConfirm" inputu s id="emailConfirm" pro zadávání potvrzení emailu
 * @const {attribute} passWord1 - atribut name="passWord1" inputu s id="passWord1" pro zadávání hesla
 * @const {attribute} passwordConfirm - atribut name="passwordConfirm " inputu s id="passwordConfirm " pro zadávání potvrzení hesla
 * 
 * @constant {testregex} validPostal - v proměnné se testuje shodnost zadaného PSČ s regulárním výrazem v proměnné regexPostal
 * @constant {testregex} validPhone - v proměnné se testuje shodnost zadaného tel.čísla s regulárním výrazem v proměnné regexPhone 
 * @constant {testregex} validEmail - v proměnné se testuje shodnost zadaného emailu s regulárním výrazem v proměnné regexEmail
 * @constant {match} emailMatch - v proměnné se testuje shodnost zadaného emailu v inputu s id ="email1"(const email1) s inputem  s id="emailConfirm"(const emailConfirm)
 * @constant {match} passwordMatch - v proměnné se testuje shodnost zadaného emailu v inputu s id ="password1"(const password11) s inputem s id="passwordConfirm"(const passwordConfirm)
 * 
 * @const {boolean} allInputs - v proměnné jsou všechny inputy formuláře, kontrola naplnění inputů
 * @const {boolean} allValid - v proměnné jsou uloženy proměnné, které kontolují shodnost a správný formát emailů, hesel, psč, tel. čísla
 * @var {array} allInputsEmptyOut - v proměnné je pole prvků s třídou input ve formuláři
 * -----konec lokální proměnné------
 * 
 * @returns {void} - funkce nevrací žádnou hodnotu
 *
 * @description
 * Na element form je přidána událost input,
 * která při vyplňování formuláře neustále kontroluje správnost formátu psč, tel. čísla, emailů, shodnost emailů a hesel, a nepovoluje shodnost u emailů a hesel při prázdných řádcích
 * Do konstant ve funkci se načtou hodnoty (@constant {attribute}) z jednotlivých polí (inputů) formuláře....
 * U konstant (@constant {testregex} a @constant {match}) se kontroluje shoda zadaných hodnot s regulárními výrazy a shodnost dvou emailů a dvou hesel.
 */

form.addEventListener("input" , () => {


  const name = form.name.value.trim();
  const surname = form.surname.value.trim();
  const street = form.street.value.trim();
  const town = form.town.value.trim();
  const postal = form.postal.value.trim();
  const phone = form.phone.value.trim();
  const email1 = form.email1.value.trim();
  const emailConfirm = form.emailConfirm.value.trim();
  const password1 = form.password1.value.trim();
  const passwordConfirm = form.passwordConfirm.value.trim();

  const validPostal = regexPostal.test(postal);
  const validPhone = regexPhone.test(phone);
  const validEmail = regexEmail.test(email1);
  const emailMatch = email1 === emailConfirm;
  const passwordMatch = password1 === passwordConfirm;

  
const allInputs = [name && surname && street && town && postal && phone && email1 && emailConfirm && password1 && passwordConfirm].every(Boolean);
const allValid = validPostal && validPhone && validEmail && emailMatch && passwordMatch;
const errorAllmessages = [errorPostal, errorPhone, errorEmail, errorEmailConfirm, errorPassword]

let allInputsEmptyOut = document.querySelectorAll(".input")

// Kontrola vyplnění všech inputů

if (!allInputs) {
  errorPassword.textContent = "Vyplňte prosím formulář!";
  submitBtn.disabled = true;
} else if(!allValid) {
  errorPassword.textContent = "Zkontrolujte formulář!";
  submitBtn.disabled = true;
} else {
  errorPassword.textContent = "";
  messageAllPattern.textContent = "Formulář je vyplněn správně, můžete ho odeslat";
  messageAllPattern.classList.remove("invalid");
  messageAllPattern.classList.add("valid")
  submitBtn.disabled = false;
  
}

// po kliknutí se vyprázdní všechny inputy a skryjí se všechny hlášky kromě "Formulář byl odeslán"
submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (!submitBtn.disabled) {
    messageAllPattern.textContent = "Formulář byl odeslán";
    messageAllPattern.classList.remove("invalid");
    messageAllPattern.classList.add("valid");
    submitBtn.disabled = true;
  }
  errorAllmessages.forEach((errorAllmessages) => {
    errorAllmessages.textContent = "";

  allInputsEmptyOut.forEach((allInputsEmptyOut) => {
    allInputsEmptyOut.value = "";   
    })    
  })
})



// Kontrola správnosti formátu PSČ dle regulárního výrazu
if (!validPostal) {
  errorPostal.textContent = "PSČ nemá správný formát!";
  errorPostal.classList.add("invalid");
  errorPostal.classList.remove("valid");
  
} else {
  errorPostal.textContent = "PSČ má správný formát";
  errorPostal.classList.remove("invalid");
  errorPostal.classList.add("valid")
}

// Kontrola správnosti formátu Tel.čísla dle regulárního výrazu
if (!validPhone) {
  errorPhone.classList.textContent = "Tel. číslo nemá správný formát";
  errorPhone.classList.add("invalid");
  errorPhone.classList.remove("valid");
} else {
  errorPhone.textContent = "Tel. číslo má správný formát";
  errorPhone.classList.remove("invalid");
  errorPhone.classList.add("valid");
}

// Kontrola správnosti formátu emailu dle regulárního výrazu
if (!validEmail) {
  errorEmail.textContent = "Email nemá správný formát";
  errorEmail.classList.add("invalid");
  errorEmail.classList.remove("valid");
} else {
  errorEmail.textContent = "Email má správný formát";
  errorEmail.classList.remove("invalid");
  errorEmail.classList.add("valid");
}

// Kontrola shodnosti emailů a upozornění na prázdné pole emailů
if (!emailMatch) {
  errorEmailConfirm.textContent = "Emaily se neshodují";
  errorEmailConfirm.classList.add("invalid");
  errorEmailConfirm.classList.remove("valid");
} else if (email1 === "" && emailConfirm ==="") {
  errorEmailConfirm.textContent = "Emaily nesmí být prázdné";
  errorEmailConfirm.classList.add("invalid");
  errorEmailConfirm.classList.remove("valid");
} else {
  errorEmailConfirm.textContent = "Emaily se shodují";
  errorEmailConfirm.classList.remove("invalid");
  errorEmailConfirm.classList.add("valid");
}

// Kontrola shodnosti hesel a upozornění na prázdné pole hesel
if (!passwordMatch) {
  errorPassword.textContent = "Hesla se neshodují!"
  errorPassword.classList.add("invalid");
  errorPassword.classList.remove("valid");
} else if (password1 === "" && passwordConfirm === "") {
  errorPassword.textContent = "Hesla musí být vyplněna"
  errorPassword.classList.add("invalid");
  errorPassword.classList.remove("valid");
} else {
  errorPassword.textContent = "Hesla se shodují"
  errorPassword.classList.remove("invalid");
  errorPassword.classList.add("valid");
} 


/**
 * Přidává událost na window - zobrazí ikonu šipky po scrolování stránky směrem dolů
 *
 * @constant {picture} bigArrow - element div s obrázkem šipky
 *
 * @example //Příklad použití:
 * window.addEventListener("scroll", () => {if (window.scrollY > 30) {....
 *
 * @description
 * přidána událost scroll na  window
 * pokud scroluješ dolů o více než 30px..
 * pak se objeví ikona šipky "bigArrow.classList.remove("hidden")"
 * po kliknutí na ikonu šipky vyjede stránka nahoru
 */

const bigArrow = document.querySelector(".arrow-up-big");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    bigArrow.classList.remove("hidden");
  } else {
    bigArrow.classList.add("hidden");
  }
});
bigArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

})
