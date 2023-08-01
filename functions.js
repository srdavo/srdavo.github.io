function toggleSection(sectionId){
    if (!sectionId) return;

    const activeSection = document.querySelector("section.active");

    if(("#"+activeSection.id) === sectionId){
        return; // Comprobamos que no repitamos codigo en la seccion activa
    }
    const activeSelector = document.querySelector("selector.active");
    activeSection.classList.remove("active");
    activeSelector.classList.remove("active");

    const section = document.querySelector(sectionId);
    selector = event.currentTarget;

    section.classList.toggle("active");
    selector.classList.toggle("active");
    
}


function toggleWindow(windowId){
    if (windowId == ''){windowId = null}
  
    const transparent = document.querySelector('transparent');
    const activeWindow = transparent.querySelector('window.active');
    if (activeWindow) {
      activeWindow.classList.remove('active');
      transparent.classList.remove('active');
      resetForm();
      return;
    }
    const window = document.querySelector(windowId);
    if (!window) {
      console.log('La ventana con el ID especificado no se encontró.');
      return;
    }
    
    transparent.classList.toggle('active'); 
    if (event && event.currentTarget) {
      element = event.currentTarget;
    }else{element = null}
    // window.classList.toggle('active');
    animate(element, window);
}
function animate(element, window){
    let state = Flip.getState(element);
    window.classList.toggle('active');
    Flip.from(state, {
      targets: window,
      duration: .5,
      scale: true,
      ease: CustomEase.create("custom", "M0,0 C0.308,0.19 0.107,0.633 0.288,0.866 0.382,0.987 0.656,1 1,1 "),
    //   ease: CustomEase.create("easeName", ".47,.29,0,1"),
    //   ease: CustomEase.create("easeName", ".58,.18,0,1"),
    //   ease: CustomEase.create("easeName", ".21,.19,0,1"),
    //   ease: CustomEase.create("emphasized", "0.2, 0, 0, 1"),
    //   ease: CustomEase.create("classic", "0.1, 0.8, 0, 1"),
    //   ease: CustomEase.create("classic", "0.4, 0.4, 0, 1.2"),
      absolute: true,
    })
    
} 
function resetForm(){
    inputs = document.querySelectorAll('input, textarea, select:not(.no-reset)');
    for (let i=0; i<inputs.length; i++){
      inputs[i].value = inputs[i].defaultValue;
      inputs[i].style.backgroundColor = "";
      inputs[i].classList.remove('error');
    }
    if(document.getElementById('new_selects') !== null){
      document.getElementById('new_selects').innerHTML = '';
    }
    button = document.querySelector("BUTTON")
    if(button){
      button.disabled = false;
    }
    loadAnimation('body', false);
}



document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('ripple_effect')) {
  
      var body = document.querySelector('body');
      var x, y;
      
      if (event.target.tagName === 'BUTTON') { // Si el elemento es un botón
        var rect = event.target.getBoundingClientRect();
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
      } else { // Si el elemento es un enlace
        x = event.offsetX;
        y = event.offsetY;
      }
      
      var ripples = document.createElement('ripple');
      var size = event.target.offsetWidth * 2;
      ripples.style.left = x - size/2 + 'px';
      ripples.style.top = y - size/2 + 'px';
      event.target.appendChild(ripples);
      ripples.style.width = ripples.style.height = size + 'px';
  
      setTimeout(() => {
        ripples.remove();
      }, 1000);
    }
  });