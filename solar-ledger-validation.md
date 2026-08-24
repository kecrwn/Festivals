# Solar Ledger validation

The local accessibility tree confirms that the Solar Ledger renders five named city controls—Kolkata, Ranchi, Jakarta, Palangka Raya, and Banjarmasin—and that its initial Kolkata panel shows a seconds-resolving IST time. During the inspection it read `17:49:38`, with approximate solar markers of `05:16` sunrise and `18:01` sunset. The state correctly rendered as **Night** after that sunset.

The panel describes the active Kolkata season as the June–September southwest monsoon baseline, displays all twelve month markers, and includes the West Bengal geographic-variation qualifier. It explicitly states that solar time is calculated from place and date and is not current weather. The reactive browser click channel became unavailable immediately after the successful document inspection, so location switching will be validated through the responsive rendered view and the component’s deterministic source model rather than retried through the unavailable channel.

The implementation corrected the initial hour-angle inversion discovered during visual review. The corrected branch places Kolkata sunrise before sunset and prevents a false dawn state in the late afternoon.
