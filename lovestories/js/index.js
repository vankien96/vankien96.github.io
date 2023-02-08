var imageInfos = [];
var quotes = [];
var timelines = [];

loadAllImages()
loadAllQuotes()
loadTimelines()

showGalleries()
showQuotes()
showTimelines()

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

function showTimelines() {
    var inputs = ''
    for (var i = 0; i < timelines.length; i++) {
        let timeline = timelines[i]
        let classAttr = (i % 2 == 0) ? "animate-box" : "timeline-inverted animate-box"
        inputs += `
        <li class="${classAttr}">
            <div class="timeline-badge" style="background-image:url(images/${timeline.image});"></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h3 class="timeline-title">${timeline.title}</h3>
                    <span class="date">${timeline.date}</span>
                </div>
                <div class="timeline-body">
                    <p>${timeline.des}</p>
                </div>
            </div>
        </li>
        `
    }
    document.getElementById('timeline-container').insertAdjacentHTML('afterbegin', inputs);
}

function loadAllImages() {
    imageInfos = [
        {address: "Tet 2023", date: "Jan 29 2022", src: "gallery-21.jpg", id: "tet2023"},
        {address: "Singapore", date: "Aug 14 2022", src: "gallery-20.jpg", id: "singapore"},
        {address: "TSNT 15 Nam", date: "May 22 2022", src: "gallery-18.jpg", id: "tsnt15"},
        {address: "SAI GON", date: "May 14 2022", src: "gallery-19.jpg", id: "saigon2022"},
        {address: "Vung Tau 2022", date: "Feb 28 2022", src: "gallery-17.jpg", id: "vungtau2022"},
        {address: "Tet 2022", date: "Feb 6 2022", src: "gallery-16.jpg", id: "tet2022"},
        {address: "Da Lat", date: "May 1 2021", src: "gallery-15.jpg", id: "dalat"},
        {address: "Vung Tau", date: "January 3 2021", src: "gallery-1.jpg", id: "vungtau"},
        {address: "Son Tra - Da Nang", date: "September 27 2020", src: "gallery-2.jpg", id: "sontra"},
        {address: "Tam Hai Island", date: "May 31 2020", src: "gallery-3.jpg", id: "tamhai"},
        {address: "Nam O - Da Nang", date: "May 1 2021", src: "gallery-14.jpg", id: "namo"},
        {address: "Da Nang", date: "May 7 2020", src: "gallery-13.jpg", id: "danang"},
        {address: "Graduation", date: "March 30 2020", src: "gallery-11.jpg", id: "graduation"},
        {address: "Hoa Trung Lake - Da Nang", date: "March 1 2020", src: "gallery-4.jpg", id: "hoatrung"},
        {address: "Hue City", date: "February 23 2020", src: "gallery-5.jpg", id: "hue"},
        {address: "Quang Tri", date: "March 22 2020", src: "gallery-12.jpg", id: "quangtri1"},
        {address: "Quang Tri", date: "February 1 2020", src: "gallery-6.jpg", id: "quangtri2"},
        {address: "Hoi An", date: "December 29 2019", src: "gallery-10.jpg", id: "hoian"},
        {address: "Son Tra - Da Nang", date: "November 24 2019", src: "gallery-7.jpg", id: "sontra2"},
        {address: "Thien Vien Truc Lam", date: "August 17 2019", src: "gallery-8.jpg", id: "thienvien"},
        {address: "Our first time", date: "September 30 2018", src: "gallery-9.jpg", id: "firsttime"},
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

function loadTimelines() {
    timelines = [
        {title: "First We Meet", date: "Someday, 2017", image: "couple-3.jpg", des: "We joined the same scholarship foundation named 'Light The Hope'. At the first time, we do not have any impression of each other. After a long time, on Vietnamese Woman day, we had a little party together. During the party, I was impressed by her voice, at that time I know that I fell in love with her."},
        {title: "First Date", date: "December 28, 2017", image: "couple-2.jpg", des: "From that day, I knew that I found my true love. I wanted to become her boyfriend, I tried to text her every day. After 2 months, It seems she opened her heart, she accepted my invitation to a cinema. The first film we watched together is Along with the god, I didn't remember that film is good or not, I just remember that I was really really happy. :)"},
        {title: "In A Relationship", date: "October 21, 2018", image: "couple-1.jpg", des: "Day by day, we text and date more. We didn't know when we love each other. Our love came gently, I didn't reveal my love and she also not. But through the eyes, we know how much that we love each other. And now, we decide to use her true birthday as our love day."},
        {title: "1000 days of love", date: "July 17, 2021", image: "quotes/quote_1.jpeg", des: "Because of covid, so we cannot celebrate this together. I love you so much."},
        {title: "1 year in long distance love", date: "October 5, 2021", image: "quotes/quote_2.jpeg", des: "Because of work, She moved to Binh Duong to works since Oct 5 2020. I was still in Da Nang. When have time, we travelled together."},
    ]
}