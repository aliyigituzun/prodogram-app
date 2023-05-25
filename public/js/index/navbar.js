window.addEventListener('load', () => {

    const sidebar = document.getElementById('sidebar');
    let sidebarOpen = false;

    document.addEventListener('click', (e) => {
        console.log(e.target.id + " " + sidebarOpen);
        if(e.target.id === 'sidebar-button' && !sidebarOpen) {

            sidebar.classList.add('sidebar-open-animation');
            sidebar.classList.remove('sidebar-close-animation');
            window.setTimeout(() => {
                sidebar.style.transform = 'translateX(0%)';
                sidebarOpen = true;
            }, 50);
        }
        else if(!(e.target.id === 'sidebar') && sidebarOpen) {
            sidebar.classList.add('sidebar-close-animation');
            sidebar.classList.remove('sidebar-open-animation');
            window.setTimeout(() => {
                sidebar.style.transform = 'translateX(100%)';
                sidebarOpen = false;
            }, 50);
        }

    });
});