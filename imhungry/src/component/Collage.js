import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';


class Collage extends React.Component {
    constructor(props){
        super(props);

        

        this.state = {
            images: this.props.images
        };



    }

    render () {
        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "80vw",
                    height: "60vh",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery
                    images={this.state.images}
                    enableLightbox={false}
                    enableImageSelection={false}/>
                </div>
        );
    }
}

Collage.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
    
        })
    ).isRequired
};

Collage.defaultProps = {
    images: ([
        {
            src: "https://www.ediblebrooklyn.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg",
            thumbnail: "https://www.ediblebrooklyn.com/wp-content/uploads/sites/2/2017/12/IMG_1339.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1517928404-delish-mongolian-ramen-and-meatballs-pinterest-still001.jpg",

            thumbnail: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1517928404-delish-mongolian-ramen-and-meatballs-pinterest-still001.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        
        },
        {
            src:"https://www.tasteofhome.com/wp-content/uploads/2018/05/Asian-Wraps_EXPS_EDSC17_196592_C03_10_4b-696x696.jpg",
            thumbnail:"https://www.tasteofhome.com/wp-content/uploads/2018/05/Asian-Wraps_EXPS_EDSC17_196592_C03_10_4b-696x696.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://amp.thisisinsider.com/images/5c0192d1de34c43da26049d4-1920-1440.jpg",
            thumbnail: "https://amp.thisisinsider.com/images/5c0192d1de34c43da26049d4-1920-1440.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "http://iamafoodblog.com/wp-content/uploads/2018/06/china-poblano_1877.jpg",
            thumbnail: "http://iamafoodblog.com/wp-content/uploads/2018/06/china-poblano_1877.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://assets3.thrillist.com/v1/image/1864928/size/tmg-article_default_mobile.jpg",
            thumbnail: "https://assets3.thrillist.com/v1/image/1864928/size/tmg-article_default_mobile.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/_800x1000_fit_center-center/chens-chinese-food.jpg",
            thumbnail: "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/_800x1000_fit_center-center/chens-chinese-food.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://i.ndtvimg.com/i/2016-06/chinese-650_650x350_81466064119.jpg",
            thumbnail: "https://i.ndtvimg.com/i/2016-06/chinese-650_650x350_81466064119.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://www.thespruceeats.com/thmb/zBfh_6241VAvAqBKKuc88lB62Wc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
            thumbnail: "https://www.thespruceeats.com/thmb/zBfh_6241VAvAqBKKuc88lB62Wc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        },
        {
            src: "https://cdn.vox-cdn.com/thumbor/CR0eSmaffYN9WHMkR5skvNKjQhQ=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/60367635/Chengdu_Taste_-_Mung_Bean_Jelly_Noodles_with_Chili_Sauce.0.0.0.0.jpg",
            thumbnail: "https://cdn.vox-cdn.com/thumbor/CR0eSmaffYN9WHMkR5skvNKjQhQ=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/60367635/Chengdu_Taste_-_Mung_Bean_Jelly_Noodles_with_Chili_Sauce.0.0.0.0.jpg",
            thumbnailWidth: "50%",
            thumbnailHeight: "50%",
        }
    ])
};



export default Collage;
