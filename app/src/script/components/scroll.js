try {
class NAV {
    constructor(set) {
        if(typeof set.element == 'string') {
            this.el = document.querySelector(set.element);
        }else if(set.element instanceof HTMLElement) { /* instaceof проверяет принадлежит ли наш объект классу */
            this.el = set.element;
        }
        this.el.style.position = 'fixed';
        this.unit = set.unit;
        this.marginTop = set.top ?? this.el.offsetTop;
        this.el.style.top = this.Unit() + 'px';
        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }
    scroll() { /* прототип (метод) */
        this.win = this.Unit() - pageYOffset;
        if(this.win > 0) {
            this.el.style.top = this.win + 'px';
        }else {
            this.el.style.top = 0
        }
    }
    Unit() {
        if(this.unit == 'px') {
            return this.marginTop >= 0 ? this.marginTop : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return this.calc(innerHeight, this.marginTop) - this.el.clientHeight;
        }
    }
    calc(height, mTop) {
        return height / 100 * mTop;
    }
}


const nav = new NAV({
    element: '.header',
    top: 0,
    unit: 'px'
})    
} catch (e) {
   console.log(e); 
}
