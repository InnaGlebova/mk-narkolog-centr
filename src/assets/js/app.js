document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    /* fixed Header */
    ['load', 'resize'].forEach((event) => {
        window.addEventListener(event, function () {
            let headerHeight = header.clientHeight;

            window.onscroll = function (e) {
                if (window.innerWidth > 900) {
                    if (window.scrollY > headerHeight) {
                        if (!header.classList.contains('fixed')) {
                            header.classList.add('fixed');
                        }
                        main.style.marginTop = headerHeight + 'px';
                    }
                    else {
                        header.classList.remove('fixed');
                        main.removeAttribute("style");
                    }
                }
                else {
                    if (window.scrollY > headerHeight) {
                        if (!header.classList.contains('fixed')) {
                            header.classList.add('fixed');
                        }
                    }
                    else {
                        header.classList.remove('fixed');
                    }
                }
            };
        })
    })



});
/* end fixed Header */
/* search */

document.addEventListener('DOMContentLoaded', function () {
    let inputSearch = document.querySelectorAll('input[type=search]');
    if (inputSearch.length > 0) {
        inputSearch.forEach((elem) => {
            const wrapper = elem.closest('.search-wrapper');
            if (wrapper) {
                function search() {
                    let filter = elem.value.toUpperCase();
                    let ul = wrapper.querySelectorAll('.search-list');
                    ul.forEach((item) => {
                        let li = item.getElementsByTagName("li");
                        for (let i = 0; i < li.length; i++) {
                            let a = li[i].querySelector(".search-list__name");
                            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                                li[i].classList.remove('hide');
                            } else {
                                li[i].classList.add('hide');
                            }

                        }

                    })
                }
                document.addEventListener('keyup', search);
            }

        })

    }
});
/* end search */
/* Burger */
const burgerMenu = document.querySelector('.burger__menu');
const headerMobile = document.querySelector('.header__wrapper');
burgerMenu.addEventListener("click", () => {
    let headerTop = document.querySelector('.header');
    let headerTopHeight = headerTop.offsetHeight;
    headerMobile.classList.toggle('active');
    if (headerMobile.classList.contains('active')) {
        headerMobile.style.height = 'calc(100vh - ' + headerTopHeight + 'px';
    }
    else {
        headerMobile.removeAttribute('style');
    }
    burgerMenu.classList.toggle("active");
    header.classList.toggle("active");
    document.querySelector('html').classList.toggle('burger-lock');
});
['resize', 'load'].forEach((event) => {
    window.addEventListener(event, function () {
        if (window.innerWidth > 900) {
            burgerMenu.classList.remove("active");
            header.classList.remove("active");
            document.querySelector('html').classList.remove('burger-lock');
            headerMobile.removeAttribute('style');
            headerMobile.classList.remove('active');
        }
    })
});
/* End Burger */
/* Mask phone */
[].forEach.call(document.querySelectorAll('input[type=tel]'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

});
/* End Mask phone */
const scrollWidthFunc = function () {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    document.querySelector('html').style.marginRight = scrollWidth + 'px';
    document.querySelector('html').style.maxWidth = 'calc(100vw - ' + scrollWidth + 'px)';
}


const doctorsCheck = document.querySelectorAll('.doctors');
if (doctorsCheck.length > 0) {
    doctorsCheck.forEach((slider) => {
        const swiperDoctors = new Swiper(slider.querySelector('.doctors__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.doctors-button__next'),
                prevEl: slider.querySelector('.doctors-button__prev'),
            },
            pagination: {
                el: '.doctors__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 10,
            breakpoints: {
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                450: {
                    slidesPerView: 2.1,
                    spaceBetween: 16,
                },
            }
        });

    });
}

const stockCheck = document.querySelectorAll('.stock');
if (stockCheck.length > 0) {
    stockCheck.forEach((slider) => {
        const swiperStock = new Swiper(slider.querySelector('.stock__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.stock-button__next'),
                prevEl: slider.querySelector('.stock-button__prev'),
            },
            pagination: {
                el: '.stock__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 10,
            breakpoints: {
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                550: {
                    slidesPerView: 2.1,
                    spaceBetween: 16,
                },
            }
        });

    });
}

