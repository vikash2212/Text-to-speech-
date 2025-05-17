// Actually, SpeechSynthesisUtterance is a part of the Web Speech API. The Web Speech API has two main components:

// Speech Synthesis:

// Used to convert text into speech.
// Includes objects like SpeechSynthesisUtterance and methods like speechSynthesis.speak().
// Speech Recognition:

// Used for converting speech into text.
// Includes objects like SpeechRecognition.

/////////////////////////////////////////////////////////////////////////

// Step 1: Initialize a SpeechSynthesisUtterance object
// This object represents the speech request. You can set properties like the text to be spoken, the voice, pitch, and rate.
let speech = new SpeechSynthesisUtterance();

// Step 2: Create an empty array to store available voices
// The voices will be retrieved dynamically from the SpeechSynthesis API.
let voices = [];

// This <select> element will allow the user to choose a voice for the speech.
let voiceSelect = document.querySelector("select");

// Step 4: Populate the list of voices when they become available
// The 'onvoiceschanged' event is triggered when the it loads the list of available voices.
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // Retrieve the array of available voices

  // Set a default voice (the first one in the array)
  speech.voice = voices[0];

  // Populate the dropdown menu with the names of available voices
  // Each option's value corresponds to the index of the voice in the `voices` array
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Step 5: Update the selected voice when the user changes the dropdown selection
voiceSelect.addEventListener("change", () => {
  // Update the `speech.voice` property based on the selected option's value
  // The value is the index of the voice in the `voices` array
  speech.voice = voices[voiceSelect.value];
});

// Step 6: Speak the input text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
  // Get the text entered in the <textarea> and assign it to the `speech.text` property
  speech.text = document.querySelector("textarea").value;

  //  Use the SpeechSynthesis API to speak the text with the selected voice.
  //Provides methods like speak() to output text-to-speech.

  window.speechSynthesis.speak(speech);
});
