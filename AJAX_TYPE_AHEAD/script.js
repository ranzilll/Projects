document.addEventListener('DOMContentLoaded', function() {
	const input = document.querySelector('.searchInput');
  const suggestions = document.querySelector('.suggestions');
  let currentFocussedIndex = -1;
  
  input.addEventListener('keyup', debounce(handleAutoSuggestions, 300));
  
  function createSearchItem(item) {
  	const searchItem = document.createElement('div');
    searchItem.classList.add('searchItem');
    searchItem.textContent = item;
    return searchItem;
  }
  
  function handleClick(event) {
  	input.value = event.target.textContent;
    clearSuggestions();
  }
  
  function clearSuggestions() {
  	suggestions.innerHTML = '';
  }
  
  function renderSuggestions(suggestionsList) {
  	clearSuggestions();
  	suggestionsList.forEach(item => {
    	const searchItem = createSearchItem(item);
      searchItem.addEventListener('click', handleClick);
      suggestions.appendChild(searchItem);
    })
  }
  
  async function getSuggestions(searchInput) {
  	try {
    	const res = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);
      const data = await res.json();
      const list = data.products.map(item => item.title);
      renderSuggestions(list);
    
    }catch (error) {
    	console.log(error);
    }
  }
  
  function handleAutoSuggestions(event) {
  	const key = event.key;
    if(key === 'ArrowDown' || key === 'ArrowUp') {
    	 event.preventDefault();
       currentFocussedIndex = updateFocuseedIndex(key, suggestions.children.length);
       updateFocus();
    } else if (key === 'Enter') {
    	handleEnterKey();
    } else {
    	getSuggestions(event.target.value);
    }
  }
  
  function updateFocuseedIndex(key, maxIndex) {
   	if(key === 'ArrowDown') {
    	return Math.min(currentFocussedIndex + 1, maxIndex - 1);
    }else {
    	return Math.max(currentFocussedIndex - 1, -1);
    }
  }
  
  function handleEnterKey() {
  	if(currentFocussedIndex !== -1) {
    	input.value = suggestions.children[currentFocussedIndex].textContent;
      clearSuggestions();
    }	
  }
  
  function updateFocus() {
  	for(let i = 0; i< suggestions.children.length; i++) {
    	suggestions.children[i].classList.remove('focused')
    }
    
    if(currentFocussedIndex >= currentFocussedIndex < suggestions.children.length) {
    	suggestions.children[currentFocussedIndex].classList.add('focused');
    }
  }
  
  function debounce(func, delay) {
  	let timer;
    return function(...args) {
    	const context = this;
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
      	timer = null;
        func.apply(context, args);
      }, delay);
    }
  }
  
  document.body.addEventListener('click', function(event) {
    if(event.target.classList[0] === 'searchContainer') {
    	clearSuggestions();
    }
  })
})