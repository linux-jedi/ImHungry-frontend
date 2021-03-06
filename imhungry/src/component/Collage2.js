import * as React from 'react';
import Masonry from 'react-masonry-component';
import './Collage2.css';

const masonryOptions = {
    transitionDuration: 0,
    horizontalOrder: true,
    resize: true,
    percentPosition: true,
    fitWidth: true,
    columnWidth:'.grid-sizer',
    itemSelector: "image-element-class"
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Collage2 extends React.Component {
    render() {
        var heights = ["100px", "180px", "120px"]
        var images = ["https://www.ediblebrooklyn.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg",
        "https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1517928404-delish-mongolian-ramen-and-meatballs-pinterest-still001.jpg",
        "https://www.tasteofhome.com/wp-content/uploads/2018/05/Asian-Wraps_EXPS_EDSC17_196592_C03_10_4b-696x696.jpg",
        "https://cdn.vox-cdn.com/thumbor/6yqRtJGhVWveItEefGpKyN1GnGE=/0x0:1135x818/1200x800/filters:focal(785x255:965x435)/cdn.vox-cdn.com/uploads/chorus_image/image/59177341/DTF_Food_pics.0.jpeg",
        "http://iamafoodblog.com/wp-content/uploads/2018/06/china-poblano_1877.jpg",
        "https://assets3.thrillist.com/v1/image/1864928/size/tmg-article_default_mobile.jpg",
        "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/_800x1000_fit_center-center/chens-chinese-food.jpg",
        "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
        "https://www.thespruceeats.com/thmb/zBfh_6241VAvAqBKKuc88lB62Wc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
        "https://cdn.vox-cdn.com/thumbor/CR0eSmaffYN9WHMkR5skvNKjQhQ=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/60367635/Chengdu_Taste_-_Mung_Bean_Jelly_Noodles_with_Chili_Sauce.0.0.0.0.jpg"];
        const childElements = images.map(function(element){
           return (
                    <img src={element} className="grid-item" style={{height: heights[Math.floor(Math.random()*(2+1))],width: Math.floor(Math.random() * (30 - 20 + 1) ) + 20+"%"}}/>
            );
        });
    
        return (
            <Masonry
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
                
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Collage2;