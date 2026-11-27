// Gerado pelo 6.publicar_site.py: não edite aqui, edite o texto.md da semana
window.AVALIACAO = {
  "estatisticas": {
    "semana": "2026-S47",
    "regiao": "domínio inteiro (60°W–35°W, 38°S–13°S)",
    "modelo": "MONAN",
    "grade": "0,1° (regrid conservativo do que for mais fino)",
    "fonte_obs": "IMERG",
    "pontos": 62250,
    "total": {
      "bias": 1.258844831282346,
      "rmse": 28.135490558333537,
      "media_prev": 23.802414272963365,
      "media_obs": 22.543569564819336,
      "percentis": [
        {
          "p": 50,
          "prev": 13.081222919519941,
          "obs": 13.154998779296875
        },
        {
          "p": 75,
          "prev": 33.804793531482304,
          "obs": 32.02374839782715
        },
        {
          "p": 90,
          "prev": 60.36034349819904,
          "obs": 55.94549903869628
        },
        {
          "p": 95,
          "prev": 83.78367016251472,
          "obs": 75.634246444702
        },
        {
          "p": 99,
          "prev": 140.3195164444997,
          "obs": 129.20294952392587
        }
      ]
    },
    "contingencia_6h": [
      {
        "limiar": 1,
        "acertos": 77669,
        "alarmes": 80249,
        "perdas": 80772,
        "negativos": 508310,
        "eventos_obs": 158441,
        "csi": 0.325396958397922,
        "fbias": 0.9966990867262893,
        "gss": 0.21527855532280604,
        "pod": 0.4902077113878352,
        "far": 0.5081687964639876,
        "pouco_confiavel": false
      },
      {
        "limiar": 5,
        "acertos": 27692,
        "alarmes": 45634,
        "perdas": 46694,
        "negativos": 626980,
        "eventos_obs": 74386,
        "csi": 0.23072821196467255,
        "fbias": 0.985750006721695,
        "gss": 0.18089552869147796,
        "pod": 0.372274352700777,
        "far": 0.6223440525870769,
        "pouco_confiavel": false
      },
      {
        "limiar": 10,
        "acertos": 12719,
        "alarmes": 29931,
        "perdas": 29329,
        "negativos": 675021,
        "eventos_obs": 42048,
        "csi": 0.17670431653676766,
        "fbias": 1.0143169710806696,
        "gss": 0.14829727507006846,
        "pod": 0.3024876331811263,
        "far": 0.7017819460726846,
        "pouco_confiavel": false
      },
      {
        "limiar": 20,
        "acertos": 3247,
        "alarmes": 16201,
        "perdas": 13822,
        "negativos": 713730,
        "eventos_obs": 17069,
        "csi": 0.09759543131950707,
        "fbias": 1.1393754760091395,
        "gss": 0.08537881660656232,
        "pod": 0.19022789852949792,
        "far": 0.833041958041958,
        "pouco_confiavel": false
      }
    ],
    "contingencia_total": [
      {
        "limiar": 10,
        "acertos": 26370,
        "alarmes": 8495,
        "perdas": 9006,
        "negativos": 18379,
        "eventos_obs": 35376,
        "csi": 0.6010804403820291,
        "fbias": 0.9855551786521936,
        "gss": 0.2725375327649905,
        "pod": 0.7454206241519674,
        "far": 0.24365409436397534,
        "pouco_confiavel": false
      },
      {
        "limiar": 25,
        "acertos": 12314,
        "alarmes": 8543,
        "perdas": 7827,
        "negativos": 33566,
        "eventos_obs": 20141,
        "csi": 0.42929856365918284,
        "fbias": 1.035549376892905,
        "gss": 0.2537283991937527,
        "pod": 0.6113897025966933,
        "far": 0.4095986958814786,
        "pouco_confiavel": false
      },
      {
        "limiar": 50,
        "acertos": 3387,
        "alarmes": 5440,
        "perdas": 4429,
        "negativos": 48994,
        "eventos_obs": 7816,
        "csi": 0.25550694025347015,
        "fbias": 1.1293500511770727,
        "gss": 0.18758266593772513,
        "pod": 0.43334186284544524,
        "far": 0.6162909255692761,
        "pouco_confiavel": false
      },
      {
        "limiar": 75,
        "acertos": 982,
        "alarmes": 3025,
        "perdas": 2198,
        "negativos": 56045,
        "eventos_obs": 3180,
        "csi": 0.15825946817082998,
        "fbias": 1.260062893081761,
        "gss": 0.12954425690645607,
        "pod": 0.30880503144654087,
        "far": 0.754928874469678,
        "pouco_confiavel": false
      },
      {
        "limiar": 100,
        "acertos": 379,
        "alarmes": 1604,
        "perdas": 1100,
        "negativos": 59167,
        "eventos_obs": 1479,
        "csi": 0.1229322088874473,
        "fbias": 1.3407707910750508,
        "gss": 0.10932091974631933,
        "pod": 0.25625422582826235,
        "far": 0.8088754412506304,
        "pouco_confiavel": false
      }
    ],
    "mode_total": {
      "limiar": 75,
      "raio_pontos": 6,
      "raio_km": 66.6,
      "n_prev": 4,
      "n_obs": 8,
      "pares": [
        {
          "par": "F003_O005",
          "interesse": 0.89921,
          "distancia_km": 118.513812,
          "direcao": "SO",
          "razao_area": 4.89831,
          "angulo": 14.08427,
          "area_prev_km2": 35607.69,
          "area_obs_km2": 7269.389999999999,
          "p90_prev": 116.08052,
          "p90_obs": 191.91598,
          "dif_p90": -75.83545999999998
        },
        {
          "par": "F001_O002",
          "interesse": 0.87743,
          "distancia_km": 282.18309,
          "direcao": "SE",
          "razao_area": 1.69752,
          "angulo": 73.37804,
          "area_prev_km2": 336732.93,
          "area_obs_km2": 198368.1,
          "p90_prev": 162.29524,
          "p90_obs": 165.2865,
          "dif_p90": -2.9912599999999827
        },
        {
          "par": "F004_O006",
          "interesse": 0.70757,
          "distancia_km": 234.680307,
          "direcao": "O",
          "razao_area": 1.36207,
          "angulo": 7.35968,
          "area_prev_km2": 19467.18,
          "area_obs_km2": 14292.359999999999,
          "p90_prev": 109.72685,
          "p90_obs": 139.61749,
          "dif_p90": -29.890640000000005
        },
        {
          "par": "F002_O006",
          "interesse": 0.695,
          "distancia_km": 176.460474,
          "direcao": "NE",
          "razao_area": 0.77586,
          "angulo": 13.26262,
          "area_prev_km2": 11088.9,
          "area_obs_km2": 14292.359999999999,
          "p90_prev": 104.9258,
          "p90_obs": 139.61749,
          "dif_p90": -34.69169000000001
        },
        {
          "par": "F002_O004",
          "interesse": 0.60397,
          "distancia_km": 137.751,
          "direcao": "O",
          "razao_area": 10.0,
          "angulo": 12.38619,
          "area_prev_km2": 11088.9,
          "area_obs_km2": 1108.8899999999999,
          "p90_prev": 104.9258,
          "p90_obs": 179.518,
          "dif_p90": -74.5922
        },
        {
          "par": "F003_O007",
          "interesse": 0.53553,
          "distancia_km": 309.505518,
          "direcao": "N",
          "razao_area": 1.28444,
          "angulo": 60.02127,
          "area_prev_km2": 35607.69,
          "area_obs_km2": 27722.25,
          "p90_prev": 116.08052,
          "p90_obs": 115.46,
          "dif_p90": 0.6205200000000133
        },
        {
          "par": "F002_O003",
          "interesse": 0.50103,
          "distancia_km": 250.50890700000002,
          "direcao": "S",
          "razao_area": 1.52542,
          "angulo": 3.97333,
          "area_prev_km2": 11088.9,
          "area_obs_km2": 7269.389999999999,
          "p90_prev": 104.9258,
          "p90_obs": 125.092,
          "dif_p90": -20.166200000000003
        }
      ],
      "cts_raw": {
        "csi": 0.15826,
        "gss": 0.12954,
        "fbias": 1.26006,
        "pod": 0.30881,
        "far": 0.75493
      }
    },
    "fig_dif": "avaliacao/dif_total.webp",
    "fig_mode": "avaliacao/mode_total.webp",
    "fig_desempenho_total": "avaliacao/desempenho_total.webp"
  },
  "semana": "2026-S47",
  "rodada": "2026-11-20T00:00Z",
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
        "swd": "avaliacao/sat_swd_012.webp",
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
        "airmass": "avaliacao/sat_airmass_042.webp",
        "simplewv": "avaliacao/sat_simplewv_042.webp",
        "true_color": "avaliacao/sat_true_color_042.webp",
        "swd": "avaliacao/sat_swd_042.webp",
        "cpd": "avaliacao/sat_cpd_042.webp",
        "wvd": "avaliacao/sat_wvd_042.webp",
        "sod": "avaliacao/sat_sod_042.webp",
        "swvd": "avaliacao/sat_swvd_042.webp"
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
