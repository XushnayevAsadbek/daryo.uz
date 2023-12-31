import './leftMain.css'
import rightImg from './img/right-img.jpg'
import rightImg1 from './img/right-img1.jpg'
import rightImg2 from './img/right-img2.jpg'
import rightImg3 from './img/right-img3.jpg'
import { NavLink } from 'react-router-dom'


function DunyoCard() {
    return (
        <div>
            <div className="aside-card__dunyo">
                <h3 className='aside-card__dunyo--heading'>Dunyo </h3>

            </div>
            <p className='text-dunyo--span'></p>
            <p className='aside-card__dunyo--text'> </p>


            <div className="card-leftDunyo">
                <div>

                    <NavLink to="https://daryo.uz/2023/10/04/kimyo-boyicha-nobel-mukofoti-uch-nafar-olimga-berildi-ulardan-biri-rossiyalik">
                        <div className="card-leftDunyo--left">
                            <NavLink to="/category/dunyo" style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} >
                                <p className="card-leftDunyo--left__text">
                                    DUNYO
                                </p>
                            </NavLink>
                        </div>
                    </NavLink>
                    <NavLink style={{
                        textDecoration: 'none',
                        color: '#000'
                    }} to="https://daryo.uz/2023/10/04/kimyo-boyicha-nobel-mukofoti-uch-nafar-olimga-berildi-ulardan-biri-rossiyalik">


                        <h4 className="card-leftDunyo--left__heading">
                            Kimyo bo‘yicha Nobel mukofoti uch nafar olimga berildi, ulardan biri — asli rossiyalik
                        </h4>
                    </NavLink>
                    <p className='card-leftDunyo--left__text1'>
                        15:00 / 04.10.2023
                    </p>


                    <p className='card-leftDunyo--left__dec'>
                        Mukofot olimlarga “kvant nuqtalarini yaratish va sintez qilish usulini ishlab chiqqani uchun&r...
                    </p>
                </div>

                <div className='card-leftDunyo--right'>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={rightImg} alt="img" />
                        <div>
                            <NavLink to="https://daryo.uz/2023/10/04/urushga-qarshi-chiqqan-rossiyalik-jurnalist-marina-ovsyannikova-85-yilga-koloniyaga-hukm-qilindi" style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} >
                                <h4 className="card-leftDunyo--right__card--heading">
                                    Urushga qarshi chiqqan rossiyalik jurnalist Marina Ovsyannikova 8,5 yilga koloniyaga hukm qilindi
                                </h4>
                            </NavLink>
                            <p className="card-leftDunyo--right__card--text">
                                14:00 / 04.10.2023
                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={rightImg1} alt="img" />
                        <div>
                            <NavLink to="https://daryo.uz/2023/10/04/turkiya-iiv-anqarada-terakt-uyushtirganlarning-shaxsini-aniqladi" style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} >

                                <h4 className="card-leftDunyo--right__card--heading">
                                    Turkiya IIV Anqarada terakt uyushtirganlarning shaxsini aniqladi
                                </h4>
                            </NavLink>
                            <p className="card-leftDunyo--right__card--text">
                                13:00 / 04.10.2023

                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={rightImg2} alt="img" />
                        <div>
                            <NavLink to="https://daryo.uz/2023/10/04/rossiya-osmonida-tunda-31-ta-ukraina-droni-urib-tushirilgani-aytildi" style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} >
                                <h4 className="card-leftDunyo--right__card--heading">
                                    Rossiya osmonida tunda 31 ta Ukraina droni urib tushirilgani aytildi
                                </h4>
                            </NavLink>
                            <p className="card-leftDunyo--right__card--text">
                                13:00 / 04.10.2023

                            </p>
                        </div>
                    </div>
                    <div className="card-leftDunyo--right__card">
                        <img className='card-leftDunyo--right__card--img' src={rightImg3} alt="img" />
                        <div>
                            <NavLink to="https://daryo.uz/2023/10/04/ukrainaning-yevropa-ittifoqiga-qoshilishi-boyicha-muzokaralar-yil-oxirigacha-boshlanadi-politico" style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} >

                                <h4 className="card-leftDunyo--right__card--heading">
                                    Ukrainaning Yevropa Ittifoqiga qo‘shilishi bo‘yicha muzokaralar yil oxirigacha boshlanadi — Politico
                                </h4>
                            </NavLink>


                            <p className="card-leftDunyo--right__card--text">
                                11:00 / 04.10.2023
                            </p>
                        </div>
                    </div>
                </div>



            </div>
            <NavLink to="/category/dunyo" style={{
                color: "#fff",
                textDecoration: "none"

            }}>
                <button className="card-leftDunyo--btn"> <b>DUNYO</b>-ENG SO'NGGI XABARLAR </button>
            </NavLink>
        </div>
    )
}


export default DunyoCard