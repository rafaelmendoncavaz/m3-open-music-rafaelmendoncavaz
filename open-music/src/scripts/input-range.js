export function applyInputRangeStyle() {

    const inputRange = document.querySelector('#input--price-range');

    inputRange.addEventListener('input', (e) => {

        const currentInputValue = e.target.value;
        const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;

        inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;

    });

};