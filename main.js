/* Interactive Systems Terminal & Receipt Inspector
 * Sovereign CLI for Rehan Khan (@certifiedtechidiot)
 */

(function () {
  'use strict';

  const terminalInput = document.getElementById('cli-input');
  const terminalOutput = document.getElementById('cli-output');
  const terminalForm = document.getElementById('cli-form');

  if (!terminalInput || !terminalOutput || !terminalForm) return;

  const COMMAND_REGISTRY = {
    help: `Available inspection commands:
  receipts     - List all verified engineering receipts
  envision     - System 01: Envision offline edge-AI assistive hardware specs
  wearable     - System 02: Sovereign AI wearable pendant pinout & architecture
  vectorwrite  - System 03: RNN stroke synthesis & CNC G-code plotter kinematics
  rag          - System 04: Zero-dependency pure Python RAG engine
  bom          - Bill of materials breakdown (sub-Rs 1,500 budget)
  bench        - Physical fabrication & hardware laboratory instrumentation
  contact      - Direct wire coordinates & transmission channels
  clear        - Clear terminal screen buffer`,

    receipts: `VERIFIED RECEIPT LEDGER:
[RC-01] Envision Assistive Stick: Patented spatial edge-AI hardware, ultrasonic depth, NGO deployed
[RC-02] Sovereign AI Pendant: ESP32-C3 RISC-V, INMP441 I2S DMA, MicroSD buffer, 15uA quiescent draw
[RC-03] Vector Write: RNN stroke trajectory synthesis + custom G-code CNC plotter execution
[RC-04] Sovereign RAG Engine: 100% pure standard-library Python (0 pip/npm dependencies)
[RC-05] Rubrica Platform: Production platform deployed live at https://www.rubrica.in
[RC-06] Fabrication Lab: Anycubic Kobra 2 Neo, custom CAD enclosure, sub-30g wearable chassis`,

    envision: `SYSTEM 01: ENVISION AI SMART STICK
- Classification: Patented Assistive Spatial Guidance System
- Architecture: Edge inference with low-power YOLO vision model
- Sensor Array: Ultrasonic spatial depth transducers + tactile obstacle feedback
- Deployment: Physical field trials conducted via regional disability NGOs
- Power: High-density Li-ion cell with integrated fault protection
- Target: Full situational awareness for the visually impaired without cloud tether`,

    wearable: `SYSTEM 02: SOVEREIGN WEARABLE AI PENDANT
- Controller: Seeed Studio XIAO ESP32-C3 (32-bit RISC-V @ 160MHz, 400KB SRAM)
- Audio Capture: INMP441 Omnidirectional Digital Mic (I2S DMA direct streaming)
- Offline Storage: MicroSD SPI buffer module for continuous local audio capture
- Power Budget: 3.7V 300mAh LiPo; deep sleep current < 15uA; full-day interrupt wake
- Enclosure: Custom CAD housing 3D-printed on Anycubic Kobra 2 Neo (< 30g, 35x35x10mm)
- Privacy Guard: Physical push-to-talk mechanical toggle switch`,

    vectorwrite: `SYSTEM 03: VECTOR WRITE
- Core Engine: Recurrent Neural Network (RNN) stroke synthesis model
- Kinematics: Real-time generation of continuous pen trajectories converted to G-code
- Hardware: Custom 2-axis CNC pen plotters with variable pen-lift pressure damping
- Unit Economics: Autonomous B2C handwriting generation + proprietary stroke dataset
- Invariant: 100% physical pen-on-paper strokes indistinguishable from human handwriting`,

    rag: `SYSTEM 04: ZERO-DEPENDENCY PYTHON RAG ENGINE
- Philosophy: "Vibe coding breaks. Pure systems engineering remains."
- Dependencies: Pure Python standard library (os, sys, urllib, math, json)
- Zero Bloat: 0 LangChain, 0 ChromaDB, 0 LlamaIndex, 0 heavy frameworks
- Chunker: Deterministic 350-word sliding window slicer with unicode-safe normalization
- Lexical Retriever: Pure token overlap argmax scoring with sub-millisecond retrieval
- Portability: Runs effortlessly on a 4GB RAM machine or an embedded Linux box`,

    bom: `SOVEREIGN PENDANT BILL OF MATERIALS (BOM):
--------------------------------------------------------------
Item                             Interface        Cost (INR)
--------------------------------------------------------------
Seeed XIAO ESP32-C3              RISC-V / Wi-Fi   Rs 480
INMP441 I2S Digital Mic          I2S DMA          Rs 140
MicroSD SPI Card Module          SPI              Rs 75
3.7V 300mAh LiPo Cell            JST 1.25mm       Rs 180
1027 Coin Haptic Motor           PWM / GPIO       Rs 45
Tactile Micro-Switches (x2)      Interrupt GPIO   Rs 15
3D Chassis (Kobra 2 Neo PETG)    Physical CAD     Rs 35
Passives, Wiring & Battery Board Hardware         Rs 110
--------------------------------------------------------------
TOTAL BILL OF MATERIALS                           Rs 1,080`,

    bench: `PHYSICAL HARDWARE BENCH & FABRICATION:
- 3D Printing: Anycubic Kobra 2 Neo (functional PETG/PLA prints, 0.4mm nozzle)
- Controllers: ESP32-C3, ESP32-S3, RP2040, STM32, Arduino Uno
- Audio & Sensors: INMP441 I2S, HC-SR04 ultrasonic, MPU-6050 6-DOF IMU
- Instrumentation: Digital multimeter, logic analyzer, variable DC bench supply
- Soldering: Temperature-controlled ceramic station, lead-free flux, hot-air rework`,

    contact: `DIRECT TRANSMISSION COORDINATES:
- GitHub: https://github.com/certifiedtechidiot
- Live Platform: https://www.rubrica.in
- Email Wire: certifiedtechidiot@gmail.com
- Dispatch: Leave an unvarnished technical proposal or project brief.`
  };

  function appendOutput(command, response) {
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';

    const cmdLine = document.createElement('div');
    cmdLine.innerHTML = `<span class="terminal-prompt">$</span> ${escapeHtml(command)}`;
    entry.appendChild(cmdLine);

    if (response) {
      const respLine = document.createElement('div');
      respLine.className = 'terminal-output';
      respLine.textContent = response;
      entry.appendChild(respLine);
    }

    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  terminalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const raw = terminalInput.value.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    terminalInput.value = '';

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const output = COMMAND_REGISTRY[cmd] || `command not recognized: '${escapeHtml(raw)}'. Type 'help' for command list.`;
    appendOutput(raw, output);
  });
})();