const articlesCheck = document.querySelectorAll('.articles');
if (articlesCheck.length > 0) {
    articlesCheck.forEach((slider) => {
        const swiperArticles = new Swiper(slider.querySelector('.articles__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.articles-button__next'),
                prevEl: slider.querySelector('.articles-button__prev'),
            },
            pagination: {
                el: '.articles__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 10,
            breakpoints: {
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                550: {
                    slidesPerView: 2.1,
                    spaceBetween: 16,
                },
            }
        });

    });
}



const reviewsCheck = document.querySelectorAll('.reviews');
if (reviewsCheck.length > 0) {
    reviewsCheck.forEach((slider) => {
        const swiperReviews = new Swiper(slider.querySelector('.reviews__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.reviews-button__next'),
                prevEl: slider.querySelector('.reviews-button__prev'),
            },
            pagination: {
                el: '.reviews__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 10,
            breakpoints: {
                1300: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            }
        });

    });
}


const galleryCheck = document.querySelectorAll('.gallery');
if (galleryCheck.length > 0) {
    galleryCheck.forEach((slider) => {
        const swiperGallery = new Swiper(slider.querySelector('.gallery__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.gallery-button__next'),
                prevEl: slider.querySelector('.gallery-button__prev'),
            },
            pagination: {
                el: '.gallery__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            spaceBetween: 16,
            grabCursor: true,
            breakpoints: {
                700: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },

            }
        });

    });
}

const conditionsCheck = document.querySelectorAll('.conditions');
if (conditionsCheck.length > 0) {
    conditionsCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.conditions__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.conditions-button__next'),
                prevEl: slider.querySelector('.conditions-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.conditions__pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
        });
    });
}

const licencesCheck = document.querySelectorAll('.licences');
if (licencesCheck.length > 0) {
    licencesCheck.forEach((slider) => {
        const swiperLicences = new Swiper(slider.querySelector('.licences__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.licences-button__next'),
                prevEl: slider.querySelector('.licences-button__prev'),
            },
            pagination: {
                el: '.licences__pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 10,
            breakpoints: {
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                450: {
                    slidesPerView: 2.1,
                    spaceBetween: 16,
                },

            }
        });

    });
}

/* tabs */
class Tabs {
    container;
    tab_button_class;
    tab_content_class;
    tab_attribute_key;
    tab_attribute_target;
    tab_navigation_next;
    tab_navigation_prev;
    tab_active_name;

    constructor({ container = '.tabs-container', tabs_wrapper_class = '.tabs__wrapper', button_class = '.tab', content_class = '.tab-content', attribute_key = 'path', attribute_target = 'target', nav_next = '.tabs__arrow_next', nav_prev = '.tabs__arrow_prev', name_active = '.tabs__active' } = {}) {
        this.container = container;
        this.tabs_wrapper_class = tabs_wrapper_class;
        this.tab_button_class = button_class;
        this.tab_content_class = content_class;
        this.tab_attribute_key = attribute_key;
        this.tab_attribute_target = attribute_target;
        this.tab_navigation_next = nav_next;
        this.tab_navigation_prev = nav_prev;
        this.tab_active_name = name_active;
    }

    initTabs() {
        document.querySelectorAll(this.container).forEach((wrapper) => {
            this.initTabsWrapper(wrapper);
        });
    }

