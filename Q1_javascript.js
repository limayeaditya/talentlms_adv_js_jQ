var inputText = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!" ;
inputText = inputText.replace(/[0123456789]/g,"X")
var res = inputText.match(/[^\.!\?]+[\.!\?]+/g)
var array = []
var temp = ""




for (var sentence in res){
  
  temp = res[sentence].trim()
  temp = temp.split()
  array.push(temp); 
}

for (var sent_num in array){
  temp = array[sent_num];
  temp = temp.toString();
  temp = temp.split(" ");  
  if(temp.length > 3){
    console.log(`${sent_num}. ${res[sent_num]}`);
  }

}