// Gerado pelo 6.publicar_site.py: não edite aqui, edite o texto.md da semana
window.AVALIACAO = {
  "estatisticas": {
    "semana": "2026-S45",
    "regiao": "domínio inteiro (60°W–35°W, 38°S–13°S)",
    "modelo": "MONAN",
    "grade": "0,1° (regrid conservativo do que for mais fino)",
    "fonte_obs": "IMERG",
    "pontos": 62250,
    "total": {
      "bias": -0.8043365782434564,
      "rmse": 17.359834702971046,
      "media_prev": 13.850817879964607,
      "media_obs": 14.65515422821045,
      "percentis": [
        {
          "p": 50,
          "prev": 7.575808544925518,
          "obs": 9.774998664855957
        },
        {
          "p": 75,
          "prev": 17.30143419557892,
          "obs": 21.364999771118164
        },
        {
          "p": 90,
          "prev": 36.64574296888369,
          "obs": 35.334999084472656
        },
        {
          "p": 95,
          "prev": 52.55154654860094,
          "obs": 45.67274837493894
        },
        {
          "p": 99,
          "prev": 87.68898316092111,
          "obs": 70.01010208129885
        }
      ]
    },
    "contingencia_6h": [
      {
        "limiar": 1,
        "acertos": 63487,
        "alarmes": 51816,
        "perdas": 61152,
        "negativos": 570545,
        "eventos_obs": 124639,
        "csi": 0.3597914482445949,
        "fbias": 0.9250956763131924,
        "gss": 0.28144890869036915,
        "pod": 0.5093670520463097,
        "far": 0.44938986843360534,
        "pouco_confiavel": false
      },
      {
        "limiar": 5,
        "acertos": 19941,
        "alarmes": 24089,
        "perdas": 33893,
        "negativos": 669077,
        "eventos_obs": 53834,
        "csi": 0.25590647177341735,
        "fbias": 0.8178846082401456,
        "gss": 0.22431995863199672,
        "pod": 0.37041646543076867,
        "far": 0.5471042471042471,
        "pouco_confiavel": false
      },
      {
        "limiar": 10,
        "acertos": 7906,
        "alarmes": 12875,
        "perdas": 18950,
        "negativos": 707269,
        "eventos_obs": 26856,
        "csi": 0.19898819561551434,
        "fbias": 0.7737935656836461,
        "gss": 0.18363704395453734,
        "pod": 0.2943848674411677,
        "far": 0.6195563254896299,
        "pouco_confiavel": false
      },
      {
        "limiar": 20,
        "acertos": 2289,
        "alarmes": 6389,
        "perdas": 6218,
        "negativos": 732104,
        "eventos_obs": 8507,
        "csi": 0.1536654135338346,
        "fbias": 1.0201010932173504,
        "gss": 0.14801293640565893,
        "pod": 0.26907252850593627,
        "far": 0.736229545978336,
        "pouco_confiavel": false
      }
    ],
    "contingencia_total": [
      {
        "limiar": 10,
        "acertos": 20419,
        "alarmes": 5826,
        "perdas": 10264,
        "negativos": 25741,
        "eventos_obs": 30683,
        "csi": 0.5592867512120299,
        "fbias": 0.855359645406251,
        "gss": 0.31743510128865393,
        "pod": 0.6654825147475801,
        "far": 0.22198514002667175,
        "pouco_confiavel": false
      },
      {
        "limiar": 25,
        "acertos": 5045,
        "alarmes": 5389,
        "perdas": 7052,
        "negativos": 44764,
        "eventos_obs": 12097,
        "csi": 0.28851652750772044,
        "fbias": 0.8625278994792097,
        "gss": 0.1951931744947628,
        "pod": 0.417045548483095,
        "far": 0.516484569676059,
        "pouco_confiavel": false
      },
      {
        "limiar": 50,
        "acertos": 684,
        "alarmes": 2797,
        "perdas": 1631,
        "negativos": 57138,
        "eventos_obs": 2315,
        "csi": 0.13380281690140844,
        "fbias": 1.503671706263499,
        "gss": 0.11129770804580685,
        "pod": 0.29546436285097194,
        "far": 0.8035047400172364,
        "pouco_confiavel": false
      },
      {
        "limiar": 75,
        "acertos": 59,
        "alarmes": 1123,
        "perdas": 372,
        "negativos": 60696,
        "eventos_obs": 431,
        "csi": 0.03796653796653797,
        "fbias": 2.74245939675174,
        "gss": 0.03287337330836821,
        "pod": 0.1368909512761021,
        "far": 0.9500846023688664,
        "pouco_confiavel": false
      },
      {
        "limiar": 100,
        "acertos": 0,
        "alarmes": 337,
        "perdas": 76,
        "negativos": 61837,
        "eventos_obs": 76,
        "csi": 0.0,
        "fbias": 4.434210526315789,
        "gss": -0.0009972107533987203,
        "pod": 0.0,
        "far": 1.0,
        "pouco_confiavel": false
      }
    ],
    "mode_total": {
      "limiar": 75,
      "raio_pontos": 6,
      "raio_km": 66.6,
      "n_prev": 1,
      "n_obs": 1,
      "pares": [
        {
          "par": "F001_O001",
          "interesse": 0.63411,
          "distancia_km": 254.59259699999998,
          "direcao": "O",
          "razao_area": 11.525,
          "angulo": 1.72937,
          "area_prev_km2": 113599.61999999998,
          "area_obs_km2": 9856.8,
          "p90_prev": 122.17792,
          "p90_obs": 110.224,
          "dif_p90": 11.953919999999997
        }
      ],
      "cts_raw": {
        "csi": 0.037967,
        "gss": 0.032873,
        "fbias": 2.74246,
        "pod": 0.13689,
        "far": 0.95008
      }
    },
    "fig_dif": "avaliacao/dif_total.webp",
    "fig_mode": "avaliacao/mode_total.webp",
    "fig_desempenho_total": "avaliacao/desempenho_total.webp"
  },
  "semana": "2026-S45",
  "rodada": "2026-11-06T00:00Z",
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
        "true_color": "avaliacao/sat_true_color_012.webp",
        "cpd": "avaliacao/sat_cpd_012.webp",
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
        "true_color": "avaliacao/sat_true_color_042.webp",
        "cpd": "avaliacao/sat_cpd_042.webp",
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
