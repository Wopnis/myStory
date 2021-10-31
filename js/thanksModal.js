const modals = () => {
    function bindModal (trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
           if(e.target) {
               e.preventDefault();
           }
           modal.style.display = 'block';
           document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click',()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    console.log('Hello from modal!');
    
    const modal = document.querySelector('.popup');
    const modalBtn = document.querySelector('[type=submit]');
    const closeModal = document.querySelector('.popup-close');
    const check = document.querySelector('[rel=nofollow]')
    bindModal(modalBtn, modal, closeModal);

};

modals();

