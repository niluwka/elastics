try {
   class SLIDER {
    constructor(options) {
        this.slider = document.querySelector(options.slider);
        if (this.slider) {


            this.sliderLine = this.slider.querySelector('.main__wrapper')
            this.slides = [...this.sliderLine.children]
            this.more = this.slider.querySelector('.main__content-more')
            this.back = this.slider.querySelector('.main__content-back')
            this.next = this.slider.querySelector('.slider__next')
            this.prev = this.slider.querySelector('.slider__prev')

            this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
            this.timeMove = options.time != undefined ? options.time : 1000
            this.width = this.slider.clientWidth
            this.height = this.slider.clientHeight
            this.moveSize = 'X' === this.dir ? this.width : this.height;
            this.interval = isNaN(options.interval) == true ? this.timeMove + 1000 : options.interval;
            this.activeSlide = 0;
            this.active = true
            if (options.dots) {
                let parent = document.createElement('ul')
                parent.className = 'slider__dots'
                this.slides.forEach(key => {
                    parent.innerHTML += '<li class="slider__dots-item"></li>';
                })
                this.slider.append(parent)
                this.dots = [...document.querySelector('.slider__dots').children]
                this.dots[this.activeSlide].classList.add('active')
            }
            this.interval
            this.dots.forEach((key, index) => {
                key.addEventListener('click', () => this.Dots(index))
            })
            this.sliderLine.style = `   position: relative;
                                    height: ${this.height}px;
                                    overflow: hidden;
                                `

            for (let i = 0; i < this.slides.length; i++) {
                const sl = this.slides[i];
                sl.style = `    position: absolute;
                            width: ${this.width}px;
                            height: ${this.height}px;
                        `;
                if (i != this.activeSlide) {
                    sl.style.transform = `translate${this.dir}(${this.moveSize}px)`;
                }
                if (i === this.slides.length - 1) {
                    sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`;
                }
            }
            this.bool = true;
            window.addEventListener('wheel', (e) => {
                if (this.bool == true) {
                    if (e.deltaY > 0) {
                        this.move(this.next)
                    } else if (e.deltaY < 0) {
                        this.move(this.prev)
                    }
                    this.bool = false;
                    setTimeout(() => {
                        this.bool = true;
                    }, 1000);
                }
            })
            window.addEventListener('keydown', (e) => {
            if (this.bool === true) {
                if (e.code == 'ArrowDown') {
                    this.move(this.next);
                } else if (e.code == 'ArrowUp') {
                    this.move(this.prev);
                }
                this.bool = false;
                setTimeout(() => {
                    this.bool = true;
                }, 1000);
            }
        })
        let startY = 0;
        let endY = 0;
            window.addEventListener('touchstart', (e) => {
              startY = e.changedTouches[0].pageY;
              
              window.addEventListener('touchend', (e) => {
                endY = e.changedTouches[0].pageY;
                 if (this.bool === true) {
                if (startY > endY && e.type == 'touchend') {
                    this.move(this.next);
                } else if (startY < endY && e.type == 'touchend') {
                    this.move(this.prev);
                }
                this.bool = false;
                setTimeout(() => {
                    this.bool = true;
                }, 1000);
            }
              })  
              
            
        })

            this.more.addEventListener('click', () => {
                slider.move(slider.next);
               
            })
            this.back.addEventListener('click', () => {
                slider.move(slider.prev);
            })


            this.next.addEventListener('click', () => this.move(this.next))
            this.prev.addEventListener('click', () => this.move(this.prev))
        }
    }
    move(btn) {
        this.next.disabled = true
        this.prev.disabled = true
        setTimeout(() => {
            this.next.disabled = false;
            this.prev.disabled = false;
        }, this.timeMove + 500);
        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            slide.style.transition = '0ms';
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`;
            }
        }

        setTimeout(() => {
            this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
            this.slides[this.activeSlide].style.transition = this.timeMove + 'ms';
            this.dots[this.activeSlide].classList.remove('active')
            if (btn == this.next) {
                this.activeSlide++
                if (this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            } else if (btn == this.prev) {
                this.activeSlide--
                if (this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1
                }
            }
            this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
            this.slides[this.activeSlide].style.transition = this.timeMove + 'ms';
            this.dots[this.activeSlide].classList.add('active')
        }, 100)
    }
    Dots(index) {
        if (this.active && index != this.activeSlide) {
            for (let i = 0; i < this.slides.length; i++) {
                const slide = this.slides[i];
                slide.style.transition = '0ms';
            }
            this.active = false
            this.dots.forEach(key => key.classList.remove('active'))

            let btnLeftOrRight = index > this.activeSlide ? this.moveSize : -this.moveSize;
            this.slides[index].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`;
            setTimeout(() => {
                this.slides[this.activeSlide].style.transform = `translate${this.dir}(${-btnLeftOrRight}px)`;
                this.slides[this.activeSlide].style.transition = this.timeMove + 'ms';
                this.dots[this.activeSlide].classList.remove('active')

                this.activeSlide = index

                this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
                this.slides[this.activeSlide].style.transition = this.timeMove + 'ms';
                this.dots[index].classList.add('active')
            }, 100)
            setTimeout(() => {
                this.active = true
            }, this.timeMove + 200)
        }
    }

}
const slider = new SLIDER({
    slider: '.main',
    direction: 'Y',
    time: 1000,
    autoplay: false,
    interval: 4000,
    dots: true
}) 
} catch (e) {
    console.log(e);
}
