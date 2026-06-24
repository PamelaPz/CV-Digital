import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

interface Invader {
  id: number;
  state: 'alive' | 'exploding' | 'dead';
}

@Component({
  selector: 'app-game-bg',
  imports: [],
  templateUrl: './game-bg.html',
  styleUrl: './game-bg.scss'
})
export class GameBg implements AfterViewInit, OnDestroy {
  @ViewChild('laser')     laserRef!:     ElementRef<HTMLElement>;
  @ViewChild('shipGroup') shipGroupRef!: ElementRef<HTMLElement>;
  @ViewChild('formation') formationRef!: ElementRef<HTMLElement>;

  invaders: Invader[] = Array.from({ length: 5 }, (_, i) => ({ id: i, state: 'alive' as const }));
  formationX = 0;
  laserFiring = false;

  private shootTimer?: ReturnType<typeof setTimeout>;
  private marchTimer?: ReturnType<typeof setInterval>;

  private readonly STEP_PX = 10;
  private readonly STEP_MS = 400;

  ngAfterViewInit(): void {
    this.startMarch();
    this.scheduleNextShot();
  }

  ngOnDestroy(): void {
    clearTimeout(this.shootTimer);
    clearInterval(this.marchTimer);
  }

  private startMarch(): void {
    this.marchTimer = setInterval(() => {
      this.formationX += this.STEP_PX;
      const formRect = this.formationRef.nativeElement.getBoundingClientRect();
      const shipRect = this.shipGroupRef.nativeElement.getBoundingClientRect();
      if (formRect.right >= shipRect.left - 20) {
        this.resetGame();
      }
    }, this.STEP_MS);
  }

  private scheduleNextShot(): void {
    const delay = 900 + Math.random() * 1200;
    this.shootTimer = setTimeout(() => this.fireLaser(), delay);
  }

  private fireLaser(): void {
    if (this.laserFiring) {
      this.scheduleNextShot();
      return;
    }

    const shipRect = this.shipGroupRef.nativeElement.getBoundingClientRect();
    const formRect = this.formationRef.nativeElement.getBoundingClientRect();
    const shipCenterY = shipRect.top + shipRect.height / 2;

    const invEls = this.formationRef.nativeElement.querySelectorAll<HTMLElement>('.inv');
    let target: Invader | null = null;
    let minDist = Infinity;

    this.invaders.forEach((inv, i) => {
      if (inv.state !== 'alive') return;
      const el = invEls[i];
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(shipCenterY - (r.top + r.height / 2));
      if (dist < minDist) { minDist = dist; target = inv; }
    });

    if (!target) {
      this.scheduleNextShot();
      return;
    }

    this.laserFiring = true;

    const distance = Math.max(shipRect.left - formRect.right, 80);
    const travelMs = distance / (1400 / 800);

    const hit = target;
    setTimeout(() => this.explodeInvader(hit), travelMs);
    setTimeout(() => {
      this.laserFiring = false;
      this.scheduleNextShot();
    }, 950);
  }

  private explodeInvader(inv: Invader): void {
    inv.state = 'exploding';
    setTimeout(() => {
      inv.state = 'dead';
      if (this.invaders.every(i => i.state === 'dead')) {
        this.resetGame();
      }
    }, 500);
  }

  private resetGame(): void {
    clearInterval(this.marchTimer);
    clearTimeout(this.shootTimer);
    this.laserFiring = false;
    setTimeout(() => {
      this.formationX = 0;
      this.invaders.forEach(i => { i.state = 'alive'; });
      this.startMarch();
      this.scheduleNextShot();
    }, 1500);
  }
}