    initTabsWrapper(wrapper) {
        const tabsWrapper = wrapper.querySelector(this.tabs_wrapper_class);
        const tabsButtonList = wrapper.querySelectorAll(this.tab_button_class);
        const tabsContentList = wrapper.querySelectorAll(this.tab_content_class);
        const tabsNavigationNext = wrapper.querySelector(this.tab_navigation_next);
        const tabsNavigationPrev = wrapper.querySelector(this.tab_navigation_prev);
        const tabActiveName = wrapper.querySelector(this.tab_active_name);
        const tabsClose = document.querySelectorAll('.tabs__close');
        let currentTab = 0;
        if (tabActiveName) {
            tabActiveName.querySelector('.tabs__active-text').textContent = tabsButtonList[currentTab].textContent;
        }

        for (let index = 0; index < tabsButtonList.length; index++) {
            if (tabsButtonList[index].dataset.start === true) {
                currentTab = index;
            }

            tabsButtonList[index].addEventListener('click', () => {
                if (tabsContentList[index]) {
                    currentTab = index;
                    this.showTabsContent({
                        list_tabs: tabsContentList,
                        list_buttons: tabsButtonList,
                        index: currentTab,
                    });
                    if (tabActiveName) {
                        tabActiveName.querySelector('.tabs__active-text').textContent = tabsButtonList[index].textContent;
                        tabActiveName.closest('.tabs').classList.remove('active');
                        document.querySelector('html').classList.remove('lock');
                    }
                }
            });
        }

        this.showTabsContent({
            list_tabs: tabsContentList,
            list_buttons: tabsButtonList,
            index: currentTab,
        });

        if (tabsNavigationNext) {
            tabsNavigationNext.addEventListener('click', () => {
                if (currentTab + 1 < tabsButtonList.length) {
                    currentTab += 1;
                } else {
                    currentTab = 0;
                }

                const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                const currentTabPositionX = tabsButtonList[currentTab].getBoundingClientRect().left;
                const currentTabPositionXRegardingParent = currentTabPositionX - tabsWrapperPositionX;

                tabsWrapper.scrollBy({
                    left: currentTabPositionXRegardingParent,
                    behavior: 'smooth'
                });

                this.showTabsContent({
                    list_tabs: tabsContentList,
                    list_buttons: tabsButtonList,
                    index: currentTab,
                });
            });
        }

        if (tabsNavigationPrev) {
            tabsNavigationPrev.addEventListener('click', () => {
                if (currentTab - 1 >= 0) {
                    currentTab -= 1;
                } else {
                    currentTab = tabsButtonList.length - 1;
                }

                const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                const currentTabPositionX = tabsButtonList[currentTab].getBoundingClientRect().left;
                const currentTabPositionXRegardingParent = currentTabPositionX - tabsWrapperPositionX;

                tabsWrapper.scrollBy({
                    left: currentTabPositionXRegardingParent,
                    behavior: 'smooth'
                });

                this.showTabsContent({
                    list_tabs: tabsContentList,
                    list_buttons: tabsButtonList,
                    index: currentTab,
                });
            });
        }

        if (tabActiveName) {
            tabActiveName.addEventListener('click', function () {
                tabActiveName.closest('.tabs').classList.add('active');
                document.querySelector('html').classList.add('lock');
            });
        }

        if (tabsClose.length > 0) {
            for (let i = 0; i < tabsClose.length; i += 1) {
                const tabClose = tabsClose[i]
                tabClose.addEventListener('click', function () {
                    tabClose.closest('.tabs').classList.remove('active');
                    document.querySelector('html').classList.remove('lock');
                });
            }
        }

        tabsWrapper.closest('.tabs__container').addEventListener('click', function (e) {
            if (!e.target.closest('.tabs__wrapper')) {
                tabsWrapper.closest('.tabs').classList.remove('active');
                document.querySelector('html').classList.add('lock');
            }
        });
    }

    hideTabsContent({ list_tabs, list_buttons }) {
        list_buttons.forEach((el) => {
            el.classList.remove('active');
        });
        list_tabs.forEach((el) => {
            el.classList.remove('active');
        });
    }

    showTabsContent({ list_tabs, list_buttons, index }) {
        this.hideTabsContent({
            list_tabs,
            list_buttons
        });

        if (list_tabs[index]) {
            list_tabs[index].classList.add('active');
        }

        if (list_buttons[index]) {
            list_buttons[index].classList.add('active');
        }
    }
}
new Tabs().initTabs();
/* End tabs */
/* into tabs TABS */
const tabsWrapper = document.querySelectorAll('.into-tabs');
if (tabsWrapper.length > 0) {
    tabsWrapper.forEach((elem) => {
        var tabNavs = elem.querySelectorAll(".into-tabs__tab");
        var tabPanes = elem.querySelectorAll(".into-tabs__content");
        for (var i = 0; i < tabNavs.length; i++) {
            tabNavs[i].addEventListener("click", function (e) {
                e.preventDefault();
                var activeTabAttr = e.target.getAttribute("data-tab");
                for (var j = 0; j < tabNavs.length; j++) {
                    var contentAttr = tabPanes[j].getAttribute("data-tab-content");
                    if (activeTabAttr === contentAttr) {
                        tabNavs[j].classList.add("active");
                        tabPanes[j].classList.add("active");
                    } else {
                        tabNavs[j].classList.remove("active");
                        tabPanes[j].classList.remove("active");
                    }
                };
            });
        }
    })
}
/* end into tabs TABS */


// Popups

