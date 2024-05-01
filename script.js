let oldclickedDivId = "text_div";

const articleTextarea = document.getElementById('article');
const charCountDisplay = document.getElementById('char-count');

articleTextarea.addEventListener('input', () => {
    const currentLength = articleTextarea.value.length;
    charCountDisplay.textContent = `${currentLength}/10000`;
});

const validIds = ['file_div', 'text_div', 'URL_div', 'image_div'];

const select_mode = document.getElementsByClassName("import-div");

const divs = document.querySelectorAll('div');

divs.forEach(div => {
  div.addEventListener('click', function(event) {
    if (validIds.includes(event.target.id)) {
        const clickedDivId = event.target.id;
        console.log('Clicked div ID:',clickedDivId);
    oldclickedDivId = execute_mode(clickedDivId,oldclickedDivId)
}
  });
});

function execute_mode(clicked,previous){
    switch(clicked){
        case "text_div":
            document.getElementById(previous).style.backgroundColor = '#ffffff';
            document.getElementById('text_div').style.backgroundColor = '#D2E7FF';
            console.log('previous:', previous);
            console.log('clicked:', clicked);
            document.getElementById(previous+"Mode").style.display = "none";
            document.getElementById(clicked+"Mode").style.display = "flex";
            return clicked;

        case "file_div":
            document.getElementById(previous).style.backgroundColor = '#ffffff';
            document.getElementById('file_div').style.backgroundColor = '#D2E7FF';
            console.log('previous:', previous);
            console.log('clicked:', clicked);
            document.getElementById(previous+"Mode").style.display = "none";
            document.getElementById(clicked+"Mode").style.display = "flex";

            return clicked;

        case "URL_div":
            document.getElementById(previous).style.backgroundColor = '#ffffff';
            document.getElementById('URL_div').style.backgroundColor = '#D2E7FF';
            console.log('previous:', previous);
            console.log('clicked:', clicked);
           document.getElementById(previous+"Mode").style.display = "none";
            document.getElementById(clicked+"Mode").style.display = "flex";
            return clicked;

        case "image_div":
            document.getElementById(previous).style.backgroundColor = '#ffffff';
            document.getElementById('image_div').style.backgroundColor = '#D2E7FF';
            console.log('previous:', previous);
            console.log('clicked:', clicked);
            document.getElementById(previous+"Mode").style.display = "none";
            document.getElementById(clicked+"Mode").style.display = "flex";
            return clicked;
            
    }
    
}


//javascript code for drag & drop
let uploadedFile = null;
  
  function simulateFileUpload(files) {
    setTimeout(() => {
      const fileName = files[0].name;
      const fileSize = files[0].size;
      const fileList = document.getElementById('fileList');
      const fileNameElement = document.createElement('div');
      fileNameElement.classList.add('fileName');
      fileNameElement.textContent = fileName;
      fileList.appendChild(fileNameElement);
  
      uploadedFile = fileName;
      document.getElementById('deleteButton').style.display = 'block';
  
      const fileSizeElement = document.getElementById('fileSize');
      fileSizeElement.textContent = `Taille du fichier: ${formatFileSize(fileSize)}`;
    }, 5000);
  
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = '100%';
  
    setTimeout(() => {
      progressBar.style.width = '0';
    }, 5000);
  }
  
  function uploadFileFromInput(files) {
    simulateFileUpload(files);
  }
  
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 octets';
    const k = 1024;
    const sizes = ['octets', 'Ko', 'Mo', 'Go', 'To'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  const dropArea = document.getElementById('dropArea');
  
  dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
    this.classList.add('dragover');
  });
  
  dropArea.addEventListener('dragleave', function(event) {
    event.preventDefault();
    this.classList.remove('dragover');
  });
  
  dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    this.classList.remove('dragover');
    const files = event.dataTransfer.files;
    simulateFileUpload(files);
  });
  
  document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', function() {
    const files = this.files;
    uploadFileFromInput(files);
  });
  
  document.getElementById('urlInput').addEventListener('change', function() {
    const url = this.value.trim();
    if (url !== '') {
      simulateFileUpload([{ name: 'article.html', size: 123456 }]);
      this.value = '';
    }
  });
  
  document.getElementById('deleteButton').addEventListener('click', function() {
    if (uploadedFile !== null) {
      const fileList = document.getElementById('fileList');
      fileList.innerHTML = '';
      uploadedFile = null;
      this.style.display = 'none';
  
      const fileSizeElement = document.getElementById('fileSize');
      fileSizeElement.textContent = '';
    }
  });

