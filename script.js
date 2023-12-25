/* Javascript has a native speechSynthesis text-to-speech API
- syntax:
var msg = new SpeechSynthesisUtterance("MESSAGE");
speechSynthesis.speak(msg);
*/

let speech = new SpeechSynthesisUtterance();

document.querySelector('button').addEventListener('click', function () {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});


let voices = [];
let voiceSelect = document.querySelector('select')
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // method is called to retrieve an array of available voices
    speech.voice = voices[0];

    // The forEach loop iterates over each voice in the voices array
    voices.forEach((voice, i) =>
        (voiceSelect.options[i] = new Option(voice.name, i)));
    /* It creates a new Option object for each voice,
     using the voice's name as the display text 
     and the index i as the option value.
-This newly created option is added to the voiceSelect element
     */
};

/* 'change' event.
When user selects a different voice from dropdown menu, 
the event listener is triggered, 
and the associated callback fn is executed.

*/
voiceSelect.addEventListener('change', () => {
    /* selected voice is retrieved from the voices array 
    based on the value of voiceSelect.
    
- voiceSelect.value represents index of the selected option
    */
    speech.voice = voices[voiceSelect.value]
})