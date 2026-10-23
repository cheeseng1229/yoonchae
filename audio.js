/**
 * STARBLOX ACADEMY: Web Audio API Sound Synthesizer
 * Provides authentic Roblox & K-Pop game sounds with zero external dependencies.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmPlaying = false;
    this.bgmTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.bgmPlaying) {
      this.stopBgm();
    }
    return this.isMuted;
  }

  // Coin collect / Starbux reward chime
  playCoin() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(987.77, now); // B5
    osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // Correct answer / Sparkle sound
  playCorrect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  // Wrong answer / Gentle boop
  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Roblox Obby Jump
  playJump() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(250, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  // Level Up / Photocard Gacha Fanfare
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const chords = [
      [523.25, 659.25, 783.99],       // C Major
      [587.33, 739.99, 880.00],       // D Major
      [659.25, 830.61, 987.77],       // E Major
      [1046.50, 1318.51, 1567.98]     // High C Major chord
    ];

    chords.forEach((chord, step) => {
      const delay = step * 0.14;
      chord.forEach(freq => {
        const now = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = step === 3 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(step === 3 ? 0.3 : 0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (step === 3 ? 0.8 : 0.2));

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + (step === 3 ? 0.8 : 0.2));
      });
    });
  }

  // K-Pop Lo-Fi Gentle Stage Beat
  toggleBgm() {
    if (this.bgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  startBgm() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    this.bgmPlaying = true;

    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];
    let step = 0;

    const playChordStep = () => {
      if (!this.bgmPlaying || this.isMuted || !this.ctx) return;
      const currentChord = chords[step % chords.length];
      const now = this.ctx.currentTime;

      currentChord.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq * 1.5, now + i * 0.05);

        gain.gain.setValueAtTime(0.04, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + 1.2);
      });

      // Soft beat pulse
      const kick = this.ctx.createOscillator();
      const kickGain = this.ctx.createGain();
      kick.type = "sine";
      kick.frequency.setValueAtTime(110, now);
      kick.frequency.exponentialRampToValueAtTime(30, now + 0.15);
      kickGain.gain.setValueAtTime(0.08, now);
      kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      kick.connect(kickGain);
      kickGain.connect(this.ctx.destination);
      kick.start(now);
      kick.stop(now + 0.15);

      step++;
      this.bgmTimer = setTimeout(playChordStep, 1100);
    };

    playChordStep();
  }

  stopBgm() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

window.soundEngine = new SoundEngine();
