
    $(document).ready(function(){
        document.getElementById("userinput").focus();
        $('[data-toggle="tooltip"]').tooltip(); 
         new ClipboardJS('.btnCopy');
         $('#userinput').keyup(function(){
            $(".btn").removeClass("selected");
        });

    });
  

    document.getElementById("btnTitleCase").addEventListener("click", function(){
        $(".btn").removeClass("selected");
      document.getElementById("btnTitleCase").classList.add('selected');
      var userText = document.getElementById("userinput").value;
      
     var  str = userText.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.getElementById("userinput").value =str.join(' ');

  
      document.getElementById("userinput").focus();
  
      });
  
  document.getElementById("btnToUpperCase").addEventListener("click", function(){
      $(".btn").removeClass("selected");
    document.getElementById("btnToUpperCase").classList.add('selected');
   

    var userText = document.getElementById("userinput").value;
    
    document.getElementById("userinput").value = userText.toUpperCase();
    document.getElementById("userinput").focus();

    });

    document.getElementById("btnToLowerCase").addEventListener("click", function(){
        $(".btn").removeClass("selected");
        document.getElementById("btnToLowerCase").classList.add('selected');
        var userText = document.getElementById("userinput").value;
        document.getElementById("userinput").value= userText.toLowerCase();
        document.getElementById("userinput").focus();

        }); 

        function sentenceCase(input) {

            //split the string separated by points into into an array 
            var n=input.split(".");
            // create variable to final value
            var vfinal=""
    
                            for(i=0;i<n.length;i++)
                                                        {
                                                           var spaceput=""
                                                        
                                                           var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
                                                         
                                                           n[i]=n[i].replace(/^\s+/,"");
                                                        
                                                           var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
                                                        
                                                           for(j=0;j<spaceCount;j++)
                                                        
                                                           spaceput=spaceput+" ";
                                                        
                                                           vfinal=vfinal+spaceput+newstring+".";
                                                           
                                                         }
             
    vfinal=vfinal.substring(0, vfinal.length - 1);
    
    return vfinal;
                                }

document.getElementById("btnPhraseMode").addEventListener("click", function(){
    $(".btn").removeClass("selected");
    document.getElementById("btnPhraseMode").classList.add('selected');
var userText = document.getElementById("userinput").value;
 userText = userText.toLowerCase();
document.getElementById("userinput").value = sentenceCase(userText);
document.getElementById("userinput").focus();
}); 
//This function check if a character is a letter			
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.match(letters))
      {
      return true;
      }
      else
      {
      return false;
      }
      }


//Capitalised mode function
function capitalisedMode(input)	{
									/*
									var sentenceSplited = input.split(" ");
									*/
									var output = "";
									var letter="";
									var firstLetterToUpperCase = input.charAt(0).toUpperCase();

									for (var i = 1; i < input.length; i++) 	{
										 letter = input.charAt(i);

						//If charAt(i) is letter and the character before is white space, convert this character in Upper case
							if (allLetter(input.charAt(i)) === true & input.charAt(i-1)===" ") {
																									 letter = input.charAt(i).toUpperCase();
																								}

																						output = output + letter		
																			}
																			output = firstLetterToUpperCase + output;
										return output;												
                                }
                                
                                document.getElementById("btnCapitalisedMode").addEventListener("click", function(){
                                    $(".btn").removeClass("selected");
                                    document.getElementById("btnCapitalisedMode").classList.add('selected');
                                    //Put the text entered by the user into a variable
                                    var userText = document.getElementById("userinput").value;

                                    //First convert to lowercase in case the text is uppercase	
                                        userText = userText.toLowerCase();

                                    //Use capitalise mode function to change user input into capitalised sentence	
                                    document.getElementById("userinput").value = capitalisedMode(userText);
                                    document.getElementById("userinput").focus();

                                });

 document.getElementById("btnInverseCase").addEventListener("click", function(){
											
    $(".btn").removeClass("selected");
    document.getElementById("btnInverseCase").classList.add('selected');
   
                                    //Put the text entered by the user into a variable
                                    var userText = document.getElementById("userinput").value;
                                    var letter = "";
                                    var output = "";

for (var i = 0; i < userText.length; i++) {
                                        //If a character is in lowercase convert it to uppercase
                                        if (userText[i] == userText[i].toLowerCase()) {
                                                                                            letter = userText[i].toUpperCase();
                                                                                        }

                                        //If a character is not in uppercase convert it to lowercase												
                                        else{
                                                letter = userText[i].toLowerCase();
                                            }		

                                        output = output + letter;

                                        }

                                    //Use capitalise mode function to change user input into capitalised sentence	
                                    document.getElementById("userinput").value = output;
                                    document.getElementById("userinput").focus();
});
//Function to check if a number is an odd or not
function isOdd(num) { return num % 2;}
//Alternate case
document.getElementById("btnAlternatingCase").addEventListener("click", function(){
    $(".btn").removeClass("selected");
    document.getElementById("btnAlternatingCase").classList.add('selected');
											

    //Put the text entered by the user into a variable
                                                        var userText = document.getElementById("userinput").value;
                                                        var letter = "";
                                                        var output = "";
    
                for (var i = 0; i < userText.length; i++) {
    //If a character is in lowercase convert it to uppercase
                                                            if (isOdd(i) === 1) {
                                                                                                                letter = userText[i].toUpperCase();
                                                                                                            }
    
    //If a character is not in uppercase convert it to lowercase												
                                                            else {
                                                                
                                                                    letter = userText[i].toLowerCase();
                                                                }		
    
                                                            output = output + letter;
    
                                                            }
    
                                                        //Use capitalise mode function to change user input into capitalised sentence	
                                                        document.getElementById("userinput").value = output;
                                                        document.getElementById("userinput").focus();
                                                                                        });
 document.getElementById("btnClear").addEventListener("click", function(){
    $(".btn").removeClass("selected");
document.getElementById("userinput").value = "";
document.getElementById("userinput").focus();
});
document.getElementById("btnDownload").addEventListener("click", function(){
    var textToWrite = document.getElementById('userinput').value;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
      var fileNameToSaveAs = "essay.text";
    var downloadLink = document.createElement("a");
     downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
     downloadLink.onclick = destroyClickedElement;
     downloadLink.style.display = "none";
     document.body.appendChild(downloadLink);
     }
    downloadLink.click();
    
});

                                                                                           
