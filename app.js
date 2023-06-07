const heading = 'We are a band of brothers, bound together by blood and loyalty.';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 250);
    }
}

typing();