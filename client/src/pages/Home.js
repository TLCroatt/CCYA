import React, { useState } from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

  const items = [
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  
  const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
  <Container>
      <CardGroup>
        <Card>
          <CardImg top width="100%" src="./assets/test1.jpeg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>

      <Row>
        <Col xs="6" sm="4">
          We'll lay all these little funky little things in there. You don't have to be crazy to do this but it does help. Any little thing can be your friend if you let it be. Let's put some happy little bushes on the other side now. I thought today we would do a happy little picture. When you do it your way you can go anywhere you choose.
        </Col>
        <Col xs="6" sm="4">
          Trees get lonely too, so we'll give him a little friend. We'll put a happy little bush here. Trees grow however makes them happy. Give him a friend, we forget the trees get lonely too. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Everything's not great in life, but we can still find beauty in it.
        </Col>
        <Col sm="4" sm="4">
          Only think about one thing at a time. Don't get greedy. We have no limits to our world. We're only limited by our imagination. There we go. You don't have to spend all your time thinking about what you're doing, you just let it happen. Isn't that fantastic?
        </Col>
      </Row>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  </Container>
  );
};

export default Home;