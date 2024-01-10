function menu() {
    const menuTrigger = document.querySelector('#menutrigger');
    
    const menu = document.querySelector('.mobile-nav-content');
    const first = document.querySelector('.first__ham');
    const second = document.querySelector('.second__ham');
    const third = document.querySelector('.third__ham');
    

    
  
    menuTrigger.addEventListener('click', toggleMenu);

   
    function openMenu() {
        menuTrigger.ariaExpanded = 'true';
        
    };
    function closeMenu() {
        menuTrigger.ariaExpanded = 'false';
        menuTrigger.focus();
        menu.id = ""
    };
    function toggleMenu() {
        const isExpanded = menuTrigger.attributes['aria-expanded'].value === 'true';
        menu.id = "menu-active"
        first.classList.toggle('first__ham_open');
        second.classList.toggle('second__ham_open');
        third.classList.toggle('third__ham_open');
    
        
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
            
        }
    };


    



}


menu();