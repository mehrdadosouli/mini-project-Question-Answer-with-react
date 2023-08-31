import React , {useEffect , useState} from "react";
import user from "./img/icon/user.png";
import basket from "./img/icon/basket.png";
import search from "./img/icon/search.png";
import burger from "./img/icon/burger.png";
import closebtn from "./img/icon/close.png";
import styles from "./styles/Header.module.scss";
import Menu from "./Menu";

export default function Header() {


  // let isClick=false;
  // const arrayShop=['offer','offer programmer','gift idea','trade-in upgrade','offer','offer programmer']
   
  const Hamburger_menu = () => {
    document.querySelector(".burgers_menu-right").style.right = 0 + "px";
    document.documentElement.classList.add(`${styles.backdrop}`)
  }
  
  const closeBtns=()=>{
    let a=document.querySelector('.burgers_menu-right')
    document.documentElement.classList.remove(`${styles.backdrop}`)
     a.style.right= -500 + 'px'
  }

  // useEffect(() => {
  //   var a=document.querySelector('.right_menu_headers')
  //   a.addEventListener('click',(event)=>{
  //     var b=event.target.querySelector('a').innerHTML

  //     a.style.transform="translateX(" + -400 +"px)";
  //     switch (b) {
  //       case 'Shop':
  //         isClick=true;
  //         console.log(document.querySelector('.clickMenu'));
  //         document.querySelector('.clickMenu').append(element)
  //         break;
  //       default:
          
  //     }
  //   })
  // }, [])
  const Closebtnspan=(event)=>{
    let clickMenu=document.querySelector('.clickMenu');
    let right_menu_headers=document.querySelector('.right_menu_headers');
    event.target.parentElement.style.transform='translate('+30+'rem)';
    event.target.parentElement.parentElement.parentElement.parentElement.style.transform='translate('+0+'rem)';
    right_menu_headers.style.visibility='visible';
    clickMenu.style.height='100%';
    console.log(event.target.parentElement.parentElement.parentElement.parentElement);
  }
  useEffect(() => {
    const Handdler=()=>{
      let elemul=document.querySelector('.alii');
      let clickMenu=document.querySelector('.clickMenu');
      let right_menu_headers=document.querySelector('.right_menu_headers');
      let ull11=document.querySelector('.ull1');
      let elemasi=document.querySelectorAll('.asii');
      
       elemul.querySelectorAll('li').forEach(item=>{
        item.addEventListener('click',(event)=>{
          console.log(elemul);
          right_menu_headers.style.transform='translate('+-20+'rem)';
          // elemasi.style.transform='translate('+ 7 +'rem)';
          right_menu_headers.style.visibility='hidden';
          clickMenu.style.height='100vh';

          elemasi.forEach(items=>{
            items.style.visibility='hidden'
          })
          let res=event.target.querySelector('.asii')
          res.style.visibility='visible';
          res.style.opacity=1;
          res.style.transform='translate('+17+'rem)';
          res.style.width=80+'%';
        })
      })
    }
    Handdler()

    
  }, [])
  
  
  
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.headers} header`}>
          <div className={styles.header_right}>
            <ul>
              <li className={styles.imguser}>
                 <img src={user} alt="login" />
              </li>
              <ul className={styles.user}>
                <li><a href="#">Sign in Create Account</a></li>
                <li><a href="#">Why create an acounte</a></li>
                <li><a href="#">Track your rder</a></li>
                <li><a href="#">Business Account</a></li>
              </ul>
            </ul>
            <img src={basket} alt="basket" />
            <img src={search} alt="search" />
            <ul className={styles.ul}>
              <li>
                <a href="#">For Business</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">For My Orders</a>
              </li>
            </ul>
          </div>
          <div className={styles.header_left}>
            <ul className={styles.ul}>
              <li>
                <a href="#">SmartThings</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Displays</a>
              </li>
              <li>
                <a href="#">Computing</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <h1>
            <a href="#">SAMSUNG</a>
          </h1>
        </div>

        {/* hamburger menu */}

        <div className={`${styles.burger} burger`}>
          <div className={styles.header_right}>
            <img src={burger} alt="burger_menu" onClick={Hamburger_menu} />
            <img src={user} alt="login" />
            <img src={basket} alt="basket" />
            <img src={search} alt="search" />
          </div>
          <div className={styles.header_left}>
            <h1>
              <a href="#">SAMSUNG</a>
            </h1>
          </div>
        </div>
        
        <div className={`${styles.right_menu} burgers_menu-right`}>
          <div className={`${styles.right_menu_header} clickMenu`}>
            <div className={styles.right_menu_header_top}>
              <img className={styles.closebtn} src={closebtn} alt="close" onClick={closeBtns} />
              <input type="text" />
            </div>
              <span><a href="#">Sign in/Create Account</a></span>
              <hr />
            <div className={`${styles.right_menu_header_bottom} right_menu_headers`}>
              <ul className={`${styles.ull1} alii`}>
                <li><a href="#">Shop</a>
                  <ul className={`${styles.ull2} asii`}>
                    <img className={styles.closebtn} src={closebtn} alt="close" onClick={Closebtnspan} />
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">mobile</a></li>
                    <li><a href="#">tv & Audio</a></li>
                  </ul>
                </li>
                <li><a href="#">mobile</a>
                  <ul className={`${styles.ull2} asii`}>
                      <img className={styles.closebtn} src={closebtn} alt="close" onClick={Closebtnspan} />
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">mobile</a></li>
                    </ul>
                  </li>
                  <li><a href="#">telephone</a>
                  <ul className={`${styles.ull2} asii`}>
                      <img className={styles.closebtn} src={closebtn} alt="close" onClick={Closebtnspan} />
                      <li><a href="#">Shop</a></li>
                    </ul>
                  </li>
                <li><a href="#">Appliances</a></li>
                <li><a href="#">Computing</a></li>
                <li><a href="#">Displays</a></li>
                <li><a href="#">Accessory</a></li>
                <li><a href="#">Smarthings</a></li>
              </ul>
              <hr />
              <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">mobile</a></li>
                <li><a href="#">tv & Audio</a></li>
                <li><a href="#">Appliances</a></li>
              </ul>
              <hr />
              <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">mobile</a></li>
                <li><a href="#">tv & Audio</a></li>
                <li><a href="#">Appliances</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
