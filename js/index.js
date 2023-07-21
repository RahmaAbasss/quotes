
 var  addQuote = function(){
  var btaa5 = [
    {'quote': "The best revenge is massive success.",
    'author': '--Frank Sinatra' 
    },
   
    {'quote': "Resentment is like drinking poison and waiting for your enemies to die.",
    'author': '--Nelson Mandela' 
    },

    {'quote': "Do not take life too seriously. You will not get out alive.",
    'author': '--Elbert Hubbard' 
    },

    {'quote': "You miss 100% of the shots you don't take.",
    'author': '--Wayne Gretzy' 
    }, 
  ];
  
  var index = Math.floor(Math.random()* btaa5.length);
  document.getElementById('quoteOutput').innerHTML=btaa5[index].quote;
  document.getElementById('authorOutput').innerHTML=btaa5[index].author;
 
 }
   window.alert = function()
   {
    addQuote();
    document.getElementById('add').addEventListener('click',addQuote);
   }
  





   



  // function addQuote()
  // {
  //   for(var i=0 ; i<arrayOfaddQuote.length ; i++)
  // {
  //  console.log(arrayOfaddQuote[i].author);
  //   }
  // }

  
   
 



 
 
  
