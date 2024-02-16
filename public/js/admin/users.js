window.addEventListener('load', () => {

    const editPanel = document.querySelector('.user-edit-panel');
        
    document.addEventListener('click', (e) => {
        
        if(e.target.id === 'edit' || e.target.parentElement.id === 'edit') {

            
            
            let id = e.target.id === 'edit' ? e.target.dataset.id : e.target.parentElement.dataset.id;
            let closeButton = editPanel.querySelector('#close-button');
            closeButton.dataset.id = id;
            let saveButton = editPanel.querySelector('#save-user-button');
            saveButton.dataset.id = id;
            let deleteButton = editPanel.querySelector('#delete-user-button');
            deleteButton.dataset.id = id;
            
            serverRequest('/admin/users/' + id, 'GET', {id}, (res) => {
                console.log("geldi")
                console.log(res)
                if(res.success) {
                    editPanel.style.display = 'block';
                    editPanel.querySelector('#name').value = res.user.name;
                    editPanel.querySelector('#surname').value = res.user.surname;
                    editPanel.querySelector('#email').value = res.user.email;
                    if (res.user.telephone && res.user.telephone != 'undefined') {
                        editPanel.querySelector('#telephone').value = res.user.telephone;
                    }
                    if (res.user.role) {
                        editPanel.querySelector('#role').value = res.user.role;
                    }
                } else {
                    return;
                }
            });
        }
        if(e.target.id === 'close-button' || e.target.parentElement.id === 'close-button') {
                
                editPanel.querySelector('#name').value = '';
                editPanel.querySelector('#surname').value = '';
                editPanel.querySelector('#email').value = '';
                editPanel.querySelector('#telephone').value = '';
                editPanel.style.display = 'none';

        }
        if(e.target.id === 'save-user-button' || e.target.parentElement.id === 'save-user-button') {
            
            let id = e.target.id === 'save-user-button' ? e.target.dataset.id : e.target.parentElement.dataset.id;
            let name = editPanel.querySelector('#name').value;
            let surname = editPanel.querySelector('#surname').value;
            let email = editPanel.querySelector('#email').value;
            let telephone = editPanel.querySelector('#telephone').value;
            let role = editPanel.querySelector('#role').value;
            let data = {
                id,
                name,
                surname,
                email,
                telephone,
                role
            }
            serverRequest('/admin/users/edit', 'POST', data, (res) => {
                if(res.success) {
                    editPanel.querySelector('#name').value = '';
                    editPanel.querySelector('#surname').value = '';
                    editPanel.querySelector('#email').value = '';
                    editPanel.querySelector('#telephone').value = '';
                    editPanel.style.display = 'none';
                } else {
                    return;
                }
            });
        }
        if(e.target.id === 'delete-user-button' || e.target.parentElement.id === 'delete-user-button') {
                
                let id = e.target.id === 'delete-user-button' ? e.target.dataset.id : e.target.parentElement.dataset.id;
                let data = {
                    id
                }
                serverRequest('/admin/users/delete', 'POST', data, (res) => {
                    if(res.success) {
                        location.reload();
                    } else {
                        return;
                    }
                });
        }

    });
});