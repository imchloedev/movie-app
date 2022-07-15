import Link from "next/link";
import styles from "./MovieList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRef } from "react";

export default function MovieList({ list }) {
  const paginationRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="swiper-container"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id} className={styles.movie_box}>
            <Link href={`/view/${item.id}`}>
              <a>
                <div className={styles.movie_poster}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
                <div>
                  <strong className={styles.title}>
                    {item.original_title}
                  </strong>
                  <p className={styles.date}>{item.release_date}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
