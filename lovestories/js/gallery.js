
var dalats = ["IMG_20210430_120521.jpg", "IMG_4548.jpg", "IMG_4594.jpg",
    "IMG_20210430_164741.jpg", "IMG_4551.jpg", "IMG_4605.jpg",
    "IMG_4262.jpg", "IMG_4552.jpg", "IMG_4612.jpg",
    "IMG_4302.jpeg", "IMG_4553.jpg", "IMG_4616.jpg",
    "IMG_4303.jpeg", "IMG_4556.jpg", "IMG_4621.jpg",
    "IMG_4353.jpeg", "IMG_4559.jpg", "IMG_4623-1.jpg",
    "IMG_4370.jpg", "IMG_4560.jpg", "IMG_4635.jpeg",
    "IMG_4381.jpeg", "IMG_4562.jpg", "IMG_4636.jpeg",
    "IMG_4382.jpg", "IMG_4563.jpg", "IMG_4645.jpg",
    "IMG_4393.jpg", "IMG_4564.jpg", "IMG_4664.jpg",
    "IMG_4414.jpeg", "IMG_4566.jpg", "IMG_4692.jpeg",
    "IMG_4431.jpeg", "IMG_4570.jpg", "IMG_4702.jpeg",
    "IMG_4443.jpeg", "IMG_4572.jpg", "IMG_4744.jpg",
    "IMG_4461.jpeg", "IMG_4574.jpg", "IMG_4747.jpg",
    "IMG_4468.jpeg", "IMG_4577.jpg", "IMG_4761.jpeg",
    "IMG_4475.jpeg", "IMG_4580.jpg", "IMG_4767.jpeg",
    "IMG_4478.jpeg", "IMG_4584.jpeg", "IMG_4770.jpeg",
    "IMG_4527.jpeg", "IMG_4589.jpg", "IMG_4775.jpeg",
    "IMG_4530.jpg", "IMG_4591.jpg", "IMG_4592.jpg", "IMG_4532.jpg"];

let vungtauString = "IMG_20210103_132417.jpg IMG_20210103_143843.jpg IMG_20210103_144517.jpg IMG_20210103_132433.jpg IMG_20210103_143859.jpg IMG_20210103_144914.jpg IMG_20210103_143554.jpg IMG_20210103_144249.jpg IMG_20210103_145117.jpg IMG_20210103_143746.jpg IMG_20210103_144457.jpg"
var vungtaus = seperateImages(vungtauString);

let sontraString = "IMG_20200927_154734.jpg IMG_20200927_170611.jpg IMG_20200927_155047.jpg IMG_20200927_171036.jpg IMG_20200927_155322.jpg IMG_20200927_171702_39.jpg IMG_20200927_161738.jpg IMG_20200927_171749.jpg IMG_20200927_162542.jpg IMG_20200927_172248.jpg IMG_20200927_163629.jpg IMG_20200927_190517.jpg IMG_20200927_164251.jpg IMG_20200927_191445.jpg IMG_20200927_165713_10.jpg"
var sontra = seperateImages(sontraString);

let tamhaiString = "20200627_163107_002_saved.jpg IMG_20200627_154702.jpg IMG_20200627_135223.jpg IMG_20200627_154827.jpg IMG_20200627_141723.jpg IMG_20200627_160110.jpg IMG_20200627_142337.jpg IMG_20200627_221804.jpg IMG_20200627_144609.jpg IMG_20200627_222234.jpg IMG_20200627_145643.jpg PANO_20200627_150857.jpg IMG_20200627_152237.jpg PANO_20200627_151542.jpg"
var tamhai = seperateImages(tamhaiString);

var allImages = {"dalat": dalats, "vungtau": vungtaus, "sontra": sontra, "tamhai": tamhai}

loadGalleries()

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

function loadGalleries() {
    let id = findGetParameter("id")
    let name = findGetParameter("address")
    if (!name) { name = "Da Lat"}
    let date = findGetParameter("date")
    if (!date) { date = "1 May 2021"}

    let titles = `<h1>${name}</h1> <h2>${date}</h2>`
    document.getElementById('title-gallery').insertAdjacentHTML('afterbegin', titles);

    var images = allImages[id]
    if (!images) { images = dalats }

    var inputs = '';
    for (var i = 0; i < images.length; i++) {
        inputs += `
        <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/galleries/${images[i]});"> 
            <a data-lightbox="image-1" href="images/galleries/${images[i]}" class="color-2"></a> 
        </li>`;
    }
    document.getElementById('fh5co-gallery-list').insertAdjacentHTML('afterbegin', inputs);
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function seperateImages(string) {
    return string.split(" ")
}
