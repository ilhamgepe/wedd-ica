import { Carousel } from "@mantine/carousel";
import { Text, Card, Blockquote } from "@mantine/core";
import React, { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import truncate from "../../utils/truncate";
import axios from "axios";

interface Wish {
  id: string;
  name: string;
  wish: string;
  createdAt: string;
  updatedAt: string;
}

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const [loadingWish, setLoadingWish] = useState(true);
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  useEffect(() => {
    const fetchWishes = async () => {
      setLoadingWish(true);
      try {
        await axios.get("/api/wishlist").then(({ data }) => setWishList(data));
      } catch (error) {
        console.log({ error });
      }
      setLoadingWish(false);
    };
    fetchWishes();
  }, []);
  return (
    <div className="">
      test
      {loadingWish && <Text>Loading...</Text>}
      {!loadingWish && wishList.length > 0 && (
        <Carousel
          withIndicators
          h={300}
          slideSize="33.333333%"
          slideGap="md"
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
          loop
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {wishList &&
            wishList.map((wish: Wish) => (
              <Carousel.Slide key={wish.id}>
                <Card shadow={"md"}>
                  <Blockquote cite={wish.name}>
                    <>
                      <Text align="start">{truncate(wish.wish, 190)}</Text>
                    </>
                  </Blockquote>
                </Card>
              </Carousel.Slide>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default WishList;
