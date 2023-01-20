import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import home from "../../styles/HomePage.module.css"

const HomePage = () => {

  const banner = [
    { url: "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_happy_hour_desktop1673502140093.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_bbh_cc_up60_nov_994x3991667546414083.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flat40_soi_desktop1673527211419.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/baby_hug-pro_newdesktop-banner-baby-994-x-399px1673003568870.gif" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_soi_19thjan1674046450680.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/babyoftheyear_desktop1674035225020.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/mktng_wpc_hp_jan191674021665694.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/merchf_hp_default_soi23_buy2_1701231673929959347.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/hp_merch_p10_harry_desktop1674057444324.webp" },
    { url: "https://cdn.fcglcdn.com/brainbees/banners/toffyhouse_mkt_po5_all_6_toffy401673506694214.webp" },
  ]

  return (
    <>
    <div className={home.wholePage}>
      <div className={home.slide_banner}>
        <SimpleImageSlider
          width={1300}
          height={504}
          images={banner}
          showBullets={true}
          showNavs={true}
          slideDuration={0.7}
          autoPlay={true}
          autoPlayDelay={8.0}
        />
      </div>
      <h3 className={home.P}>PREMIUM BOUTIQUES</h3>
    </div>
    
    </>
  )
}

export default HomePage;