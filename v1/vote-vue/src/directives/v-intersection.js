const VIntersection = {
  beforeMount(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      binding.value()
    })

    observer.observe(el)
  }
}

export default VIntersection
