window.addEventListener('load', function(){

    var modulContainer = document.querySelector('.modul__container');
    var countModul = 1;

    document.getElementById('btnAdd').addEventListener('click', function(){
        countModul++;
        
        modulContainer.innerHTML += `
            <details class="moduls__block" data-id="${countModul}">
                <summary>${countModul} модуль</summary>
                <div class="det__block">
                    <div class="name_file__block">
                        <label for="nameModul${countModul}">
                            Название
                        </label>
                        <input required type="text" id="nameModul${countModul}" name="nameModul${countModul}">
                    </div>
                    <div class="file__block">
                        <label class="input-file">
                            <img src="../dop/media/screp.png" alt="">
                            <input required class="file__curs" accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .scv, .ppt, .txt, .rtf, .pdf, .tiff" type="file" name="modulFile${countModul}">
                            <span>Прикрепите файл</span>
                        </label>
                    </div>
                </div>
            </details>
        `;
    });
    document.getElementById('btnDel').addEventListener('click', function(){
        if(countModul > 1){
            let moduls = document.querySelectorAll('.moduls__block');

            moduls.forEach(el => {
                if(el.getAttribute('data-id') == countModul){
                    el.remove();
                    countModul--;
                }
            });
        }
    });


    var filesCurs = document.querySelectorAll('.file__block');

    for(let i=0; i < filesCurs.length; i++){
        filesCurs[i].addEventListener('change', function(e){
           e.target.nextSibling.nextSibling.innerHTML = e.target.files[0].name;
           console.log(2);
        });
    }

});