function popupClose(popupActive) {
    popupActive.classList.remove('open');
    setTimeout(() => {
        if (!popupActive.classList.contains('open')) {
            popupActive.classList.remove('active');
        }
    }, 400);
    document.body.classList.remove('lock');
    document.querySelector('html').style.paddingRight = 0;
    document.querySelector('html').classList.remove('lock');
    document.querySelector('header').removeAttribute('style');


}
const popupOpenBtns = document.querySelectorAll('.popup-btn');
const popups = document.querySelectorAll('.popup');
const originalTitlePopup2 = document.querySelector('.original-title').innerHTML;
const closePopupBtns = document.querySelectorAll('.close-popup');
closePopupBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
        popupClose(e.target.closest('.popup'));
    });
});
popupOpenBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const path = e.currentTarget.dataset.path;
        const currentPopup = document.querySelector(`[data-target="${path}"]`);
        if (currentPopup) {
            popups.forEach(function (popup) {
                popupClose(popup);
                popup.addEventListener('click', function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'));
                    }
                });
            });
            currentPopup.classList.add('active');
            setTimeout(() => {
                currentPopup.classList.add('open');
            }, 10);
            if (currentPopup.getAttribute('data-target') == 'popup-change') {

                let originaTitle = currentPopup.querySelector('.original-title');
                if (el.classList.contains('change-item__btn')) {

                    if (el.classList.contains('doctors__btn-js')) {
                        let currentItem = el.closest('.change-item');
                        let currentTitile = currentItem.querySelector('.change-item__title');
                        originaTitle.innerHTML = 'Записаться на приём к врачу: <span>' + currentTitile.innerHTML + '</span>'
                    }
                    else {
                        if (el.classList.contains('change-item__btn_current')) {
                            originaTitle.textContent = el.textContent;
                        }
                        else {
                            let currentItem = el.closest('.change-item');
                            let currentTitile = currentItem.querySelector('.change-item__title');
                            originaTitle.innerHTML = currentTitile.innerHTML
                        }
                    }
                }
                else {
                    originaTitle.innerHTML = originalTitlePopup2;
                }
            }
            if (currentPopup.getAttribute('data-target') === 'popup-reviews') {
                const reviewCard = el.closest('.reviews__item');
                if (reviewCard) {
                    const picSrc = currentPopup.querySelector('.popup-reviews__picture');
                    const nameEl = currentPopup.querySelector('.popup-reviews__name');
                    const ratingEl = currentPopup.querySelector('.popup-reviews__raiting');
                    const textEl = currentPopup.querySelector('.popup-reviews__text');
                    const cardPic = reviewCard.querySelector('.reviews__picture');
                    const cardName = reviewCard.querySelector('.reviews__name');
                    const cardRating = reviewCard.querySelector('.reviews__raiting');
                    const cardText = reviewCard.querySelector('.reviews__text');
                    if (picSrc && cardPic) picSrc.innerHTML = cardPic.innerHTML;
                    if (nameEl && cardName) nameEl.textContent = cardName.textContent;
                    if (ratingEl && cardRating) ratingEl.innerHTML = cardRating.innerHTML;
                    if (textEl && cardText) textEl.innerHTML = cardText.innerHTML;
                }
            }
            scrollWidthFunc();
            document.querySelector('html').classList.add('lock');
        }
    });
});

/* end popups */


const panelItems = document.querySelectorAll('.panels');
if (panelItems.length > 0) {
    panelItems.forEach((elem) => {
        let panelItem = elem.querySelectorAll('.panel-title');
        if (panelItem.length > 0) {
            bodyItem = elem.querySelectorAll('.panel-body');
            panelItem.__proto__.forEach = [].__proto__.forEach;
            let activePanel;

            panelItem.forEach(function (item, i, panelItem) {
                item.addEventListener('click', function (e) {
                    this.classList.add('panel-active');
                    this.nextElementSibling.classList.add('active');
                    if (activePanel) {
                        activePanel.classList.remove('panel-active');
                        activePanel.nextElementSibling.classList.remove('active');
                    }
                    activePanel = (activePanel === this) ? 0 : this;
                });
            });
        }
    })

}

/* video */


