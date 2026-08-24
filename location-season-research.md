# Location-aware seasons and daylight research

## Evidence gathered so far

The Tjilik Riwut Meteorological Station in Palangka Raya explains that Central Kalimantan’s dry season means lower rainfall relative to the rainy season, **not zero rain**. It explicitly notes that rainfall intensity and frequency vary by location, and that local convergence can still bring thunderstorms or local rain during the dry season. The seasonal interface must therefore describe a *usual rainfall rhythm*, never live weather or a rain guarantee.[1]

The South Kalimantan climatology station’s season page was identified as the regional source for Banjarmasin; its server did not render text in the browser session. Its search-indexed seasonal summary indicates that onset timing is published by regency/city and changes by year, reinforcing the same decision: the product should expose broad location-aware wet/dry context and point to BMKG for current seasonal forecasts, rather than invent a fixed annual promise.[2]

## Design consequence

The seasonal component will use a transparent baseline calendar with a visible **typical / local variation** qualifier. A separate daylight calculation will be based on geographic coordinates and the current local date, not on a claimed weather condition. The clock will say **daylight**, **sunset transition**, or **night** only from computed solar times, while a weather disclaimer remains outside that calculation.

## References

[1] [BMKG Tjilik Riwut Meteorological Station — Musim Kemarau Belum Berakhir](https://kalteng.bmkg.go.id/tampil/?judul=Musim-Kemarau-Belum-Berakhir)

[2] [BMKG South Kalimantan Climatology Station — Musim](https://staklim-kalsel.bmkg.go.id/musim/)

## National frameworks and limits

IMD’s hydrometeorology procedure describes the country’s seasonal rainfall work in terms of pre-monsoon, southwest monsoon, post-monsoon, and winter. Its rainfall discussion treats June–September as the four main southwest-monsoon months and cautions that rainfall varies substantially over space and time.[3] This is a suitable high-level framework for **Jharkhand** and **West Bengal**, but it is not a claim that every district or landscape within either state has identical conditions. West Bengal’s state climate page was unavailable to the research browser; the interface will therefore present an expressly broad *eastern India baseline* and recommend local IMD/RMC notices for travel or outdoor plans.

BMKG’s national seasonal outlook says Indonesian rainy-season onset does not occur simultaneously and differs by *Zona Musim* (seasonal zone). Its 2025/26 outlook expected many western Indonesian zones to enter rainy season from September to November, with the wet-season peak varying by region.[4] A further BMKG transition bulletin records that seasonal transition can still include substantial rain in Central Kalimantan and South Kalimantan.[5] The planned labels for Palangka Raya, Jakarta, and Banjarmasin will consequently be **typical rhythm**, not current weather or a fixed forecast.

NOAA’s solar calculation material documents a coordinate-and-date approach to sunrise, sunset, solar noon, and solar position. It states that calculated sunrise/sunset is approximate because atmospheric conditions vary, even where the underlying method is generally within about a minute at the latitudes relevant here.[6] The site can truthfully display a computed solar phase and an approximate sunrise/sunset, but not claim an observed sky condition.

## References

[3] [India Meteorological Department — Standard Operating Procedure for Hydrometeorological Services](https://mausam.imd.gov.in/imd_latest/contents/pdf/hydrology_sop.pdf)

[4] [BMKG — Prediksi Musim Hujan 2025/2026 di Indonesia](https://www.bmkg.go.id/iklim/prediksi-musim/prediksi-musim-hujan-2025-2026-di-indonesia)

[5] [BMKG — Potensi Hujan Indonesia, 24–30 April 2026](https://www.bmkg.go.id/cuaca/potensi-hujan-sepekan/potensi-hujan-indonesia-sepekan-ke-depan-periode-24-30-april-2026-transisi-menuju-musim-kemarau-cuaca-umumnya-cerah-meskipun-potensi-hujan-masih-terjadi-di-beberapa-wilayah-indonesia)

[6] [NOAA — Solar Calculation Details](https://gml.noaa.gov/grad/solcalc/calcdetails.html)
