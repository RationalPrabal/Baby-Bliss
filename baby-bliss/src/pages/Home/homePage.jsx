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
            <p>Cute Casuals At Its Best | Up To 24M</p>
            <div className={`${home.a}` }>
              <p className={`${home.c}`}>Onesies, Rompers, Set & More</p>
              <p className={home.b}>SHOP NOW</p>
            </div>
          </div>
        </div>
        
        {/* 3 */}
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
        
        {/* 4  */}
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
        
        {/* 5 */}
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
        
        {/* 6 */}
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
        
        {/* 7 */}
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
        
        {/* 8 */}
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
        
        {/* 9 */}
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
        
        {/* 10 */}
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
        
        {/* 11 */}
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
        
        {/* 12 */}
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
      <div>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_447_desktop_SOI_2023_01.jpg" alt="1" width={1250} height={300}></Image>
      </div>
      <div className={`${home.part}`}>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_02.jpg" alt="2" width={417} height={700}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_03.jpg" alt="3" width={417} height={700}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_04.jpg" alt="4" width={417} height={700}></Image>
      </div>

      <div>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_SOI_2023_05.jpg" alt="5" width={1250} height={150}></Image>
      </div>

      <div className={`${home.colors}`}>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_05.jpg" alt="6" width={300} height={480}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_06.jpg" alt="7" width={300} height={480}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_07.jpg" alt="8" width={300} height={480}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_08.jpg" alt="9" width={300} height={480}></Image>
      </div>

      <div>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_188_desktop_SOI_2023_10.jpg" alt="10" width={1250} height={150}></Image>
      </div>

      <div className={`${home.deal}`}>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_10.jpg" alt="11" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_11.jpg" alt="12" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_12.jpg" alt="13" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_13.jpg" alt="14" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_14.jpg" alt="15" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_15.jpg" alt="16" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_16.jpg" alt="17" width={156} height={150}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_17_12plus.jpg" alt="18" width={156} height={150}></Image>
      </div>

      <div>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_220_desktop_SOI_2023_17.jpg" alt="19" width={1250} height={150}></Image>
      </div>

      <div className={`${home.style_Parade}`}>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_18.jpg" alt="20" width={208} height={200}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_19.jpg" alt="21" width={208} height={200}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_20.jpg" alt="22" width={208} height={200}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_21.jpg" alt="23" width={208} height={200}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_22.jpg" alt="24" width={208} height={200}></Image>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_23.jpg" alt="25" width={208} height={200}></Image>
      </div>

      <div>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_228_desktop_SOI_2023_18.jpg' alt="26" width={1250} height={150}></Image>
      </div>

      <div className={`${home.brands}`}>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg" alt='27' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg" alt='28' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg" alt='30' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg" alt='31' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg" alt='32' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg" alt='33' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg" alt='34' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg" alt='35' width={150} height={150}></Image>

          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg" alt='36' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_28.jpg" alt='37' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_29.jpg" alt='38' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg" alt='39' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg" alt='40' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg" alt='41' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg" alt='42' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg" alt='43' width={150} height={150}></Image>

          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg" alt='44' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg" alt='45' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg" alt='46' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg" alt='47' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/wingsfield_26_09_2022.jpg" alt='48' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_40.jpg" alt='49' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_41.jpg" alt='50' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg" alt='51' width={150} height={150}></Image>
          
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_43.jpg" alt='52' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_44.jpg" alt='53' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_new_desktop_spring_12052022_45.jpg" alt='54' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_46_EARTHY_TOUCH.jpg" alt='55' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_47.jpg" alt='56' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111112052022_48.jpg" alt='57' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_new_12052022_49.jpg" alt='58' width={150} height={150}></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg" alt='59' width={150} height={150}></Image>
      </div>

      <div>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_213_desktop_SOI_2023_24.jpg' alt='60' width={1250} height={150}></Image>
      </div>

      <div className={`${home.b51}`}>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_25.jpg' alt ='61' width={410} height={500}></Image>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_26.jpg' alt ='62' width={410} height={500}></Image>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_27.jpg' alt ='63' width={410} height={500}></Image>
      </div>

      <div>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_essentials_160123_01.jpg' alt='64' width={1250} height={200}></Image>
      </div>

      <div>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_essentials_160123_02.jpg' alt='65' width={1250} height={150}></Image>
      </div>

      <div>
        
      </div>

    </div>
    
  </>
  )
}

export default HomePage;