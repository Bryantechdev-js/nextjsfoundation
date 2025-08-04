const readLoud = (title: string, body: string) => {
  // Ensure the browser supports speech synthesis
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = "en-US";
    utterance.text = `${title}. ${body}`;

    utterance.onend = () => {
      console.log("Speech ended");
    };

    speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech synthesis not supported in this browser.");
  }
};

export default readLoud;
