import { Component, ElementRef, ViewChild, inject, afterNextRender, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  template: `<canvas #matrixCanvas class="matrix-canvas"></canvas>`,
  styles: [`
    .matrix-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1; // WICHTIG: Liegt hinter dem Inhalt
      display: block;
    }
  `]
})
export class MatrixBackgroundComponent implements OnDestroy {
  // Zugriff auf das Canvas-Element im HTML
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private animationInterval: any;

  // Kryptische Zeichen (Katakana, Latein, Zahlen)
  private characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private charArray = this.characters.split('');

  private fontSize = 16;
  private columns = 0;
  private drops: number[] = [];

  constructor() {
    // Dieser Block läuft NUR im Browser, niemals auf dem Server
    afterNextRender(() => {
      this.setupCanvas();
      this.startAnimation();

      // Canvas anpassen, falls der Nutzer das Fenster in der Größe verändert
      window.addEventListener('resize', () => this.setupCanvas());
    });
  }

  ngOnDestroy() {
    // WICHTIG: Intervall stoppen, wenn die Komponente zerstört wird,
    // um Speicherlecks zu verhindern.
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    window.removeEventListener('resize', () => this.setupCanvas());
  }

  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');

    // Canvas auf volle Bildschirmgröße setzen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Berechnen, wie viele Spalten wir brauchen
    this.columns = Math.floor(canvas.width / this.fontSize);

    // Startposition (y-Koordinate) für jede Spalte auf 1 setzen
    this.drops = [];
    for (let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
  }

  private draw() {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;

    // 1. Hintergrund leicht transparent schwarz übermalen
    // Das erzeugt den "Schweif"-Effekt der fallenden Zeichen
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.03)'; // Nutze die Hintergrundfarbe deines Portfolios (#0f172a)
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Grüne Zeichen zeichnen
    this.ctx.fillStyle = '#10b981'; // Deine Akzentfarbe (Modern Green)
    this.ctx.font = this.fontSize + 'px monospace';

    // Durch alle Spalten iterieren
    for (let i = 0; i < this.drops.length; i++) {
      // Zufälliges Zeichen auswählen
      const text = this.charArray[Math.floor(Math.random() * this.charArray.length)];

      // Zeichen zeichnen (x = Position, y = Position * FontSize)
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      // Wenn das Zeichen unten ankommt, zufällig oben neu starten
      // (Der Math.random Teil sorgt dafür, dass sie nicht alle gleichzeitig starten)
      if (this.drops[i] * this.fontSize > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      // Y-Koordinate für den nächsten Frame erhöhen
      this.drops[i]++;
    }
  }

  private startAnimation() {
    // Ungefähr 30 Frames pro Sekunde
    this.animationInterval = setInterval(() => this.draw(), 33);
  }
}