document.addEventListener('DOMContentLoaded', function () {
    const videoCheck = document.querySelectorAll('.video');
    if (videoCheck.length > 0) {
        videoCheck.forEach((item) => {
            const videos = item.querySelectorAll('.video__item');
            videos.forEach((elem) => {
                const video = elem.querySelector('.current-video')
                elem.addEventListener('click', () => {
                    elem.classList.toggle('active');
                    let src = video.getAttribute('src');
                    video.setAttribute("src", src + "?mute=1&autoplay=1")
                })
            })
        })
    }
});
function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
r(function () {
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function (node, classname) {
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for (var i = 0, j = els.length; i < j; i++)
                if (re.test(els[i].className)) a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body, "youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        /* videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';*/
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class", "play");
        videos[i].appendChild(play);
        videos[i].onclick = function () {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&mute=1";
            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
            iframe.setAttribute("class", 'if_video');
            iframe.setAttribute("scrolling", 'no');
            iframe.setAttribute("src", iframe_url);
            iframe.setAttribute("frameborder", '0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});


/* faq */

    const hideItems = document.querySelectorAll('.hide-items');
    if (hideItems.length > 0) {
        hideItems.forEach((elem) => {
            const hideItem = elem.querySelectorAll('.hide-item');
            const hideTitles = elem.querySelectorAll('.hide-item__title');
            const hideContents = elem.querySelectorAll('.hide-item__content');
            hideItem.forEach((item) => {
                let title = item.querySelector('.hide-item__title');
                let content = item.querySelector('.hide-item__content');
                title.addEventListener('click', () => {
                    if (title.classList.contains('active')) {
                        title.classList.remove('active');
                        content.classList.remove('active');
                        content.style.maxHeight = '0';
                    }
                    else {
                        hideTitles.forEach((element) => {
                            element.classList.remove('active');
                        })
                        hideContents.forEach((element) => {
                            element.classList.remove('active');
                            element.style.maxHeight = '0';
                        })
                        let height = content.querySelector('.hide-item_max-height').offsetHeight;
                        title.classList.add('active');
                        content.classList.add('active');
                        content.style.maxHeight = height + 'px';
                    }
                })
            })
        })
    }

/* end faq */

/* reviews */
const reviews = document.querySelectorAll(".reviews__item");
if (reviews.length > 0) {
    reviews.forEach((item) => {
        const reviewsText = item.querySelector('.reviews__text');
        const reviewsBtn = item.querySelector('.reviews__btn ')
        if (reviewsBtn) {
            if (reviewsText.offsetHeight > 100) {
                reviewsText.classList.add('hidden');
                reviewsBtn.classList.add('active');
            }
        }

    })
}
/* end rewiews */

/* yandex map */
let flagMap = false;
document.addEventListener('scroll', function () {
    const blockMap = document.getElementById('map');
    if (blockMap) {
        const posTop = blockMap.getBoundingClientRect().top;

        if (posTop < window.innerHeight && !flagMap) {
            if (!document.querySelector('[src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"]')) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
                document.head.appendChild(script);
            }
            ymaps.ready(init);
            function init() {
                const map = document.querySelector('#map');

                if (map) {
                    var myMap = new ymaps.Map("map", {
                        center: [22, 22, 22],
                        zoom: 14,

                    });

                    myGeoObject = new ymaps.GeoObject();
                    myMap.geoObjects.add(new ymaps.Placemark(myMap.getCenter(), {
                        balloonContent: '[22,22,22],'
                    }));
                    myMap.behaviors.disable(['scrollZoom']);
                }
            }

            flagMap = true;
        }
    }


});
/* end yandex map */
/* anchor */
const anchors = document.querySelectorAll('.scroll-to')
if (anchors.length > 0) {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href');

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })
    }
}


/* anchor end */

/* calc */

class Calculator {
    constructor(calcBlockArr) {
        this.initCalc(calcBlockArr);
    }

    initCalc(calcBlockArr) {
        if (calcBlockArr.length === 0) return;
        calcBlockArr.forEach((calcBlock) => {
            this.initRangeInputs(calcBlock);
            this.initRatioInputs(calcBlock);
            this.initMobileButtons(calcBlock);
            this.initValueCalculation(calcBlock);
        });
    }

    initRangeInputs(calcBlock) {
        let rangeInput = calcBlock.querySelector(".calc-range__input");
        if (rangeInput == null) return;
        rangeInput.addEventListener("input", () => {
            this.updateAgeValue(rangeInput, calcBlock);
        });
    }

    updateAgeValue(rangeInput, calcBlock) {
        let yearSpelling = " лет";
        if (rangeInput.value < 5) {
            yearSpelling = " года";
        }
        if (rangeInput.value === '1') {
            yearSpelling = " год";
        }

        let rangeViewValue = calcBlock.querySelector(".calc-range__value");
        rangeViewValue.innerHTML = rangeInput.value + yearSpelling;
    }

    initRatioInputs(calcBlock) {
        let ratioInputBlock = calcBlock.querySelectorAll(".calc-radio");
        let ratioViewValue = calcBlock.querySelector(".calc__selected-value");
        let selectList = calcBlock.querySelector('.calc__label-wrapper');

        ratioInputBlock.forEach((ratioInput) => {
            ratioInput.addEventListener("click", () => {
                ratioViewValue.innerHTML = ratioInput.querySelector(".calc-radio__text").innerHTML;
                ratioViewValue.dataset['value'] = ratioInput.querySelector(".calc-radio__input").dataset['value'];
                this.closeCalcList(selectList);
            });
        });
    }

    initMobileButtons(calcBlock) {
        let mobileButtons = calcBlock.querySelectorAll(".calc__select-btn");
        let selectList = calcBlock.querySelector('.calc__label-wrapper')

        mobileButtons.forEach((mobileBtn) => {
            mobileBtn.addEventListener("click", () => this.openCalcList(selectList))
        })
    }

    openCalcList(selectList) {
        selectList.classList.toggle("calc__btn_grid_open");
    }

    closeCalcList(selectList) {
        selectList.classList.remove("calc__btn_grid_open");
    }

    initValueCalculation(calcBlock) {
        let ratioInputBlock = calcBlock.querySelectorAll(".calc-radio");
        let ratioViewValue = calcBlock.querySelector(".calc__selected-value");

        ratioInputBlock.forEach((ratioInput) => {
            ratioInput.addEventListener("click", () => {
                ratioViewValue.dataset['value'] = ratioInput.querySelector(".calc-radio__input").dataset['value'];
                this.getCalcValues();
            });
        });

        let rangeInput = calcBlock.querySelector(".calc-range__input");
        let rangeCurrValue = calcBlock.querySelector(".calc-range__value");
        if (rangeInput != null) {
            rangeInput.addEventListener("input", () => {
                let multiValue = rangeInput.value;
                if (multiValue < 14) {
                    multiValue *= 5;
                }
                rangeCurrValue.dataset['value'] = String(multiValue * 15);
                this.getCalcValues();
            })
        }
    }

    getCalcValues() {
        let calcValues = document.querySelectorAll("[data-type]");
        let resArray = {}
        calcValues.forEach((calcValue) => {
            let typeName = calcValue.dataset['type'];
            let innerText = calcValue.innerText.replaceAll("\n", " ");
            let value = calcValue.dataset['value'];
            resArray[typeName] = { 'innerText': innerText, 'value': value };

        });
        this.getCalcResult(resArray);
    }

    getCalcResult(calcValuesArray) {
        let sumCalc = 0;
        for (var key in calcValuesArray) {
            sumCalc += Number(calcValuesArray[key]['value']);
        }
        let resultPrice = document.querySelector(".calc-result__price");
        resultPrice.innerHTML = `от ${sumCalc} ₽`;

        let resultTextElement = document.querySelector(".calc__result-text");
        let resultText = "Курс детоксикации";
        if (sumCalc > 4000) {
            resultText = "Лечение амбулаторно";
        }
        if (sumCalc > 6000) {
            resultText = "Курсовое лечение в стационаре";
        }
        if (sumCalc > 8000) {
            resultText = "Психологическая амбулаторная реабилитация";
        }
        resultTextElement.innerHTML = resultText;

    }
}

document.addEventListener('DOMContentLoaded', function () {
    const calcBlocks = document.querySelectorAll(".calc__block-wrap");
    new Calculator(calcBlocks);
});


/* calc end */
const textBlock = document.querySelectorAll('.text');
if (textBlock.length > 0) {
    textBlock.forEach((elem) => {
        const blockquote = elem.querySelectorAll('blockquote');
        if (blockquote.length > 0) {
            for (let i = 0; i < blockquote.length; i++) {
                blockquote[i].classList.add('animation-item');
                blockquote[i].classList.add('scale-item');
            }
        }
    })
}

const animationItems = document.querySelectorAll('.animation-item');
if (animationItems.length > 0) {
    function onEntry(e) {
        e.forEach(e => {
            /* if (  e.isIntersecting ) {*/
            e.isIntersecting && e.target.classList.add("animation-active")
            /*  }
              else {
                 e.target.classList.remove("animation-active")
              }*/

        }
        )
    }
    let options = {
        threshold: [.5]
    }, observer = new IntersectionObserver(onEntry, options)
    for (let e of animationItems)
        observer.observe(e);
}


// /* раскрывашка текста */
// const text = document.querySelectorAll('.text');
// if (text.length > 0) {
//     text.forEach((elem) => {
//         const textItem = elem.querySelectorAll('.text__content');
//         textItem.forEach((item) => {
//             const button = item.querySelector('button');
//             if (button) {
//                 const content = item.querySelector('.text__wrapper');
//                 if (content) {
//                     const contentHeight = content.offsetHeight;
//                     const maxHeightContent = item.querySelector('.text__wrapper-maxHeight');
//                     maxHeight = maxHeightContent.offsetHeight;
//                     button.addEventListener('click', () => {
//                         if (button.classList.contains('active')) {
//                             button.classList.remove('active');
//                             content.classList.remove('active');
//                             content.style.maxHeight = contentHeight + 'px';
//                             button.innerHTML = 'Читать польностью';
//                         }
//                         else {
//                             button.innerHTML = 'Скрыть';
//                             button.classList.add('active');

//                             content.classList.add('active');
//                             content.style.maxHeight = maxHeight + 'px';
//                         }
//                     })
//                 }
//             }

//         })
//     })
// }

// article-navigation
const articleNavigation = document.querySelector('.navigation-article');

if (articleNavigation) {
    const jsScrollBlockList = document.querySelectorAll('.text__item h2, .text__item h3, .text__item h4, .text__item h5, .text__item h6');

    if (jsScrollBlockList.length > 0) {
        for (let i = 0; i < jsScrollBlockList.length; i += 1) {
            const jsScrollBlock = jsScrollBlockList[i];
            const titleBlock = jsScrollBlock.textContent;
            const articleNavigationList = document.querySelector('.navigation-article__list');
            const articleNavigationItem = document.createElement('li');
            const articleNavigationLink = document.createElement('a');
            articleNavigationItem.classList.add('navigation-article__item');
            articleNavigationLink.classList.add('navigation-article__link');
            jsScrollBlock.setAttribute('id', `${i}`)
            articleNavigationLink.setAttribute('href', `#${i}`);
            articleNavigationLink.textContent = ' ' + titleBlock;
            articleNavigationItem.append(articleNavigationLink);
            articleNavigationList.append(articleNavigationItem);
        }

        document.querySelectorAll('a[href^="#"').forEach(link => {

            link.addEventListener('click', function (e) {
                e.preventDefault();

                let href = this.getAttribute('href').substring(1);

                const scrollTarget = document.getElementById(href);

                // const topOffset = document.querySelector('.scrollto').offsetHeight;
                const topOffset = 180;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    } else {
        articleNavigation.querySelector('.navigation-article__content').remove();
        articleNavigation.querySelector('.navigation-article__wrapper').style.justifyContent = 'center';
    }
}






/*
let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemsHeihgt = animItem.offsetHeight;
            const animItemsOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemsHeihgt / animStart;
            if (animItemsHeihgt > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOfsset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset - animItemsHeihgt)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}
*/

// let UL = document.querySelector('.advant-inner');
// if (UL) {
//     let ANKORS = UL.querySelectorAll('li');
//     let BUTTON = UL.querySelector('.advant-btn');

//     ANKORS.forEach(el => {
//         el.style.display = "none";
//     });
//     for (let i = 0; i < 2; i++) {
//         ANKORS[i].style.display = "block";
//     }

//     BUTTON.addEventListener('click', () => {
//         UL.classList.toggle('hiden');
//         if (UL.classList.contains('hiden')) {
//             ANKORS.forEach(el => {
//                 el.style.display = "block";
//             });
//         } else {
//             ANKORS.forEach(el => {
//                 el.style.display = "none";
//             });
//             for (let i = 0; i < 2; i++) {
//                 ANKORS[i].style.display = "block";
//             }
//         }
//     });
// }