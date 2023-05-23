window.addEventListener('load', function () {

    var swipeBtn = document.getElementById('swipeBtn');
    var flag = true;
    var form = document.querySelector('.label__block');

    swipeBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (flag) {
            swipeBtn.innerText = 'Регистрация для слушателя';
            flag = false;
            form.innerHTML += `
                <label class="input-file" id="fileLabel">
                    <img src="../dop/media/whiteScrep.png" alt="">
                    <input required class="file__curs"
                        accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .scv, .ppt, .txt, .rtf, .pdf, .tiff"
                        type="file" name="taskFile">
                    <span>Прикрепите документ подтверждающий спецификацию</span>
                </label>
            `;

        } else {
            var fileLabel = document.getElementById('fileLabel');
            fileLabel.remove();
            swipeBtn.innerText = 'Регистрация для педагога';
            flag = true;
        }

        filesCurs = document.querySelectorAll('.input-file');
        reapetFileName(filesCurs);
    });

    function reapetFileName(filesCurs) {
        for (let i = 0; i < filesCurs.length; i++) {
            filesCurs[i].addEventListener('change', function (e) {
                e.target.nextSibling.nextSibling.innerHTML = e.target.files[0].name;
                console.log(2);
            });
        }
    }

});