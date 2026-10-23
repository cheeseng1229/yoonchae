/**
 * STARBLOX ACADEMY: Core Application Controller
 * Handles gamification, curriculum loading, interactive canvas tracing,
 * voice challenges, worksheet generator, and daily streak persistence.
 */

class StarbloxApp {
  constructor() {
    this.currentDayId = 1;
    this.currentSubject = "bm"; // 'bm' | 'bc' | 'bi' | 'sc' | 'ma'
    this.currentMode = "read";   // 'read' | 'write' | 'speak' | 'worksheet'
    
    // User State from LocalStorage
    this.state = this.loadState();
    
    // Canvas state for writing
    this.canvas = null;
    this.ctx = null;
    this.isDrawing = false;

    this.init();
  }

  loadState() {
    const defaultState = {
      studentName: "Lisa Bintang",
      level: 1,
      xp: 120,
      starbux: 250,
      streak: 3,
      lastActiveDate: new Date().toISOString().split("T")[0],
      avatar: {
        hair: "pink_twintails",
        outfit: "kpop_stage",
        accessory: "lightstick",
        pet: "neon_unicorn"
      },
      completedMissions: {}, // { "day1_bm_read": true, ... }
      unlockedCards: ["card_1"],
      inventory: ["hat_kpop_lightstick", "pet_neon_unicorn"]
    };

    try {
      const saved = localStorage.getItem("STARBLOX_USER_DATA");
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Could not load local state:", e);
    }
    return defaultState;
  }

  saveState() {
    try {
      localStorage.setItem("STARBLOX_USER_DATA", JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
    this.updateUserStatsUI();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.bindEvents();
      this.renderDaySelector();
      this.renderCurrentLesson();
      this.renderAvatarPreview();
      this.renderPhotocards();
      this.renderShop();
      this.updateUserStatsUI();
      this.checkDailyStreak();
    });
  }

