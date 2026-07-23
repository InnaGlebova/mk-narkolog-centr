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
const headerEl = document.querySelector('.header');

function setMobileMenuHeight() {
    const top = headerMobile.getBoundingClientRect().top;
    headerMobile.style.height = `calc(100dvh - ${top}px)`;
}

burgerMenu.addEventListener("click", () => {
    headerMobile.classList.toggle('active');
    burgerMenu.classList.toggle("active");
    headerEl.classList.toggle("active");
    document.querySelector('html').classList.toggle('burger-lock');

    if (headerMobile.classList.contains('active')) {
        setMobileMenuHeight();
    } else {
        headerMobile.removeAttribute('style');
    }
});
['resize', 'load'].forEach((event) => {
    window.addEventListener(event, function () {
        if (window.innerWidth > 900) {
            burgerMenu.classList.remove("active");
            headerEl.classList.remove("active");
            document.querySelector('html').classList.remove('burger-lock');
            headerMobile.removeAttribute('style');
            headerMobile.classList.remove('active');
        } else if (headerMobile.classList.contains('active')) {
            setMobileMenuHeight();
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


const scrollTop = document.querySelector(".scroll-top");

if (scrollTop) {
    function toggleScrollTopButton() {
        if (window.scrollY > 600) {
            scrollTop.style.opacity = "1";
            scrollTop.style.pointerEvents = "auto";
        } else {
            scrollTop.style.opacity = "0";
            scrollTop.style.pointerEvents = "none";
        }
    }

    toggleScrollTopButton();
    window.addEventListener("scroll", toggleScrollTopButton);

    scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


const doctorsCheck = document.querySelectorAll('.doctors');
if (doctorsCheck.length > 0) {
    doctorsCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.doctors__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.doctors-button__next'),
                prevEl: slider.querySelector('.doctors-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.doctors__pagination'),
                clickable: true,
            },
            slidesPerView: 1.15,
            grabCursor: true,
            spaceBetween: 12,
            breakpoints: {
                450: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
    });
}

const stockCheck = document.querySelectorAll('.stock');
if (stockCheck.length > 0) {
    stockCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.stock__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.stock-button__next'),
                prevEl: slider.querySelector('.stock-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.stock__pagination'),
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 12,
            breakpoints: {
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    });
}

const articlesCheck = document.querySelectorAll('.articles');
if (articlesCheck.length > 0) {
    articlesCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.articles__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.articles-button__next'),
                prevEl: slider.querySelector('.articles-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.articles__pagination'),
                clickable: true,
            },
            slidesPerView: 1.1,
            grabCursor: true,
            spaceBetween: 12,
            breakpoints: {
                550: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    });
}



const reviewsCheck = document.querySelectorAll('.reviews');
if (reviewsCheck.length > 0) {
    reviewsCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.reviews__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.reviews-button__next'),
                prevEl: slider.querySelector('.reviews-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.reviews__pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 12,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
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
                el: slider.querySelector('.gallery__pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 12,
            grabCursor: true,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
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
            spaceBetween: 20,
            grabCursor: true,
        });
    });
}

const licencesCheck = document.querySelectorAll('.licences');
if (licencesCheck.length > 0) {
    licencesCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.licences__swiper'), {
            direction: 'horizontal',
            effect: 'slide',
            navigation: {
                nextEl: slider.querySelector('.licences-button__next'),
                prevEl: slider.querySelector('.licences-button__prev'),
            },
            pagination: {
                el: slider.querySelector('.licences__pagination'),
                clickable: true,
            },
            slidesPerView: 1.15,
            grabCursor: true,
            spaceBetween: 12,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });
    });
}

const advantagesCheck = document.querySelectorAll('.advantages');
if (advantagesCheck.length > 0) {
    advantagesCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.advantages__swiper'), {
            slidesPerView: 1,
            spaceBetween: 12,
            grabCursor: true,
            pagination: {
                el: slider.querySelector('.advantages__pagination'),
                clickable: true,
            },
            breakpoints: {
                769: {
                    enabled: false,
                },
            },
        });
    });
}

