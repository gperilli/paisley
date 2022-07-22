export  { PaisleyBlocksSSize_Flower }
import { paisleyUtils } from '/jsm/paisleyDesignThree.js'

// flower
class PaisleyBlocksSSize_Flower {
    constructor(className, fadeIn, coloring) {
        this.className = className
        this.initialOpacity = 0
        this.coloring = coloring
        this.init(fadeIn)
    }

    generateColor() {
        if (this.coloring == "colors") {
            return paisleyUtils.rgbToHex(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
        }
        else if (this.coloring == "greys") {
            let random_num = Math.floor(Math.random() * 100) + 100 // between 100 and 200
            return paisleyUtils.rgbToHex(random_num, random_num, random_num)
        }
        else if (this.coloring == "monochrome") {

        } 
    }

    init(fadeIn) {
        if (fadeIn == "appearOnLoad") {
            this.initialOpacity = 1
        }
        else if (fadeIn == "fadeIn") {
            this.initialOpacity = 0
        }
        else if(fadeIn == "randomElement") {
            this.initialOpacity = 0
        }
        this.generateColor()
    }


    vectorCode() { 
        return `
            <svg width="100%" height="100%" style="position: relative;"  viewBox="0 0 500 500">
                <path class="${this.className}" style="opacity: ${this.initialOpacity}"
                    d="m 242.6028,275.59489 c -13.18375,-4.76105 -25.09385,-15.04794 -30.31495,-26.18339 -6.19617,-13.21506 -2.15865,-28.14195 9.8068,-36.2562 14.68173,-9.95628 32.64763,-7.30998 48.08829,7.08319 10.94314,10.20076 16.24005,20.89123 16.08775,32.46909 -0.0952,7.23546 -2.43304,12.56051 -7.53047,17.15253 -6.15376,5.54362 -11.04472,7.32022 -21.15132,7.68302 -7.46208,0.26787 -9.62988,-0.014 -14.9861,-1.94824 z m 26.52098,-6.5141 c 3.81234,-1.8652 5.89945,-3.65391 7.91456,-6.78298 2.56583,-3.98424 2.71458,-4.70874 2.38085,-11.59631 -0.30092,-6.21043 -0.84268,-8.25965 -3.50315,-13.2508 -6.17106,-11.57715 -18.86025,-21.542 -30.43544,-23.90102 -7.84457,-1.59872 -14.18355,-0.0206 -21.61504,5.38129 -5.76666,4.19171 -7.8634,8.97071 -7.45801,16.99864 0.42039,8.32489 3.83662,15.35327 10.998,22.6267 12.70835,12.90718 28.63557,16.92523 41.71823,10.52448 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};"
                    d="m 202.94883,473.374 c -11.59831,-2.32801 -22.08358,-9.29497 -28.61817,-19.01538 -7.56053,-11.24654 -10.66888,-23.36263 -10.66558,-41.57356 0.004,-19.98383 4.75371,-42.36695 13.09891,-61.7238 1.99829,-4.63507 3.47439,-8.58626 3.28023,-8.78042 -0.19416,-0.19416 -3.38493,2.21937 -7.09061,5.3634 -16.12759,13.68321 -45.60435,30.22923 -66.42843,37.28789 -9.286865,3.14792 -10.953222,3.42783 -20.662214,3.47075 -9.750477,0.0431 -10.999911,-0.15619 -16.285782,-2.59763 -6.379065,-2.94639 -12.984305,-9.31476 -15.494054,-14.93843 -2.693841,-6.03618 -2.116291,-16.64296 1.429051,-26.24471 6.25664,-16.94469 22.19947,-36.24084 39.278211,-47.53978 7.387728,-4.88756 28.199108,-15.6171 30.291458,-15.6171 0.65298,0 1.18722,-0.45745 1.18722,-1.01657 0,-0.60322 -0.65346,-0.75265 -1.60706,-0.36749 -3.17735,1.2833 -37.207033,1.65953 -46.997995,0.5196 -34.237648,-3.98615 -53.457158,-16.72545 -57.033535,-37.80363 -0.828579,-4.88341 -0.75588,-7.6534 0.372472,-14.19195 4.308165,-24.96487 21.821951,-38.72519 54.454435,-42.78404 16.326935,-2.03075 45.596923,0.76599 64.097423,6.1245 4.05261,1.1738 7.50561,1.99693 7.67336,1.82919 0.16775,-0.16775 -2.10327,-2.08276 -5.04671,-4.25558 C 127.1747,178.44143 111.74112,161.32441 97.050662,139.46577 84.708769,121.10167 79.409813,108.49334 78.73027,95.874241 78.213385,86.275712 79.846939,79.984519 84.486392,73.706084 94.806813,59.739766 113.99997,59.013144 139.12555,71.637532 c 21.87623,10.991741 41.52525,32.083228 55.04744,59.088588 2.11263,4.21914 4.04041,7.47189 4.28398,7.22832 0.24356,-0.24357 -0.77551,-4.544 -2.26462,-9.55651 -12.81175,-43.125996 -10.64219,-75.95974 6.13751,-92.883923 9.12247,-9.20101 19.00847,-13.152032 32.78942,-13.104568 22.76916,0.07842 41.29864,15.958582 49.9303,42.791316 5.39302,16.764967 6.052,21.84787 6.01235,46.375185 -0.0311,19.24815 -0.31539,23.82567 -1.96751,31.68206 -1.06212,5.05076 -1.82727,9.29496 -1.70031,9.43156 0.12695,0.1366 2.80603,-4.40908 5.95352,-10.10152 19.07285,-34.49451 38.87601,-54.198292 57.95179,-57.660966 19.27801,-3.499385 41.80486,14.588502 43.72077,35.105496 1.18088,12.64572 -6.2542,32.49779 -17.98468,48.02008 -6.47097,8.56267 -19.54635,22.05532 -26.49101,27.33638 -2.66504,2.02662 -4.64653,3.88377 -4.40332,4.12698 0.2432,0.24321 3.66342,-0.42144 7.60048,-1.47698 24.18062,-6.48297 65.54761,-7.38866 88.3811,-1.93503 21.14011,5.04918 34.04026,17.53849 34.01744,32.93406 -0.0305,20.56899 -27.14548,41.57919 -61.97766,48.02371 -14.90552,2.75778 -47.87945,1.05023 -64.51201,-3.34073 -6.59018,-1.73978 -6.07172,-0.53031 0.91832,2.14225 17.99923,6.8818 37.07637,16.85592 53.49217,27.96734 10.8738,7.3602 25.74858,22.2329 29.62753,29.62339 8.21193,15.64603 6.99485,29.77719 -3.54988,41.21688 -16.88146,18.31422 -45.75747,16.00165 -79.31872,-6.35234 -5.56767,-3.70844 -12.16698,-8.43223 -14.66513,-10.4973 -2.49815,-2.06508 -4.67181,-3.62497 -4.83036,-3.46641 -0.15855,0.15854 2.57894,6.24174 6.08331,13.51821 12.01254,24.9428 17.04101,43.15522 16.44132,59.54819 -0.41517,11.34895 -2.75476,17.66829 -8.76725,23.68078 -13.96723,13.96723 -34.29634,9.88328 -55.88342,-11.22651 -12.406,-12.13171 -21.88646,-27.87576 -28.47834,-47.29351 l -1.71462,-5.05076 -0.67903,11.93817 c -1.54644,27.18826 -5.27779,41.94923 -14.06111,55.62483 -6.25441,9.73808 -14.59089,15.4682 -26.03198,17.8932 -6.7005,1.4202 -9.75052,1.49733 -15.28451,0.38655 z m 22.22093,-9.21796 c 12.27152,-5.96736 20.61443,-21.00302 24.58978,-44.31589 3.14389,-18.43691 2.64726,-46.57726 -1.22412,-69.36089 l -1.61463,-9.50239 2.00357,-0.76175 c 1.10197,-0.41897 2.26484,-1.80271 2.58416,-3.07499 0.53338,-2.12519 0.80413,-2.2353 3.33048,-1.35462 2.70986,0.94466 2.7499,1.05459 2.7499,7.54981 0,7.95312 3.61015,29.14894 6.90197,40.52265 6.27584,21.68391 14.71205,36.76631 27.99421,50.04846 17.84274,17.84274 31.85353,23.01491 43.63751,16.10903 4.6827,-2.74425 9.0625,-8.78595 10.66907,-14.71742 1.4512,-5.35788 0.42946,-21.63617 -1.89136,-30.13312 -2.53971,-9.29831 -9.10775,-26.02771 -15.22688,-38.78424 -7.44332,-15.51706 -14.91772,-26.04301 -27.22385,-38.33838 -10.52389,-10.51468 -10.77993,-10.86545 -9.13327,-12.51212 0.93179,-0.93178 2.21832,-1.86887 2.85896,-2.08242 0.93114,-0.31038 0.9371,-0.81371 0.0298,-2.50918 -1.37317,-2.56579 -0.24436,-4.04908 2.7462,-3.60854 1.44479,0.21282 2.9205,1.8604 4.79918,5.35809 11.8243,22.01428 39.63235,46.6169 68.03193,60.18989 13.09123,6.25668 19.99578,8.10036 30.44209,8.12877 10.34486,0.0281 15.92503,-2.18577 22.07137,-8.7567 6.1325,-6.55614 8.20862,-11.6579 8.19628,-20.14125 -0.008,-5.95613 -0.42976,-7.80174 -2.93342,-12.85649 -8.17815,-16.51117 -27.56796,-32.06547 -59.47544,-47.7106 -9.09138,-4.45775 -21.6122,-9.85094 -27.82406,-11.98486 -6.56099,-2.25386 -11.13587,-4.30263 -10.91628,-4.88863 1.79664,-4.79468 1.72681,-5.04203 -1.84416,-6.53211 -1.92219,-0.80209 -4.46373,-2.0921 -5.64788,-2.8667 l -2.15299,-1.40836 2.04041,-2.17193 2.04043,-2.17193 5.26155,2.65603 c 15.46069,7.80453 56.1467,12.27784 79.90824,8.78568 20.27557,-2.97984 37.92904,-10.98742 49.72629,-22.55574 6.07057,-5.95277 7.24116,-7.62918 8.60631,-12.32512 1.34161,-4.615 1.41503,-6.17263 0.48652,-10.32165 -3.00872,-13.44436 -15.95615,-22.4751 -36.7076,-25.60328 -10.22864,-1.54192 -40.15202,-1.7669 -53.33446,-0.40099 -18.65207,1.93262 -34.35711,6.30169 -48.93567,13.61364 l -8.98872,4.50835 -1.36597,-2.64148 c -1.54174,-2.9814 -5.68173,-3.91886 -4.56814,-1.03441 3.6457,9.44321 4.58214,27.27168 2.00113,38.09864 -5.31673,22.30293 -19.52479,42.87107 -37.97217,54.96996 -9.07609,5.95265 -15.36064,8.75869 -24.60288,10.98516 -30.26998,7.29209 -61.65224,-8.73729 -76.15968,-38.90072 -3.15997,-6.57011 -4.08544,-7.87328 -4.33511,-6.10429 -0.29313,2.07704 -0.81174,2.29334 -6.77747,2.82676 -12.80656,1.14508 -34.29433,7.73307 -50.90922,15.60837 -24.052456,11.40064 -45.117883,30.66659 -54.596919,49.93308 -6.173977,12.54884 -6.167181,23.04909 0.02017,31.1524 10.559878,13.82986 30.812982,13.69085 59.601759,-0.40907 12.91927,-6.32749 30.89574,-16.96968 39.51702,-23.39433 9.03457,-6.73264 22.46757,-20.14783 27.97953,-27.94243 7.28739,-10.30529 7.47346,-10.46975 9.90176,-8.75208 l 2.09603,1.48264 -1.86645,3.01999 c -1.99701,3.23123 -2.46169,7.37769 -0.93269,8.32267 0.52958,0.32729 -0.87247,2.63643 -3.23897,5.33454 -11.81935,13.47551 -22.03837,43.07633 -24.23495,70.20002 -2.1244,26.23217 2.91438,46.45258 14.2463,57.16983 10.6718,10.09295 26.6147,12.65434 39.56555,6.35664 z m 31.34345,-153.31171 c 26.95052,-7.51227 48.91566,-31.54485 54.72375,-59.87454 4.55025,-22.19445 -0.66516,-41.62525 -14.99525,-55.86711 -14.23122,-14.14358 -34.45054,-20.38251 -56.60263,-17.46548 -31.26892,4.11755 -52.24675,21.21575 -59.78546,48.7288 -1.22847,4.4834 -1.61828,9.16902 -1.56615,18.82557 0.0604,11.19321 0.38982,13.92132 2.54604,21.08718 6.0146,19.98859 17.1164,33.84217 33.31777,41.57622 12.37531,5.90759 27.94981,7.00664 42.36193,2.98936 z M 110.70364,274.99812 c 18.07421,-1.40069 42.62913,-5.63045 50.72789,-8.73824 0.82881,-0.31804 1.51485,0.2008 1.82286,1.3786 0.43024,1.64525 1.21488,1.88859 6.08977,1.88859 3.07774,0 5.59589,-0.18099 5.59589,-0.40218 0,-0.2212 -0.69395,-3.21722 -1.54211,-6.65783 -1.06243,-4.30978 -1.52743,-9.9691 -1.49488,-18.19381 0.0458,-11.58896 0.38318,-13.677 4.48989,-27.79284 0.46409,-1.5952 0.29067,-1.95922 -0.74416,-1.56211 -0.75519,0.2898 -4.13961,-1.37 -7.68682,-3.76978 -15.02502,-10.16484 -36.40249,-16.58001 -62.59777,-18.785 -37.351268,-3.14403 -66.227113,6.97909 -75.332337,26.40958 -2.246474,4.79396 -2.482248,6.3002 -2.482248,15.85779 0,9.70632 0.207916,10.98407 2.570046,15.79426 9.668662,19.68905 36.809694,27.96533 80.583979,24.57297 z m 72.04214,-70.31886 c 4.64007,-7.5918 14.86962,-17.4006 23.25343,-22.29701 8.70708,-5.08522 23.36042,-9.82677 34.32257,-11.10618 9.08425,-1.06024 22.06622,-0.25313 29.19922,1.81536 1.76444,0.51167 3.30113,0.9303 3.41488,0.9303 0.11375,0 -0.0169,-0.58307 -0.29039,-1.29573 -0.27348,-0.71265 0.94676,-4.12192 2.71162,-7.57614 7.45074,-14.5827 10.25652,-31.22939 9.49416,-56.32888 -0.56168,-18.492429 -2.08765,-27.807627 -6.79032,-41.450979 -5.73123,-16.627408 -15.55575,-29.479286 -26.7468,-34.98862 -5.84558,-2.877775 -6.51647,-2.995125 -17.12311,-2.995125 -10.44254,0 -11.36177,0.153587 -17.00824,2.841788 -10.78182,5.133057 -17.73811,14.682368 -20.67448,28.381109 -1.81674,8.475408 -1.80492,29.233929 0.0231,40.699037 2.77517,17.40478 9.4323,39.81702 17.03027,57.33501 1.99156,4.59179 3.62102,8.83096 3.62102,9.42041 0,0.58944 -1.02996,1.54099 -2.2888,2.11457 -2.13203,0.97141 -2.41638,0.79279 -4.15111,-2.60757 -1.02422,-2.00772 -1.99982,-3.6504 -2.16795,-3.6504 -0.16813,0 -0.10425,2.09654 0.14197,4.65898 l 0.44768,4.65899 -3.10786,-0.29697 c -2.98595,-0.28531 -3.13069,-0.47705 -3.69008,-4.88856 -1.1955,-9.42814 -13.43765,-35.85272 -23.84697,-51.47349 -8.21915,-12.3341 -23.02463,-27.527125 -33.34992,-34.222895 -21.77679,-14.121863 -44.91509,-16.86835 -54.378142,-6.454613 -3.661604,4.029461 -5.227583,8.396035 -5.666594,15.800723 -0.785501,13.248855 3.37036,24.463045 15.872946,42.831575 21.27296,31.2538 39.1525,48.83641 61.08565,60.0712 4.79822,2.4578 8.89448,4.61566 9.10279,4.79525 0.20832,0.1796 -0.0886,1.35238 -0.65991,2.60617 -0.9593,2.10543 -0.715,2.52677 3.197,5.51381 2.32963,1.77879 4.48618,3.21948 4.79236,3.20153 0.30618,-0.018 2.20966,-2.73715 4.22997,-6.04265 z m 132.42136,4.84412 c -0.78189,-2.03758 0.43835,-2.90995 7.07985,-5.06153 22.11092,-7.16302 51.03305,-35.10023 61.67072,-59.57053 7.96554,-18.32349 5.76837,-33.89214 -6.34562,-44.963649 -17.47011,-15.966695 -40.52858,-9.09262 -61.37937,18.298109 -10.2794,13.50358 -23.00784,36.14444 -27.2377,48.44939 -1.71982,5.00305 -1.76846,5.04813 -5.14831,4.77193 -3.42162,-0.2796 -6.01819,0.98034 -6.01082,2.91665 0.002,0.56951 2.99819,2.57522 6.65782,4.45715 11.52751,5.92791 20.39596,14.53642 26.98508,26.19415 2.94973,5.21877 4.91107,7.59042 3.72835,4.50833 z"      
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};"
                    d="m 239.37247,145.96539 c -12.28226,-13.95338 -20.55902,-57.030957 -14.37094,-74.795552 5.16417,-14.825178 20.28565,-15.90005 29.5935,-2.10358 5.95076,8.820441 7.09089,13.699601 7.0365,30.112355 -0.0743,22.434287 -4.68172,42.799817 -11.00949,48.664197 -3.84109,3.5598 -6.91512,3.04678 -11.24957,-1.87742 z m 8.63539,-4.50874 c 4.15597,-6.34283 8.1477,-30.7551 7.51363,-45.951319 -0.56428,-13.523846 -2.72799,-20.120903 -8.50866,-25.942554 -3.25814,-3.281227 -4.45421,-3.902862 -7.50943,-3.902862 -4.04442,0 -6.7502,2.175118 -8.56771,6.887404 -1.70578,4.422607 -2.1935,19.793695 -0.92461,29.140411 2.37425,17.48882 11.53265,42.02943 15.68513,42.02943 0.45678,0 1.49702,-1.01723 2.31165,-2.26051 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};"
                    d="m 313.8635,179.54308 c -6.67751,-2.78477 -1.8382,-20.56922 9.76645,-35.89171 5.70762,-7.5362 16.62934,-17.98176 22.23685,-21.26738 6.80261,-3.98587 11.68383,-4.96591 15.56362,-3.12483 7.67398,3.64155 8.87771,12.57614 3.23308,23.99727 -8.98622,18.18239 -40.40217,40.62293 -50.8,36.28665 z m 11.22196,-6.7606 c 5.24363,-2.44347 21.17239,-14.85132 27.37387,-21.32313 8.09329,-8.44608 11.92904,-19.53601 8.54395,-24.7023 -2.72299,-4.15582 -9.05223,-2.20603 -18.58136,5.72419 -7.36022,6.12524 -14.04251,15.07629 -19.69977,26.38821 -5.33438,10.66628 -6.66656,16.07571 -3.95551,16.06163 0.94997,-0.005 3.79343,-0.9718 6.31882,-2.1486 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 343.92324,254.27754 c -2.7712,-0.74462 -6.00456,-1.98681 -7.18524,-2.76042 -1.9697,-1.2906 -2.03549,-1.5715 -0.79789,-3.4069 1.56367,-2.31899 2.64503,-2.33491 10.72588,-0.1579 5.18085,1.39574 8.81885,1.54187 27.54961,1.10658 28.35345,-0.6589 36.88719,-2.44061 43.84981,-9.15514 5.34808,-5.15753 4.03283,-7.09617 -6.75701,-9.9596 -11.99874,-3.18426 -31.0738,-3.38066 -50.53848,-0.52034 -11.55856,1.69853 -16.77603,2.88071 -19.63482,4.44888 -11.59586,6.36084 -10.99888,6.18576 -10.99888,3.2258 0,-5.67096 11.1693,-11.15934 27.54961,-13.53735 3.78807,-0.54993 9.36687,-1.38044 12.39733,-1.84557 9.20692,-1.41312 28.60139,-1.14323 36.73282,0.51117 9.43883,1.9204 18.48107,6.0517 19.85752,9.07268 3.26735,7.17105 -7.94505,17.40054 -23.17806,21.14622 -13.78109,3.38866 -49.67108,4.4923 -59.5722,1.83189 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 377.88888,357.39495 c -12.99629,-5.36222 -34.76419,-24.40709 -43.6354,-38.17688 -11.5082,-17.8629 -3.03856,-22.53183 21.59571,-11.90474 21.01752,9.06685 35.90206,19.51744 43.05539,30.22964 3.20785,4.80379 3.77896,6.37564 3.77896,10.40081 0,8.13464 -4.17802,11.59375 -13.95879,11.5569 -3.87647,-0.0146 -7.45147,-0.70933 -10.83587,-2.10573 z m 17.90808,-5.81021 c 5.23586,-5.23586 -11.92547,-23.05741 -32.35922,-33.60413 -14.9871,-7.73547 -27.7916,-11.84943 -27.7916,-8.92918 0,4.30555 9.58425,15.58992 24.69372,29.07407 12.84235,11.46091 19.37712,14.85611 28.73285,14.92842 3.65544,0.0283 5.66612,-0.41106 6.72425,-1.46918 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 305.62185,416.98301 c -10.54337,-4.71382 -24.76882,-26.85796 -32.83859,-51.11842 -3.21129,-9.65421 -5.93054,-23.25861 -4.86243,-24.32672 0.30612,-0.30612 1.76799,-0.29051 3.24859,0.0347 2.56418,0.56319 2.71864,0.87639 3.25273,6.59585 0.90527,9.69431 14.96134,43.1968 22.21787,52.95603 3.62111,4.86998 10.64673,9.82399 13.9321,9.82399 1.98774,0 2.11601,-0.3547 2.11601,-5.85133 0,-9.89912 -3.7865,-22.43963 -11.40399,-37.76889 -8.01477,-16.12872 -13.13576,-24.35568 -16.64954,-26.74774 -3.2678,-2.22462 -7.76097,-6.7325 -7.76097,-7.7864 0,-1.28126 5.32841,-0.96437 8.08091,0.48059 6.58601,3.45741 12.50486,12.03581 22.69831,32.89742 9.37157,19.17958 12.74713,30.04138 12.22235,39.32878 -0.31742,5.61752 -0.6913,6.72178 -3.08539,9.11281 -3.29946,3.29523 -7.23128,4.1294 -11.16796,2.36935 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 201.11219,435.36505 c -8.77857,-3.90166 -13.12981,-17.58208 -10.59331,-33.30571 2.48107,-15.38007 13.57004,-41.45638 20.16185,-47.41169 8.42979,-7.6158 13.82568,-1.99119 16.56981,17.27215 1.98852,13.95914 0.66476,33.62896 -3.12673,46.46014 -4.26815,14.44431 -13.46123,21.22982 -23.01162,16.98511 z m 11.11212,-6.51817 c 5.06992,-5.06992 8.55002,-18.42369 9.27441,-35.58757 0.77015,-18.24824 -2.03968,-36.47322 -5.45076,-35.35448 -1.91315,0.62746 -5.76082,7.01633 -10.26281,17.04092 -10.90365,24.27911 -12.58626,43.87886 -4.58343,53.38969 3.0847,3.66596 7.65597,3.87806 11.02259,0.51144 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 100.84345,349.3657 c -3.494335,-1.05739 -6.715599,-4.8491 -6.715599,-7.90485 0,-6.6999 10.877859,-19.44615 25.659279,-30.06653 16.33253,-11.73485 37.30807,-22.07826 47.13239,-23.2418 4.16613,-0.49342 4.59141,-0.38324 4.04244,1.04735 -0.33743,0.87933 -0.61351,2.39147 -0.61351,3.36031 0,1.44013 -0.66393,1.76154 -3.63883,1.76154 -2.00136,0 -5.82387,0.81786 -8.49447,1.81747 -5.4216,2.02932 -26.66284,13.86132 -35.15476,19.58225 -16.0288,10.79847 -25.821886,23.3747 -21.19318,27.21619 4.27023,3.54397 27.31231,-4.98232 44.30155,-16.39296 9.90054,-6.64958 25.91823,-20.79526 29.41484,-25.97707 3.34041,-4.95033 4.86638,-5.44629 4.86638,-1.58162 0,9.077 -21.78842,28.93172 -45.37715,41.34997 -14.66847,7.7222 -27.42742,11.08802 -34.22938,9.02975 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};" 
                    d="m 86.322127,249.29977 c -15.503923,-2.78046 -28.927096,-11.32784 -28.927096,-18.41972 0,-6.11055 6.560802,-13.11145 15.538582,-16.5809 12.902734,-4.98624 41.611407,-0.25744 62.700787,10.32788 19.55876,9.81707 18.27318,16.70793 -4.31457,23.12658 -5.14251,1.46133 -9.82624,1.88098 -23.41717,2.09815 -9.343913,0.1493 -19.055152,-0.0991 -21.580533,-0.55199 z m 46.375183,-7.76599 c 5.04946,-1.59771 10.10153,-4.55405 10.10153,-5.91116 0,-1.1015 -11.52238,-6.16928 -24.07468,-10.58854 -11.2997,-3.97826 -25.158575,-6.93296 -32.518656,-6.93296 -10.017947,0 -19.026683,4.21754 -21.436697,10.03583 -2.857265,6.89805 4.777723,12.09932 21.589059,14.70737 9.279981,1.43966 40.432004,0.55864 46.339444,-1.31054 z" 
                />
                <path class="${this.className}" style="opacity: ${this.initialOpacity}; fill: ${this.generateColor()};"
                    d="m 175.5607,180.95363 c -6.53543,-2.33065 -13.89444,-8.02437 -25.4192,-19.66702 -22.57629,-22.80723 -34.41796,-45.64895 -28.52045,-55.0139 4.51752,-7.173614 12.46812,-5.38426 26.8471,6.04219 16.33397,12.98001 38.8391,42.93254 41.70662,55.50817 0.54326,2.38252 0.39456,2.52538 -2.62882,2.52538 -3.05725,0 -3.25501,-0.20064 -4.29931,-4.36202 -1.40059,-5.58114 -4.6338,-10.81102 -15.47044,-25.02423 -11.69456,-15.33844 -23.03413,-26.47788 -30.89102,-30.34582 -5.16788,-2.54413 -6.40724,-2.83415 -8.34282,-1.95224 -3.59864,1.63965 -2.99743,5.89064 2.34133,16.555 5.96174,11.90877 13.44895,21.93514 26.08083,34.92567 11.00766,11.3202 16.34235,15.71356 19.08036,15.71356 0.96117,0 3.2137,0.99626 5.00563,2.21391 3.10269,2.10833 3.16893,2.2616 1.38913,3.21412 -2.29889,1.23033 -2.52672,1.21931 -6.87894,-0.33277 z" 
                />
            </svg>
        `
    }

}
