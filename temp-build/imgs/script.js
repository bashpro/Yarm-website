let page = document.querySelector('#content-holder') ,
    menuBtn = document.querySelector('#mctl-btn'),
    navMenu = document.querySelector('#nav'),
    navTop = document.querySelector('#mc-top'),
    navMenuToggle = false,
    btns = document.querySelectorAll('button'),
    btnHoverText,
    hiddenBtn = document.querySelector('#nt-btn')

if(window.innerWidth < 321){
  navMenu.classList.add('mobile-mode')
}

function mobileSettings(i){
  if(i == 't'){
    navMenu.classList.remove('max-[500px]:left-[-60px]')
    navMenu.classList.remove('max-[500px]:w-[0px]')
    navMenu.classList.remove('max-[500px]:min-w-[0px]')
    navMenu.classList.remove('min-w-[100vw]')
    hiddenBtn.classList.remove('hidden')
  }
  else{
    navMenu.classList.add('max-[500px]:left-[-60px]')
    navMenu.classList.add('max-[500px]:w-[0px]')
    navMenu.classList.add('max-[500px]:min-w-[0px]')
    hiddenBtn.classList.add('hidden')
  }
}

window.addEventListener('resize', function() {
  let win = this;
  if (win.innerWidth < 501) {
    mobileSettings('')
    navMenu.classList.add('mobile-mode')
  } else {
    mobileSettings('t')
    navMenu.classList.remove('mobile-mode')
  }
})

let root = document.querySelector(':root')
let rootStyle = getComputedStyle(root)

page.onclick =(e)=>{
  e = e.target
  
  if(e.getAttribute('id') == 'nt-btn'){
    menuBtn.click()
    mobileSettings('')
  }

  if(e.getAttribute('id') == 'mctl-btn'){
    let mobile = false

    function changeMenuMinWidth(i){
      if(i == 't'){
        mobileSettings('t')
        mobile = true
      }
      else{
        mobileSettings('')
        mobile = false
      }
    }

    navMenu.getAttribute('class').includes('mobile-mode') ? changeMenuMinWidth('t') : changeMenuMinWidth('')
    
    navMenuToggle = !navMenuToggle
    
    function navSettings(i){
      if(i == "t"){
        if(mobile){
          navMenu.classList.add('min-w-[100vw]')
        }else{
          navMenu.classList.add('min-w-[200px]')
        }
        
        navMenu.classList.add('open')
       
      }
      else{
        if(mobile){
          navMenu.classList.remove('min-w-[100vw]')
        }
        else{
          navMenu.classList.remove('min-w-[200px]')
        }

        navMenu.classList.remove('open')

      }
    }
  
    navMenuToggle == true ? navSettings("t") : navSettings("")
    
    
    
  }
  else if(e.closest('#mc-bottom')){
    navMenuToggle = false
    navMenu.classList.remove('min-w-[200px]')
    
  } 
  
}

for(let i of btns){
  i.querySelector('[hover-btn]').classList.add('hidden')
}


addEventListener("mouseover", (o)=>{
  for(let i of btns){
    i.querySelector('[hover-btn]').classList.add('hidden')
  }
  
  if(o.target.closest('button') && !navMenuToggle){
    
    btnHoverText = o.target.closest('button').getAttribute('icon-text')
    
    if(btnHoverText != "Home" && btnHoverText != "bars" && btnHoverText != "Log In"  ){
      o.target.closest('button').querySelector('[hover-btn]').classList.remove('hidden')
    }
    
  }
    
})