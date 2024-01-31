window.addEventListener('load', () => {

    const preferencesWrapper = document.querySelector('.preferences-wrapper');
    let preferencesOpen = false; 

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('translation-button')) {

            document.cookie = `lang=${e.target.id}; path=/; max-age=31536000`;
            window.location.reload();
        }
        if(e.target.classList.contains('preferences-icon-wrapper') || e.target.classList.contains('preferences-icon')) {
            if (!preferencesOpen) {
                preferencesWrapper.style.display = 'block';
                preferencesOpen = true;
            }
            else {
                preferencesWrapper.style.display = 'none';
                preferencesOpen = false;
            }
            
        }

    });
});