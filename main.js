document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    var tableBody = document.getElementById('contactTableBody');
    var rows = tableBody.getElementsByTagName('tr');
    var contactExists = false;
    var nameExists = false;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        if (cells[0].textContent === name && cells[1].textContent === phone) {
            contactExists = true;
            break;
        } else if (cells[0].textContent === name) {
            nameExists = true;
            break;
        }
    }

    if (contactExists) {
        alert('Este contato já está cadastrado!');
        return;
    }

    if (nameExists) {
        var mergeContacts = confirm('Um contato com este nome já existe com um número de telefone diferente. Deseja mesclar os contatos?');
        if (mergeContacts) {
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                if (cells[0].textContent === name) {
                    cells[1].textContent += ', ' + phone;
                    break;
                }
            }
            alert('Contato mesclado com sucesso!');
            document.getElementById('contactForm').reset();
            return;
        }
    }

    var newRow = tableBody.insertRow();
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    document.getElementById('contactForm').reset();
});