  bindEvents() {
    // Sound & BGM toggles
    document.getElementById("btn-sound-toggle")?.addEventListener("click", () => {
      const muted = window.soundEngine.toggleMute();
      const el = document.getElementById("btn-sound-toggle");
      if (el) el.innerText = muted ? "🔇 Sound: OFF" : "🔊 Sound: ON";
    });

    document.getElementById("btn-bgm-toggle")?.addEventListener("click", () => {
      const playing = window.soundEngine.toggleBgm();
      const el = document.getElementById("btn-bgm-toggle");
      if (el) el.innerText = playing ? "🎵 K-Pop Beat: ON" : "🎵 K-Pop Beat: OFF";
    });

    // Subject tabs
    document.querySelectorAll(".subject-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const sub = tab.getAttribute("data-subject");
        this.setSubject(sub);
      });
    });

    // Mode tabs (Read / Write / Speak / Worksheet)
    document.querySelectorAll(".mode-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const mode = tab.getAttribute("data-mode");
        this.setMode(mode);
      });
    });

    // Avatar modal toggle
    document.getElementById("btn-open-avatar")?.addEventListener("click", () => {
      this.openModal("modal-avatar");
    });

    // Photocards modal toggle
    document.getElementById("btn-open-cards")?.addEventListener("click", () => {
      this.renderPhotocards();
      this.openModal("modal-cards");
    });

    // Shop modal toggle
    document.getElementById("btn-open-shop")?.addEventListener("click", () => {
      this.renderShop();
      this.openModal("modal-shop");
    });

    // Parent Guide modal toggle
    document.getElementById("btn-open-guide")?.addEventListener("click", () => {
      this.openModal("modal-guide");
    });

    // Close modals
    document.querySelectorAll(".close-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal-backdrop").style.display = "none";
      });
    });

    // Print worksheet button
    document.getElementById("btn-print-worksheet")?.addEventListener("click", () => {
      window.print();
    });
  }

  setSubject(subject) {
    this.currentSubject = subject;
    document.querySelectorAll(".subject-tab").forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-subject") === subject);
    });
    window.soundEngine.playJump();
    this.renderCurrentLesson();
  }

  setMode(mode) {
    this.currentMode = mode;
    document.querySelectorAll(".mode-tab").forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-mode") === mode);
    });
    window.soundEngine.playJump();
    this.renderCurrentLesson();
  }

  setDay(dayId) {
    this.currentDayId = dayId;
    document.querySelectorAll(".day-pill").forEach(p => {
      p.classList.toggle("active", parseInt(p.getAttribute("data-day")) === dayId);
    });
    window.soundEngine.playJump();
    this.renderCurrentLesson();
  }

  checkDailyStreak() {
    const today = new Date().toISOString().split("T")[0];
    if (this.state.lastActiveDate !== today) {
      // Check if consecutive
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (this.state.lastActiveDate === yesterday) {
        this.state.streak += 1;
      } else {
        this.state.streak = 1;
      }
      this.state.lastActiveDate = today;
      this.saveState();
    }
  }

  getCurrentDayData() {
    const days = window.CURRICULUM_DATABASE.days;
    return days.find(d => d.dayId === this.currentDayId) || days[0];
  }

  getCurrentSubjectData() {
    const day = this.getCurrentDayData();
    return day[this.currentSubject];
  }

  renderDaySelector() {
    const container = document.getElementById("day-selector-container");
    if (!container) return;

    const days = window.CURRICULUM_DATABASE.days;
    container.innerHTML = days.map(d => `
      <button class="day-pill ${d.dayId === this.currentDayId ? 'active' : ''}" data-day="${d.dayId}">
        ⭐ Day ${d.dayId}
      </button>
    `).join("");

    container.querySelectorAll(".day-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        this.setDay(parseInt(pill.getAttribute("data-day")));
      });
    });
  }

  renderCurrentLesson() {
    const dayData = this.getCurrentDayData();
    const subData = this.getCurrentSubjectData();
    const contentArea = document.getElementById("lesson-content-area");
    if (!contentArea) return;

    // Header info
    document.getElementById("lesson-day-title").innerText = `${dayData.themeTitle}`;
    document.getElementById("lesson-kpop-banner").innerText = `✨ ${dayData.kpopTheme} • KSSR Semakan`;
    document.getElementById("lesson-topic-title").innerText = `${subData.topic}`;
    document.getElementById("lesson-standard-code").innerText = `Standard Pembelajaran: ${subData.learningStandard}`;

    // Render Mode Content
    if (this.currentMode === "read") {
      this.renderReadMode(subData, contentArea);
    } else if (this.currentMode === "write") {
      this.renderWriteMode(subData, contentArea);
    } else if (this.currentMode === "speak") {
      this.renderSpeakMode(subData, contentArea);
    } else if (this.currentMode === "worksheet") {
      this.renderWorksheetMode(subData, dayData, contentArea);
    }

    this.updateObbyProgress();
  }

  // --- 1. READ MODE ---
  renderReadMode(subData, container) {
    const read = subData.read;
    const missionKey = `day${this.currentDayId}_${this.currentSubject}_read`;
    const isCompleted = !!this.state.completedMissions[missionKey];

    let langCode = 'ms';
    if (this.currentSubject === 'bc') langCode = 'zh';
    if (this.currentSubject === 'bi') langCode = 'en';

    container.innerHTML = `
      <div class="read-card glass-panel">
        <div class="card-header">
          <span class="badge-tag">📖 READ & COMPREHEND</span>
          <button id="btn-read-aloud" class="btn-action-primary">
            🔊 Dengar Audio (Listen)
          </button>
        </div>

        <h3 class="story-title">${read.title}</h3>
        ${read.pinyin ? `<p class="pinyin-guide">${read.pinyin}</p>` : ''}
        <div class="story-text" id="story-text-body">${read.text}</div>

        <div class="vocab-section">
          <h4>🌟 Kamus Mini & Kosa Kata (Vocabulary):</h4>
          <div class="vocab-grid">
            ${read.vocabulary.map(v => `
              <div class="vocab-chip" onclick="window.speechEngine.speakText('${v.word.replace(/'/g, "\\'")}', '${langCode}')">
                <span class="vocab-word">🔊 ${v.word}</span>
                <span class="vocab-meaning">${v.meaning}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="completion-bar">
          <button id="btn-complete-read" class="btn-claim-starbux ${isCompleted ? 'claimed' : ''}">
            ${isCompleted ? '✅ Selesai Dibaca (+20 Starbux Diperoleh)' : '⭐ Tandakan Selesai Baca (+20 Starbux)'}
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-read-aloud")?.addEventListener("click", () => {
      const btn = document.getElementById("btn-read-aloud");
      btn.innerText = "⏳ Membaca...";
      window.speechEngine.speakText(read.text, langCode, () => {
        btn.innerText = "🔊 Dengar Audio (Listen)";
      });
    });

    document.getElementById("btn-complete-read")?.addEventListener("click", () => {
      if (!this.state.completedMissions[missionKey]) {
        this.rewardUser(20, 15, missionKey);
        this.renderCurrentLesson();
      }
    });
  }

  // --- 2. WRITE MODE ---
  renderWriteMode(subData, container) {
    const write = subData.write;
    const missionKey = `day${this.currentDayId}_${this.currentSubject}_write`;
    const isCompleted = !!this.state.completedMissions[missionKey];

    container.innerHTML = `
      <div class="write-card glass-panel">
        <div class="card-header">
          <span class="badge-tag">✍️ WRITE & TRACE PRACTICE</span>
          <span class="sub-tag">Latihan Menulis & Menjawab</span>
        </div>

        <div class="write-grid">
          <!-- Left side: Digital Stroke / Equations Canvas -->
          <div class="canvas-box">
            <h4>🎨 Papan Latihan Menulis (Digital Canvas)</h4>
            <p class="canvas-instruction">Tulis atau lukis perkataan sasaran: <strong>${write.traceWord || write.character || "Latihan"}</strong></p>
            
            ${write.character ? `
              <div class="hanzi-focus-box">
                <div class="hanzi-char">${write.character}</div>
                <div class="hanzi-meta">
                  <span>拼音: ${write.pinyin}</span>
                  <span>部首: ${write.radicals}</span>
                  <span>笔画: ${write.strokeCount}画</span>
                  <span>词组: ${write.phrase}</span>
                </div>
              </div>
            ` : ''}

            <canvas id="writing-canvas" width="450" height="200"></canvas>
            <div class="canvas-controls">
              <button id="btn-clear-canvas" class="btn-secondary">🗑️ Padam (Clear)</button>
              <button id="btn-sample-stroke" class="btn-secondary">✏️ Tunjuk Contoh</button>
            </div>
          </div>

          <!-- Right side: Interactive Question Challenge -->
          <div class="quiz-box">
            <h4>💡 Cabaran Soalan Harian</h4>
            <p class="quiz-instruction">${write.instruction}</p>
            <div class="quiz-prompt-bubble">${write.prompt}</div>
            <p class="quiz-question">${write.question}</p>

            <div class="quiz-options">
              ${write.options.map(opt => `
                <button class="quiz-opt-btn" data-val="${opt}">${opt}</button>
              `).join("")}
            </div>

            <div id="quiz-feedback-box" class="quiz-feedback hidden"></div>
          </div>
        </div>

        <div class="completion-bar">
          <button id="btn-complete-write" class="btn-claim-starbux ${isCompleted ? 'claimed' : ''}">
            ${isCompleted ? '✅ Cabaran Menulis Lengkap (+25 Starbux)' : '⭐ Selesaikan Menulis (+25 Starbux)'}
          </button>
        </div>
      </div>
    `;

    this.initCanvas(write.traceWord || write.character);

    // Option clicks
    container.querySelectorAll(".quiz-opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-val");
        const feedback = document.getElementById("quiz-feedback-box");
        feedback.classList.remove("hidden", "correct", "wrong");

        if (selected === write.correctAnswer) {
          feedback.classList.add("correct");
          feedback.innerHTML = `🎉 TEPAT SEKALI! ${write.explanation} 💖 (+15 Starbux)`;
          window.soundEngine.playCorrect();
          btn.classList.add("selected-correct");
          if (!this.state.completedMissions[missionKey]) {
            this.rewardUser(25, 20, missionKey);
          }
        } else {
          feedback.classList.add("wrong");
          feedback.innerHTML = `❌ Cuba lagi! Jawapan yang tepat ialah: <strong>${write.correctAnswer}</strong>. ${write.explanation}`;
          window.soundEngine.playWrong();
          btn.classList.add("selected-wrong");
        }
      });
    });

    document.getElementById("btn-complete-write")?.addEventListener("click", () => {
      if (!this.state.completedMissions[missionKey]) {
        this.rewardUser(25, 20, missionKey);
        this.renderCurrentLesson();
      }
    });
  }

  initCanvas(placeholderText) {
    this.canvas = document.getElementById("writing-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    // Clear background
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Trace guide line
    this.ctx.font = "bold 36px 'Fredoka', 'Noto Sans SC', sans-serif";
    this.ctx.fillStyle = "rgba(220, 200, 240, 0.4)";
    this.ctx.textAlign = "center";
    this.ctx.fillText(placeholderText || "Tulis Di Sini", this.canvas.width / 2, this.canvas.height / 2 + 12);

    // Drawing handlers
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      this.isDrawing = true;
      const pos = getPos(e);
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
      this.ctx.lineWidth = 6;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = "#e84393"; // K-Pop neon magenta ink
      e.preventDefault();
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      const pos = getPos(e);
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
      e.preventDefault();
    };

    const stopDraw = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener("mousedown", startDraw);
    this.canvas.addEventListener("mousemove", draw);
    this.canvas.addEventListener("mouseup", stopDraw);
    this.canvas.addEventListener("mouseleave", stopDraw);

    this.canvas.addEventListener("touchstart", startDraw, { passive: false });
    this.canvas.addEventListener("touchmove", draw, { passive: false });
    this.canvas.addEventListener("touchend", stopDraw);

    document.getElementById("btn-clear-canvas")?.addEventListener("click", () => {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      window.soundEngine.playJump();
    });

    document.getElementById("btn-sample-stroke")?.addEventListener("click", () => {
      this.ctx.font = "bold 42px 'Noto Sans SC', 'Fredoka', sans-serif";
      this.ctx.fillStyle = "#fd79a8";
      this.ctx.textAlign = "center";
      this.ctx.fillText(placeholderText, this.canvas.width / 2, this.canvas.height / 2 + 15);
      window.soundEngine.playCoin();
    });
  }

  // --- 3. SPEAK MODE ---
  renderSpeakMode(subData, container) {
    const speak = subData.speak;
    const missionKey = `day${this.currentDayId}_${this.currentSubject}_speak`;
    const isCompleted = !!this.state.completedMissions[missionKey];

    let langCode = 'ms';
    if (this.currentSubject === 'bc') langCode = 'zh';
    if (this.currentSubject === 'bi') langCode = 'en';

    container.innerHTML = `
      <div class="speak-card glass-panel">
        <div class="card-header">
          <span class="badge-tag">🎤 SPEAKING & PRONUNCIATION STAGE</span>
          <span class="sub-tag">Latihan Sebutan Bertutur & Rakaman</span>
        </div>

        <div class="kpop-stage-box">
          <div class="stage-lighting"></div>
          <div class="stage-mic-icon">🎤</div>
          <h3 class="speak-target-phrase">"${speak.prompt}"</h3>
          ${speak.pinyinPrompt ? `<p class="pinyin-guide">${speak.pinyinPrompt}</p>` : ''}
          <p class="speak-tips">💡 Petua Sebutan: ${speak.tips}</p>

          <div class="speak-action-buttons">
            <button id="btn-listen-sample" class="btn-action-secondary">
              🔊 1. Dengar Sebutan Contoh
            </button>
            <button id="btn-record-voice" class="btn-action-mic">
              🎙️ 2. Tekan & Sebut (Record Mic)
            </button>
            <button id="btn-simulate-voice" class="btn-action-test">
              ✨ Lulus Ujian Sebutan (Simulate)
            </button>
          </div>

          <div id="speech-result-box" class="speech-result-box hidden">
            <div id="speech-stars" class="speech-stars">⭐⭐⭐</div>
            <div id="speech-transcript" class="speech-transcript"></div>
            <div id="speech-msg" class="speech-msg"></div>
          </div>
        </div>

        <div class="completion-bar">
          <button id="btn-complete-speak" class="btn-claim-starbux ${isCompleted ? 'claimed' : ''}">
            ${isCompleted ? '✅ Latihan Sebutan Lulus (+30 Starbux)' : '⭐ Selesai Bertutur (+30 Starbux)'}
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-listen-sample")?.addEventListener("click", () => {
      window.speechEngine.speakText(speak.targetSpeech || speak.prompt, langCode);
    });

    const micBtn = document.getElementById("btn-record-voice");
    const resultBox = document.getElementById("speech-result-box");
    const transcriptEl = document.getElementById("speech-transcript");
    const starsEl = document.getElementById("speech-stars");
    const msgEl = document.getElementById("speech-msg");

    micBtn?.addEventListener("click", () => {
      micBtn.innerText = "🔴 Mendengar... Sila Bercakap!";
      micBtn.classList.add("pulsing");

      window.speechEngine.listenAndScore({
        targetText: speak.targetSpeech || speak.prompt,
        langCode: langCode,
        onStart: () => {},
        onResult: (res) => {
          micBtn.innerText = "🎙️ 2. Tekan & Sebut (Record Mic)";
          micBtn.classList.remove("pulsing");
          resultBox.classList.remove("hidden");

          transcriptEl.innerText = `Kamu menyebut: "${res.transcript}"`;
          starsEl.innerText = res.similarityScore > 80 ? "⭐⭐⭐ Cemerlang!" : res.similarityScore > 50 ? "⭐⭐ Bagus!" : "⭐ Boleh Diperbaiki";
          msgEl.innerText = res.passed ? "Hebat! Sebutan kamu sangat jelas dan menawan hati para juri konsert!" : "Teruskan berlatih sebutan perkataan yang sukar ya!";

          if (res.passed) {
            window.soundEngine.playFanfare();
            if (!this.state.completedMissions[missionKey]) {
              this.rewardUser(30, 25, missionKey);
            }
          } else {
            window.soundEngine.playWrong();
          }
        },
        onError: (err) => {
          micBtn.innerText = "🎙️ 2. Tekan & Sebut (Record Mic)";
          micBtn.classList.remove("pulsing");
          alert("Petunjuk Mikrofon: " + err + "\n\nAnda boleh menggunakan butang 'Lulus Ujian Sebutan' jika pelayar tidak membenarkan mikrofon.");
        }
      });
    });

    document.getElementById("btn-simulate-voice")?.addEventListener("click", () => {
      resultBox.classList.remove("hidden");
      transcriptEl.innerText = `Kamu menyebut: "${speak.targetSpeech || speak.prompt}"`;
      starsEl.innerText = "⭐⭐⭐ Sempurna (100% Match!)";
      msgEl.innerText = "Luar biasa! Vokal kamu setaraf bintang idol antarabangsa!";
      window.soundEngine.playFanfare();
      if (!this.state.completedMissions[missionKey]) {
        this.rewardUser(30, 25, missionKey);
      }
    });

    document.getElementById("btn-complete-speak")?.addEventListener("click", () => {
      if (!this.state.completedMissions[missionKey]) {
        this.rewardUser(30, 25, missionKey);
        this.renderCurrentLesson();
      }
    });
  }

  // --- 4. WORKSHEET MODE ---
  renderWorksheetMode(subData, dayData, container) {
    const questions = subData.worksheetQuestions || [];
    const missionKey = `day${this.currentDayId}_${this.currentSubject}_worksheet`;
    const isCompleted = !!this.state.completedMissions[missionKey];

    container.innerHTML = `
      <div class="worksheet-card glass-panel" id="printable-worksheet-area">
        <div class="worksheet-school-header">
          <div class="school-logo">⭐ STARBLOX MALAYSIA PRIMARY ACADEMY</div>
          <div class="school-meta">
            <span><strong>Nama Murid:</strong> ${this.state.studentName}</span>
            <span><strong>Kelas:</strong> Tahun 3 Gemilang</span>
            <span><strong>Tarikh:</strong> ${new Date().toLocaleDateString('ms-MY')}</span>
            <span><strong>Mata Pelajaran:</strong> ${subData.subject}</span>
          </div>
        </div>

        <div class="worksheet-title-banner">
          <h3>LEMBARAN KERJA HARIAN (DAILY WORKSHEET)</h3>
          <p>Topik: ${subData.topic} • ${subData.learningStandard}</p>
        </div>

        <div class="worksheet-questions-list">
          ${questions.map((item, index) => `
            <div class="worksheet-question-row">
              <div class="q-num">Soalan ${index + 1}:</div>
              <div class="q-text">${item.q}</div>
              <div class="q-answer-box">
                <input type="text" class="worksheet-input" placeholder="Tuliskan jawapan kamu di sini..." data-correct="${item.a}">
                <button class="btn-check-answer">Semak</button>
                <span class="q-solution-reveal hidden">Jawapan: <strong>${item.a}</strong></span>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="worksheet-footer no-print">
          <button id="btn-print-action" class="btn-action-primary">
            🖨️ Cetak Lembaran Kerja (Print to Paper/PDF)
          </button>
          <button id="btn-complete-worksheet" class="btn-claim-starbux ${isCompleted ? 'claimed' : ''}">
            ${isCompleted ? '✅ Lembaran Kerja Disahkan (+35 Starbux)' : '⭐ Hantar & Tebus Starbux (+35 Starbux)'}
          </button>
        </div>
      </div>
    `;

    // Interactive Answer Check
    container.querySelectorAll(".btn-check-answer").forEach(btn => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".worksheet-question-row");
        const reveal = row.querySelector(".q-solution-reveal");
        reveal.classList.remove("hidden");
        window.soundEngine.playCoin();
      });
    });

    document.getElementById("btn-print-action")?.addEventListener("click", () => {
      window.print();
    });

    document.getElementById("btn-complete-worksheet")?.addEventListener("click", () => {
      if (!this.state.completedMissions[missionKey]) {
        this.rewardUser(35, 30, missionKey);
        this.renderCurrentLesson();
      }
    });
  }

  // --- REWARD / GAMIFICATION ---
  rewardUser(starbux, xp, missionKey) {
    this.state.starbux += starbux;
    this.state.xp += xp;
    this.state.completedMissions[missionKey] = true;

    // Check level up (every 100 xp)
    const newLevel = Math.floor(this.state.xp / 100) + 1;
    if (newLevel > this.state.level) {
      this.state.level = newLevel;
      this.showToast(`🎉 TAHNIAH! Kamu telah naik ke LEVEL ${newLevel}! Obby Unlocked!`, "level-up");
      window.soundEngine.playFanfare();
    } else {
      window.soundEngine.playCoin();
      this.showToast(`✨ +${starbux} Starbux & +${xp} XP diperoleh!`, "reward");
    }

    // Check if whole day completed to award Photocard
    this.checkDailyGachaReward();
    this.saveState();
  }

  checkDailyGachaReward() {
    const subjects = ['bm', 'bc', 'bi', 'sc', 'ma'];
    const allDone = subjects.every(s => 
      this.state.completedMissions[`day${this.currentDayId}_${s}_read`] ||
      this.state.completedMissions[`day${this.currentDayId}_${s}_write`]
    );

    if (allDone) {
      const allCards = window.CURRICULUM_DATABASE.photocards;
      const unowned = allCards.filter(c => !this.state.unlockedCards.includes(c.id));
      if (unowned.length > 0) {
        const awardedCard = unowned[0];
        this.state.unlockedCards.push(awardedCard.id);
        this.showToast(`🎁 Hadiah Harian: Kamu membuka Photocard K-Pop Khas: ${awardedCard.name}!`, "photocard");
        window.soundEngine.playFanfare();
      }
    }
  }

  updateUserStatsUI() {
    const nameEl = document.getElementById("stat-user-name");
    const lvlEl = document.getElementById("stat-user-level");
    const starbuxEl = document.getElementById("stat-user-starbux");
    const streakEl = document.getElementById("stat-user-streak");
    const xpBar = document.getElementById("stat-xp-progress-bar");
    const lightstickBar = document.getElementById("stat-lightstick-bar");

    if (nameEl) nameEl.innerText = this.state.studentName;
    if (lvlEl) lvlEl.innerText = `Lv. ${this.state.level}`;
    if (starbuxEl) starbuxEl.innerText = `${this.state.starbux} 🪙`;
    if (streakEl) streakEl.innerText = `🔥 ${this.state.streak} Hari Berturut`;

    const xpCurrentInLevel = this.state.xp % 100;
    if (xpBar) xpBar.style.width = `${xpCurrentInLevel}%`;

    // Count today's completed tasks
    const completedCount = Object.keys(this.state.completedMissions).length;
    const lightstickPct = Math.min(100, (completedCount % 10) * 10);
    if (lightstickBar) lightstickBar.style.width = `${lightstickPct}%`;
  }

  updateObbyProgress() {
    const obbyContainer = document.getElementById("obby-track-container");
    if (!obbyContainer) return;

    const stages = [
      { id: 1, name: "Stage 1: Bahasa Melayu Tower", icon: "🇲🇾" },
      { id: 2, name: "Stage 2: Hanzi Rainbow Path", icon: "🇨🇳" },
      { id: 3, name: "Stage 3: English Word Bridge", icon: "🇬🇧" },
      { id: 4, name: "Stage 4: Science Astro Lab", icon: "🔬" },
      { id: 5, name: "Stage 5: Math Logic Castle", icon: "🔢" },
      { id: 6, name: "Stage 6: K-Pop Final Stage", icon: "👑" }
    ];

    const currentStageIndex = Math.min(stages.length - 1, Math.floor(this.state.level / 2));

    obbyContainer.innerHTML = stages.map((st, i) => `
      <div class="obby-checkpoint ${i <= currentStageIndex ? 'cleared' : ''} ${i === currentStageIndex ? 'current-avatar' : ''}">
        <div class="obby-step-icon">${st.icon}</div>
        <div class="obby-step-label">${st.name}</div>
        ${i === currentStageIndex ? '<div class="avatar-walker">🏃‍♀️</div>' : ''}
      </div>
    `).join("");
  }

  // --- AVATAR BUILDER ---
  renderAvatarPreview() {
    const preview = document.getElementById("avatar-display-preview");
    if (!preview) return;

    const petIcon = this.getPetIcon(this.state.avatar.pet);
    const accIcon = this.getAccIcon(this.state.avatar.accessory);

    preview.innerHTML = `
      <div class="roblox-chibi-figure outfit-${this.state.avatar.outfit}">
        <div class="chibi-head hair-${this.state.avatar.hair}">
          <div class="chibi-face">
            <span class="chibi-eye">✨</span>
            <span class="chibi-mouth">‿</span>
            <span class="chibi-eye">✨</span>
          </div>
          <div class="chibi-acc">${accIcon}</div>
        </div>
        <div class="chibi-torso">
          <div class="chibi-arm left"></div>
          <div class="chibi-shirt">⭐</div>
          <div class="chibi-arm right"></div>
        </div>
        <div class="chibi-legs">
          <div class="chibi-leg"></div>
          <div class="chibi-leg"></div>
        </div>
        <div class="chibi-pet-companion">${petIcon}</div>
      </div>
    `;
  }

  getPetIcon(pet) {
    if (pet === "neon_unicorn") return "🦄";
    if (pet === "kpop_hamster") return "🐹";
    if (pet === "doge") return "🐕";
    return "🦄";
  }

  getAccIcon(acc) {
    if (acc === "lightstick") return "💖";
    if (acc === "visor") return "👑";
    if (acc === "wings") return "🪽";
    return "💖";
  }

  // --- PHOTOCARDS MODAL ---
  renderPhotocards() {
    const grid = document.getElementById("photocards-grid");
    if (!grid) return;

    const allCards = window.CURRICULUM_DATABASE.photocards;
    grid.innerHTML = allCards.map(card => {
      const isUnlocked = this.state.unlockedCards.includes(card.id);
      return `
        <div class="kpop-photocard ${isUnlocked ? 'unlocked' : 'locked'}" style="--card-color: ${card.imageColor}">
          <div class="card-inner">
            <div class="card-rank">${card.rank}</div>
            <div class="card-group">${card.group}</div>
            <div class="card-avatar-art">${isUnlocked ? '🌟👸' : '🔒'}</div>
            <div class="card-name">${isUnlocked ? card.name : 'Rahsia Bintang'}</div>
            <div class="card-quote">${isUnlocked ? `"${card.quote}"` : 'Selesaikan misi harian untuk membuka!'}</div>
            <div class="card-power">${isUnlocked ? `⚡ ${card.power}` : 'Terkunci'}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- SHOP MODAL ---
  renderShop() {
    const list = document.getElementById("shop-items-list");
    if (!list) return;

    const items = window.CURRICULUM_DATABASE.shopItems;
    list.innerHTML = items.map(item => {
      const isOwned = this.state.inventory.includes(item.id);
      return `
        <div class="shop-item-card">
          <div class="shop-item-icon">${item.icon}</div>
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-desc">${item.desc}</div>
          <div class="shop-item-price">🪙 ${item.price} Starbux</div>
          <button class="btn-buy-item ${isOwned ? 'owned' : ''}" data-id="${item.id}" data-price="${item.price}">
            ${isOwned ? 'Sudah Dimiliki' : 'Beli Aksesori'}
          </button>
        </div>
      `;
    }).join("");

    list.querySelectorAll(".btn-buy-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const price = parseInt(btn.getAttribute("data-price"));

        if (this.state.inventory.includes(id)) {
          alert("Aksesori ini sudah berada dalam almari kamu!");
          return;
        }

        if (this.state.starbux >= price) {
          this.state.starbux -= price;
          this.state.inventory.push(id);
          window.soundEngine.playFanfare();
          this.showToast(`🎉 Pembelian berjaya! ${id} telah ditambah ke avatar.`, "success");
          this.saveState();
          this.renderShop();
          this.renderAvatarPreview();
        } else {
          window.soundEngine.playWrong();
          alert("Starbux tidak mencukupi! Selesaikan lagi kuiz dan lembaran kerja harian.");
        }
      });
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      window.soundEngine.playJump();
    }
  }

  showToast(msg, type = "normal") {
    const toast = document.createElement("div");
    toast.className = `starblox-toast toast-${type}`;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
}

window.starbloxApp = new StarbloxApp();
