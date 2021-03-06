import React from 'react';
import {View} from 'react-native';

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import SvgIcon from 'react-native-svg-icon';

const Iconos = props => <SvgIcon svgs={svgs} {...props} />;

Iconos.defaultProps = {
  viewBox: '0 0 30 30',
};

export default Iconos;

export const svgs = {
  Person: (
    <Svg viewBox="0 0 112 112">
      <Circle
        id="Elipse_77"
        data-name="Elipse 77"
        cx="56"
        cy="56"
        r="56"
        fill="#fff"
      />
      <G id="Grupo_349" data-name="Grupo 349" transform="translate(20 24.523)">
        <Path
          id="Trazado_4674"
          data-name="Trazado 4674"
          d="M1312.434,754.534c-1.531-.208-3.072-.362-4.592-.633a40.288,40.288,0,0,1-22.361-11.928,42.568,42.568,0,0,1-5.562-7.139,2.151,2.151,0,0,1-.188-2.2,25.416,25.416,0,0,1,17.294-14.3,19.8,19.8,0,0,1,2.891-.525,4.231,4.231,0,0,1,2.824,1.088,21.274,21.274,0,0,0,11.687,3.795,19.773,19.773,0,0,0,12.194-3.337,7.166,7.166,0,0,1,6.475-1.055,25.792,25.792,0,0,1,17.319,14.3,1.834,1.834,0,0,1-.139,1.9,41.684,41.684,0,0,1-16.175,15.332,39.06,39.06,0,0,1-14.25,4.394c-.767.082-1.53.2-2.295.308Z"
          transform="translate(-1279.51 -675.057)"
          fill="#d1e6ea"
        />
        <Path
          id="Trazado_4675"
          data-name="Trazado 4675"
          d="M1369.268,519.96a20.642,20.642,0,1,1-20.682,20.56A20.69,20.69,0,0,1,1369.268,519.96Z"
          transform="translate(-1333.664 -519.96)"
          fill="#d1e6ea"
        />
      </G>
    </Svg>
  ),
  Perfil: (
    <Svg viewBox="0 0 24.701 24.701">
      <Path
        id="Trazado_26"
        data-name="Trazado 26"
        d="M652.818,1489.6a12.35,12.35,0,1,0,3.618,8.733A12.27,12.27,0,0,0,652.818,1489.6ZM637.1,1506.692a7.065,7.065,0,0,1,6.99-6.218,7.039,7.039,0,0,1,6.99,6.218,10.88,10.88,0,0,1-13.981,0Zm6.99-7.709a3.751,3.751,0,1,1,3.751-3.751A3.755,3.755,0,0,1,644.086,1498.984Zm8.236,6.485a8.509,8.509,0,0,0-5.326-5.931,5.2,5.2,0,1,0-5.819,0,8.5,8.5,0,0,0-5.329,5.929,10.9,10.9,0,1,1,16.474,0Z"
        transform="translate(-631.735 -1485.981)"
      />
    </Svg>
  ),
  Conseje: (
    <Svg viewBox="0 0 25.823 22.437">
      <Path
        id="Trazado_25"
        data-name="Trazado 25"
        d="M515.723,1502.547a.861.861,0,0,0,.861-.861c0-6.779-5.221-10.847-12.051-11.169v-1.742h2.582a.861.861,0,0,0,0-1.721H500.23a.861.861,0,1,0,0,1.721h2.582v1.742c-6.825.322-12.051,4.386-12.051,11.169a.86.86,0,0,0,.861.861h7.747v1.779h-6.025a2.585,2.585,0,0,0-2.582,2.582v1.722a.861.861,0,0,0,.861.861h24.1a.861.861,0,0,0,.861-.861v-1.722a2.585,2.585,0,0,0-2.583-2.582h-6.025v-1.779Zm-12.051-10.329c5.32,0,10.685,2.671,11.156,8.608H492.516C492.988,1494.889,498.353,1492.218,503.672,1492.218Zm11.19,14.69v.861h-22.38v-.861a.862.862,0,0,1,.861-.861H514A.862.862,0,0,1,514.862,1506.909Zm-8.607-2.582H501.09v-1.779h5.165Z"
        transform="translate(-490.761 -1487.054)"
      />
    </Svg>
  ),
  Estancias: (
    <Svg viewBox="0 0 180 180">
      <Path d="M149.1,21.4l-46.2,60.8v1l73.5-9.7v33.1l-73.5-8.8v1l46.7,58.4L119,174.7l-29.2-68.1h-1l-31.6,68.6l-27.7-17.5l46.2-59.4v-1l-72,9.2V73.5l71.5,9.2v-1L29.4,22.4l29.7-17L89.3,73h1l29.7-68.1L149.1,21.4z" />
    </Svg>
  ),
  Actividades: (
    <Svg viewBox="0 0 21.895 21.895">
      <Path
        id="Trazado_8"
        data-name="Trazado 8"
        d="M209.562,1517.93l-.062-.125a1.088,1.088,0,0,0-.979-.6h-1.287a1.089,1.089,0,0,0-.979.6l-.062.125h-.14a1.1,1.1,0,0,0-1.095,1.094v2.19a1.1,1.1,0,0,0,1.095,1.095H209.7a1.1,1.1,0,0,0,1.095-1.095v-2.19a1.1,1.1,0,0,0-1.095-1.094Zm.5,1.094v2.19a.365.365,0,0,1-.365.365h-3.649a.365.365,0,0,1-.365-.365v-2.19a.365.365,0,0,1,.365-.365h.591l.264-.529a.364.364,0,0,1,.327-.2h1.287a.364.364,0,0,1,.327.2l.264.529h.59A.365.365,0,0,1,210.066,1519.024Z"
        transform="translate(-202.768 -1502.968)"
      />
      <Path
        id="Trazado_9"
        data-name="Trazado 9"
        d="M230.866,1511.6h-2.19v.73h2.19a4.379,4.379,0,1,1-4.379,4.379v-1.46h-.73v1.46a5.109,5.109,0,1,0,5.109-5.109Z"
        transform="translate(-214.079 -1499.922)"
      />
      <Path
        id="Trazado_10"
        data-name="Trazado 10"
        d="M209.645,1516.709a4.379,4.379,0,1,1-4.379-4.379h2.19v-.73h-2.19a5.109,5.109,0,1,0,5.109,5.109v-1.46h-.73Z"
        transform="translate(-200.157 -1499.922)"
      />
      <Path
        id="Trazado_11"
        data-name="Trazado 11"
        d="M205.266,1496.218h3.649v-.73h-3.649a4.379,4.379,0,1,1,4.379-4.379v1.46h.73v-1.46a5.109,5.109,0,1,0-5.109,5.109Z"
        transform="translate(-200.157 -1486)"
      />
      <Path
        id="Trazado_12"
        data-name="Trazado 12"
        d="M226.487,1491.109a4.379,4.379,0,1,1,4.379,4.379h-3.649v.73h3.649a5.109,5.109,0,1,0-5.109-5.109v1.46h.73Z"
        transform="translate(-214.079 -1486)"
      />
      <Path
        id="Trazado_13"
        data-name="Trazado 13"
        d="M219.217,1503.46v.763a1.453,1.453,0,0,0,.245.81l.281.421-1.237.412a1.094,1.094,0,0,0-.749,1.039v2.393H223.6V1506.9a1.093,1.093,0,0,0-.749-1.039l-1.237-.412.281-.421a1.452,1.452,0,0,0,.245-.81v-.763a1.46,1.46,0,0,0-2.919,0Zm3.4,3.1a.365.365,0,0,1,.249.346v1.664h-4.379V1506.9a.365.365,0,0,1,.25-.346l1.94-.646Zm-2.67-3.1a.73.73,0,0,1,1.46,0v.763a.728.728,0,0,1-.123.405l-.607.911-.607-.911a.728.728,0,0,1-.123-.405Z"
        transform="translate(-209.729 -1494.702)"
      />
      <Path
        id="Trazado_14"
        data-name="Trazado 14"
        d="M210.052,1520.4a1.095,1.095,0,1,0,1.095,1.095A1.095,1.095,0,0,0,210.052,1520.4Zm0,1.46a.365.365,0,1,1,.365-.365A.365.365,0,0,1,210.052,1521.86Z"
        transform="translate(-204.943 -1504.708)"
      />
      <Path
        id="Trazado_15"
        data-name="Trazado 15"
        d="M232.6,1517.13v-.73h-1.358l-.731,2.193c-.033,0-.067,0-.1,0a1.461,1.461,0,1,0,.793.235l.127-.38,2.009,1.436a1.46,1.46,0,1,0,1.815-1.244V1516.4h-1.095v.73h.365v.691l-2.793-.279.137-.412Zm-2.19,3.649a.73.73,0,0,1-.146-1.445l-.2.6.692.231.2-.6a.729.729,0,0,1-.546,1.213Zm4.379-1.46a.73.73,0,1,1-.73.73A.73.73,0,0,1,234.791,1519.319Zm-.365-.765v.081a1.466,1.466,0,0,0-.807.545l-1.15-.822Z"
        transform="translate(-215.815 -1502.533)"
      />
      <Path
        id="Trazado_16"
        data-name="Trazado 16"
        d="M209.432,1490.8h-2.919a1.1,1.1,0,0,0-1.095,1.095v2.518l-.27,1.353a.73.73,0,0,0,.572.859.715.715,0,0,0,.143.014h4.219a.73.73,0,0,0,.73-.73.717.717,0,0,0-.014-.143l-.271-1.353v-2.518A1.1,1.1,0,0,0,209.432,1490.8Zm-3.284,1.095a.365.365,0,0,1,.365-.365h2.919a.365.365,0,0,1,.365.365v2.19h-3.649Zm3.934,4.014h-4.219l.219-1.095h3.781l.219,1.095Z"
        transform="translate(-202.863 -1488.611)"
      />
      <Path
        id="Trazado_17"
        data-name="Trazado 17"
        d="M233.672,1490v1.259a1.535,1.535,0,0,0-1.45.405l-.138.138a10.67,10.67,0,0,0-2.462,3.823.73.73,0,0,0,.98.923l.728-.324a10.7,10.7,0,0,0,3.232-2.22,1.536,1.536,0,0,0,.405-1.451h1.259v-.73h-1.308l.837-.837-.516-.517-.837.837V1490Zm.375,3.489a9.975,9.975,0,0,1-3.013,2.069l-.728.323a9.992,9.992,0,0,1,1.028-2.015l.676.452.405-.608-.656-.437q.222-.285.464-.557l.461.461.516-.516-.472-.472.009-.009a.8.8,0,0,1,1.139,0l.17.17a.8.8,0,0,1,.008,1.137S234.052,1493.49,234.047,1493.489Z"
        transform="translate(-216.156 -1488.176)"
      />
    </Svg>
  ),
  Lupa: (
    <Svg viewBox="0 0 20.268 20.268">
      <G id="Grupo_41" data-name="Grupo 41">
        <G id="Grupo_35" data-name="Grupo 35">
          <Path
            id="Trazado_6"
            data-name="Trazado 6"
            d="M73.314,1487a8.926,8.926,0,1,0,8.926,8.926A8.936,8.936,0,0,0,73.314,1487Zm0,16.2a7.278,7.278,0,1,1,7.278-7.278A7.286,7.286,0,0,1,73.314,1503.2Z"
            transform="translate(-64.388 -1487)"
          />
        </G>
      </G>
      <G
        id="Grupo_42"
        data-name="Grupo 42"
        transform="translate(13.896 13.897)">
        <G id="Grupo_37" data-name="Grupo 37">
          <Path
            id="Trazado_7"
            data-name="Trazado 7"
            d="M103.429,1524.875l-4.724-4.724a.824.824,0,0,0-1.165,1.165l4.724,4.724a.824.824,0,1,0,1.165-1.165Z"
            transform="translate(-97.298 -1519.911)"
          />
        </G>
      </G>
    </Svg>
  ),
  Ver: (
    <Svg viewBox="0 0 21.85 13.926">
      <G id="Grupo_330" data-name="Grupo 330" transform="translate(0 0)">
        <G id="Grupo_329" data-name="Grupo 329" transform="translate(0 0)">
          <Path
            id="Trazado_4545"
            data-name="Trazado 4545"
            d="M21.711,99.373c-.2-.267-4.846-6.538-10.786-6.538S.334,99.106.139,99.373a.721.721,0,0,0,0,.85c.195.267,4.846,6.538,10.786,6.538s10.591-6.271,10.786-6.538A.72.72,0,0,0,21.711,99.373Zm-10.786,5.948c-4.376,0-8.165-4.162-9.287-5.523,1.12-1.362,4.9-5.522,9.287-5.522s8.165,4.162,9.287,5.523C19.092,101.161,15.31,105.321,10.925,105.321Z"
            transform="translate(0 -92.835)"
            fill="#99bfc7"
          />
        </G>
      </G>
      <G
        id="Grupo_332"
        data-name="Grupo 332"
        transform="translate(6.603 2.641)">
        <G id="Grupo_331" data-name="Grupo 331" transform="translate(0 0)">
          <Path
            id="Trazado_4546"
            data-name="Trazado 4546"
            d="M159.044,154.725a4.322,4.322,0,1,0,4.322,4.322A4.327,4.327,0,0,0,159.044,154.725Zm0,7.2a2.881,2.881,0,1,1,2.881-2.881A2.885,2.885,0,0,1,159.044,161.928Z"
            transform="translate(-154.722 -154.725)"
            fill="#99bfc7"
          />
        </G>
      </G>
    </Svg>
  ),
  Humano: (
    <Svg viewBox="0 0 15.157 15.154">
      <Path
        id="Trazado_4670"
        data-name="Trazado 4670"
        d="M1720.161-1155.966c.039-.272.069-.546.12-.816a7.5,7.5,0,0,1,3.207-4.929,7.156,7.156,0,0,1,1.942-.949c.041-.013.079-.032.132-.054a4.006,4.006,0,0,1-1.842-3.515,3.874,3.874,0,0,1,1.272-2.817,4.017,4.017,0,0,1,5.8.292,4.036,4.036,0,0,1-.856,6.042c.115.041.219.076.321.115a7.542,7.542,0,0,1,4.93,5.617,6.221,6.221,0,0,1,.129,1.645c-.006.177-.139.26-.266.347h-14.62l-.266-.326Zm14.168.04a6.58,6.58,0,0,0-7.01-6.13,6.564,6.564,0,0,0-6.143,6.13Zm-9.66-10.2a3.1,3.1,0,0,0,2.945,3.1,3.09,3.09,0,0,0,3.212-3.037,3.083,3.083,0,0,0-3.04-3.123A3.081,3.081,0,0,0,1724.669-1166.128Z"
        transform="translate(-1720.161 1170.143)"
        fill="#99bfc7"
      />
    </Svg>
  ),
  Cerrar: (
    <Svg viewBox="0 0 14.798 15.416">
      <G
        id="Grupo_342"
        data-name="Grupo 342"
        transform="translate(-356.202 -20)">
        <G id="ARRO" transform="translate(364 35.416) rotate(180)">
          <G id="Grupo_111" data-name="Grupo 111">
            <Path
              id="Trazado_77"
              data-name="Trazado 77"
              d="M70.02,131.142l6.242,6.255a.6.6,0,0,0,.853-.851l-6.242-6.255a.6.6,0,0,1,0-.852l6.242-6.255a.6.6,0,0,0-.853-.851l-6.241,6.254A1.809,1.809,0,0,0,70.02,131.142Z"
              transform="translate(-69.492 -122.157)"
            />
          </G>
        </G>
      </G>
      <G
        id="Grupo_343"
        data-name="Grupo 343"
        transform="translate(371 35.416) rotate(180)">
        <G
          id="ARRO-2"
          data-name="ARRO"
          transform="translate(364 35.416) rotate(180)">
          <G id="Grupo_111-2" data-name="Grupo 111">
            <Path
              id="Trazado_77-2"
              data-name="Trazado 77"
              d="M70.02,131.142l6.242,6.255a.6.6,0,0,0,.853-.851l-6.242-6.255a.6.6,0,0,1,0-.852l6.242-6.255a.6.6,0,0,0-.853-.851l-6.241,6.254A1.809,1.809,0,0,0,70.02,131.142Z"
              transform="translate(-69.492 -122.157)"
            />
          </G>
        </G>
      </G>
    </Svg>
  ),
  Atras: (
    <Svg viewBox="0 0 7.798 15.416">
      <Path
        id="Trazado_77"
        data-name="Trazado 77"
        d="M70.02,131.142l6.242,6.255a.6.6,0,0,0,.853-.851l-6.242-6.255a.6.6,0,0,1,0-.852l6.242-6.255a.6.6,0,0,0-.853-.851l-6.241,6.254A1.809,1.809,0,0,0,70.02,131.142Z"
        transform="translate(-69.492 -122.157)"
      />
    </Svg>
  ),
  Mail: (
    <Svg>
      <Path
        id="Trazado_4668"
        data-name="Trazado 4668"
        d="M337.039-1044.294v-10.1a.136.136,0,0,0,.024-.04,1.49,1.49,0,0,1,1.519-1.188c1.452.018,2.9.005,4.356.005q4.541,0,9.082,0a1.437,1.437,0,0,1,1.482,1.432q.007,4.839,0,9.677a1.46,1.46,0,0,1-.148.615,1.4,1.4,0,0,1-1.362.818H340.141c-.552,0-1.1,0-1.656,0a1.331,1.331,0,0,1-1.123-.552A4.145,4.145,0,0,1,337.039-1044.294Zm1.665-10.347,6.577,6.518,6.52-6.518Zm.03,10.59h13.059l-4.579-4.579c-.026.025-.066.06-.1.1q-.705.7-1.41,1.409a.5.5,0,0,1-.8,0q-.72-.712-1.438-1.427c-.041-.041-.084-.079-.119-.112Zm3.891-5.334-4.611-4.572v9.184Zm9.909-4.531-4.564,4.563,4.564,4.563Z"
        transform="translate(-337.039 1055.619)"
        fill="#99bfc7"
      />
    </Svg>
  ),
  DesplegableDerecha: (
    <Svg viewBox="0 0 8 13">
      <Path d="M0.683847 1.44897L1.31641 0.816406L7.31641 6.81641L1.31641 12.8164L0.683847 12.1838L6.05129 6.81641L0.683847 1.44897Z" />
    </Svg>
  ),
  Search: (
    <Svg viewBox="0 0 24.095 24.095">
      <Path
        class="a"
        d="M79.466,225.468a10.611,10.611,0,1,0,10.611,10.611A10.623,10.623,0,0,0,79.466,225.468Zm0,19.263a8.652,8.652,0,1,1,8.652-8.652A8.662,8.662,0,0,1,79.466,244.731Z"
        transform="translate(-68.855 -225.468)"
      />
      <G transform="translate(16.521 16.52)">
        <Path
          class="a"
          d="M107.041,262.268l-5.616-5.616a.98.98,0,1,0-1.385,1.385l5.616,5.616a.98.98,0,0,0,1.385-1.385Z"
          transform="translate(-99.754 -256.366)"
        />
      </G>
    </Svg>
  ),
  Mapa: (
    <Svg viewBox="0 0 20.959 20.96">
      <G id="Grupo_169" data-name="Grupo 169" transform="translate(0 5.24)">
        <G id="Grupo_168" data-name="Grupo 168">
          <Path
            id="Trazado_78"
            data-name="Trazado 78"
            d="M87.91,780.086a.656.656,0,0,0-.655.655v7.417l-5.239,2.1v-6.893a.655.655,0,0,0-1.31,0v6.891l-5.24-2.1V777.779l3.035,1.215a.655.655,0,0,0,.486-1.217l-3.921-1.569h0l-.01,0a.648.648,0,0,0-.486,0l-.012,0h0l-6.538,2.616a.655.655,0,0,0-.411.608V791.22a.655.655,0,0,0,.9.608l6.306-2.522,6.294,2.518h0l.011.005a.649.649,0,0,0,.486,0l.012-.005h0l6.538-2.615a.659.659,0,0,0,.41-.609v-7.86A.656.656,0,0,0,87.91,780.086Zm-13.754,8.071-5.239,2.1V779.874l5.239-2.1Z"
            transform="translate(-67.607 -776.156)"
          />
        </G>
      </G>
      <G
        id="Grupo_171"
        data-name="Grupo 171"
        transform="translate(14.409 2.62)">
        <G id="Grupo_170" data-name="Grupo 170">
          <Path
            id="Trazado_79"
            data-name="Trazado 79"
            d="M97.249,771.124a1.965,1.965,0,1,0,1.965,1.965A1.967,1.967,0,0,0,97.249,771.124Zm0,2.62a.655.655,0,1,1,.655-.655A.655.655,0,0,1,97.249,773.744Z"
            transform="translate(-95.284 -771.124)"
          />
        </G>
      </G>
      <G id="Grupo_173" data-name="Grupo 173" transform="translate(11.789)">
        <G id="Grupo_172" data-name="Grupo 172">
          <Path
            id="Trazado_80"
            data-name="Trazado 80"
            d="M94.837,766.092a4.589,4.589,0,0,0-4.585,4.585c0,2.353,3.678,6.52,4.1,6.987a.654.654,0,0,0,.975,0c.419-.467,4.1-4.634,4.1-6.987A4.59,4.59,0,0,0,94.837,766.092Zm0,10.135c-1.43-1.7-3.275-4.3-3.275-5.55a3.275,3.275,0,1,1,6.549,0C98.111,771.925,96.267,774.53,94.837,776.227Z"
            transform="translate(-90.252 -766.092)"
          />
        </G>
      </G>
    </Svg>
  ),
  Telef: (
    <Svg viewBox="0 0 23.805 23.895">
      <Path
        id="Trazado_81"
        data-name="Trazado 81"
        d="M175.713,778.515a25.347,25.347,0,0,0,8.432,6.605,13.112,13.112,0,0,0,4.718,1.4c.114.005.223.01.337.01a3.909,3.909,0,0,0,3.03-1.3.136.136,0,0,0,.02-.025,12.863,12.863,0,0,1,.955-.99c.233-.223.471-.456.7-.693a2.39,2.39,0,0,0-.01-3.56l-2.976-2.976a2.409,2.409,0,0,0-1.742-.8,2.49,2.49,0,0,0-1.763.8l-1.773,1.773c-.163-.094-.332-.178-.49-.258a6.1,6.1,0,0,1-.545-.3,18.774,18.774,0,0,1-4.481-4.08,10.8,10.8,0,0,1-1.515-2.416c.465-.421.9-.862,1.322-1.292.148-.154.3-.307.456-.461a2.344,2.344,0,0,0,0-3.565l-1.475-1.475c-.173-.173-.337-.341-.5-.515-.327-.337-.668-.683-1.005-1a2.469,2.469,0,0,0-1.743-.762,2.541,2.541,0,0,0-1.762.767l-1.852,1.852a3.8,3.8,0,0,0-1.134,2.436,9.156,9.156,0,0,0,.688,3.961A23.047,23.047,0,0,0,175.713,778.515Zm-3.595-10.725a2.619,2.619,0,0,1,.787-1.684l1.842-1.842a1.335,1.335,0,0,1,.911-.421,1.265,1.265,0,0,1,.891.431c.332.307.644.629.98.97.169.173.342.347.515.525l1.475,1.475a1.154,1.154,0,0,1,0,1.852c-.154.154-.307.312-.461.465-.46.465-.891.906-1.367,1.327l-.024.025a.968.968,0,0,0-.248,1.1c.005.015.01.024.015.039a11.65,11.65,0,0,0,1.738,2.827,19.805,19.805,0,0,0,4.773,4.348,7.1,7.1,0,0,0,.654.356,6.2,6.2,0,0,1,.545.3l.054.03a1.035,1.035,0,0,0,.481.124,1.05,1.05,0,0,0,.738-.337l1.852-1.852a1.31,1.31,0,0,1,.906-.44,1.245,1.245,0,0,1,.876.44l2.986,2.981a1.194,1.194,0,0,1-.015,1.866c-.208.223-.426.436-.659.659a14.178,14.178,0,0,0-1.034,1.075,2.719,2.719,0,0,1-2.124.9c-.084,0-.173-.005-.258-.01a11.924,11.924,0,0,1-4.268-1.278,24.081,24.081,0,0,1-8.026-6.288,22.049,22.049,0,0,1-3.911-6.511A7.986,7.986,0,0,1,172.118,767.79Z"
        transform="translate(-170.889 -762.631)"
      />
    </Svg>
  ),
  Compartir: (
    <Svg viewBox="0 0 19.535 19.535">
      <G id="Grupo_176" data-name="Grupo 176" transform="translate(7.104)">
        <G id="Grupo_175" data-name="Grupo 175">
          <Path
            id="Trazado_82"
            data-name="Trazado 82"
            d="M311.945,768.342h-7.1a.888.888,0,0,0,0,1.776h4.96l-9.139,9.14a.888.888,0,1,0,1.256,1.256l9.14-9.14v4.96a.888.888,0,0,0,1.776,0v-7.1A.888.888,0,0,0,311.945,768.342Z"
            transform="translate(-300.401 -768.342)"
          />
        </G>
      </G>
      <G id="Grupo_178" data-name="Grupo 178" transform="translate(0 3.552)">
        <G id="Grupo_177" data-name="Grupo 177">
          <Path
            id="Trazado_83"
            data-name="Trazado 83"
            d="M301.852,780.492a.888.888,0,0,0-.888.888v7.991H288.532V776.94h7.992a.888.888,0,1,0,0-1.776h-8.88a.888.888,0,0,0-.888.888V790.26a.888.888,0,0,0,.888.888h14.207a.888.888,0,0,0,.888-.888v-8.88A.888.888,0,0,0,301.852,780.492Z"
            transform="translate(-286.756 -775.164)"
          />
        </G>
      </G>
    </Svg>
  ),
  Nieve: (
    <Svg viewBox="0 0 23.412 22.94">
      <Path
        id="Trazado_121"
        data-name="Trazado 121"
        d="M790.1,24.467l-6.265,8.2v.131l9.958-1.312v4.457l-9.958-1.18v.131l6.331,7.865-4.154,2.361-3.958-9.177h-.132l-4.286,9.241-3.759-2.359,6.265-8v-.131l-9.76,1.246V31.482l9.694,1.246V32.6l-6.2-8L777.9,22.3l4.09,9.111h.132l4.022-9.177Z"
        transform="translate(-770.382 -22.239)"
      />
    </Svg>
  ),
};
