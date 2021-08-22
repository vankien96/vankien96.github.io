var imageInfos = [];
var quotes = [];

loadAllImages()
loadAllQuotes()

showGalleries()
showQuotes()

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

function showGalleries() {
    var inputs = '';
    for (var i = 0; i < imageInfos.length; i++) {
        let image = imageInfos[i]
        inputs += `
        <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/${image.src}); "> 
            <a href="gallery.html?id=${image.id}&date=${image.date}&address=${image.address}">
                <div class="case-studies-summary">
                    <span>${image.date}</span>
                    <h2>${image.address}</h2>
                </div>
            </a>
        </li>
        `;
    }
    document.getElementById('fh5co-gallery-list').insertAdjacentHTML('afterbegin', inputs);
}

function showQuotes() {
    console.log("load quotes");
    var inputs = ''
    for (var i = 0; i < quotes.length; i++) {
        let quote = quotes[i]
        inputs += `
        <div class="item">
            <div class="testimony-slide active text-center">
                <figure>
                    <img src="images/${quote.src}" alt="user">
                </figure>
                <blockquote>
                    <p>"${quote.text}"</p>
                </blockquote>
            </div>
        </div>
        `
    }
    document.getElementById('quote-container').insertAdjacentHTML('afterbegin', inputs);
}

function loadAllImages() {
    imageInfos = [
        {address: "Da Lat", date: "1 May 2021", src: "gallery-15.jpg", id: "dalat"},
        {address: "Vung Tau", date: "3 January 2021", src: "gallery-1.jpg", id: "vungtau"},
        {address: "Son Tra - Da Nang", date: "27 September 2020", src: "gallery-2.jpg", id: "sontra"},
        {address: "Tam Hai Island", date: "31 May 2020", src: "gallery-3.jpg", id: "tamhai"},
        {address: "Nam O - Da Nang", date: "1 May 2021", src: "gallery-14.jpg", id: "namo"},
        {address: "Da Nang", date: "7 May 2020", src: "gallery-13.jpg", id: "danang"},
        {address: "Graduation", date: "30 March 2020", src: "gallery-11.jpg", id: "graduation"},
        {address: "Hoa Trung Lake - Da Nang", date: "1 March 2020", src: "gallery-4.jpg", id: "hoatrung"},
        {address: "Hue City", date: "23 February 2020", src: "gallery-5.jpg", id: "hue"},
        {address: "Quang Tri", date: "22 March 2020", src: "gallery-12.jpg", id: "quangtri1"},
        {address: "Quang Tri", date: "1 February 2020", src: "gallery-6.jpg", id: "quangtri2"},
        {address: "Hoi An", date: "29 December 2019", src: "gallery-10.jpg", id: "hoian"},
        {address: "Son Tra - Da Nang", date: "24 November 2019", src: "gallery-7.jpg", id: "sontra2"},
        {address: "Thien Vien Truc Lam", date: "17 August 2019", src: "gallery-8.jpg", id: "thienvien"},
        {address: "Our first time", date: "30 September 2018", src: "gallery-9.jpg", id: "firsttime"},
    ]
}

function loadAllQuotes() {
    quotes = [
        {src: "quotes/quote_1.jpeg", text: "They say as long as at least one person cares for you, life isn’t a waste. So when things go terribly wrong, and you feel like giving up, please remember you still got me."},
        {src: "quotes/quote_2.jpeg", text: "If I die or go somewhere far, I’ll write your name on every star so people looking up can see just how much you meant to me."},
        {src: "quotes/quote_3.jpeg", text: "To the world you may be one person, but to one person you may be the world"},
    ]
    console.log(quotes.length);
}