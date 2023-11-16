import Slider from "react-slick"
function SliderCarousel (){
    var settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      autoplay: true,
      arrows: true,
      dots: true,
      variableWidth: true,
      responsive: [
          {
            breakpoint: 1200, // Ширина экрана менее 1200px
        settings: {
          slidesToShow: 2, // Показывать 2 слайда
          slidesToScroll: 1, // Прокручивать 1 слайд
          variableWidth: false, // Отключить variableWidth
        }
          },
          {
            breakpoint: 640, // Ширина экрана менее 640px
        settings: {
          slidesToShow: 1, // Показывать 1 слайд
          slidesToScroll: 1, // Прокручивать 1 слайд
          variableWidth: false, // Отключить variableWidth
        }
          },
          
        ]
      };
      return(
        <Slider {...settings}>
            <div>
            <div className="bslider__item">
              <div className="bslider__pic"><img src="images/systemUpscreen1.jpg" alt=""/></div>
              <div className="bslider__text"><p>How does Binom Forecaster work? By utilizing thousands of digital copies of
                professionals' thinking, Binom Forecaster predicts all types of risks based on your request. It provides
                recommendations on avoiding mistakes, </p></div>
            </div>
          </div>
          <div>
          <div className="bslider__item">
              <div className="bslider__pic"><img src="images/systemUpscreen1.jpg" alt=""/></div>
              <div className="bslider__text"><p>How does Binom Forecaster work? By utilizing thousands of digital copies of
                professionals' thinking, Binom Forecaster predicts all types of risks based on your request. It provides
                recommendations on avoiding mistakes, </p></div>
            </div>
          </div>
          <div>
          <div className="bslider__item">
              <div className="bslider__pic"><img src="images/systemUpscreen3.jpg" alt=""/></div>
              <div className="bslider__text"><p>You can refine predictions for each type of risk based on your specific
                circumstances.</p></div>
            </div>
          </div>
        </Slider>
      )
}
export default SliderCarousel