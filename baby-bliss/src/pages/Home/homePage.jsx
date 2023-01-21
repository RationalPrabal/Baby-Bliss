import Image from 'next/image';
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
      
      {/* 1 done*/}
      <div className={home.grid_banner}>
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28870.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
       
        {/* 2 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28876.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 3 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28877.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 4 done */}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28889.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 5 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28880.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 6 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28888.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 7 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28881.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 8 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28862.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 9 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28863.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 10 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28874.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 11 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28871.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 12 done*/}
        <div className={home.card}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28873.webp" alt="a" width={400} height={400}></Image>
          <div className={`${home.Ti}`}>
            <p>Ready For Some Fun | Up To 12+Y</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Sets, T-Shirts&More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default HomePage;