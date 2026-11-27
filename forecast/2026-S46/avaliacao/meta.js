// Gerado pelo 6.publicar_site.py: não edite aqui, edite o texto.md da semana
window.AVALIACAO = {
  "estatisticas": {
    "semana": "2026-S46",
    "regiao": "domínio inteiro (60°W–35°W, 38°S–13°S)",
    "modelo": "MONAN",
    "grade": "0,1° (regrid conservativo do que for mais fino)",
    "fonte_obs": "IMERG",
    "pontos": 62250,
    "total": {
      "bias": -0.4343285838988167,
      "rmse": 17.953700054496448,
      "media_prev": 11.515322463995831,
      "media_obs": 11.949650764465332,
      "percentis": [
        {
          "p": 50,
          "prev": 6.61873801123831,
          "obs": 5.0849995613098145
        },
        {
          "p": 75,
          "prev": 16.529500349845275,
          "obs": 17.18000030517578
        },
        {
          "p": 90,
          "prev": 30.598422430696562,
          "obs": 32.469997787475585
        },
        {
          "p": 95,
          "prev": 39.85354443961251,
          "obs": 45.16550102233882
        },
        {
          "p": 99,
          "prev": 60.23988531145984,
          "obs": 77.73029571533209
        }
      ]
    },
    "contingencia_6h": [
      {
        "limiar": 1,
        "acertos": 41688,
        "alarmes": 74626,
        "perdas": 52829,
        "negativos": 577857,
        "eventos_obs": 94517,
        "csi": 0.24646600805235808,
        "fbias": 1.230614598432028,
        "gss": 0.1746528646571727,
        "pod": 0.4410635123840156,
        "far": 0.6415908661038224,
        "pouco_confiavel": false
      },
      {
        "limiar": 5,
        "acertos": 9431,
        "alarmes": 31754,
        "perdas": 29948,
        "negativos": 675867,
        "eventos_obs": 39379,
        "csi": 0.1325826269101542,
        "fbias": 1.0458620076690621,
        "gss": 0.105273855996125,
        "pod": 0.23949313085654791,
        "far": 0.7710088624499211,
        "pouco_confiavel": false
      },
      {
        "limiar": 10,
        "acertos": 3049,
        "alarmes": 14514,
        "perdas": 17928,
        "negativos": 711509,
        "eventos_obs": 20977,
        "csi": 0.08590910371643515,
        "fbias": 0.8372503217809982,
        "gss": 0.07302749527143385,
        "pod": 0.14534966868474997,
        "far": 0.8263964015259352,
        "pouco_confiavel": false
      },
      {
        "limiar": 20,
        "acertos": 474,
        "alarmes": 4261,
        "perdas": 7126,
        "negativos": 735139,
        "eventos_obs": 7600,
        "csi": 0.03996290363375769,
        "fbias": 0.6230263157894737,
        "gss": 0.03604776465940579,
        "pod": 0.06236842105263158,
        "far": 0.8998944033790919,
        "pouco_confiavel": false
      }
    ],
    "contingencia_total": [
      {
        "limiar": 10,
        "acertos": 13983,
        "alarmes": 10492,
        "perdas": 9425,
        "negativos": 28350,
        "eventos_obs": 23408,
        "csi": 0.4124778761061947,
        "fbias": 1.0455827067669172,
        "gss": 0.19353315889624592,
        "pod": 0.5973598769651401,
        "far": 0.428682328907048,
        "pouco_confiavel": false
      },
      {
        "limiar": 25,
        "acertos": 2854,
        "alarmes": 5996,
        "perdas": 6871,
        "negativos": 46529,
        "eventos_obs": 9725,
        "csi": 0.18154061446472872,
        "fbias": 0.910025706940874,
        "gss": 0.10262014237602597,
        "pod": 0.29347043701799486,
        "far": 0.6775141242937853,
        "pouco_confiavel": false
      },
      {
        "limiar": 50,
        "acertos": 142,
        "alarmes": 1196,
        "perdas": 2296,
        "negativos": 58616,
        "eventos_obs": 2438,
        "csi": 0.03907539900935608,
        "fbias": 0.5488105004101723,
        "gss": 0.025016122575276092,
        "pod": 0.05824446267432322,
        "far": 0.8938714499252616,
        "pouco_confiavel": false
      },
      {
        "limiar": 75,
        "acertos": 1,
        "alarmes": 187,
        "perdas": 725,
        "negativos": 61337,
        "eventos_obs": 726,
        "csi": 0.001095290251916758,
        "fbias": 0.25895316804407714,
        "gss": -0.0013093638510811062,
        "pod": 0.0013774104683195593,
        "far": 0.9946808510638298,
        "pouco_confiavel": false
      },
      {
        "limiar": 100,
        "acertos": 0,
        "alarmes": 29,
        "perdas": 187,
        "negativos": 62034,
        "eventos_obs": 187,
        "csi": 0.0,
        "fbias": 0.15508021390374332,
        "gss": -0.0004034797018014926,
        "pod": 0.0,
        "far": 1.0,
        "pouco_confiavel": false
      }
    ],
    "mode_total": {
      "limiar": 75,
      "raio_pontos": 6,
      "raio_km": 66.6,
      "n_prev": 0,
      "n_obs": 2,
      "pares": [],
      "cts_raw": {
        "csi": 0.0010953,
        "gss": -0.0013094,
        "fbias": 0.25895,
        "pod": 0.0013774,
        "far": 0.99468
      }
    },
    "fig_dif": "avaliacao/dif_total.webp",
    "fig_mode": "avaliacao/mode_total.webp",
    "fig_desempenho_total": "avaliacao/desempenho_total.webp"
  },
  "semana": "2026-S46",
  "rodada": "2026-11-13T00:00Z",
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
