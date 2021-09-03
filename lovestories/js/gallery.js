
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

let namoString = "IMG_20200531_164956.jpg IMG_20200531_170252.jpg IMG_20200531_173455.jpg IMG_20200531_165308.jpg IMG_20200531_170613.jpg IMG_20200531_174214.jpg IMG_20200531_165518.jpg IMG_20200531_172508.jpg"
var namo = seperateImages(namoString);

let danangString = "IMG_20200505_215735.jpg IMG_20200507_183759.jpg IMG_20200507_183955.jpg IMG_20200507_183732.jpg IMG_20200507_183851.jpg IMG_20200507_184636.jpg"
var danang = seperateImages(danangString);

let graString = "IMG_20200330_083506.jpg IMG_20200330_083606.jpg IMG_20200330_083947.jpg"
var graduation = seperateImages(graString);

let hoatrungString = "20200229_185309255.jpeg IMG_20200301_165130.jpg IMG_20200301_170404.jpg IMG_20200229_183126.jpg IMG_20200301_165735.jpg IMG_20200301_170423.jpg IMG_20200301_164445.jpg IMG_20200301_165937.jpg IMG_20200301_170807.jpg IMG_20200301_164713.jpg IMG_20200301_170112.jpg IMG_20200301_171653.jpg"
var hoatrung = seperateImages(hoatrungString);

let hueString = "IMG_20200223_142522.jpg IMG_20200223_150003.jpg IMG_20200223_195737.jpg IMG_20200223_142707.jpg IMG_20200223_150235.jpg IMG_20200224_085023.jpg IMG_20200223_143350.jpg IMG_20200223_185054.jpg IMG_20200224_085046.jpg IMG_20200223_143433.jpg IMG_20200223_185726.jpg IMG_20200224_090823.jpg IMG_20200223_145344.jpg IMG_20200223_193250.jpg IMG_20200224_091111.jpg IMG_20200223_145613.jpg IMG_20200223_195317.jpg IMG_20200224_113015.jpg IMG_20200223_145902.jpg IMG_20200223_195431.jpg IMG_20200224_113108.jpg IMG_20200223_145928.jpg IMG_20200223_195552.jpg dsadsa_COVER.jpg"
var hue = seperateImages(hueString);

let quangtri1String = "331546266810866_20200222_212307792.jpeg IMG_20200222_163742.jpg IMG_20200222_161648.jpg IMG_20200222_212349.jpg IMG_20200222_161820.jpg IMG_20200222_212402.jpg IMG_20200222_162012.jpg IMG_20200222_214139.jpg IMG_20200222_163328.jpg"
var quangtri1 = seperateImages(quangtri1String);

let quangtri2String = "20200202_095634794.jpeg IMG_20200201_155040.jpg 20200202_100850555.jpeg IMG_20200201_155211.jpg 20200202_102248950-01.jpeg IMG_20200201_155452.jpg"
var quangtri2 = seperateImages(quangtri2String);

let hoianString = "IMG_20191229_154334.jpg IMG_20191229_160022.jpg IMG_20191229_162700.jpg IMG_20191229_154421.jpg IMG_20191229_160026.jpg IMG_20191229_162818.jpg IMG_20191229_155130.jpg IMG_20191229_161306.jpg IMG_20191229_164702.jpg IMG_20191229_155224.jpg IMG_20191229_161408.jpg IMG_20191229_165007.jpg IMG_20191229_155501.jpg IMG_20191229_162445.jpg"
var hoian = seperateImages(hoianString);

let sontra2String = "20191124_163013568.jpeg BURST20191123205153454_COVER.jpg 20191124_215110482.jpeg IMG_20191124_163608.jpg 20191124_215227358.jpeg IMG_20191124_170812.jpg 20191124_222600206.jpeg IMG_20191124_170910.jpg 20191124_222750079.jpeg"
var sontra2 = seperateImages(sontra2String);

let thienvienString = "IMG_3590.JPG IMG_3602.JPG IMG_3617.JPG IMG_3598.JPG IMG_3615.JPG ThienVien.png"
var thienvien = seperateImages(thienvienString);

let firsttimeString = "IMG_0754.JPG IMG_1542.JPG IMG_1782.JPG IMG_1785.JPG IMG_0755.JPG IMG_1722.JPG"
var firsttime = seperateImages(firsttimeString);

var allImages = {
    "dalat": dalats, "vungtau": vungtaus, "sontra": sontra, "tamhai": tamhai, 
    "namo": namo, "danang": danang, "graduation": graduation, "hoatrung": hoatrung, "hue": hue, 
    "quangtri1": quangtri1, "quangtri2": quangtri2, "hoian": hoian, "sontra2": sontra2,
    "thienvien": thienvien, "firsttime": firsttime}

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
