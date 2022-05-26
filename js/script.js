$(document).ready(function () {

    // equalizer
    function equalizer(bar) {
        // Syntax: Math.random() * (max-min = range) + min;
        var height = Math.random() * 48 + 10;
        // Any timing would do the trick, mine is height times 7.5 to get a speedy yet bouncy vibe
        var timing = height * 7.5;
        // If you need to align them on a baseline, just remove this line and also the "marginTop: marg" from the "animate"
        // var marg = (170 - height) / 2;

        bar.animate({
            height: height,
            // marginTop: marg
        }, timing, function () {
            equalizer($(this));
        });
    }

    // Action on play-pause buttons can be added here (should be a wholesome function rather than annonymous)
    $('.volume-icon span').each(function (i) {
        equalizer($(this));
    });



    $('.category').click(function (e) {
        e.preventDefault();
        $('.category').removeClass('current-category')
        $(this).addClass('current-category')
        $('.menu-wrap, .menu-button').addClass('active')
        onGreenText()
        $('.menu-bg').addClass('active')


        var ind;
        $('.category').each(function (i, elem) {
            if ($(elem).hasClass('current-category')) {
                ind = i
            }
        })

        $(".accordion-item__name").removeClass('drop')

        $(".accordion-item__name").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('drop')
            }
        })

    })


    // menu button
    $('.menu-button').click(function () {
        $('.menu-wrap, .menu-button').toggleClass('active')
        onGreenText()

        if ($('.menu-button').hasClass('active')) {
            onGreenText()
        } else {
            offGreenText()
        }

        $('.menu-bg').toggleClass('active')
    })

    // accordion item
    $('.accordion-item__name').each(function (i, elem) {

        $(elem).on('click', function (e) {
            e.stopPropagation()
            $('.accordion-item__name').removeClass('drop')
            $(this).addClass('drop')
        })
    })



    // like
    $('.add-whish').click(function () {
        $('.add-whish').addClass('added')
    })
    $('.play-button').click(function () {
        $('.play-button').toggleClass('stopped')
    })




    // form tabs
    $('.popup-form .tabs__link').click(function (e) {
        e.preventDefault()
        var ind;
        $('.popup-form .tabs__link').removeClass('active')
        $(this).addClass('active')

        $('.popup-form .tabs__link').each(function (i, elem) {
            if ($(elem).hasClass('active')) {
                ind = i
            }
        })

        $(".popup-form .tabs__content").removeClass('active');

        $(".popup-form .tabs__content").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('active')
            }
        })

    })



    // toggle playlist
    $('.playlist-link').click(function (e) {
        e.preventDefault()
        var ind;
        $('.playlist-link').removeClass('active')
        $(this).addClass('active')

        $('.playlist-link').each(function (i, elem) {
            if ($(elem).hasClass('active')) {
                ind = i
            }
        })

        $(".playlist").removeClass('active');

        $(".playlist").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('active')
            }
        })

    })


    let linkPopup;
    // login-popup
    $('.login-form-link').on('click', function () {
        linkPopup = 0
        togglePopup();
    })


    // reg-popup
    $('.reg-form-link').on('click', function () {
        linkPopup = 1
        togglePopup();
    })

    function togglePopup() {
        $('.reg-form ,.bg-form-layer').addClass('show');


        $('.reg-form .tabs__link, .reg-form .tabs__content').removeClass('active')

        $('.reg-form .tabs__link').each(function (i, elem) {
            if (i == linkPopup) {
                $(elem).addClass('active')
            }
        })
        $(".reg-form .tabs__content").each(function (i, elem) {
            if (i == linkPopup) {
                $(elem).addClass('active')
            }
        })
    }

    function onGreenText() {
        $('.green-text').addClass('active')
    }

    function offGreenText() {
        $('.green-text').removeClass('active')
    }

    // toggle-inner form reg
    $('.role-field').click(function (e) {
        e.stopPropagation();
        var ind;
        $('.role-field').removeClass('active')
        $(this).addClass('active')

        $('.role-field').each(function (i, elem) {
            if ($(elem).hasClass('active')) {
                ind = i
            }
        })

        $(".form-role-content .form-content").removeClass('active');

        $(".form-role-content .form-content").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('active')
            }
        })

    })

    // playlist form
    // $('.playlist-button').click(function (e) {
    //     e.preventDefault()
    //     $('.playlist-form, .bg-form-layer').addClass('show')
    // })

    // artist info popup
    $('.song-wrap').click(function (e) {
        e.preventDefault()
        $('.about-artist, .bg-form-layer').addClass('show')
    })


    // add song
    $('.addSong').click(function (e) {
        e.preventDefault()
        $('.add-song-form, .bg-form-layer').addClass('show')
    })

    // close form
    $('.close-button, .bg-form-layer').click(function (e) {
        e.stopPropagation()
        offGreenText();
        $(".popup-form, .bg-form-layer").removeClass('show')
    })





    $('.custom-select').select2({
        minimumResultsForSearch: Infinity,
    })


    // playlist
    $(".playlist-button").click(function (e) {
        e.preventDefault();
        $('header').addClass('active-playlist')
        $('.playlists-wrap').addClass('active')
        $('.wrapper>.container').addClass('align-top')
        $('.wrap-main,.foot-content').addClass('d-none')
        $('body').addClass('shadow')
    })

    $(".close-playlist").click(function (e) {
        e.preventDefault();
        $('header').removeClass('active-playlist')
        $('.playlists-wrap').removeClass('active')
        $('.wrapper>.container').removeClass('align-top')
        $('.wrap-main, .foot-content').removeClass('d-none')
        $('body').removeClass('shadow')
    })
});



const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})



$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu-wrap, .menu-bg, .menu-button, .popup-form, .green-text "); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active'); // скрываем его
    }
});

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    $('#enterFullScreen').hide();
    $('#exitFullScreen').show();
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    $('#enterFullScreen').show();
    $('#exitFullScreen').hide();
}

function exitHandler() {
    //   if (document.webkitIsFullScreen  !== null || document.mozFullScreen  !== null || document.msFullscreenElement !== null)
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        console.log('exit fullscreen');
        exitFullscreen();
    }
}

if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}