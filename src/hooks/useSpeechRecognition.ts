import { useEffect, useState } from "react";
let recognition: any = null;

if("webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    // recognition.lang = "en-US"
    // recognition.lang = "ta-IN"; // for Tamil in India

}

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [islisterning, setIslisterning] = useState(false);

    useEffect(() => {
     if(!recognition) return; 
     recognition.onresult = (event: SpeechRecognitionEvent) => {
        console.log('result', event)
        setText(event.results[0][0].transcript)
        recognition.stop();
        setIslisterning(false)

     }
    }, [])

    

    const startListening = (params: any) => {
        const { lang } = params;
        if (!recognition) return;
      
        setText('');
        setIslisterning(true);
        recognition.stop();
        recognition.lang = lang;
        recognition.start();
      };
      
    const stopListerning = () => {
        setIslisterning(false)
        recognition.stop()
    }

    return {
        text,
        islisterning,
        startListening,
        stopListerning,
        hasRecognitionSupport : !!recognition 
    }




}
export default useSpeechRecognition

