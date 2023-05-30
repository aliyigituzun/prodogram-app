window.addEventListener('load', () => {

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('translation-button')) {

            document.cookie = `lang=${e.target.id}; path=/; max-age=31536000`;
            window.location.reload();
        }

    });
});