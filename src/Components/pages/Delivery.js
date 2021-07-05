import React, {useEffect} from 'react';
import dostavka from "../../assets/dostavka.png"
import dostavka1 from "../../assets/dostavka1.png"
import dostavka2 from "../../assets/dostavka2.png"
import fura from "../../assets/fura.png"
import "../../App.css"

export default function Delivery() {

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	   
    return (
        <div style={{marginTop: "80px"}} className="page-wrapper">
			<div className="container">
                <div className="row">
                	<div className=" col-sm-12">
                        <h4 style={{ marginTop:"30px",}}>Осуществляем доставку в города России, Казахстана, Беларуси, Узбекистана, и по всему миру, любым удобным для Вас способом! </h4>
                	</div>
                </div>
				<img style={{backgroundSize: "cover", width: "100%", height:"80%"}} src={dostavka1}/>
			</div>
        <main className="main">
            <div className="page-content pb-0">
                <div className="container">

					<div style={{display: "flex", justifyContent: "center", margin: "20px", }}><h3 style={{color: "#EEA287"}}>Условия доставки</h3 ></div>
					<p  style={{fontSize: "16px", textAlign: "justify", textIndent: "30px"}}>Доставка посылок производится железнодорожным, авиа и автомобильным транспортом в зависимости от города
					Доставка заказов полностью оплачивается Заказчиком . Транспортировка груза производится транспортными компаниями, до центральных городов.
					Дополнительные отправки и пересылки партий товара в удаленные населенные пункты оплачиваются заказчиком самостоятельно. Доставка до терминалов транспортных компаний бесплатная
					Товар отгружается в течение 24х часов с момента готовности заказа. Информацию о стоимости и сроках доставки в ваш регион можете получить у представителей данных транспортных компаний или у нашего менеджера
					Товар отправляется из Бишкека - столицы Кыргызстана, средний срок доставки по России - 7 дней, Казахстан - 3 дня, Беларусь и Украина - 10-14 дней. (При условии отправки через Карго, с момента отгрузки в ТК. При отправке товара через Кит, Энергию, СДЭК и т.п. сроки доставки увеличиваются)
					Менеджер подберет вам оптимальный тариф на доставку, согласно вашим потребностям. Для каждого партнера подбирается индивидуальное решение по доставке, с учётом местоположения и пожеланий и оптимального срока доставки. </p>



                	

                	<hr className="mt-4 mb-5"/>

					<h4 >На сегодняшний день, компания «SIMA» работает с транспортными компаниями </h4>
					<ul style={{marginLeft: "70px", marginTop: "50px", listStyle: "outside"}}>
						<li style={{fontSize: "16px"}}>БиекКарго (Россия, Казахстан) <a href="http://www.goldenpages.kg/ru/company/show/6009-biek-cargo-osoo.html">www.goldenpages.kg</a></li>
						<li style={{fontSize: "16px"}}>Альфа-Карго  (Россия, Казахстан) <a href="https://www.alpha-cargo.kg/"> www.alpha-cargo.kg</a></li>
						<li style={{fontSize: "16px"}}>Экспресс Карго  <a href="https://bagat.su/dostavka-gruzov-v-mongoliyu/">bagat.su</a></li>
						<li style={{fontSize: "16px"}}> Бостон Карго <a href="https://ban24.ru/bishkek/firm/boston-kargo-osoo">ban24.ru/bishkek</a></li>
						<li style={{fontSize: "16px"}}> Бишкек Карго (Россия, Казахстан)  <a href="https://bishkek.adresa-telefony.ru/bishkek_kargo_kompanija-70000001020744502.html">bishkek.adresa-telefony.ru</a></li>
						<li style={{fontSize: "16px"}}>КИТ (Россия, Казахстан, Беларусь, Армения)  <a href="https://www.spyur.am/ru/companies/kit-armn-transport-company-representation-of-russian-kit-company-in-armenia/34761">www.spyur.am/ru</a></li>
						<li style={{fontSize: "16px"}}>Транспортная компания «Росскарго» <a href="https://moving.tappynow.app/ru/bshk?utm_source=google&utm_medium=cpc&utm_campaign=iprofit_perevozki_bishkek_poisk&utm_term=%2B%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%BD%D0%B0%D1%8F%20%2B%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F&cm_id=12559893767_118886965665_506833862823_kwd-296625173251_c__g_&gclid=CjwKCAjwqcKFBhAhEiwAfEr7zVQ1_gptAT15rznnjJirp44GJ0aL8WljFBGs7HOvM3HB2N7xckM88hoCIucQAvD_BwE">moving.tappynow.app/ru</a></li>
						<li style={{fontSize: "16px"}}>Транспортная компания «Альянс Карго» <a href="https://porter-taxi-bishkek.netlify.app/">porter-taxi-bishkek.netlify.app</a></li>
						<li style={{fontSize: "16px"}}>СДЭК <a href="https://www.cdek.ru/ru/">www.cdek.ru</a></li>
						<li style={{fontSize: "16px"}}>Энергия (Россия, Казахстан, Беларусь, Армения) <a href="https://nrg-tk.ru/">nrg-tk.ru</a></li>
						<li style={{fontSize: "16px"}}>И другие</li>
					</ul>


                	
                </div>
            </div>
        </main>
        </div>
    )
}
