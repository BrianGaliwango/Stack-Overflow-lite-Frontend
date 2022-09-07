                     // Error message  
                     function showError(message){
                      // create error message
                      const errorDiv = document.createElement('div'); 
                      const askQtnCont = document.querySelector('.ask-question-container');
                      const postTitle = document.querySelector('.post-form');
                      errorDiv.className = 'error';
                      errorDiv.appendChild(document.createTextNode('Please enter question'));
                      askQtnCont.insertBefore(errorDiv, postTitle);
                    
                      // Clear error
                        setTimeout(clearError, 2000); 
                    }
                    
                    // Clear error 
                    // document.querySelector('.alert').remove();