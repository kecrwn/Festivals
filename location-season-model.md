# KA Festivals location season and daylight model

## Purpose and boundary

This model gives visitors a **typical seasonal orientation** for a selected set of places. It does not provide a weather forecast, rainfall guarantee, agricultural advisory, air-quality status, or religious-date calculation. India’s rainfall work uses pre-monsoon, southwest monsoon, post-monsoon, and winter groupings, while Indonesia’s official seasonal timing is managed by local *Zona Musim* and does not start simultaneously nationwide.[1] [2]

| Place | Time zone | Typical interface rhythm | Presentation rule |
|---|---:|---|---|
| Kolkata, West Bengal | IST | Dec–Feb winter; Mar–May pre-monsoon heat; Jun–Sep southwest monsoon; Oct–Nov post-monsoon | Label as a broad eastern-India baseline; West Bengal varies across Himalayan, plains, and coastal settings. |
| Ranchi, Jharkhand | IST | Dec–Feb winter; Mar–May pre-monsoon heat; Jun–Sep southwest monsoon; Oct–Nov post-monsoon | Label as a Jharkhand/eastern-India baseline, not a district forecast. |
| Jakarta | WIB | Nov–Mar rainy rhythm; Apr transition; May–Sep drier rhythm; Oct transition | Describe as a typical local rhythm and direct visitors to BMKG for current conditions. |
| Palangka Raya | WIB | Oct–May rainy rhythm; Jun–Sep drier rhythm | Note that Central Kalimantan’s dry season still permits local rain and storms. [3] |
| Banjarmasin | WIB | Nov–Apr rainy rhythm; May–Aug drier rhythm; Sep–Oct transition toward rainy season | Note that BMKG publishes South Kalimantan onset by seasonal zone and year, so the window is deliberately broad. [2] |

## Live solar-clock model

The display uses fixed coordinates for the named city centre, a local IANA time zone, and a deterministic sunrise/sunset approximation derived from the date. It runs entirely in the browser, updates every second, and has no weather API dependency. The visual state is computed from the local time relative to approximate sunrise and sunset:

| Solar state | Rule | Meaning in the interface |
|---|---|---|
| Night | More than 30 minutes before sunrise or after sunset | Moon route and low-light surface |
| Dawn | Sunrise ± 30 minutes | Saffron horizon transition |
| Daylight | Between the dawn and dusk windows | Sun route and warm-white surface |
| Dusk | Sunset ± 30 minutes | Coral-to-ink horizon transition |

NOAA explains that its solar calculations derive sunrise, sunset, solar noon, and position from location/date equations and remain approximate because atmospheric conditions affect observation. The display will therefore use the word **approximate** beside solar times, and never infer cloud cover or observed weather.[4]

## Sources

[1] [India Meteorological Department — Standard Operating Procedure for Hydrometeorological Services](https://mausam.imd.gov.in/imd_latest/contents/pdf/hydrology_sop.pdf)

[2] [BMKG — Prediksi Musim Hujan 2025/2026 di Indonesia](https://www.bmkg.go.id/iklim/prediksi-musim/prediksi-musim-hujan-2025-2026-di-indonesia)

[3] [BMKG Tjilik Riwut Meteorological Station — Musim Kemarau Belum Berakhir](https://kalteng.bmkg.go.id/tampil/?judul=Musim-Kemarau-Belum-Berakhir)

[4] [NOAA — Solar Calculation Details](https://gml.noaa.gov/grad/solcalc/calcdetails.html)
