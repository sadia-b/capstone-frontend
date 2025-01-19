import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <svg
          className="footer__logo"
          height="30px"
          width="30px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.001 512.001"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                style={{ fill: "#81C784" }}
                d="M220.051,350.316c0-116.359-48.82-143.719-152.702-143.719 C67.349,318.922,135.993,350.316,220.051,350.316"
              />
              <path
                style={{ fill: "#81C784" }}
                d="M318.858,377.263c0-97.801,44.014-116.772,125.754-116.772 C446.148,355.301,403.517,377.263,318.858,377.263"
              />
              <path
                style={{ fill: "#81C784" }}
                d="M345.805,0c22.878,70.593-33.603,111.409-77.474,116.772C235.689,68.285,258.226,11.929,345.805,0"
              />
              <path
                style={{ fill: "#81C784" }}
                d="M229.033,197.614c-75.228,0-89.825-35.93-89.825-98.807 C212.137,97.621,229.033,132.491,229.033,197.614"
              />
              <path
                style={{ fill: "#81C784" }}
                d="M300.893,233.544c81.902,0,116.772-9.324,116.772-116.772 C335.763,116.772,300.893,126.096,300.893,233.544"
              />
            </g>
            <path
              style={{ fill: "#4CAF50" }}
              d="M380.989,319.785c-1.985-4.554-7.285-6.638-11.821-4.653 c-27.675,12.045-44.598,35.292-57.488,56.652c-12.09,12.917-25.295,27.693-37.735,45.586V296.422 c0-12.189,13.483-35.014,33.549-56.787c1.015-1.105,2.425-2.677,4.177-4.626c9.854-11.021,30.361-33.927,48.658-48.29 c3.907-3.063,4.581-8.713,1.527-12.611c-3.072-3.907-8.713-4.581-12.611-1.527c-19.546,15.342-40.762,39.047-50.966,50.445 l-3.988,4.428c-4.114,4.464-12.477,13.977-20.345,25.402V152.775c0.243-32.463,5.857-52.341,21.423-75.974 c2.731-4.141,1.59-9.71-2.551-12.441c-4.15-2.74-9.719-1.59-12.45,2.56c-17.498,26.561-24.109,49.79-24.387,85.711 c0,0.018,0.009,0.027,0.009,0.036c0,0.009-0.009,0.027-0.009,0.036v63.236c-9.054-12.917-18.513-22.582-20.345-24.414l-35.93-38.93 c-3.359-3.638-9.036-3.871-12.692-0.503c-3.647,3.359-3.871,9.045-0.512,12.692l36.181,39.181 c9.261,9.261,33.298,37.475,33.298,56.527v114.113c-8.147-10.213-15.854-17.498-22.16-23.408c-2.569-2.407-4.833-4.545-6.782-6.593 c-24.432-38.014-49.008-62.356-75.102-74.312c-4.5-2.057-9.845-0.099-11.911,4.419c-2.066,4.509-0.09,9.845,4.428,11.911 c23.067,10.572,45.316,32.993,68.024,68.536c0.234,0.35,0.53,0.629,0.799,0.943c0.09,0.117,0.117,0.252,0.225,0.359 c2.255,2.416,4.976,4.967,8.03,7.842c9.414,8.821,22.178,20.884,34.448,42.361v96.355c0,4.958,4.024,8.982,8.982,8.982 s8.982-4.024,8.982-8.982v-51.541c15.558-28.663,34.681-50.167,51.469-68.069c0.099-0.108,0.126-0.243,0.216-0.359 c0.323-0.368,0.665-0.728,0.925-1.159c11.498-19.16,26.39-40.107,49.781-50.284C380.881,329.621,382.965,324.33,380.989,319.785"
            />
            <path
              style={{ fill: "#9E5A23" }}
              d="M417.665,512H112.261c-4.958,0-8.982-4.024-8.982-8.982s4.024-8.982,8.982-8.982h305.404 c4.958,0,8.982,4.024,8.982,8.982S422.623,512,417.665,512"
            />
          </g>
        </svg>
        <h4 className="footer__logo-title">Fresh Rituals</h4>
      </div>
      <div className="footer__flex">
        <ul className="footer__list">
          <li className="footer__list-item">Contact Us</li>
          <li className="footer__list-item">About</li>
          <li className="footer__list-item">Help Center</li>
        </ul>
        <div className="footer__icons">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="#0F0F0F"
            />
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="#0F0F0F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              fill="#0F0F0F"
            />
          </svg>
          <svg
            width="20px"
            height="20px"
            viewBox="-5 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>facebook [#176]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" fill="none">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-385.000000, -7399.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                    id="facebook-[#176]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              fill="#080341"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
