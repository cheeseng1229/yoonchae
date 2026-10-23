/**
 * STARBLOX ACADEMY: Multi-Language Speech Engine
 * Supports:
 * - Text-to-Speech (TTS) for Bahasa Melayu, Chinese (Mandarin), and English
 * - Speech-to-Text (STT) for interactive voice recording & speaking evaluation
 */

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.recognition = null;
    this.isListening = false;
    this.availableVoices = [];

    this.initVoices();
    this.initRecognition();
  }

  initVoices() {
    if (!this.synth) return;
    const load = () => {
      this.availableVoices = this.synth.getVoices();
    };
    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
    }
  }

  /**
   * Speak a given text in Malay, Chinese, or English
   * @param {string} text - text to speak
   * @param {string} langCode - 'ms' | 'zh' | 'en'
   * @param {function} onEnd - callback when done
   */
  speakText(text, langCode = 'en', onEnd = null) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.synth.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    let targetLang = 'en-US';
    if (langCode === 'ms' || langCode === 'bm') targetLang = 'id-ID'; // 'ms-MY' or 'id-ID' works best
    if (langCode === 'zh' || langCode === 'bc') targetLang = 'zh-CN';
    if (langCode === 'en' || langCode === 'bi') targetLang = 'en-US';

    utterance.lang = targetLang;
    utterance.rate = 0.9; // Slightly slower for primary 3 learners
    utterance.pitch = 1.05; // Friendly upbeat tone

    // Try finding an exact voice match
    const matchingVoice = this.availableVoices.find(v => v.lang.startsWith(langCode));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Listen to user speech and compare with target
   */
  listenAndScore({ targetText, langCode = 'en', onStart, onResult, onError }) {
    if (!this.recognition) {
      if (onError) onError("Microphone speech recognition is not supported in this browser. Don't worry, you can click 'Simulate Speech'!");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      return;
    }

    let recLang = 'en-US';
    if (langCode === 'ms' || langCode === 'bm') recLang = 'ms-MY';
    if (langCode === 'zh' || langCode === 'bc') recLang = 'zh-CN';
    if (langCode === 'en' || langCode === 'bi') recLang = 'en-US';

    this.recognition.lang = recLang;

    this.recognition.onstart = () => {
      this.isListening = true;
      if (onStart) onStart();
    };

    this.recognition.onresult = (event) => {
      this.isListening = false;
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence || 0.85;

      const score = this.calculateSimilarity(transcript, targetText);
      if (onResult) {
        onResult({
          transcript,
          confidence,
          similarityScore: score,
          passed: score >= 50
        });
      }
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (onError) onError(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      if (onError) onError(e.message);
    }
  }

  calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const clean1 = str1.toLowerCase().replace(/[^\w\s\u4e00-\u9fa5]/gi, '').trim();
    const clean2 = str2.toLowerCase().replace(/[^\w\s\u4e00-\u9fa5]/gi, '').trim();

    if (clean1 === clean2) return 100;

    // Word token overlap
    const words1 = clean1.split(/\s+/);
    const words2 = clean2.split(/\s+/);

    let matchCount = 0;
    words1.forEach(w => {
      if (words2.includes(w)) matchCount++;
    });

    const ratio = matchCount / Math.max(words1.length, words2.length);
    return Math.min(100, Math.round(ratio * 100) + 20); // Generous scoring for young learners
  }
}

window.speechEngine = new SpeechEngine();
