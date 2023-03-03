console.log('Opaaa eto me i men')

const containers = document.querySelectorAll('.container')


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: 0.2,
    }
)

containers.forEach(container => {
    observer.observe(container)
})
