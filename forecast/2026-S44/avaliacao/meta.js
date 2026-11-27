// Gerado pelo 6.publicar_site.py: não edite aqui, edite o texto.md da semana
window.AVALIACAO = {
  "estatisticas": {
    "semana": "2026-S44",
    "regiao": "domínio inteiro (60°W–35°W, 38°S–13°S)",
    "modelo": "MONAN",
    "grade": "0,1° (regrid conservativo do que for mais fino)",
    "fonte_obs": "IMERG",
    "pontos": 62250,
    "total": {
      "bias": 1.842406185921023,
      "rmse": 17.515828992277545,
      "media_prev": 12.703655014991172,
      "media_obs": 10.861248970031738,
      "percentis": [
        {
          "p": 50,
          "prev": 6.874474696963614,
          "obs": 5.125
        },
        {
          "p": 75,
          "prev": 18.420561454945492,
          "obs": 15.289999723434448
        },
        {
          "p": 90,
          "prev": 33.41555776356834,
          "obs": 29.280500411987298
        },
        {
          "p": 95,
          "prev": 44.483799046757994,
          "obs": 40.46550025939937
        },
        {
          "p": 99,
          "prev": 75.35333098082317,
          "obs": 71.02285285949714
        }
      ]
    },
    "contingencia_6h": [
      {
        "limiar": 1,
        "acertos": 60730,
        "alarmes": 69846,
        "perdas": 48978,
        "negativos": 567446,
        "eventos_obs": 109708,
        "csi": 0.33822694008487697,
        "fbias": 1.1902140226783826,
        "gss": 0.25909567641567033,
        "pod": 0.5535603602289715,
        "far": 0.5349068741575788,
        "pouco_confiavel": false
      },
      {
        "limiar": 5,
        "acertos": 13533,
        "alarmes": 31728,
        "perdas": 26736,
        "negativos": 675003,
        "eventos_obs": 40269,
        "csi": 0.1879661652568857,
        "fbias": 1.123966326454593,
        "gss": 0.15948176175365184,
        "pod": 0.33606496312299783,
        "far": 0.7010008616689866,
        "pouco_confiavel": false
      },
      {
        "limiar": 10,
        "acertos": 3263,
        "alarmes": 15836,
        "perdas": 13576,
        "negativos": 714325,
        "eventos_obs": 16839,
        "csi": 0.09986228003060443,
        "fbias": 1.1342122453827423,
        "gss": 0.0878435084660687,
        "pod": 0.19377635251499495,
        "far": 0.8291533588145976,
        "pouco_confiavel": false
      },
      {
        "limiar": 20,
        "acertos": 297,
        "alarmes": 4972,
        "perdas": 4062,
        "negativos": 737669,
        "eventos_obs": 4359,
        "csi": 0.03182938591790805,
        "fbias": 1.208763477861895,
        "gss": 0.028628637259557593,
        "pod": 0.06813489332415691,
        "far": 0.9436325678496869,
        "pouco_confiavel": false
      }
    ],
    "contingencia_total": [
      {
        "limiar": 10,
        "acertos": 16280,
        "alarmes": 9312,
        "perdas": 5747,
        "negativos": 30911,
        "eventos_obs": 22027,
        "csi": 0.5194805194805194,
        "fbias": 1.1618468243519318,
        "gss": 0.32420357013046674,
        "pod": 0.7390929314023699,
        "far": 0.36386370740856516,
        "pouco_confiavel": false
      },
      {
        "limiar": 25,
        "acertos": 3285,
        "alarmes": 7290,
        "perdas": 5020,
        "negativos": 46655,
        "eventos_obs": 8305,
        "csi": 0.21064443731965374,
        "fbias": 1.2733293196869355,
        "gss": 0.1321299142220933,
        "pod": 0.39554485249849486,
        "far": 0.6893617021276596,
        "pouco_confiavel": false
      },
      {
        "limiar": 50,
        "acertos": 113,
        "alarmes": 2167,
        "perdas": 1621,
        "negativos": 58349,
        "eventos_obs": 1734,
        "csi": 0.02896693155601128,
        "fbias": 1.314878892733564,
        "gss": 0.012896357571107919,
        "pod": 0.0651672433679354,
        "far": 0.9504385964912281,
        "pouco_confiavel": false
      },
      {
        "limiar": 75,
        "acertos": 7,
        "alarmes": 632,
        "perdas": 517,
        "negativos": 61094,
        "eventos_obs": 524,
        "csi": 0.006055363321799308,
        "fbias": 1.2194656488549618,
        "gss": 0.0014088985695227237,
        "pod": 0.013358778625954198,
        "far": 0.9890453834115805,
        "pouco_confiavel": false
      },
      {
        "limiar": 100,
        "acertos": 1,
        "alarmes": 148,
        "perdas": 153,
        "negativos": 61948,
        "eventos_obs": 154,
        "csi": 0.0033112582781456954,
        "fbias": 0.9675324675324676,
        "gss": 0.002093248846407067,
        "pod": 0.006493506493506494,
        "far": 0.9932885906040269,
        "pouco_confiavel": false
      }
    ],
    "mode_total": {
      "limiar": 75,
      "raio_pontos": 6,
      "raio_km": 66.6,
      "n_prev": 3,
      "n_obs": 3,
      "pares": [],
      "cts_raw": {
        "csi": 0.0060554,
        "gss": 0.0014089,
        "fbias": 1.21947,
        "pod": 0.013359,
        "far": 0.98905
      }
    },
    "fig_dif": "avaliacao/dif_total.webp",
    "fig_mode": "avaliacao/mode_total.webp",
    "fig_desempenho_total": "avaliacao/desempenho_total.webp"
  },
  "semana": "2026-S44",
  "rodada": "2026-10-30T00:00Z",
  "intervalo": 6,
  "alcance": 72,
  "total": {
    "prev": "previsao/total.webp",
    "obs": "avaliacao/obs_total.webp"
  },
  "janelas": [
    {
      "lead": 6,
      "prev": "previsao/chuva6h_006.webp",
      "obs": "avaliacao/obs_006.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_006.webp",
        "airmass": "avaliacao/sat_airmass_006.webp",
        "simplewv": "avaliacao/sat_simplewv_006.webp",
        "swd": "avaliacao/sat_swd_006.webp",
        "cpd": "avaliacao/sat_cpd_006.webp",
        "wvd": "avaliacao/sat_wvd_006.webp",
        "sod": "avaliacao/sat_sod_006.webp",
        "swvd": "avaliacao/sat_swvd_006.webp"
      }
    },
    {
      "lead": 12,
      "prev": "previsao/chuva6h_012.webp",
      "obs": "avaliacao/obs_012.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_012.webp",
        "airmass": "avaliacao/sat_airmass_012.webp",
        "simplewv": "avaliacao/sat_simplewv_012.webp",
        "true_color": "avaliacao/sat_true_color_012.webp",
        "cpd": "avaliacao/sat_cpd_012.webp",
        "wvd": "avaliacao/sat_wvd_012.webp",
        "sod": "avaliacao/sat_sod_012.webp",
        "swvd": "avaliacao/sat_swvd_012.webp"
      }
    },
    {
      "lead": 18,
      "prev": "previsao/chuva6h_018.webp",
      "obs": "avaliacao/obs_018.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_018.webp",
        "airmass": "avaliacao/sat_airmass_018.webp",
        "simplewv": "avaliacao/sat_simplewv_018.webp",
        "true_color": "avaliacao/sat_true_color_018.webp",
        "swd": "avaliacao/sat_swd_018.webp",
        "cpd": "avaliacao/sat_cpd_018.webp",
        "wvd": "avaliacao/sat_wvd_018.webp",
        "sod": "avaliacao/sat_sod_018.webp",
        "swvd": "avaliacao/sat_swvd_018.webp"
      }
    },
    {
      "lead": 24,
      "prev": "previsao/chuva6h_024.webp",
      "obs": "avaliacao/obs_024.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_024.webp",
        "airmass": "avaliacao/sat_airmass_024.webp",
        "simplewv": "avaliacao/sat_simplewv_024.webp",
        "swd": "avaliacao/sat_swd_024.webp",
        "cpd": "avaliacao/sat_cpd_024.webp",
        "wvd": "avaliacao/sat_wvd_024.webp",
        "sod": "avaliacao/sat_sod_024.webp",
        "swvd": "avaliacao/sat_swvd_024.webp"
      }
    },
    {
      "lead": 30,
      "prev": "previsao/chuva6h_030.webp",
      "obs": "avaliacao/obs_030.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_030.webp",
        "airmass": "avaliacao/sat_airmass_030.webp",
        "simplewv": "avaliacao/sat_simplewv_030.webp",
        "swd": "avaliacao/sat_swd_030.webp",
        "cpd": "avaliacao/sat_cpd_030.webp",
        "wvd": "avaliacao/sat_wvd_030.webp",
        "sod": "avaliacao/sat_sod_030.webp",
        "swvd": "avaliacao/sat_swvd_030.webp"
      }
    },
    {
      "lead": 36,
      "prev": "previsao/chuva6h_036.webp",
      "obs": "avaliacao/obs_036.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_036.webp",
        "airmass": "avaliacao/sat_airmass_036.webp",
        "simplewv": "avaliacao/sat_simplewv_036.webp",
        "true_color": "avaliacao/sat_true_color_036.webp",
        "swd": "avaliacao/sat_swd_036.webp",
        "cpd": "avaliacao/sat_cpd_036.webp",
        "wvd": "avaliacao/sat_wvd_036.webp",
        "sod": "avaliacao/sat_sod_036.webp",
        "swvd": "avaliacao/sat_swvd_036.webp"
      }
    },
    {
      "lead": 42,
      "prev": "previsao/chuva6h_042.webp",
      "obs": "avaliacao/obs_042.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_042.webp",
        "true_color": "avaliacao/sat_true_color_042.webp",
        "swd": "avaliacao/sat_swd_042.webp",
        "cpd": "avaliacao/sat_cpd_042.webp",
        "wvd": "avaliacao/sat_wvd_042.webp",
        "sod": "avaliacao/sat_sod_042.webp"
      }
    },
    {
      "lead": 48,
      "prev": "previsao/chuva6h_048.webp",
      "obs": "avaliacao/obs_048.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_048.webp",
        "airmass": "avaliacao/sat_airmass_048.webp",
        "simplewv": "avaliacao/sat_simplewv_048.webp",
        "swd": "avaliacao/sat_swd_048.webp",
        "cpd": "avaliacao/sat_cpd_048.webp",
        "wvd": "avaliacao/sat_wvd_048.webp",
        "sod": "avaliacao/sat_sod_048.webp",
        "swvd": "avaliacao/sat_swvd_048.webp"
      }
    },
    {
      "lead": 54,
      "prev": "previsao/chuva6h_054.webp",
      "obs": "avaliacao/obs_054.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_054.webp",
        "airmass": "avaliacao/sat_airmass_054.webp",
        "simplewv": "avaliacao/sat_simplewv_054.webp",
        "swd": "avaliacao/sat_swd_054.webp",
        "cpd": "avaliacao/sat_cpd_054.webp",
        "wvd": "avaliacao/sat_wvd_054.webp",
        "sod": "avaliacao/sat_sod_054.webp",
        "swvd": "avaliacao/sat_swvd_054.webp"
      }
    },
    {
      "lead": 60,
      "prev": "previsao/chuva6h_060.webp",
      "obs": "avaliacao/obs_060.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_060.webp",
        "airmass": "avaliacao/sat_airmass_060.webp",
        "simplewv": "avaliacao/sat_simplewv_060.webp",
        "true_color": "avaliacao/sat_true_color_060.webp",
        "swd": "avaliacao/sat_swd_060.webp",
        "cpd": "avaliacao/sat_cpd_060.webp",
        "wvd": "avaliacao/sat_wvd_060.webp",
        "sod": "avaliacao/sat_sod_060.webp",
        "swvd": "avaliacao/sat_swvd_060.webp"
      }
    },
    {
      "lead": 66,
      "prev": "previsao/chuva6h_066.webp",
      "obs": "avaliacao/obs_066.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_066.webp",
        "airmass": "avaliacao/sat_airmass_066.webp",
        "simplewv": "avaliacao/sat_simplewv_066.webp",
        "true_color": "avaliacao/sat_true_color_066.webp",
        "swd": "avaliacao/sat_swd_066.webp",
        "cpd": "avaliacao/sat_cpd_066.webp",
        "wvd": "avaliacao/sat_wvd_066.webp",
        "sod": "avaliacao/sat_sod_066.webp",
        "swvd": "avaliacao/sat_swvd_066.webp"
      }
    },
    {
      "lead": 72,
      "prev": "previsao/chuva6h_072.webp",
      "obs": "avaliacao/obs_072.webp",
      "sat": {
        "ch13_noaa": "avaliacao/sat_ch13_noaa_072.webp",
        "airmass": "avaliacao/sat_airmass_072.webp",
        "simplewv": "avaliacao/sat_simplewv_072.webp",
        "swd": "avaliacao/sat_swd_072.webp",
        "cpd": "avaliacao/sat_cpd_072.webp",
        "wvd": "avaliacao/sat_wvd_072.webp",
        "sod": "avaliacao/sat_sod_072.webp",
        "swvd": "avaliacao/sat_swvd_072.webp"
      }
    }
  ],
  "produtos": [
    {
      "id": "ch13_noaa",
      "nome": "Infravermelho (canal 13)",
      "diurno": false
    },
    {
      "id": "airmass",
      "nome": "AirMass RGB",
      "diurno": false
    },
    {
      "id": "simplewv",
      "nome": "Vapor d'água (Simple WV)",
      "diurno": false
    },
    {
      "id": "true_color",
      "nome": "Cor real (True Color)",
      "diurno": true
    },
    {
      "id": "swd",
      "nome": "SWD (Split Window)",
      "diurno": false
    },
    {
      "id": "cpd",
      "nome": "CPD (fase da nuvem)",
      "diurno": false
    },
    {
      "id": "wvd",
      "nome": "WVD (topos de nuvem)",
      "diurno": false
    },
    {
      "id": "sod",
      "nome": "SOD (Split Ozone)",
      "diurno": false
    },
    {
      "id": "swvd",
      "nome": "SWVD (Split Water Vapor)",
      "diurno": false
    }
  ],
  "texto": [],
  "destaques": []
};