const whyCheck = document.querySelectorAll('.why');
if (whyCheck.length > 0) {
    whyCheck.forEach((slider) => {
        new Swiper(slider.querySelector('.why__swiper'), {
            slidesPerView: 1,
            spaceBetween: 12,
            grabCursor: true,
            pagination: {
                el: slider.querySelector('.why__pagination'),
                clickable: true,
            },
            breakpoints: {
                769: {
                    enabled: false,
                },
            },
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
                    const nameEl = currentPopup.querySelector('.popup-reviews__name');
                    const infoEl = currentPopup.querySelector('.popup-reviews__info');
                    const ratingEl = currentPopup.querySelector('.popup-reviews__raiting');
                    const textEl = currentPopup.querySelector('.popup-reviews__text');
                    const dateEl = currentPopup.querySelector('.popup-reviews__date');
                    const cardName = reviewCard.querySelector('.reviews__name');
                    const cardInfo = reviewCard.querySelector('.reviews__info');
                    const cardRating = reviewCard.querySelector('.reviews__raiting');
                    const cardText = reviewCard.querySelector('.reviews__text p');
                    const cardDate = reviewCard.querySelector('.reviews__date');

                    if (nameEl && cardName) nameEl.textContent = cardName.textContent;
                    if (infoEl && cardInfo) infoEl.textContent = cardInfo.textContent;
                    if (ratingEl && cardRating) ratingEl.innerHTML = cardRating.innerHTML;
                    if (textEl && cardText) textEl.innerHTML = cardText.innerHTML;
                    if (dateEl && cardDate) {
                        dateEl.textContent = cardDate.textContent;
                        dateEl.setAttribute('datetime', cardDate.getAttribute('datetime') || '');
                    }
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

const faqSections = document.querySelectorAll('.faq, .faq-page__content');
if (faqSections.length > 0) {
    const FAQ_BTN_MORE = 'Показать еще';
    const FAQ_BTN_HIDE = 'Скрыть все';

    faqSections.forEach((section) => {
        const items = Array.from(section.querySelectorAll('.faq__hide-item'));
        const moreBtn = section.querySelector('.faq__btn--more');
        const step = Number(section.dataset.faqStep) || (section.classList.contains('faq-page__content') ? 10 : 5);

        if (!moreBtn || items.length <= step) {
            if (moreBtn) {
                moreBtn.hidden = true;
            }
            return;
        }

        let visibleCount = step;

        const collapseHiddenItems = () => {
            items.forEach((item, index) => {
                if (index < visibleCount) return;

                const title = item.querySelector('.hide-item__title');
                const content = item.querySelector('.hide-item__content');

                if (title) title.classList.remove('active');
                if (content) {
                    content.classList.remove('active');
                    content.style.maxHeight = '0';
                }
            });
        };

        const updateFaqVisibility = () => {
            items.forEach((item, index) => {
                item.classList.toggle('faq__hide-item--hidden', index >= visibleCount);
            });

            const isExpanded = visibleCount >= items.length;
            moreBtn.textContent = isExpanded ? FAQ_BTN_HIDE : FAQ_BTN_MORE;
            moreBtn.hidden = false;
        };

        moreBtn.addEventListener('click', () => {
            if (visibleCount >= items.length) {
                visibleCount = step;
                collapseHiddenItems();
            } else {
                visibleCount = Math.min(visibleCount + step, items.length);
            }

            updateFaqVisibility();
        });

        updateFaqVisibility();
    });
}

/* end faq */

/* yandex map */
const map = document.querySelectorAll('#map');
if (map.length > 0) {
    function onEntryMap(e) {
        e.forEach(e => {
            e.isIntersecting && loadMap() && initMap();
        })
    }
    let options = {
        threshold: [0.5],
    },
        observer = new IntersectionObserver(onEntryMap, options)
    for (let e of map) observer.observe(e)
}
function loadMap() {
    if (!document.querySelector('[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = initMap;
        document.head.appendChild(script);
    }
}
function initMap() {
    ymaps.ready(function () {
        const myMap = new ymaps.Map('map', {
            center: [47.228163, 39.714641],
            zoom: 18,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([47.228163, 39.714641],
            {
                balloonContentHeader: "<p class='yandex-city'>Ростов-на-Дону</p>",
                balloonContentBody: "<p class='yandex-clinic'>Наркологический центр Похмелочная</p>",
                hintContent: "Посмотреть Адрес"
            }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/icons/map-marker.svg',
            iconImageSize: [50, 50],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable(['scrollZoom']);
    });
}
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
    function onEntry(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-active');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(onEntry, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
    });

    animationItems.forEach((item) => observer.observe(item));
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
    const jsScrollBlockList = document.querySelectorAll('.text__content h2, .text__content h3, .text__content h4, .text__content h5, .text__content h6');
    const articleNavigationContent = articleNavigation.querySelector('.navigation-article__content');
    const articleNavigationList = articleNavigation.querySelector('.navigation-article__list');
    const articleNavigationMore = articleNavigation.querySelector('.navigation-article__more');

    if (jsScrollBlockList.length > 0 && articleNavigationList) {
        for (let i = 0; i < jsScrollBlockList.length; i += 1) {
            const jsScrollBlock = jsScrollBlockList[i];
            const titleBlock = jsScrollBlock.textContent;
            const articleNavigationItem = document.createElement('li');
            const articleNavigationLink = document.createElement('a');
            articleNavigationItem.classList.add('navigation-article__item');
            articleNavigationLink.classList.add('navigation-article__link');
            jsScrollBlock.setAttribute('id', `${i}`);
            articleNavigationLink.setAttribute('href', `#${i}`);
            articleNavigationLink.textContent = titleBlock.trim();
            articleNavigationItem.append(articleNavigationLink);
            articleNavigationList.append(articleNavigationItem);
        }

        if (articleNavigationContent && jsScrollBlockList.length > 4) {
            articleNavigationContent.setAttribute('data-collapsed', 'true');
        }

        if (articleNavigationMore) {
            articleNavigationMore.addEventListener('click', () => {
                if (!articleNavigationContent) return;
                articleNavigationContent.classList.add('is-open');
                articleNavigationContent.removeAttribute('data-collapsed');
            });
        }

        articleNavigation.querySelectorAll('.navigation-article__link').forEach((link) => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const href = this.getAttribute('href').substring(1);
                const scrollTarget = document.getElementById(href);
                if (!scrollTarget) return;

                const topOffset = 180;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    } else if (articleNavigationContent) {
        articleNavigationContent.remove();
        const wrapper = articleNavigation.querySelector('.navigation-article__wrapper');
        if (wrapper) {
            wrapper.style.justifyContent = 'center';
        }
    }
}






/* wrap content tables for mobile scroll */
const contentTables = document.querySelectorAll('.text__content table:not(.price__table)');
if (contentTables.length > 0) {
    contentTables.forEach((table) => {
        if (table.parentElement && table.parentElement.classList.contains('table-scroll')) return;

        const wrap = document.createElement('div');
        wrap.className = 'table-scroll';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
    });
}
/* end wrap content tables */

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

/* footer accordion */
const footer = document.querySelector('.footer');
if (footer) {
    const accordionItems = footer.querySelectorAll('.footer__nav-col, .footer__company');

    accordionItems.forEach((item) => {
        const title = item.querySelector('.footer__nav-title, .footer__company-title');
        if (!title) return;

        title.addEventListener('click', () => {
            if (window.innerWidth > 900) return;
            item.classList.toggle('is-open');
        });
    });
}
/* end footer accordion */

/* price-page accordion */
const pricePage = document.querySelector('.price-page');
if (pricePage) {
    const priceSections = pricePage.querySelectorAll('.price-page__inner');

    priceSections.forEach((section) => {
        const title = section.querySelector('.price-page__title');
        if (!title) return;

        title.addEventListener('click', () => {
            if (window.innerWidth > 768) return;

            const isOpen = section.classList.contains('is-open');

            priceSections.forEach((item) => {
                item.classList.remove('is-open');
            });

            if (!isOpen) {
                section.classList.add('is-open');
            }
        });
    });
}
/* end price-page accordion */

/* vacancies accordion */
const vacancies = document.querySelectorAll('.vacancy');
if (vacancies.length > 0) {
    vacancies.forEach((vacancy) => {
        const moreBtn = vacancy.querySelector('.vacancy__more');
        const title = vacancy.querySelector('.vacancy__title');

        const openVacancy = () => {
            vacancies.forEach((item) => item.classList.remove('is-open'));
            vacancy.classList.add('is-open');
        };

        if (moreBtn) {
            moreBtn.addEventListener('click', openVacancy);
        }

        if (title) {
            title.style.cursor = 'pointer';
            title.addEventListener('click', openVacancy);
        }
    });
}
/* end vacancies accordion */

/* doctor page accordion */
const doctorPage = document.querySelector('.doctor-page');
if (doctorPage) {
    const doctorAccordionItems = doctorPage.querySelectorAll('.doctor-page__block, .doctor-page__section');

    doctorAccordionItems.forEach((section) => {
        const title = section.querySelector('.doctor-page__block-title, .doctor-page__section-title');
        if (!title) return;

        title.addEventListener('click', () => {
            if (window.innerWidth > 768) return;

            const isOpen = section.classList.contains('is-open');

            doctorAccordionItems.forEach((item) => {
                item.classList.remove('is-open');
            });

            if (!isOpen) {
                section.classList.add('is-open');
            }
        });
    });
}
/* end doctor page accordion */

/* doctor page more */
const doctorDirections = document.querySelectorAll('.doctor-page__directions');
if (doctorDirections.length > 0) {
    doctorDirections.forEach((block) => {
        const moreBtn = block.querySelector('.doctor-page__more');
        if (!moreBtn) return;

        moreBtn.addEventListener('click', () => {
            block.classList.add('is-open');
            block.removeAttribute('data-collapsed');
        });
    });
}

const doctorServices = document.querySelectorAll('.doctor-services__wrap');
if (doctorServices.length > 0) {
    doctorServices.forEach((block) => {
        const moreBtn = block.querySelector('.doctor-services__more');
        if (!moreBtn) return;

        moreBtn.addEventListener('click', () => {
            block.classList.add('is-open');
            block.removeAttribute('data-collapsed');
        });
    });
}
/* end doctor page more */

/* departure accordion */
const departureSection = document.querySelector('.departure');
if (departureSection) {
    const accordionBlocks = departureSection.querySelectorAll('.departure__block--accordion');

    accordionBlocks.forEach((block) => {
        const title = block.querySelector('.departure__block-title');
        if (!title) return;

        title.addEventListener('click', () => {
            if (window.innerWidth > 768) return;

            const isOpen = block.classList.contains('is-open');

            accordionBlocks.forEach((item) => {
                item.classList.remove('is-open');
            });

            if (!isOpen) {
                block.classList.add('is-open');
            }
        });
    });
}
/* end departure accordion */