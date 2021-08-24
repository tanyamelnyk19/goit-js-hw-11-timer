
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
    }

    getRefs() {
        const container = document.querySelector(this.selector);
        const  daysRef = container.querySelector('[data-value="days"');
        const  hoursRef = container.querySelector('[data-value="hours"');
        const  minsRef = container.querySelector('[data-value="mins"');
        const  secsRef = container.querySelector('[data-value="secs"');
        return { daysRef, hoursRef, minsRef, secsRef, container };
    }

    updateTimer({ daysRef, hoursRef, minsRef, secsRef, container }) {
        const time = this.targetDate - Date.now();

        if(time < 0) {
            clearInterval(this.intervalId);
            container.innerHTML = `<p class="field">Time is over!</p>`;
            return;
        }

        daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24))
        .toString().padStart(2, "0");
        hoursRef.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString().padStart(2, "0");
        minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        .toString().padStart(2, "0");
        secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000)
        .toString().padStart(2, "0");
    }

    start() {
        this.intervalId = setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000);
    }

    // stop() {
    //     clearInterval(this.intervalId)
    // }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 30, 2021'),
  });

timer.start();

// const startBtn = document.querySelector('[data-action="start"]');
// const stopBtn = document.querySelector('[data-action="stop"]');

// startBtn.addEventListener('click', () => timer.start());
// stopBtn.addEventListener('click', () => timer.stop());