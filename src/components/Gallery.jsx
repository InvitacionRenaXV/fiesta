import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import styles from './Gallery.module.css';

import img1 from '../assets/gallery/1.jpeg';
import img2 from '../assets/gallery/2.jpeg';
import img3 from '../assets/gallery/3.jpeg';
import img5 from '../assets/gallery/5.jpeg';
const IMAGES = [img1, img2, img3, img5];

export default function Gallery() {
  const swiperRef = useRef(null);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          aria-label="Foto anterior"
          onClick={goPrev}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          aria-label="Siguiente foto"
          onClick={goNext}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          watchSlidesProgress={true}
          loop={true}
          autoplay={false}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles.mySwiper}
          allowTouchMove={true}
          nested={true}
          touchStartPreventDefault={false}
          touchAngle={45}
        >
          {IMAGES.map((src, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={src}
                alt={`Rena photo ${index + 1}`}
                className={styles.photo}
                loading="lazy"
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
