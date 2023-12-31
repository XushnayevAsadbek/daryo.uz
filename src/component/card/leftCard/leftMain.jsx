import './leftMain.css'


import leftImg from './img/wrapper-img.jpg'
import leftImg1 from './img/wrapper-img1.jpg'
import leftImg2 from './img/wrapper-img2.jpg'
import leftImg3 from './img/wrapper-img3.jpg'
import leftImg4 from './img/wrapper-img4.jpg'
import reklama from './img/reklama.webp'
import DunyoCard from './dunyoCard'
import MahalliyCard from './mahalliyCard'
import LifestyleCard from './lifestyleCard'
import { NavLink } from 'react-router-dom'



export const LeftMain =() =>{
    return(
        <div className='leftMain-box'>
        <div className='leftMain-box--img'>
            <NavLink to="/category/dunyo" style={{
                        color:"#000",
                        textDecoration:"none"

                     }}>
            <p className='leftMain-box--text'>DUNYO</p>

            </NavLink>
       <NavLink to="https://daryo.uz/2023/10/03/firibgarlikda-ayblanayotgan-tramp-drenajdan-chiqqan-olik-delfinlar" style={{
        textDecoration:'none',
       }}>
       <h2 className='leftMain-box--heading'>
        Firibgarlikda ayblanayotgan Tramp, drenajdan chiqqan o‘lik delfinlar, bozordagi  ulkan sakkizoyoq — 3-oktyabr suratlari
        </h2>
       </NavLink>
        </div>

        <div className="leftMain-box--card">
        <div className="leftMain-box--card__wrapper">
                <img className='leftMain-box--card__wrapper--img' src={leftImg4} alt="“Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz seriyasini 36 taga yetkazdi" />
                <h3 className='leftMain-box--card__wrapper--heading'>
                Aquaterm ko‘rgazmasi boshlandi: AKFA...
                </h3>
            </div>
            <div className="leftMain-box--card__wrapper">
                <img className='leftMain-box--card__wrapper--img' src={leftImg} alt="“Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz seriyasini 36 taga yetkazdi" />
                <h3 className='leftMain-box--card__wrapper--heading'>
                “Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz...
                </h3>
            </div>
            <div className="leftMain-box--card__wrapper">
                <img className='leftMain-box--card__wrapper--img' src={leftImg1} alt="“Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz seriyasini 36 taga yetkazdi" />
                <h3 className='leftMain-box--card__wrapper--heading'>
                “Garri Potter” franshizasida eng ko‘p ekran vaqtiga...
                </h3>
            </div>
            <div className="leftMain-box--card__wrapper">
                <img className='leftMain-box--card__wrapper--img' src={leftImg2} alt="“Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz seriyasini 36 taga yetkazdi" />
                <h3 className='leftMain-box--card__wrapper--heading'>
                O‘zbekiston aholisi har yili zilzila vaqtida qanday harakatlanis...
                </h3>
            </div>
            <div className="leftMain-box--card__wrapper">
                <img className='leftMain-box--card__wrapper--img' src={leftImg3} alt="“Bavariya” YCHL guruh bosqichidagi mag‘lubiyatsiz seriyasini 36 taga yetkazdi" />
                <h3 className='leftMain-box--card__wrapper--heading'>
                Toshkentda Qatar amiri taʼsis etgan korrupsiyaga qarshi...
                </h3>
            </div>
        </div>



        <DunyoCard/>
        <MahalliyCard/>
        <LifestyleCard/>

        
        <a href="https://ucell.uz/uz/subscribers/tariffs?utm_source=daryo&utm_medium=cpm&utm_campaign=doimiy&utm_content=2332x220&utm_term=uz" target={'_blank'}>
        <img className='card--reklamaImg' src={reklama} alt="" />
        </a>
        </div>
     
    )
}