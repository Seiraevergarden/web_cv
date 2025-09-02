document.querySelector("form").addEventListener("submit", function(event) {
    setTimeout(() => {
      location.reload();
    }, 1000);
  }); 

  const defaultModeBtn = document.getElementById('default-mode-btn');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const lightModeBtn = document.getElementById('light-mode-btn');
  const body = document.body;
  
  const savedTheme = localStorage.getItem('btn');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    updateButtons('dark');
  } else if (savedTheme === 'light') {
    body.classList.add('light');
    updateButtons('light');
  } else {
    updateButtons('default'); 
  }
  
  function updateButtons(mode) {
    if (mode === 'dark') {
      darkModeBtn.style.display = 'none';
      lightModeBtn.style.display = 'inline-block';
      defaultModeBtn.style.display = 'inline-block';
    } else if (mode === 'light') {
      darkModeBtn.style.display = 'inline-block';
      lightModeBtn.style.display = 'none';
      defaultModeBtn.style.display = 'inline-block';
    } else {
      darkModeBtn.style.display = 'inline-block';
      lightModeBtn.style.display = 'inline-block';
      defaultModeBtn.style.display = 'none';
    }
  }
  
  defaultModeBtn.addEventListener('click', () => {
    body.classList.remove('dark', 'light');
    updateButtons('default');
    localStorage.setItem('btn', 'default');
  });
  
  darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark');
    body.classList.remove('light');
    updateButtons('dark');
    localStorage.setItem('btn', 'dark');
  });
  
  lightModeBtn.addEventListener('click', () => {
    body.classList.add('light');
    body.classList.remove('dark');
    updateButtons('light');
    localStorage.setItem('btn', 'light');
  });
  