import footerImageTop from '../assets/img/footer-image.svg';
import logoIcon from '../assets/img/header-logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer" id="footer">
      <img src={footerImageTop} alt=""></img>
      <Link to="/" className="linkMain">
        <img className="header-logof" src={logoIcon} alt=""></img>
      </Link>
      <div className="footer-row">
        <div className="footer-col1">
          <Link to="/about">
            <span className="footer-col__span">О компании</span>
          </Link>
          <span className="footer-col__span">Контакты</span>
          <Link to="/delivery">
            <span className="footer-col__span">Доставка и оплата</span>
          </Link>
          <Link to="/agreement">
            <span className="footer-col__span">Политика конфиденциальности</span>
          </Link>
        </div>
        <div className="footer-col2">
          <a href="tel:+74991130900">
            <span className="footer-col__span">Тел.: +7 (499) 113 09-00</span>
          </a>
          <span className="footer-col__span">E-mail: 123123@yandex.ru</span>
          <span className="footer-col__span footer-adres">
            Адрес: г. Москва, ул. Климашкина 5. Клиника "Истмед"
          </span>
          <span className="footer-col__span">Мы в соц. сетях</span>
          <div className="footer-col2__rowIcons">
            <a href="https://vk.com/public101881419">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="44"
                viewBox="0 0 71 44"
                fill="none"
                className="footer-col2__icon">
                <path
                  d="M35.9286 44C46.1998 44 42.5374 37.5525 43.3302 35.6987C43.3184 34.3141 43.3066 32.9824 43.3539 32.1728C44.0047 32.3547 45.5401 33.1261 48.7114 36.1827C53.6074 41.0813 54.8587 44 58.814 44H66.0944C68.4018 44 69.6029 43.0525 70.2034 42.2576C70.7833 41.4891 71.3513 40.1397 70.73 38.0395C69.1059 32.9824 59.6334 24.2499 59.0447 23.3288C59.1335 23.1587 59.2755 22.9328 59.3494 22.8155H59.3435C61.2132 20.3661 68.3486 9.76507 69.3988 5.52347C69.4017 5.5176 69.4047 5.5088 69.4047 5.5C69.9727 3.564 69.452 2.30853 68.9136 1.59867C68.103 0.5368 66.8132 0 65.0708 0H57.7904C55.3528 0 53.5038 1.21733 52.569 3.43787C51.0041 7.3832 46.608 15.4968 43.3125 18.3685C43.2119 14.3 43.2799 11.1936 43.3332 8.88507C43.4397 4.3824 43.7829 0 39.0703 0H27.6276C24.6752 0 21.85 3.19733 24.9089 6.99307C27.5832 10.3195 25.8703 12.1733 26.4472 21.4016C24.1989 19.0109 20.1993 12.5547 17.3711 4.3032C16.5783 2.07093 15.3772 0.00293312 11.9959 0.00293312H4.71553C1.76315 0.00293312 0 1.59867 0 4.27093C0 10.2725 13.3981 44 35.9286 44ZM11.9959 4.40293C12.6379 4.40293 12.7029 4.40293 13.1792 5.74347C16.0754 14.2003 22.5718 26.7139 27.3169 26.7139C30.8817 26.7139 30.8817 23.0912 30.8817 21.7272L30.8787 10.868C30.6835 7.27467 29.3641 5.48533 28.4973 4.4L38.875 4.41173C38.8809 4.4616 38.8159 16.4237 38.9046 19.3219C38.9046 23.4373 42.2002 25.7957 47.3446 20.6331C52.7731 14.5581 56.5272 5.47653 56.6781 5.10693C56.9 4.57893 57.0922 4.4 57.7904 4.4H65.0708H65.1004C65.0974 4.4088 65.0974 4.4176 65.0945 4.4264C64.4288 7.5064 57.8584 17.3213 55.6604 20.3691C55.6249 20.416 55.5924 20.4659 55.5598 20.5157C54.5925 22.0821 53.8056 23.8128 55.693 26.2475C55.8646 26.4528 56.3142 26.9339 56.965 27.6027C58.9885 29.6736 65.9287 36.7547 66.544 39.5707C66.1358 39.6352 65.692 39.5883 58.814 39.6029C57.3496 39.6029 56.2048 37.4323 51.8353 33.0616C47.9067 29.2717 45.3567 27.7229 43.0344 27.7229C38.526 27.7229 38.8543 31.3515 38.8957 35.7397C38.9105 40.4976 38.8809 38.9928 38.9135 39.292C38.6502 39.3947 37.8958 39.6 35.9286 39.6C17.1581 39.6 4.93445 10.0584 4.46408 4.41173C4.62678 4.39707 6.86622 4.40587 11.9959 4.40293Z"
                  fill="#108C3D"
                />
              </svg>
            </a>
            <a href="https://web.telegram.org/a/#-1001702704831">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="46"
                viewBox="0 0 52 46"
                fill="none"
                className="footer-col2__icon">
                <path
                  d="M50.9838 0.822283C50.1492 0.0576099 48.963 -0.197214 47.8879 0.157107L2.27423 15.1933C1.03111 15.6031 0.188118 16.7127 0.126616 18.0201C0.0652154 19.3275 0.800302 20.5115 1.99934 21.0362L13.28 25.9718C13.335 26.2271 16.5733 41.2466 16.6835 41.7572C16.8248 42.4129 17.1576 42.997 17.8627 43.1767C18.5759 43.3583 19.0798 42.9686 19.6119 42.5702C19.9081 42.3485 27.9831 36.3019 27.9831 36.3019L37.7697 44.3103C38.3397 44.7769 39.0364 45.0203 39.7467 45.0203C40.085 45.0202 40.4264 44.9651 40.7585 44.8524C41.7886 44.5032 42.5521 43.6625 42.8011 42.6038L51.9166 3.84815C52.1756 2.74628 51.8184 1.58696 50.9838 0.822283ZM20.3412 28.8C20.3356 28.8131 20.3301 28.828 20.3249 28.8459L18.4379 35.4387L16.3321 25.6718L30.8126 17.6263L20.6885 28.2122C20.529 28.379 20.4117 28.5806 20.3412 28.8ZM20.9401 37.7694L21.7971 34.7749L22.6169 31.9106L25.5543 34.3144L20.9401 37.7694ZM48.9507 3.15045L39.8353 41.9061C39.8307 41.9254 39.8247 41.9519 39.7801 41.967C39.7359 41.982 39.7144 41.9649 39.6992 41.9523L28.9905 33.1892C28.9902 33.189 28.99 33.1887 28.9896 33.1885L24.028 29.1284L39.9682 12.4612C40.4888 11.9168 40.5334 11.0737 40.0731 10.4774C39.6126 9.88103 38.7856 9.71071 38.1273 10.0767L14.5244 23.1906L3.22067 18.2448C3.18622 18.2298 3.16727 18.2214 3.17001 18.1631C3.17274 18.1051 3.1924 18.0985 3.22807 18.0867L48.8418 3.05065C48.8638 3.04345 48.8888 3.03514 48.9254 3.06858C48.9621 3.10222 48.956 3.12775 48.9507 3.15045Z"
                  fill="#108C3D"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col2320">
          <div className="footer-col2320-1">
            <a href="tel:+74991130900">
              <span className="footer-col__span2">Тел.: +7 (499) 113 09-00</span>
            </a>
            <span className="footer-col__span adresMini">Адрес: г. Москва, ул. Климашкина 5. Клиника "Истмед"</span>
          </div>
          <div className="footer-col2320-2">
            <span className="footer-col__span">Мы в соц. сетях</span>
            <div className="footer-col2__rowIcons">
              <a href="https://vk.com/public101881419">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="71"
                  height="44"
                  viewBox="0 0 71 44"
                  fill="none"
                  className="footer-col2__icon">
                  <path
                    d="M35.9286 44C46.1998 44 42.5374 37.5525 43.3302 35.6987C43.3184 34.3141 43.3066 32.9824 43.3539 32.1728C44.0047 32.3547 45.5401 33.1261 48.7114 36.1827C53.6074 41.0813 54.8587 44 58.814 44H66.0944C68.4018 44 69.6029 43.0525 70.2034 42.2576C70.7833 41.4891 71.3513 40.1397 70.73 38.0395C69.1059 32.9824 59.6334 24.2499 59.0447 23.3288C59.1335 23.1587 59.2755 22.9328 59.3494 22.8155H59.3435C61.2132 20.3661 68.3486 9.76507 69.3988 5.52347C69.4017 5.5176 69.4047 5.5088 69.4047 5.5C69.9727 3.564 69.452 2.30853 68.9136 1.59867C68.103 0.5368 66.8132 0 65.0708 0H57.7904C55.3528 0 53.5038 1.21733 52.569 3.43787C51.0041 7.3832 46.608 15.4968 43.3125 18.3685C43.2119 14.3 43.2799 11.1936 43.3332 8.88507C43.4397 4.3824 43.7829 0 39.0703 0H27.6276C24.6752 0 21.85 3.19733 24.9089 6.99307C27.5832 10.3195 25.8703 12.1733 26.4472 21.4016C24.1989 19.0109 20.1993 12.5547 17.3711 4.3032C16.5783 2.07093 15.3772 0.00293312 11.9959 0.00293312H4.71553C1.76315 0.00293312 0 1.59867 0 4.27093C0 10.2725 13.3981 44 35.9286 44ZM11.9959 4.40293C12.6379 4.40293 12.7029 4.40293 13.1792 5.74347C16.0754 14.2003 22.5718 26.7139 27.3169 26.7139C30.8817 26.7139 30.8817 23.0912 30.8817 21.7272L30.8787 10.868C30.6835 7.27467 29.3641 5.48533 28.4973 4.4L38.875 4.41173C38.8809 4.4616 38.8159 16.4237 38.9046 19.3219C38.9046 23.4373 42.2002 25.7957 47.3446 20.6331C52.7731 14.5581 56.5272 5.47653 56.6781 5.10693C56.9 4.57893 57.0922 4.4 57.7904 4.4H65.0708H65.1004C65.0974 4.4088 65.0974 4.4176 65.0945 4.4264C64.4288 7.5064 57.8584 17.3213 55.6604 20.3691C55.6249 20.416 55.5924 20.4659 55.5598 20.5157C54.5925 22.0821 53.8056 23.8128 55.693 26.2475C55.8646 26.4528 56.3142 26.9339 56.965 27.6027C58.9885 29.6736 65.9287 36.7547 66.544 39.5707C66.1358 39.6352 65.692 39.5883 58.814 39.6029C57.3496 39.6029 56.2048 37.4323 51.8353 33.0616C47.9067 29.2717 45.3567 27.7229 43.0344 27.7229C38.526 27.7229 38.8543 31.3515 38.8957 35.7397C38.9105 40.4976 38.8809 38.9928 38.9135 39.292C38.6502 39.3947 37.8958 39.6 35.9286 39.6C17.1581 39.6 4.93445 10.0584 4.46408 4.41173C4.62678 4.39707 6.86622 4.40587 11.9959 4.40293Z"
                    fill="#108C3D"
                  />
                </svg>
              </a>
              <a href="https://web.telegram.org/a/#-1001702704831">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="46"
                  viewBox="0 0 52 46"
                  fill="none"
                  className="footer-col2__icon">
                  <path
                    d="M50.9838 0.822283C50.1492 0.0576099 48.963 -0.197214 47.8879 0.157107L2.27423 15.1933C1.03111 15.6031 0.188118 16.7127 0.126616 18.0201C0.0652154 19.3275 0.800302 20.5115 1.99934 21.0362L13.28 25.9718C13.335 26.2271 16.5733 41.2466 16.6835 41.7572C16.8248 42.4129 17.1576 42.997 17.8627 43.1767C18.5759 43.3583 19.0798 42.9686 19.6119 42.5702C19.9081 42.3485 27.9831 36.3019 27.9831 36.3019L37.7697 44.3103C38.3397 44.7769 39.0364 45.0203 39.7467 45.0203C40.085 45.0202 40.4264 44.9651 40.7585 44.8524C41.7886 44.5032 42.5521 43.6625 42.8011 42.6038L51.9166 3.84815C52.1756 2.74628 51.8184 1.58696 50.9838 0.822283ZM20.3412 28.8C20.3356 28.8131 20.3301 28.828 20.3249 28.8459L18.4379 35.4387L16.3321 25.6718L30.8126 17.6263L20.6885 28.2122C20.529 28.379 20.4117 28.5806 20.3412 28.8ZM20.9401 37.7694L21.7971 34.7749L22.6169 31.9106L25.5543 34.3144L20.9401 37.7694ZM48.9507 3.15045L39.8353 41.9061C39.8307 41.9254 39.8247 41.9519 39.7801 41.967C39.7359 41.982 39.7144 41.9649 39.6992 41.9523L28.9905 33.1892C28.9902 33.189 28.99 33.1887 28.9896 33.1885L24.028 29.1284L39.9682 12.4612C40.4888 11.9168 40.5334 11.0737 40.0731 10.4774C39.6126 9.88103 38.7856 9.71071 38.1273 10.0767L14.5244 23.1906L3.22067 18.2448C3.18622 18.2298 3.16727 18.2214 3.17001 18.1631C3.17274 18.1051 3.1924 18.0985 3.22807 18.0867L48.8418 3.05065C48.8638 3.04345 48.8888 3.03514 48.9254 3.06858C48.9621 3.10222 48.956 3.12775 48.9507 3.15045Z"
                    fill="#108C3D"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
