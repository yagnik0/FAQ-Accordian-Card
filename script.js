const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach(function (wrapper) {

    const heading = wrapper.querySelector('.para-question')
    const paraSelect = wrapper.querySelector('.para-ans');
    const arrow = wrapper.querySelector('.arrow');

    wrapper.addEventListener('click', () => {
        arrow.classList.toggle('rotate-active')
        paraSelect.classList.toggle('hidden')
        heading.style.color = "hsl(238, 30%, 12%)"

        wrappers.forEach((otherwrapper) => {
            if (otherwrapper !== wrapper) {
                otherwrapper.querySelector('.para-ans').classList.add('hidden')
                otherwrapper.querySelector('.arrow').classList.remove('rotate-active')
            }
        })
    });
})





