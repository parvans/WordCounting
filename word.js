var sentence='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'

var words=()=>{
    sentence=sentence.replace(/[,.]/g, "")
    const wordArray = sentence.split(" ");
    return wordArray
}
var wordArr=words()

var wordFrequency=(wordArr)=>{
    let wordS= new Set(wordArr)
    console.log(wordS.size); 
    let word=[...wordArr]
    let wordCount={}
    
    word.forEach((item) => {
        if (wordCount[item] == null){
            wordCount[item] = 1;
        }else {
            wordCount[item] += 1;
            }
        });
 return wordCount

}
console.log(wordFrequency(wordArr));