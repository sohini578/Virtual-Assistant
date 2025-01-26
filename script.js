let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang= "en"
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours <12 ){
        speak("Good Morning")
    }
    else if(hours>=12 && hours < 16){
        speak("Good Afternoon")
    }else{
        speak("Good Evening")
    }
   
}
window.addEventListener('load',()=>{
            wishMe()
    })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
     voice.style.display="block"
})


function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    
    

    if(message.includes("hello")||message.includes("hey")||message.includes("hi")){
        speak("hello there,what can I hep you today?")

    } else if(message.includes("how are you?")||message.includes("Nova how are you?")){
        speak("I am absolutely fine,and I hope you are doing well too")
    
    }  else if (message.includes("happy") || message.includes("glad") || message.includes("joy") || message.includes("excited")) {
        speak("I'm glad to hear that you're happy! Keep smiling!")
    }  
    else if (message.includes("who are you?")){
        speak("I am virtual assistant,created by Sohini mam")
    }
    else if (message.includes("Give your introduction to us")){
        speak("I am virtual assistant,created by Sohini mam")
    }
    else if(message.includes("sad") || message.includes("cry") || message.includes("sorrow") || message.includes("unhappy") || message.includes("down") || message.includes("stressed") || message.includes("depressed")){
        speak("Oh no, I'm sorry to hear that you're feeling down. I'm here to cheer you up!")
    }
    else if(message.includes("angry") || message.includes("mad") || message.includes("furious")){
        speak("I sense some frustration. Let me know if I can help in any way.")
    }
    else if(message.includes("love")){
        speak("Oh, you're making me blush!")
        }
    else if (message.includes("romantic")){
        speak("Love is in the air, or is it just me?")
        }
    else if (message.includes("flirty")){
            speak("Are you trying to charm me? It's working!")
            }
    else if (message.includes("crush")){
                speak("Flirting with a virtual assistant? Bold move!")
                }
    else if (message.includes("handsome")){
                    speak("You are making my circuits blush!What can I do for you my gorgeous lady!")
                    }
    else if (message.includes("cute")|| message.includes("adore") || message.includes("sweet")){
                    speak("Aww,thank you!You are making me feel all warm and fuzzy inside!")
                    }
                    
    else if(message.includes("open youtube")){
        speak("opening youtube...")
       window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
       window.open("https://google.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
       window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
       window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
       window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
       window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date =new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else if (message.includes("play") || message.includes("song")) {
        let songTitle = message.replace("play ", "").replace("song ", "").trim()
        speak(`Playing ${songTitle} on YouTube...`)
        window.open(`https://www.youtube.com/search?q=${encodeURIComponent(songTitle)}`, "_blank")
    } else if (message.includes("Introduce yourself")||message.includes("introduction")) {
        speak("I am a virtual assistant, created by Sohini mam")
    }else {
       
      // Search on Google and pronounce the result
    response = `Searching for ${message} on Google...`;
    speak(response);
    window.open(`https://www.google.com/search?q=${message}`, "_blank");
    // Get the search result and pronounce it
    setTimeout(() => {
      const searchResult = document.querySelector(".g");
      if (searchResult) {
        const resultText = searchResult.textContent;
        speak(resultText);
      }
    }, 2000);
  }

  speak(response);
}